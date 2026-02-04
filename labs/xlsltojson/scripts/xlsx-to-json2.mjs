import fs from "node:fs";
import path from "node:path";
import xlsx from "xlsx";

/**
 * 실행:
 * node scripts/xlsx-to-json2.mjs ./input.xlsx --sheet=strategy_reason --rulesetId=BJ_6D_S17_DAS_LS --out=./out.json
 * node scripts/xlsx-to-json2.mjs ./input/data.xlsx --sheet=Q&A --rulesetId=BJ_6D_S17_DAS_NS --out=./out1.json
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

function normKeyName(s) {
    return String(s ?? "")
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/_/g, "");
}

function detectColumns(rowObj) {
    const col = {};
    for (const [k, v] of Object.entries(rowObj)) col[normKeyName(k)] = v;
    return col;
}

function normalizeHandType(v) {
    const s = String(v ?? "").trim().toUpperCase();
    req(["HARD", "SOFT", "PAIR"].includes(s), `playerHandType invalid: ${v}`);
    return s;
}

function normalizeDealerUpcard(v) {
    const raw = String(v ?? "").trim().toUpperCase();
    if (raw === "A") return "A";
    if (["J", "Q", "K", "10"].includes(raw)) return "10";
    req(/^[2-9]$/.test(raw), `dealerUpcard invalid: ${v}`);
    return raw;
}

function normalizePairRank(v) {
    const raw = String(v ?? "").trim().toUpperCase();
    if (raw === "A") return "A";
    // if (["10", "J", "Q", "K", "T"].includes(raw)) return "T";
    if (["10", "J", "Q", "K", "T"].includes(raw)) return "10";
    req(/^[2-9]$/.test(raw), `pair rank invalid: ${v}`);
    return raw;
}

function normalizeTotal(v) {
    const n = Number(v);
    req(Number.isFinite(n) && Number.isInteger(n), `playerHand(total) invalid: ${v}`);
    req(n >= 4 && n <= 21, `playerHand(total) out of range(4~21): ${v}`);
    return n;
}

function normalizeActionCode(action, actionCode) {
    const ac = String(actionCode ?? "").trim().toUpperCase();
    if (ac) {
        req(["H", "S", "D", "P", "R"].includes(ac), `actionCode invalid: ${actionCode}`);
        return ac;
    }
    const a = String(action ?? "").trim().toLowerCase().replace(/\s+/g, "");
    const map = { hit: "H", stand: "S", doubledown: "D", double: "D", split: "P", surrender: "R" };
    req(map[a], `action invalid: ${action}`);
    return map[a];
}

function actionLabelFromCode(code) {
    return ({ H: "Hit", S: "Stand", D: "DoubleDown", P: "Split", R: "Surrender" })[code];
}

function parseTags(v) {
    const s = String(v ?? "").trim();
    if (!s) return [];
    return s.split(",").map(t => t.trim()).filter(Boolean);
}

function extractReasonParts(reasonRaw) {
    const reason = String(reasonRaw ?? "").replace(/\r\n/g, "\n").trim();
    const lines = reason ? reason.split("\n") : [];

    const learnMoreBullets = lines
        .map(l => l.trim())
        .filter(l => /^[-•]\s+/.test(l))
        .map(l => l.replace(/^[-•]\s+/, "").trim())
        .filter(Boolean);

    let ruleOfThumb = "";
    const ruleIdx = lines.findIndex(l => /simple\s*rule|rule of thumb|meowbot/i.test(l));
    if (ruleIdx >= 0) {
        const after = lines.slice(ruleIdx + 1).map(l => l.trim()).filter(Boolean);
        if (after.length) ruleOfThumb = after[0].replace(/^["“”']+/, "").replace(/["“”']+$/, "").trim();
    }

    return { reason, learnMoreBullets, ruleOfThumb };
}

function buildKey(rulesetId, handType, handValue, dealerUpcard) {
    return `${rulesetId}::${handType}:${handValue}::D:${dealerUpcard}`;
}

function toInt(v, fallback = 0) {
    if (v == null || v === "") return fallback;
    const n = Number(v);
    return Number.isFinite(n) ? Math.trunc(n) : fallback;
}

function main() {
    // (A) 인자 파싱
    const args = parseArgs(process.argv);
    const input = args._[0];
    req(input, "input xlsx path required");

    const sheetName = args.sheet;
    // const outPath = args.out || "./strategy.json";
    const outPath = `.\\out\\out.json`;
    const defaultRulesetId = String(args.rulesetId || "").trim();
    const version = args.version || new Date().toISOString().slice(0, 10);
    const allowDuplicate = args["allow-duplicate"] || "false"; // false | priority

    console.log(`Input: ${input}`);
    console.log(`Sheet: ${sheetName || "(default 2nd sheet)"}`);
    console.log(`Output: ${outPath}`);
    console.log(`Default RulesetId: ${defaultRulesetId || "(must be provided in rows)"}`);
    console.log(`Version: ${version}`);
    console.log(`Allow Duplicate: ${allowDuplicate}`);

    // (B) 엑셀 로드
    const wb = xlsx.readFile(input);
    //   const targetSheet = sheetName || wb.SheetNames[1];
    const targetSheet = wb.SheetNames[1];
    req(wb.Sheets[targetSheet], `sheet not found: ${targetSheet}`);

    // (C) 시트 -> rows
    const rows = xlsx.utils.sheet_to_json(wb.Sheets[targetSheet], { defval: "", raw: false });
    req(rows.length > 0, "no rows found in sheet");

    // (D) rows -> items(Map)
    const items = {};
    let rulesetIdUsed = "";

    rows.forEach((row, idx) => {
        const rowNo = idx + 2; // header 1행 가정
        console.log(row);
        const c = detectColumns(row);

        console.log("Processing row:", rowNo);
        console.log("Processing c:", c);

        // const rulesetId = String(c.rulesetid || defaultRulesetId).trim();
        const rulesetId = String("BJ_6D_S17_DAS_LS").trim();
        console.log("rulesetId:", rulesetId);

        req(rulesetId, `rulesetId missing (row ${rowNo}). Provide column rulesetId or CLI --rulesetId`);
        if (!rulesetIdUsed) rulesetIdUsed = rulesetId;

        const playerHandType = normalizeHandType(c.playerhandtype);


        console.log("playerHandType:", playerHandType, " c.playerhand:", c.playerhand);
        const playerHand =
            playerHandType === "PAIR" ? normalizePairRank(c.playerhand) : normalizeTotal(c.playerhand);

        console.log("playerHandType:", playerHandType, " playerHand:", playerHand);
        console.log("dealerUpcard:", c.dealerupcard);
        const dealerUpcard = normalizeDealerUpcard(c.dealerupcard);
        console.log("dealerUpcard normalized:", dealerUpcard);
        // console.log("   actionCode    :", c.action, c.actioncode);
        console.log("   actionCode    :", c.action);
        // const actionCode = normalizeActionCode(c.action, c.actioncode);
        // const action = actionLabelFromCode(actionCode);

        const action = c.action;

        console.log("   action       :", action);
        const answer = String(c.answer ?? "").trim();
        req(answer, `answer missing (row ${rowNo})`);

        const reasonRaw = String(c.reason ?? "").trim();
        req(reasonRaw, `reason missing (row ${rowNo})`);

        const { reason, learnMoreBullets, ruleOfThumb } = extractReasonParts(reasonRaw);
        const tags = parseTags(c.tags);
        const priority = toInt(c.priority, 0);

        const key = buildKey(rulesetId, playerHandType, playerHand, dealerUpcard);

        const entry = {
            playerHandType,
            playerHand,
            dealerUpcard,
            // actionCode,
            action,
            answer,
            reason,
            // learnMoreBullets,
            // ruleOfThumb,
            // tags,
            // meta: { sheet: targetSheet, row: rowNo, priority }
        };

        // (E) 중복 키 처리
        if (items[key]) {
            if (allowDuplicate === "priority") {
                if (priority > (items[key].meta?.priority ?? 0)) items[key] = entry;
            } else {
                throw new Error(`duplicate key: ${key} (row ${rowNo})`);
            }
        } else {
            items[key] = entry;
        }
    });

    // (F) JSON 출력
    const output = {
        version,
        rulesetId: rulesetIdUsed || defaultRulesetId,
        sheet: targetSheet,
        count: Object.keys(items).length,
        items
    };

    console.log("Writing output to:", outPath);

    fs.writeFileSync(outPath, JSON.stringify(output, null, 2), "utf-8");
    console.log(`OK: ${output.count} items -> ${path.resolve(outPath)}`);
}

main();
