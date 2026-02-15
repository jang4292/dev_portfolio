// scripts/xlsx-to-offers.mjs
import fs from "node:fs";
import path from "node:path";
import xlsx from "xlsx";

/**
 * Offer(Insurance / Even Money) 전용 XLSX -> JSON 변환 스크립트
 *
 * 실행 예:
 * 1) 자동 감지(권장)
 *   node scripts/xlsx-to-offers.mjs .\input\data.xlsx --sheet="offers" --rulesetId=BJ_6D_S17_DAS_NS --out=.\out\offers.json
 *
 * 2) 헤더가 2행부터면(1행 제목/병합셀 등)
 *   node scripts/xlsx-to-offers.mjs .\input\data.xlsx --sheet="offers" --rulesetId=BJ_6D_S17_DAS_NS --range=1 --out=.\out\offers.json
 *
 * 3) dealerUpcard 컬럼이 없거나 비어있으면 기본값 A
 *   node scripts/xlsx-to-offers.mjs .\input\data.xlsx --sheet="offers" --rulesetId=BJ_6D_S17_DAS_NS --defaultUpcard=A --out=.\out\offers.json
 *
 * 4) 포맷 강제(필요 시)
 *   --format=auto | table | row
 *
 * 권장 table 포맷 컬럼:
 * - rulesetId (옵션)
 * - offerType : INSURANCE | EVEN_MONEY
 * - dealerUpcard : A | 2..10 (옵션; 없거나 비면 defaultUpcard)
 * - choice : Y | N (yes/no/true/false 허용)
 * - playerState : ANY | BLACKJACK (옵션; 비면 기본값)
 * - decisionWindow : initial | not_initial (옵션; 비면 조건 없음)
 * - answer : string
 * - reason : string
 * - priority : number (옵션)
 *
 * 출력 JSON:
 * {
 *   version, rulesetId, sheet, count,
 *   items: {
 *     "ruleset::OFFER:INSURANCE::D:A": { variants: [ ... ] }
 *   }
 * }
 */

function parseArgs(argv) {
  const args = { _: [] };
  for (const a of argv.slice(2)) {
    if (!a.startsWith("--")) args._.push(a);
    else {
      const [k, v = "true"] = a.slice(2).split("=");
      args[k] = v;
    }
  }
  return args;
}

function req(cond, msg) {
  if (!cond) throw new Error(msg);
}

function isEmpty(v) {
  return v === undefined || v === null || String(v).trim() === "";
}

function orDefault(v, fallback) {
  return isEmpty(v) ? fallback : v;
}

function normKeyName(s) {
  return String(s ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/_/g, "");
}

function isBlankRowArray(row) {
  if (!Array.isArray(row)) return true;
  return row.every(v => String(v ?? "").trim() === "");
}

function normalizeOfferType(raw, rowNo) {
  const v = String(raw ?? "").trim();
  req(v, `row ${rowNo}: offerType missing`);

  const s = v.toUpperCase().replace(/\s+/g, "_");
  const map = {
    INSURANCE: "INSURANCE",
    EVEN_MONEY: "EVEN_MONEY",
    EVENMONEY: "EVEN_MONEY",
    "EVEN-MONEY": "EVEN_MONEY",
  };
  req(map[s], `row ${rowNo}: offerType invalid: ${v}. expected INSURANCE|EVEN_MONEY`);
  return map[s];
}

function normalizeDealerUpcard(v, rowNo) {
  const raw = String(v ?? "").trim().toUpperCase();
  req(raw, `row ${rowNo}: dealerUpcard missing`);
  if (raw === "A") return "A";
  if (["J", "Q", "K", "10", "T"].includes(raw)) return "10";
  req(/^[2-9]$/.test(raw), `row ${rowNo}: dealerUpcard invalid: ${v}`);
  return raw;
}

function normalizeChoice(v, rowNo) {
  const raw = String(v ?? "").trim().toUpperCase();
  req(raw, `row ${rowNo}: choice missing`);
  if (raw === "Y" || raw === "YES" || raw === "TRUE") return "Y";
  if (raw === "N" || raw === "NO" || raw === "FALSE") return "N";
  req(false, `row ${rowNo}: choice invalid (Y/N): ${v}`);
}

