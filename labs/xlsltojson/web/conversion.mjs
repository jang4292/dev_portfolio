const assert = (condition, message) => { if (!condition) throw new Error(message); };
const string = value => String(value ?? '').trim();
const norm = value => string(value).toLowerCase().replace(/[\s_]/g, '');
const priorityValue = (value,row) => {
  if (value === undefined || value === null || string(value) === '') return 0;
  const number=Number(value);
  assert(Number.isSafeInteger(number), `${row}행: priority는 안전한 정수여야 합니다: ${value}`);
  return number;
};
const required = (value, row, field) => { assert(string(value), `${row}행: ${field} 값이 필요합니다.`); return string(value); };
const dealer = (value, row) => {
  const s = required(value, row, 'dealerUpcard').toUpperCase();
  if (['10', 'J', 'Q', 'K'].includes(s)) return '10';
  assert(s === 'A' || /^[2-9]$/.test(s), `${row}행: dealerUpcard 값이 올바르지 않습니다: ${s}`);
  return s;
};
const decision = (value, row, offer = false) => {
  let s = string(value).toLowerCase();
  if (offer && ['not-initial', 'notinitial'].includes(s)) s = 'not_initial';
  assert(!s || ['initial', 'not_initial'].includes(s), `${row}행: decisionWindow 값이 올바르지 않습니다: ${s}`);
  return s;
};
const headerMap = (row,strict=true) => {
  const entries=[];const seen=new Set();
  row.forEach((value,index)=>{const key=norm(value);if(!key)return;if(strict)assert(!seen.has(key), `중복된 열 이름: ${value}`);seen.add(key);entries.push([key,index]);});
  return Object.fromEntries(entries);
};
const get = (row, map, ...names) => { for (const name of names) if (map[norm(name)] !== undefined) return row[map[norm(name)]]; };
const canonical = value => {
  if (Array.isArray(value)) return `[${value.map(canonical).join(',')}]`;
  if (value && typeof value === 'object') return `{${Object.keys(value).sort().map(k => `${JSON.stringify(k)}:${canonical(value[k])}`).join(',')}}`;
  return JSON.stringify(value);
};
const signature = when => canonical(when);

export function convertStrategy(aoa, {sheet, rulesetId = '', version = new Date().toISOString().slice(0, 10), range = 0} = {}) {
  assert(aoa.length, '시트에 데이터가 없습니다.');
  const headers = headerMap(aoa[0]);
  const items = {}; let used = ''; let rows = 0;
  aoa.slice(1).forEach((row, index) => {
    if (!row.some(v => string(v))) return;
    const line = range + index + 2;
    const rs = required(get(row, headers, 'rulesetId') || rulesetId, line, 'rulesetId');
    used ||= rs;
    const type = required(get(row, headers, 'playerHandType'), line, 'playerHandType').toUpperCase();
    assert(['HARD', 'SOFT', 'PAIR'].includes(type), `${line}행: playerHandType 값이 올바르지 않습니다: ${type}`);
    const rawHand = required(get(row, headers, 'playerHand'), line, 'playerHand').toUpperCase();
    let hand;
    if (type === 'PAIR') {
      hand = ['10', 'J', 'Q', 'K', 'T'].includes(rawHand) ? '10' : rawHand;
      assert(hand === 'A' || /^[2-9]$/.test(hand) || hand === '10', `${line}행: 페어 값이 올바르지 않습니다: ${rawHand}`);
    } else {
      hand = Number(rawHand);
      assert(Number.isInteger(hand), `${line}행: playerHand 값이 올바르지 않습니다: ${rawHand}`);
      if (type === 'SOFT' && hand >= 3 && hand <= 11) hand += 10;
      assert(type === 'SOFT' ? hand >= 13 && hand <= 21 : hand >= 2 && hand <= 21, `${line}행: playerHand 범위가 올바르지 않습니다: ${rawHand}`);
    }
    const upcard = dealer(get(row, headers, 'dealerUpcard'), line);
    let action = string(get(row, headers, 'actionCode')).toUpperCase();
    if (!action) action = ({hit:'H', stand:'S', doubledown:'D', double:'D', split:'P', surrender:'R'})[norm(get(row, headers, 'action'))];
    assert(['H','S','D','P','R'].includes(action), `${line}행: action 또는 actionCode 값이 올바르지 않습니다.`);
    const answer = required(get(row, headers, 'answer'), line, 'answer');
    const reason = required(get(row, headers, 'reason'), line, 'reason').replace(/\r\n/g, '\n');
    const window = decision(get(row, headers, 'decisionWindow'), line);
    const when = window ? {decisionWindow: window} : {};
    const priority = priorityValue(get(row, headers, 'priority'),line);
    const key = `${rs}::${type}:${hand}::D:${upcard}`;
    const variant = {when, priority, playerHandType:type, playerHand:hand, dealerUpcard:upcard, actionCode:action, answer, reason, meta:{sheet, row:line}};
    const variants = (items[key] ||= {variants:[]}).variants;
    const existing = variants.findIndex(v => signature(v.when) === signature(when));
    if (existing >= 0) {
      assert(priority > variants[existing].priority, `${line}행: 조건이 중복됩니다: ${key}`);
      variants[existing] = variant;
    } else variants.push(variant);
    rows++;
  });
  assert(rows, '변환할 데이터 행이 없습니다.');
  return {version, rulesetId:used || rulesetId, sheet, count:Object.keys(items).length, items};
}

