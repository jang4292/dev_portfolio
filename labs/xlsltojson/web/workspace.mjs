import {convertStrategy, convertOffers} from './conversion.mjs';
const clone = value => structuredClone(value);
const canonical = value => {
  if (Array.isArray(value)) return `[${value.map(canonical).join(',')}]`;
  if (value && typeof value === 'object') return `{${Object.keys(value).sort().map(k => `${JSON.stringify(k)}:${canonical(value[k])}`).join(',')}}`;
  return JSON.stringify(value);
};
export const REVIEW_STATUSES = ['before','in_progress','complete'];
export const REVIEW_LABELS = {before:'검토 전', in_progress:'검토 중', complete:'검토 완료'};
export const CHANGE_LABELS = {unchanged:'변경 없음', added:'추가됨', modified:'수정됨', deleted:'삭제 예정'};
export function identity(entry, type) {
  return canonical([entry.key, entry.variant.when || {}, type === 'offers' ? entry.variant.choice : null]);
}
function variantForForm(type, form, previous) {
  const rulesetId = String(form.rulesetId || '').trim();
  if (!rulesetId || rulesetId.includes('::')) throw new Error('Ruleset ID를 입력하세요. 구분자 ::는 사용할 수 없습니다.');
  if (!String(form.answer || '').trim() || !String(form.reason || '').trim()) throw new Error('Answer와 Reason은 필수입니다.');
  if (String(form.priority).trim() === '' || !Number.isInteger(Number(form.priority))) throw new Error('우선순위는 정수여야 합니다.');
  const when = clone(previous?.when || {});
  let result;
  if (type === 'strategy') {
    const headers = ['playerHandType','playerHand','dealerUpcard','actionCode','answer','reason','decisionWindow','priority'];
    result = convertStrategy([headers,headers.map(k => form[k])],{sheet:'',rulesetId,version:''});
  } else {
    const headers = ['offerType','dealerUpcard','choice','answer','reason','decisionWindow','playerState','priority'];
    result = convertOffers([headers,headers.map(k => form[k])],{sheet:'',rulesetId,version:'',format:'table'});
  }
  const [key, item] = Object.entries(result.items)[0];
  const generated = item.variants[0];
  const variant = {...clone(previous || {}),...generated};
  if (previous && !Object.hasOwn(previous,'priority') && generated.priority === 0) delete variant.priority;
  if (!previous?.meta) delete variant.meta;
  // Source references are retained only for existing spreadsheet-derived variants.
  else variant.meta = clone(previous.meta);
  delete when.decisionWindow;
  if (generated.when.decisionWindow) when.decisionWindow = generated.when.decisionWindow;
  if (type === 'offers') {
    if (String(form.playerState || '').trim()) when.playerState = generated.when.playerState;
    else delete when.playerState;
  }
  variant.when = when;
  variant.answer = String(form.answer); variant.reason = String(form.reason);
  return {key,variant};
}
export function createWorkspace(doc,type) {
  const entries = []; const itemExtras = new Map(); let seq = 0;
  for (const [key,item] of Object.entries(doc.items)) {
    const extra = clone(item); delete extra.variants; itemExtras.set(key,extra);
    for (const variant of item.variants) entries.push({id:++seq,key,variant:clone(variant),deleted:false,baseline:{key,variant:clone(variant)},review:'before'});
  }
  const meta = clone(doc); delete meta.items;
  const workspace = {type,meta,metaBaseline:clone(meta),entries,itemExtras,nextId:seq+1,reviewBaseline:''};
  workspace.reviewBaseline = reviewSnapshot(workspace);
  return workspace;
}
export function changeStatus(entry) {
  if (entry.deleted) return 'deleted';
  if (!entry.baseline) return 'added';
  return canonical([entry.key,entry.variant]) === canonical([entry.baseline.key,entry.baseline.variant]) ? 'unchanged' : 'modified';
}
export function hasDocumentChanges(workspace) {
  return canonical(workspace.meta) !== canonical(workspace.metaBaseline) || workspace.entries.some(e => changeStatus(e) !== 'unchanged');
}
export function isRulesetChange(workspace,form,id=null) {
  const requested=String(form.rulesetId || '').trim();
  const entry=id == null ? null : workspace.entries.find(e=>e.id===id && !e.deleted);
  if (id != null && !entry) throw new Error('수정할 항목을 찾을 수 없습니다.');
  const previous=entry ? entry.key.split('::')[0] : String(workspace.meta.rulesetId || '');
  return requested !== previous;
}
function rekeyRuleset(workspace,rulesetId) {
  if (!rulesetId || rulesetId.includes('::')) throw new Error('Ruleset ID를 입력하세요. 구분자 ::는 사용할 수 없습니다.');
  const extras=new Map(), seen=new Map(), keys=new Map();
  for (const e of workspace.entries) {
    const i=e.key.indexOf('::');
    if(i<=0 || i+2>=e.key.length) throw new Error(`Ruleset ID를 변경할 수 없는 항목 키: ${e.key}`);
    const next=rulesetId+e.key.slice(i), extra=workspace.itemExtras.get(e.key) || {};
    if(extras.has(next) && canonical(extras.get(next))!==canonical(extra)) throw new Error(`항목 추가 필드가 충돌합니다: ${next}`);
    extras.set(next,clone(extra));keys.set(e.id,next);
    const sig=identity({key:next,variant:e.variant},workspace.type);
    if(seen.has(sig) && seen.get(sig)!==e.key) throw new Error(`변경 후 중복 조건이 발생합니다: ${next}`);
    seen.set(sig,e.key);
  }
  for(const e of workspace.entries)e.key=keys.get(e.id);
  workspace.itemExtras=extras;workspace.meta.rulesetId=rulesetId;
}
export function saveEntryWithRuleset(workspace,form,id=null) {
  if (!isRulesetChange(workspace,form,id)) return saveEntry(workspace,form,id);
  const stage=clone(workspace);
  rekeyRuleset(stage,String(form.rulesetId || '').trim());
  const saved=saveEntry(stage,form,id);
  Object.assign(workspace,stage);
  return workspace.entries.find(e=>e.id===saved.id);
}
export function saveEntry(workspace,form,id = null) {
  const entry = id == null ? null : workspace.entries.find(e => e.id === id && !e.deleted);
  if (id != null && !entry) throw new Error('수정할 항목을 찾을 수 없습니다.');
  const {key,variant} = variantForForm(workspace.type,form,entry?.variant);
  const candidate = {key,variant};
  const collision = workspace.entries.find(e => !e.deleted && e.id !== id && identity(e,workspace.type) === identity(candidate,workspace.type));
  // Existing duplicates can be retained when only content or priority is edited.
  if (collision && (!entry || identity(entry,workspace.type) !== identity(candidate,workspace.type))) throw new Error('같은 키와 조건을 가진 항목이 이미 있습니다.');
  if (entry) {
    if (entry.key !== key && !workspace.itemExtras.has(key)) workspace.itemExtras.set(key,clone(workspace.itemExtras.get(entry.key) || {}));
    if (entry.key !== key && workspace.itemExtras.has(key)) {
      const source = workspace.itemExtras.get(entry.key) || {};
      const target = workspace.itemExtras.get(key) || {};
      if (Object.keys(source).length && canonical(source) !== canonical(target) && !workspace.entries.some(e => e.id !== id && !e.deleted && e.key === entry.key)) throw new Error('대상 키에 다른 추가 필드가 있어 이동할 수 없습니다.');
    }
    entry.key=key; entry.variant=variant; return entry;
  }
  if (!workspace.itemExtras.has(key)) workspace.itemExtras.set(key,{});
  const added={id:workspace.nextId++,key,variant,deleted:false,baseline:null,review:'before'};
  workspace.entries.push(added); return added;
}
export function deleteEntries(workspace,ids) {
  const selected = new Set(ids); for (const entry of workspace.entries) if (selected.has(entry.id)) entry.deleted = true;
}
export function restoreEntry(workspace,id) {
  const entry = workspace.entries.find(e => e.id === id && e.deleted); if (!entry) return;
  const duplicate = workspace.entries.some(e => !e.deleted && identity(e,workspace.type) === identity(entry,workspace.type) && !(entry.baseline && e.baseline && identity(entry.baseline,workspace.type) === identity(e.baseline,workspace.type)));
  if (duplicate) throw new Error('같은 키와 조건의 항목이 있어 복구할 수 없습니다.');
  entry.deleted=false;
}
export function buildDocument(workspace) {
  const doc=clone(workspace.meta); const items={};
  for (const e of workspace.entries) if (!e.deleted) {
    if (!Object.hasOwn(items,e.key)) Object.defineProperty(items,e.key,{value:{...clone(workspace.itemExtras.get(e.key) || {}),variants:[]},writable:true,enumerable:true,configurable:true});
    items[e.key].variants.push(clone(e.variant));
  }
  doc.count=Object.keys(items).length; doc.items=items; return doc;
}
export function markDocumentSaved(workspace) {
  workspace.entries=workspace.entries.filter(e => !e.deleted);
  for (const e of workspace.entries) e.baseline={key:e.key,variant:clone(e.variant)};
  workspace.metaBaseline=clone(workspace.meta);
}
export function createReviewFile(workspace) {
  return {format:'strategy-studio-review',version:1,type:workspace.type,entries:workspace.entries.filter(e=>!e.deleted).map(e=>({key:e.key,when:clone(e.variant.when || {}),...(workspace.type === 'offers' ? {choice:e.variant.choice} : {}),status:e.review}))};
}
export function reviewSnapshot(workspace) { return canonical(createReviewFile(workspace)); }
export function applyReviewFile(workspace,file) {
  if (!file || file.format !== 'strategy-studio-review' || file.version !== 1 || file.type !== workspace.type || !Array.isArray(file.entries)) throw new Error('현재 데이터 유형에 맞는 검토 파일이 아닙니다.');
  if (file.entries.some(e => !e || typeof e.key !== 'string' || !e.when || typeof e.when !== 'object' || Array.isArray(e.when) || !REVIEW_STATUSES.includes(e.status) || (workspace.type === 'offers' && typeof e.choice !== 'string'))) throw new Error('검토 파일에 잘못된 항목이 있습니다.');
  const current=new Map(), incoming=new Map();
  const add=(map,key,val)=>{if (!map.has(key)) map.set(key,[]); map.get(key).push(val);};
  for (const e of workspace.entries) if (!e.deleted) add(current,identity(e,workspace.type),e);
  for (const e of file.entries) add(incoming,identity({key:e.key,variant:{when:e.when,choice:e.choice}},workspace.type),e);
  let applied=0,unmatched=0,ambiguous=0;
  for (const [key,values] of incoming) {
    const targets=current.get(key) || [];
    if (!targets.length) unmatched+=values.length;
    else if (values.length !== 1 || targets.length !== 1) ambiguous+=values.length;
    else {targets[0].review=values[0].status; applied++;}
  }
  return {applied,unmatched,ambiguous};
}