function normalizePlayerState(v, offerType, rowNo) {
  const raw = String(v ?? "").trim().toUpperCase();
  if (!raw) return offerType === "EVEN_MONEY" ? "BLACKJACK" : "ANY";

  const map = { ANY: "ANY", BJ: "BLACKJACK", BLACKJACK: "BLACKJACK" };
  req(map[raw], `row ${rowNo}: playerState invalid: ${v}`);
  return map[raw];
}

function normalizeDecisionWindow(v, rowNo) {
  const raw = String(v ?? "").trim().toLowerCase();
  if (!raw) return undefined;
  if (raw === "initial") return "initial";
  if (raw === "not_initial" || raw === "not-initial" || raw === "notinitial") return "not_initial";
  throw new Error(`row ${rowNo}: decisionWindow invalid: ${v}`);
}

function toInt(v, fallback = 0) {
  if (isEmpty(v)) return fallback;
  const n = Number(v);
  return Number.isFinite(n) ? Math.trunc(n) : fallback;
}

function buildOfferKey(rulesetId, offerType, dealerUpcard) {
  return `${rulesetId}::OFFER:${offerType}::D:${dealerUpcard}`;
}

/**
 * 중복 키 처리 전략:
 * - allow-duplicate=false: 같은 key가 또 나오면 에러
 * - allow-duplicate=variants: 같은 key면 variants 배열로 누적 (권장)
 * - allow-duplicate=priority: 같은 key의 variant를 when+choice 기준으로 priority 비교 후 교체
 */
function addEntry(items, key, variant, allowDuplicate) {
  const existing = items[key];
  if (!existing) {
    items[key] = { variants: [variant] };
    return;
  }

  if (existing && typeof existing === "object" && "variants" in existing) {
    if (allowDuplicate === "variants") {
      existing.variants.push(variant);
      return;
    }

    if (allowDuplicate === "priority") {
      const idx = existing.variants.findIndex(v =>
        v.choice === variant.choice &&
        (v.when?.decisionWindow === variant.when?.decisionWindow) &&
        (v.when?.playerState === variant.when?.playerState)
      );

      if (idx >= 0) {
        const cur = existing.variants[idx];
        if ((variant.priority ?? 0) > (cur.priority ?? 0)) existing.variants[idx] = variant;
      } else {
        existing.variants.push(variant);
      }
      return;
    }

    throw new Error(`duplicate key: ${key}`);
  }

  throw new Error(`unexpected entry format for key: ${key}`);
}

/**
 * ====== 포맷 감지 ======
 * - table: 헤더에 offerType/choice/answer/reason 같은 컬럼명이 존재
 * - row: 그 외(현재처럼 "Insurance", "No", 긴 문장"이 헤더로 잡히는 케이스 포함)
 */
function detectFormat(aoa) {
  if (!aoa || aoa.length === 0) return "row";
  const header = (aoa[0] ?? []).map(v => normKeyName(v));
  const hasOfferType = header.includes("offertype") || header.includes("offer_type");
  const hasChoice = header.includes("choice") || header.includes("yn") || header.includes("recommend");
  const hasAnswer = header.includes("answer") || header.includes("ans");
  const hasReason = header.includes("reason") || header.includes("learnmore") || header.includes("learn_more");

  // offerType + (answer/reason/choice) 중 2개 이상 있으면 table로 봄
  const score =
    (hasOfferType ? 1 : 0) +
    (hasChoice ? 1 : 0) +
    (hasAnswer ? 1 : 0) +
    (hasReason ? 1 : 0);

  return (hasOfferType && score >= 3) ? "table" : "row";
}

function buildTableIndexMap(headerRow) {
  const map = {};
  const header = (headerRow ?? []).map(v => normKeyName(v));

  function idxOf(...names) {
    for (const n of names) {
      const i = header.indexOf(n);
      if (i >= 0) return i;
    }
    return -1;
  }

  map.rulesetId = idxOf("rulesetid", "ruleset", "ruleset_id");
  map.offerType = idxOf("offertype", "offer_type");
  map.dealerUpcard = idxOf("dealerupcard", "upcard", "dealercard", "dealer");
  map.choice = idxOf("choice", "yn", "recommend", "recommended", "answerchoice");
  map.playerState = idxOf("playerstate", "handstate", "state");
  map.decisionWindow = idxOf("decisionwindow", "window");
  map.answer = idxOf("answer", "ans");
  map.reason = idxOf("reason", "learnmore", "learn_more");
  map.priority = idxOf("priority", "prio");

  return map;
}

function cell(row, idx) {
  if (!row || idx < 0) return undefined;
  return row[idx];
}