export function convertOffers(aoa, {sheet, rulesetId = '', version = new Date().toISOString().slice(0, 10), range = 0, format = 'auto', defaultUpcard = 'A', duplicates = 'variants'} = {}) {
  assert(aoa.length, '시트에 데이터가 없습니다.');
  assert(['auto','table','row'].includes(format), '지원하지 않는 offers 형식입니다.');
  assert(['variants','priority','false'].includes(duplicates), '지원하지 않는 중복 처리 방식입니다.');
  let map = headerMap(aoa[0],false);
  const has = (...keys) => keys.some(key => map[norm(key)] !== undefined);
  if (format === 'auto') format = has('offerType') && [has('choice','yn','recommend','action'),has('answer','ans'),has('reason','learnMore')].filter(Boolean).length >= 2 ? 'table' : 'row';
  if (format === 'table') map = headerMap(aoa[0]);
  const items = {}; let used = ''; let rows = 0;
  aoa.slice(format === 'table' ? 1 : 0).forEach((row, index) => {
    if (!row.some(v => string(v))) return;
    const line = range + index + (format === 'table' ? 2 : 1);
    let offerType, choice, answer, reason, rs, upcard, state, window, priority;
    if (format === 'table') {
      rs = string(get(row,map,'rulesetId','ruleset')) || rulesetId;
      offerType = get(row,map,'offerType');
      upcard = get(row,map,'dealerUpcard','upcard','dealerCard','dealer') || defaultUpcard;
      choice = get(row,map,'choice','yn','recommend','recommended','answerChoice') || get(row,map,'action');
      answer = get(row,map,'answer','ans'); reason = get(row,map,'reason','learnMore');
      state = get(row,map,'playerState','handState','state'); window = get(row,map,'decisionWindow','window'); priority = priorityValue(get(row,map,'priority','prio'),line);
    } else {
      const cells = row.map(string);
      const oi = cells.findIndex(v => /insurance|even money/i.test(v));
      assert(oi >= 0, `${line}행: offerType을 찾을 수 없습니다.`);
      const ci = cells.findIndex((v,i) => i > oi && /^(y|yes|true|n|no|false)$/i.test(v));
      assert(ci >= 0, `${line}행: choice를 찾을 수 없습니다.`);
      const ai = cells.findIndex((v,i) => i > ci && v);
      assert(ai >= 0, `${line}행: answer를 찾을 수 없습니다.`);
      offerType = cells[oi]; choice = cells[ci]; answer = cells[ai]; reason = cells.slice(ai + 1).filter(Boolean).join('\n\n');
      rs = rulesetId; upcard = defaultUpcard; window = 'initial'; priority = 0;
    }
    rs = required(rs,line,'rulesetId'); used ||= rs;
    const ot = required(offerType,line,'offerType').toUpperCase().replace(/\s+/g,'_');
    offerType = ({INSURANCE:'INSURANCE', EVEN_MONEY:'EVEN_MONEY', EVENMONEY:'EVEN_MONEY', 'EVEN-MONEY':'EVEN_MONEY'})[ot];
    assert(offerType, `${line}행: offerType 값이 올바르지 않습니다: ${ot}`);
    const up = string(upcard).toUpperCase() === 'T' ? '10' : upcard;
    upcard = dealer(up,line);
    const ch = required(choice,line,'choice').toUpperCase();
    choice = ['Y','YES','TRUE'].includes(ch) ? 'Y' : ['N','NO','FALSE'].includes(ch) ? 'N' : '';
    assert(choice, `${line}행: choice 값이 올바르지 않습니다: ${ch}`);
    answer = required(answer,line,'answer'); reason = required(reason,line,'reason');
    const st = string(state).toUpperCase();
    state = st ? ({ANY:'ANY', BJ:'BLACKJACK', BLACKJACK:'BLACKJACK'})[st] : offerType === 'EVEN_MONEY' ? 'BLACKJACK' : 'ANY';
    assert(state, `${line}행: playerState 값이 올바르지 않습니다: ${st}`);
    window = decision(window,line,true);
    const when = {...(window ? {decisionWindow:window} : {}), playerState:state};
    const key = `${rs}::OFFER:${offerType}::D:${upcard}`;
    const variant = {offerType,dealerUpcard:upcard,choice,answer,reason,when,priority};
    const variants = (items[key] ||= {variants:[]}).variants;
    if (variants.length && duplicates === 'false') throw new Error(`${line}행: 키가 중복됩니다: ${key}`);
    const i = duplicates === 'priority' ? variants.findIndex(v => v.choice === choice && signature(v.when) === signature(when)) : -1;
    if (i < 0) variants.push(variant); else if (priority > variants[i].priority) variants[i] = variant;
    rows++;
  });
  assert(rows, '변환할 데이터 행이 없습니다.');
  return {version, rulesetId:used || rulesetId, sheet, count:Object.keys(items).length, items};
}

export function validateEditableDocument(doc, type) {
  assert(doc && typeof doc === 'object' && !Array.isArray(doc), 'JSON 최상위는 객체여야 합니다.');
  assert(['strategy','offers'].includes(type), '지원하지 않는 데이터 유형입니다.');
  assert(doc.items && typeof doc.items === 'object' && !Array.isArray(doc.items), 'items 객체가 필요합니다.');
  for (const [key, item] of Object.entries(doc.items)) {
    assert(item && Array.isArray(item.variants) && item.variants.length, `${key}: variants 배열이 필요합니다.`);
    for (const v of item.variants) {
      assert(v && typeof v === 'object' && !Array.isArray(v), `${key}: variant가 객체여야 합니다.`);
      for (const field of ['answer','reason','offerType','choice','playerHandType','playerHand','actionCode','dealerUpcard','priority']) {
        assert(v[field] == null || ['string','number','boolean'].includes(typeof v[field]), `${key}: ${field}는 편집 가능한 단일 값이어야 합니다.`);
      }
      assert(v.when == null || (typeof v.when === 'object' && !Array.isArray(v.when)), `${key}: when은 객체여야 합니다.`);
    }
  }
  return doc;
}

export function documentIssues(doc, type) {
  validateEditableDocument(doc,type);
  const issues=[];
  if(!Object.keys(doc.items).length) issues.push({key:'',index:-1,message:'items에 항목이 없습니다.'});
  for(const [key,item] of Object.entries(doc.items)) {
    const seen=new Set();
    item.variants.forEach((v,index)=>{
      const add=message=>issues.push({key,index,message});
      const separator=key.indexOf('::'); const ruleset=separator>0?key.slice(0,separator):'';
      if(!ruleset) add('키에 Ruleset ID와 구분자 ::가 필요합니다.');
      if(typeof v.answer !== 'string' || !v.answer.trim()) add('answer 문구가 필요합니다.');
      if(typeof v.reason !== 'string' || !v.reason.trim()) add('reason 문구가 필요합니다.');
      if(!v.when || typeof v.when !== 'object' || Array.isArray(v.when)) add('when 객체가 필요합니다.');
      if(v.priority !== undefined && !Number.isInteger(v.priority)) add('priority는 정수여야 합니다.');
      if(v.when?.decisionWindow !== undefined && !['initial','not_initial'].includes(v.when.decisionWindow)) add('decisionWindow 값이 올바르지 않습니다.');
      const card=typeof v.dealerUpcard === 'string' && (v.dealerUpcard === 'A' || /^(?:[2-9]|10)$/.test(v.dealerUpcard));
      if(!card) add('dealerUpcard는 A 또는 2~10 문자열이어야 합니다.');
      if(type === 'strategy') {
        const handType=['HARD','SOFT','PAIR'].includes(v.playerHandType);
        const hand=v.playerHandType === 'PAIR' ? typeof v.playerHand === 'string' && /^(?:A|[2-9]|10)$/.test(v.playerHand) : Number.isInteger(v.playerHand) && (v.playerHandType === 'SOFT' ? v.playerHand>=13 && v.playerHand<=21 : v.playerHand>=2 && v.playerHand<=21);
        if(!handType) add('playerHandType 값이 올바르지 않습니다.');
        if(!hand) add('playerHand 값이 올바르지 않습니다.');
        if(!['H','S','D','P','R'].includes(v.actionCode)) add('actionCode 값이 올바르지 않습니다.');
        if(ruleset && handType && hand && card && key !== `${ruleset}::${v.playerHandType}:${v.playerHand}::D:${v.dealerUpcard}`) add('키가 손패 및 딜러 카드 값과 일치하지 않습니다.');
      } else {
        if(!['INSURANCE','EVEN_MONEY'].includes(v.offerType)) add('offerType 값이 올바르지 않습니다.');
        if(!['Y','N'].includes(v.choice)) add('choice 값이 올바르지 않습니다.');
        if(v.when?.playerState !== undefined && !['ANY','BLACKJACK'].includes(v.when.playerState)) add('playerState 값이 올바르지 않습니다.');
        if(ruleset && ['INSURANCE','EVEN_MONEY'].includes(v.offerType) && card && key !== `${ruleset}::OFFER:${v.offerType}::D:${v.dealerUpcard}`) add('키가 오퍼 및 딜러 카드 값과 일치하지 않습니다.');
      }
      const sig=canonical([v.when || {},type==='offers'?v.choice:null]);
      if(seen.has(sig)) add('같은 키에 중복 조건이 있습니다.'); else seen.add(sig);
    });
  }
  return issues;
}

export function validateDocument(doc,type) {
  const issues=documentIssues(doc,type);
  if(issues.length) {
    const issue=issues[0];
    throw new Error(`${issue.key ? `${issue.key} (조건 ${issue.index+1}): ` : ''}${issue.message}${issues.length>1?` 외 ${issues.length-1}건`:''}`);
  }
  return doc;
}

export function compareDocuments(current, reference) {
  const a = new Set(Object.keys(current.items)); const b = new Set(Object.keys(reference.items));
  const variantId = (key,v) => canonical([key,v.when || {},v.choice || '']);
  const variants = d => Object.entries(d.items).flatMap(([key,item]) => item.variants.map(v => variantId(key,v)));
  const difference = (left,right) => {
    const counts = new Map();
    for (const item of right) counts.set(item, (counts.get(item) || 0) + 1);
    return left.filter(item => { const count = counts.get(item) || 0; if (!count) return true; counts.set(item, count - 1); return false; });
  };
  const av = variants(current), bv = variants(reference);
  return {addedKeys:[...a].filter(k => !b.has(k)), missingKeys:[...b].filter(k => !a.has(k)), addedVariants:difference(av,bv), missingVariants:difference(bv,av)};
}