/**
 * row-format(Q&A형) 파서:
 * - offerType: 행 안에서 insurance/even money로 보이는 셀 탐색
 * - choice: Y/N/YES/NO/TRUE/FALSE 셀 탐색(offerType 뒤에서)
 * - answer: choice 뒤 첫 텍스트 셀
 * - reason: 나머지 텍스트 셀 합치기
 */
function parseRowFormat(row, rowNo) {
  const cells = (row ?? []).map(v => String(v ?? "").replace(/\r\n/g, "\n").trim());
  if (cells.every(s => !s)) return null;

  const offerIdx = cells.findIndex(s => {
    const t = s.toLowerCase();
    return t === "insurance" || t.includes("insurance") || t === "even money" || t.includes("even money");
  });
  req(offerIdx >= 0, `row ${rowNo}: offerType missing (row-format). first 10 cells: ${cells.slice(0, 10).join(" | ")}`);

  const offerType = normalizeOfferType(cells[offerIdx], rowNo);

  const choiceIdx = cells.findIndex((s, i) => {
    if (i <= offerIdx) return false;
    const u = s.toUpperCase();
    return ["Y", "YES", "TRUE", "N", "NO", "FALSE"].includes(u);
  });
  req(choiceIdx >= 0, `row ${rowNo}: choice missing (row-format). cells: ${cells.slice(offerIdx, offerIdx + 10).join(" | ")}`);

  const choice = normalizeChoice(cells[choiceIdx], rowNo);

  const answerIdx = cells.findIndex((s, i) => i > choiceIdx && !!s);
  req(answerIdx >= 0, `row ${rowNo}: answer missing (row-format)`);

  const answer = cells[answerIdx];

  const reasonParts = cells
    .slice(answerIdx + 1)
    .map(s => s.trim())
    .filter(Boolean);

  const reason = reasonParts.length > 0 ? reasonParts.join("\n\n") : "";
  req(reason, `row ${rowNo}: reason missing (row-format)`);

  return { offerType, choice, answer, reason };
}

function main() {
  const args = parseArgs(process.argv);
  const input = args._[0];
  req(input, "input xlsx path required");

  const sheetName = args.sheet;
  const outPath = args.out || "./offers.json";
  const defaultRulesetId = String(args.rulesetId || "").trim();
  const version = args.version || new Date().toISOString().slice(0, 10);

  const allowDuplicate = String(args["allow-duplicate"] || "variants").toLowerCase();
  req(["false", "variants", "priority"].includes(allowDuplicate), `allow-duplicate invalid: ${allowDuplicate}`);

  const range = args.range != null ? Number(args.range) : 0;
  req(Number.isInteger(range) && range >= 0, `range invalid: ${args.range}`);

  const defaultUpcard = String(args.defaultUpcard || "A").trim().toUpperCase();
  req(
    defaultUpcard === "A" || /^[2-9]$/.test(defaultUpcard) || defaultUpcard === "10",
    `defaultUpcard invalid: ${defaultUpcard} (use A,2..10)`
  );

  const forcedFormat = String(args.format || "auto").toLowerCase();
  req(["auto", "table", "row"].includes(forcedFormat), `format invalid: ${forcedFormat}`);

  console.log(`Input: ${input}`);
  console.log(`Sheet: ${sheetName || "(first sheet)"}`);
  console.log(`Output: ${outPath}`);
  console.log(`Default RulesetId: ${defaultRulesetId || "(must be provided in rows)"}`);
  console.log(`Version: ${version}`);
  console.log(`Allow Duplicate: ${allowDuplicate}`);
  console.log(`Range(header offset): ${range}`);
  console.log(`Default Upcard: ${defaultUpcard}`);
  console.log(`Format: ${forcedFormat}`);

  const wb = xlsx.readFile(input);
  const targetSheet = sheetName || wb.SheetNames[0];
  req(wb.Sheets[targetSheet], `sheet not found: ${targetSheet}`);

  // ✅ 항상 AOA(2차원 배열)로 읽고 포맷 자동 감지
  const aoa = xlsx.utils.sheet_to_json(wb.Sheets[targetSheet], {
    header: 1,
    defval: "",
    raw: false,
    range,
  });

  req(aoa.length > 0, "no rows found in sheet");

  const format = forcedFormat === "auto" ? detectFormat(aoa) : forcedFormat;
  console.log(`Detected format: ${format}`);

  const items = {};
  let rulesetIdUsed = "";

  // aoa[0]가 엑셀에서 몇 번째 행인지(1-indexed): range가 0이면 aoa[0]=1행
  const baseRowNo = range + 1;

  if (format === "table") {
    // 헤더는 aoa[0]
    const headerRow = aoa[0];
    const idxMap = buildTableIndexMap(headerRow);

    req(idxMap.offerType >= 0, `table-format: offerType column not found. header: ${headerRow.join(" | ")}`);
    req(idxMap.choice >= 0, `table-format: choice column not found. header: ${headerRow.join(" | ")}`);
    req(idxMap.answer >= 0, `table-format: answer column not found. header: ${headerRow.join(" | ")}`);
    req(idxMap.reason >= 0, `table-format: reason column not found. header: ${headerRow.join(" | ")}`);

    for (let i = 1; i < aoa.length; i++) {
      const row = aoa[i];
      const rowNo = baseRowNo + i; // 엑셀 행 번호

      if (isBlankRowArray(row)) continue;

      const rsCell = (idxMap.rulesetId >= 0) ? cell(row, idxMap.rulesetId) : undefined;
      const rulesetId = String(orDefault(rsCell, defaultRulesetId)).trim();
      req(rulesetId, `row ${rowNo}: rulesetId missing (provide column or --rulesetId)`);
      if (!rulesetIdUsed) rulesetIdUsed = rulesetId;

      const offerType = normalizeOfferType(cell(row, idxMap.offerType), rowNo);

      // ✅ 핵심 수정: ""(빈 문자열)도 defaultUpcard로 fallback
      const duCell = (idxMap.dealerUpcard >= 0) ? cell(row, idxMap.dealerUpcard) : undefined;
      const dealerUpcard = normalizeDealerUpcard(orDefault(duCell, defaultUpcard), rowNo);

      const choice = normalizeChoice(cell(row, idxMap.choice), rowNo);

      const playerState = normalizePlayerState(cell(row, idxMap.playerState), offerType, rowNo);
      const decisionWindow = normalizeDecisionWindow(cell(row, idxMap.decisionWindow), rowNo);

      const answer = String(cell(row, idxMap.answer) ?? "").trim();
      req(answer, `row ${rowNo}: answer missing`);

      const reason = String(cell(row, idxMap.reason) ?? "").trim();
      req(reason, `row ${rowNo}: reason missing`);

      const priority = toInt(cell(row, idxMap.priority), 0);

      const key = buildOfferKey(rulesetId, offerType, dealerUpcard);

      const variant = {
        offerType,
        dealerUpcard,
        choice,
        answer,
        reason,
        when: {
          ...(decisionWindow ? { decisionWindow } : {}),
          ...(playerState ? { playerState } : {}),
        },
        priority,
      };

      addEntry(items, key, variant, allowDuplicate);
    }
  } else {
    // row-format: aoa의 각 행 자체가 레코드(헤더 없음)
    for (let i = 0; i < aoa.length; i++) {
      const row = aoa[i];
      const rowNo = baseRowNo + i; // 엑셀 행 번호

      if (isBlankRowArray(row)) continue;

      const rulesetId = defaultRulesetId;
      req(rulesetId, `row ${rowNo}: rulesetId missing (row-format requires --rulesetId)`);
      if (!rulesetIdUsed) rulesetIdUsed = rulesetId;

      const parsed = parseRowFormat(row, rowNo);
      if (!parsed) continue;

      const offerType = parsed.offerType;
      const dealerUpcard = normalizeDealerUpcard(defaultUpcard, rowNo); // row-format은 기본 upcard 사용
      const choice = parsed.choice;

      const playerState = normalizePlayerState("", offerType, rowNo);
      const decisionWindow = "initial"; // 필요하면 옵션화 가능

      const key = buildOfferKey(rulesetId, offerType, dealerUpcard);

      const variant = {
        offerType,
        dealerUpcard,
        choice,
        answer: parsed.answer,
        reason: parsed.reason,
        when: {
          decisionWindow,
          playerState,
        },
        priority: 0,
      };

      addEntry(items, key, variant, allowDuplicate);
    }
  }

  const output = {
    version,
    rulesetId: rulesetIdUsed || defaultRulesetId,
    sheet: targetSheet,
    count: Object.keys(items).length,
    items,
  };

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2), "utf-8");
  console.log(`OK: ${output.count} keys -> ${path.resolve(outPath)}`);
}

main();
