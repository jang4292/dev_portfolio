import {convertStrategy, convertOffers, validateEditableDocument, validateDocument, documentIssues, compareDocuments} from './conversion.mjs';
import {createWorkspace, saveEntryWithRuleset, isRulesetChange, hasDocumentChanges, deleteEntries, restoreEntry, buildDocument, changeStatus, markDocumentSaved, createReviewFile, applyReviewFile, reviewSnapshot, REVIEW_STATUSES, REVIEW_LABELS, CHANGE_LABELS} from './workspace.mjs';
import {DEFAULT_RULESET_ID, mountRulesetBuilder} from './ruleset.mjs';
const $ = id => document.getElementById(id);
const starterRuleset=mountRulesetBuilder($('starter-ruleset'));
const excelRuleset=mountRulesetBuilder($('ruleset'));
const state = {file:null,workbook:null,workspace:null,reference:null,selected:null,checked:new Set(),draft:null,draftDirty:false,issues:[],issuesById:new Map(),fileSequence:0,loadSequence:0,referenceSequence:0};
const clone = value => structuredClone(value);
const entries = () => state.workspace?.entries || [];
const currentDocument = () => buildDocument(state.workspace);
const showNotice = (message,error=false) => { $('notice').textContent=message; $('notice').classList.toggle('error',error); $('notice').classList.remove('hidden'); };
const clearNotice = () => $('notice').classList.add('hidden');
const text = (tag,value,className) => {const el=document.createElement(tag); el.textContent=value; if(className) el.className=className; return el;};
const condition = variant => Object.entries(variant.when || {}).map(([key,value])=>`${key}: ${typeof value === 'object' ? JSON.stringify(value) : value}`).join(' · ') || '기본 조건';
const title = e => e.variant.offerType ? `${String(e.variant.offerType).replaceAll('_',' ')} · ${e.variant.choice}` : `${e.variant.playerHandType} ${e.variant.playerHand} / 딜러 ${e.variant.dealerUpcard}`;
const jsonDirty = () => !!state.workspace && hasDocumentChanges(state.workspace);
const reviewDirty = () => state.workspace && reviewSnapshot(state.workspace)!==state.workspace.reviewBaseline;
const unsaved = () => jsonDirty() || reviewDirty() || state.draftDirty;
function canDiscardDraft() { return !state.draftDirty || window.confirm('편집 중인 입력값이 저장되지 않았습니다. 입력을 버리시겠습니까?'); }
function canReplace() { return !unsaved() || window.confirm('저장하지 않은 서비스 JSON 또는 검토 상태가 있습니다. 새 작업을 시작하시겠습니까?'); }
function captureWork() {
  const form=document.querySelector('.entry-form');
  const draftData=state.draftDirty && form?JSON.stringify([...form.querySelectorAll('input,select,textarea')].map(control=>[control.name,control.dataset.rulesetPart,control.value])):'';
  return {workspace:state.workspace,doc:state.workspace?JSON.stringify(currentDocument()):'',review:state.workspace?reviewSnapshot(state.workspace):'',draft:state.draftDirty,draftData,jsonDirty:jsonDirty(),reviewDirty:!!reviewDirty()};
}
function workUnchanged(snapshot) {
  const current=captureWork();return snapshot.workspace===current.workspace && snapshot.doc===current.doc && snapshot.review===current.review && snapshot.draft===current.draft && snapshot.draftData===current.draftData && snapshot.jsonDirty===current.jsonDirty && snapshot.reviewDirty===current.reviewDirty;
}
function options() {
  const excel=!!state.workbook;
  $('sheet-label').classList.toggle('hidden',!excel); $('rules-label').classList.toggle('hidden',!excel); $('version-label').classList.toggle('hidden',!excel); $('advanced').classList.toggle('hidden',!excel);
  $('offer-options').classList.toggle('hidden',$('type').value!=='offers');
}
function loadWorkspace(doc,type,message) {
  state.workspace=createWorkspace(doc,type); state.reference=null; state.selected=null; state.checked.clear(); state.draft=null; state.draftDirty=false;
  state.referenceSequence++;
  $('reference').value=''; $('reference-name').textContent='비교할 기준 파일 없음'; $('review-file').value=''; $('search').value=''; $('status-filter').value='all'; $('review-filter').value='all';
  buildFilters(); render();
  const first=state.issues[0];
  showNotice(first ? `${message}\n수정이 필요한 검증 오류 ${state.issues.length}건이 있습니다. ${first.key || '문서'}: ${first.message}` : message,!!first);
}
$('starter').addEventListener('change',()=> $('starter-meta').classList.toggle('hidden',!$('starter').value.startsWith('empty-')));
$('create').addEventListener('click',async()=>{
  const choice=$('starter').value; if(!choice) {showNotice('시작 방식을 선택해 주세요.',true); return;} if(!canReplace()) return;
  const request=++state.loadSequence,snapshot=captureWork();
  try {
    const type=choice.endsWith('offers')?'offers':'strategy'; let doc;
    if(choice.startsWith('empty-')) {
      const rulesetId=starterRuleset.getValue() || DEFAULT_RULESET_ID, version=$('starter-version').value.trim();
      if(rulesetId.includes('::')) throw new Error('Ruleset ID에 구분자 ::는 사용할 수 없습니다.');
      if(!version) throw new Error('버전을 입력해 주세요.');
      starterRuleset.setValue(rulesetId);
      doc={version,rulesetId,sheet:'',count:0,items:{}};
    } else {
      const response=await fetch(`./templates/${type==='offers'?'offers':'basic_strategy'}.json`);
      if(!response.ok) throw new Error('내장 예시 파일을 찾을 수 없습니다. 빌드를 확인해 주세요.');
      doc=validateDocument(await response.json(),type);
    }
    if(request!==state.loadSequence)return;
    if(!workUnchanged(snapshot)) {showNotice('파일을 불러오는 동안 작업이 변경되어 새 작업을 시작하지 않았습니다. 다시 시도해 주세요.',true);return;}
    loadWorkspace(doc,type,choice.startsWith('empty-')?'빈 구조를 만들었습니다. 항목을 추가해 주세요.':'내장 예시를 불러왔습니다. 내용과 Ruleset을 확인해 주세요.');
  } catch(error) {if(request===state.loadSequence)showNotice(`새 작업을 시작하지 못했습니다: ${error.message}`,true);}
});
$('type').addEventListener('change',options);
$('file').addEventListener('change',async event=>{
  const file=event.target.files[0]; if(!file)return;
  const request=++state.fileSequence;state.loadSequence++;
  state.file=null; state.workbook=null; $('file-name').textContent=`${file.name} · 읽는 중`; $('import-options').classList.add('hidden');clearNotice();
  try {
    let workbook=null,type;
    if(/\.json$/i.test(file.name)) {
      const parsed=JSON.parse(await file.text()); const first=Object.values(parsed.items || {})[0]?.variants?.[0];
      if(first) type=first.offerType?'offers':'strategy';
    } else {
      if(!window.XLSX) throw new Error('엑셀 읽기 라이브러리를 불러오지 못했습니다. 빌드를 확인해 주세요.');
      const bytes=await file.arrayBuffer();if(request!==state.fileSequence)return;
      workbook=XLSX.read(bytes,{type:'array'});
    }
    if(request!==state.fileSequence)return;
    state.file=file;state.workbook=workbook;$('file-name').textContent=file.name;
    if(workbook) {$('sheet').replaceChildren(...workbook.SheetNames.map(name=>new Option(name,name)));if(workbook.SheetNames.includes('Q&A')) $('sheet').value='Q&A';type=$('sheet').value.toLowerCase()==='offers'?'offers':'strategy';}
    if(type) $('type').value=type;
    $('import-options').classList.remove('hidden'); options();
  } catch(error) {if(request!==state.fileSequence)return;state.file=null; $('import-options').classList.add('hidden'); showNotice(`파일을 읽지 못했습니다: ${error.message}`,true);}
});
$('sheet').addEventListener('change',()=>{if($('sheet').value.toLowerCase()==='offers') $('type').value='offers'; options();});
$('import').addEventListener('click',async()=>{
  if(!state.file || !canReplace()) return;
  const request=++state.loadSequence,snapshot=captureWork(),file=state.file,workbook=state.workbook;
  try {
    const type=$('type').value; let doc;
    if(workbook) {
      const sheet=$('sheet').value,range=Number($('range').value);
      if(!Number.isInteger(range)||range<0) throw new Error('첫 행 오프셋은 0 이상의 정수여야 합니다.');
      const aoa=XLSX.utils.sheet_to_json(workbook.Sheets[sheet],{header:1,defval:'',raw:false,range,blankrows:true});
      const config={sheet,range,rulesetId:excelRuleset.getValue(),version:$('version').value.trim()||new Date().toISOString().slice(0,10),format:$('format').value,defaultUpcard:$('upcard').value.trim()||'A',duplicates:$('duplicates').value};
      doc=type==='offers'?convertOffers(aoa,config):convertStrategy(aoa,config);
    } else doc=JSON.parse(await file.text());
    if(request!==state.loadSequence)return;
    if(!workUnchanged(snapshot)) {showNotice('파일을 불러오는 동안 작업이 변경되어 가져오기를 취소했습니다. 다시 시도해 주세요.',true);return;}
    validateEditableDocument(doc,type);
    loadWorkspace(doc,type,`${file.name} 파일을 불러왔습니다.${workbook?'\n선택한 시트만 변환했습니다. Ruleset과 기존 JSON 대비 누락 항목을 확인하세요.':''}`);
  } catch(error) {if(request===state.loadSequence)showNotice(`가져오지 못했습니다: ${error.message}`,true);}
});
$('reference').addEventListener('change',async event=>{
  const file=event.target.files[0]; if(!file)return;
  const request=++state.referenceSequence,workspace=state.workspace;
  try {if(!workspace) throw new Error('먼저 편집할 데이터를 불러오세요.');const parsed=JSON.parse(await file.text());if(request!==state.referenceSequence || workspace!==state.workspace)return;state.reference=validateDocument(parsed,workspace.type); $('reference-name').textContent=file.name; renderComparison(); clearNotice();}
  catch(error) {if(request!==state.referenceSequence)return;state.reference=null; $('reference-name').textContent='비교할 기준 파일 없음'; $('comparison').classList.add('hidden'); event.target.value=''; showNotice(`기준 파일을 읽지 못했습니다: ${error.message}`,true);}
});
$('review-file').addEventListener('change',async event=>{
  const file=event.target.files[0]; if(!file)return;
  try {
    if(!state.workspace) throw new Error('먼저 편집할 데이터를 불러오세요.');
    if(!canDiscardDraft()) {event.target.value='';return;}
    if(reviewDirty() && !window.confirm('저장하지 않은 검토 상태가 있습니다. 검토 파일을 불러오시겠습니까?')) {event.target.value='';return;}
    const snapshot=captureWork();const parsed=JSON.parse(await file.text());
    if(!workUnchanged(snapshot)) {showNotice('파일을 읽는 동안 작업이 변경되어 검토 상태를 적용하지 않았습니다.',true);return;}
    const result=applyReviewFile(state.workspace,parsed);
    const live=entries().filter(e=>!e.deleted).length;
    if(!result.unmatched && !result.ambiguous && result.applied===live) state.workspace.reviewBaseline=reviewSnapshot(state.workspace);
    state.draftDirty=false;
    render(); showNotice(`검토 상태 ${result.applied}개 적용 · 대상 없음 ${result.unmatched}개 · 중복으로 미적용 ${result.ambiguous}개${result.applied<live?` · 파일에 없는 현재 항목 ${live-result.applied}개`:''}`);
  } catch(error) {showNotice(`검토 파일을 읽지 못했습니다: ${error.message}`,true);} finally {event.target.value='';}
});
function renderComparison() {
  if(!state.reference || !state.workspace) {$('comparison').classList.add('hidden');return;}
  const c=compareDocuments(currentDocument(),state.reference),el=$('comparison'); el.replaceChildren();
  el.append(text('strong','기준 JSON과 비교'),document.createElement('br'),text('span',`추가된 키 ${c.addedKeys.length} · 누락된 키 ${c.missingKeys.length}`),document.createElement('br'),text('span',`추가된 조건 ${c.addedVariants.length} · 누락된 조건 ${c.missingVariants.length}`));
  for(const [label,items] of [['추가 키',c.addedKeys],['누락 키',c.missingKeys],['추가 조건',c.addedVariants],['누락 조건',c.missingVariants]]) if(items.length) {const details=document.createElement('details');details.append(text('summary',`${label} 보기 (${items.length})`));const list=document.createElement('ul');items.forEach(item=>list.append(text('li',item)));details.append(list);el.append(details);}
  el.classList.remove('hidden');
}
function buildFilters() {
  const selected=$('filter').value; const groups=[...new Set(entries().map(e=>e.variant.playerHandType||e.variant.offerType).filter(Boolean))].sort();
  $('filter').replaceChildren(new Option('전체 유형','all'),...groups.map(x=>new Option(x,x))); $('filter').value=groups.includes(selected)?selected:'all';
}
function renderStats() {
  const all=entries(),active=all.filter(e=>!e.deleted),counts=Object.fromEntries(Object.keys(CHANGE_LABELS).map(k=>[k,all.filter(e=>changeStatus(e)===k).length]));
  const workspace=state.workspace;
  $('keys-count').textContent=workspace?new Set(active.map(e=>e.key)).size:'—'; $('variants-count').textContent=workspace?active.length:'—'; $('changed-count').textContent=workspace?counts.added+counts.modified+counts.deleted:'—';
  $('work-status').textContent=workspace?(state.draftDirty?'입력 적용 필요':state.issues.length?'검증 필요':jsonDirty()?'저장 필요':'편집 가능'):'대기 중'; $('change-badge').textContent=workspace?`추가 ${counts.added} · 수정 ${counts.modified} · 삭제 ${counts.deleted}${state.issues.length?` · 오류 ${state.issues.length}`:''}${state.draftDirty?' · 입력 중':''}`:'변경사항 없음'; $('change-badge').classList.toggle('changed',jsonDirty()||state.draftDirty||!!state.issues.length);
  $('review-save-status').textContent=workspace?(reviewDirty()?'검토 상태 저장 필요':'검토 변경 없음'):'검토 데이터 없음';
  $('export').disabled=!workspace; $('review-export').disabled=!workspace; $('add-entry').disabled=!workspace; $('select-visible').disabled=!workspace;
  $('current-type').textContent=workspace?(workspace.type==='offers'?'OFFERS':'BASIC STRATEGY'):'WORKSPACE';
  $('dataset-detail').textContent=workspace?`${workspace.meta.rulesetId||'Ruleset 미지정'} · ${workspace.meta.sheet||'직접 작성'} · 버전 ${workspace.meta.version||'미지정'}`:'파일을 불러와 콘텐츠 검토를 시작하세요.';
}
function visibleEntries() {
  const query=$('search').value.toLocaleLowerCase().trim(),filter=$('filter').value,status=$('status-filter').value,review=$('review-filter').value;
  return entries().filter(e=>(filter==='all'||(e.variant.playerHandType||e.variant.offerType)===filter)&&(status==='all'||changeStatus(e)===status)&&(review==='all'||e.review===review)&&(!query||[e.key,e.variant.answer,e.variant.reason,condition(e.variant)].some(x=>String(x).toLocaleLowerCase().includes(query))));
}
function renderActions() {
  const visible=visibleEntries().filter(e=>!e.deleted); const allChecked=visible.length>0 && visible.every(e=>state.checked.has(e.id));
  $('select-visible').checked=allChecked; $('select-visible').indeterminate=!allChecked && visible.some(e=>state.checked.has(e.id));
  $('delete-selected').disabled=!entries().some(e=>!e.deleted && state.checked.has(e.id)); $('selected-count').textContent=state.checked.size?`${state.checked.size}개 선택`:'';
}
function renderList() {
  const visible=visibleEntries(); $('result-count').textContent=state.workspace?visible.length:''; const list=$('list'); list.replaceChildren();
  if(!visible.length) {const empty=document.createElement('div');empty.className='empty';empty.append(text('span','▤'),text('strong',state.workspace?'표시할 항목이 없습니다':'아직 불러온 콘텐츠가 없습니다'),text('p',state.workspace?'항목을 추가하거나 필터를 변경해 주세요.':'새 작업을 시작하거나 파일을 선택해 주세요.'));list.append(empty);renderActions();return;}
  for(const entry of visible) {
    const row=document.createElement('div');row.className=`list-row${state.selected===entry.id?' active':''}${entry.deleted?' deleted':''}`;
    const checkbox=document.createElement('input');checkbox.type='checkbox';checkbox.className='row-check';checkbox.setAttribute('aria-label',`${title(entry)} 선택`);checkbox.disabled=entry.deleted;checkbox.checked=state.checked.has(entry.id);checkbox.addEventListener('change',()=>{checkbox.checked?state.checked.add(entry.id):state.checked.delete(entry.id);renderActions();});
    const button=document.createElement('button');button.type='button';button.className='list-item';
    const top=document.createElement('div');top.className='item-top';top.append(text('span',title(entry),'item-title'),text('span',entry.variant.actionCode||entry.variant.choice,'item-tag'));
    const badges=document.createElement('div');badges.className='row-badges';const status=changeStatus(entry);badges.append(text('span',CHANGE_LABELS[status],`status-badge change-${status}`),text('span',REVIEW_LABELS[entry.review],`status-badge review-${entry.review}`));
    if(state.issuesById.has(entry.id)) badges.append(text('span','검증 오류','status-badge change-deleted'));
    button.append(top,text('div',condition(entry.variant),'item-meta'),badges);button.addEventListener('click',()=>{if(state.selected===entry.id)return;if(!canDiscardDraft())return;state.selected=entry.id;state.draft=null;state.draftDirty=false;renderList();renderEditor();});row.append(checkbox,button);list.append(row);
  }
  renderActions();
}
function selectField(form,key,label,value,values) {
  const wrap=document.createElement('label');wrap.className='form-field';wrap.append(text('span',label));const select=document.createElement('select');select.name=key;
  if(!values.some(v=>v[0]===String(value ?? ''))) values=[[String(value ?? ''),String(value ?? '')],...values];
  for(const [v,l] of values) select.add(new Option(l,v)); select.value=String(value ?? ''); wrap.append(select);form.append(wrap);
}
function inputField(form,key,label,value,placeholder='') {
  const wrap=document.createElement('label');wrap.className='form-field';wrap.append(text('span',label));const input=document.createElement('input');input.name=key;input.value=value ?? '';input.placeholder=placeholder;wrap.append(input);form.append(wrap);
}
function textareaField(form,key,label,value) {
  const wrap=document.createElement('label');wrap.className=`edit-field ${key}`;wrap.append(document.createTextNode(label),text('span','필수 입력'));const area=document.createElement('textarea');area.name=key;area.value=value ?? '';wrap.append(area);form.append(wrap);
}
function formDefaults(entry) {
  const ws=state.workspace,v=entry?.variant||{};return {rulesetId:entry?.key.split('::')[0]||ws.meta.rulesetId||'',playerHandType:v.playerHandType||'HARD',playerHand:v.playerHand??'',dealerUpcard:v.dealerUpcard||'A',actionCode:v.actionCode||'H',offerType:v.offerType||'INSURANCE',choice:v.choice||'N',decisionWindow:v.when?.decisionWindow||'',playerState:entry?(v.when?.playerState??''):'ANY',priority:v.priority??0,answer:v.answer||'',reason:v.reason||''};
}
function renderEditor() {
  const editor=$('editor');editor.replaceChildren(); const entry=entries().find(e=>e.id===state.selected); const adding=state.selected==='new';
  if(!entry&&!adding) {const empty=document.createElement('div');empty.className='editor-empty';empty.append(text('span','↖'),text('strong','항목을 선택해 주세요'),text('p','항목을 선택하거나 새 항목을 추가하세요.'));editor.append(empty);return;}
  if(entry?.deleted) {
    editor.append(text('div','DELETED ITEM','editor-label'),text('h3',title(entry)),text('p','이 항목은 내보낼 때 제외됩니다.','editor-description'));
    const restore=text('button','삭제 취소','button-small');restore.type='button';restore.addEventListener('click',()=>{try{restoreEntry(state.workspace,entry.id);render();showNotice('삭제를 취소했습니다.');}catch(error){showNotice(error.message,true);}});editor.append(restore);return;
  }
  const defaults=formDefaults(entry);editor.append(text('div',adding?'NEW ITEM':'CONTENT DETAILS','editor-label'),text('h3',adding?'새 항목 추가':title(entry)));
  if(entry) {
    editor.append(text('div',`${entry.key} · ${condition(entry.variant)}`,'editor-description'));
    if(state.issuesById.has(entry.id)) editor.append(text('p',state.issuesById.get(entry.id).join(' '),'validation-message'));
    const review=document.createElement('label');review.className='review-control';review.append(text('span','검토 상태'));const select=document.createElement('select');for(const status of REVIEW_STATUSES)select.add(new Option(REVIEW_LABELS[status],status));select.value=entry.review;
    select.addEventListener('change',()=>{entry.review=select.value;renderStats();renderList();});review.append(select);editor.append(review);
  }
  const form=document.createElement('form');form.className='entry-form';const grid=document.createElement('div');grid.className='form-grid';
  const rulesetContainer=document.createElement('div');rulesetContainer.className='entry-ruleset';grid.append(rulesetContainer);
  inputField(rulesetContainer,'rulesetId','Ruleset ID',defaults.rulesetId);
  const entryRuleset=mountRulesetBuilder(rulesetContainer.querySelector('input[name="rulesetId"]'));
  if(state.workspace.type==='strategy') {
    selectField(grid,'playerHandType','손패 유형',defaults.playerHandType,[['HARD','HARD'],['SOFT','SOFT'],['PAIR','PAIR']]); inputField(grid,'playerHand','손패 값',defaults.playerHand,'예: 16 또는 A');
    selectField(grid,'actionCode','행동 코드',defaults.actionCode,[['H','H · Hit'],['S','S · Stand'],['D','D · Double'],['P','P · Split'],['R','R · Surrender']]);
  } else {
    selectField(grid,'offerType','오퍼 유형',defaults.offerType,[['INSURANCE','INSURANCE'],['EVEN_MONEY','EVEN_MONEY']]);selectField(grid,'choice','선택값',defaults.choice,[['N','N · No'],['Y','Y · Yes']]);
    selectField(grid,'playerState','플레이어 상태',defaults.playerState,[['','조건 없음'],['ANY','ANY'],['BLACKJACK','BLACKJACK']]);
  }
  inputField(grid,'dealerUpcard','딜러 카드',defaults.dealerUpcard,'A 또는 2~10');selectField(grid,'decisionWindow','결정 시점',defaults.decisionWindow,[['','조건 없음'],['initial','initial'],['not_initial','not_initial']]);inputField(grid,'priority','우선순위',defaults.priority);
  form.append(grid);textareaField(form,'answer','Answer',defaults.answer);textareaField(form,'reason','Reason',defaults.reason);
  const actions=document.createElement('div');actions.className='editor-actions';const save=text('button',adding?'항목 추가':'변경 적용','button-small primary');save.type='submit';actions.append(save);
  if(entry){const del=text('button','항목 삭제','button-small danger');del.type='button';del.addEventListener('click',()=>deleteSelected([entry.id]));actions.append(del);}
  form.append(actions,text('p','입력한 내용은 변경 적용 후 작업에 반영됩니다.','edit-help'));
  const markDraft=()=>{state.draftDirty=true;renderStats();};
  form.addEventListener('input',markDraft);form.addEventListener('change',markDraft);
  form.addEventListener('submit',event=>{event.preventDefault();try{const fields=Object.fromEntries(new FormData(form).entries());fields.rulesetId=entryRuleset.getValue();const change=isRulesetChange(state.workspace,fields,entry?.id??null);if(change && !window.confirm(`Ruleset ID를 변경하면 삭제 예정 항목을 포함한 ${entries().length}개 항목과 문서 대표 ID가 함께 변경됩니다. 계속하시겠습니까? 검토 파일은 다시 저장해 주세요.`))return;const saved=saveEntryWithRuleset(state.workspace,fields,entry?.id??null);state.selected=saved.id;state.draftDirty=false;state.draft=null;buildFilters();render();showNotice(change?'문서 전체의 Ruleset ID를 변경했습니다. 검토 파일을 다시 저장해 주세요.':adding?'항목을 추가했습니다.':'항목 변경을 적용했습니다.');}catch(error){showNotice(`저장하지 못했습니다: ${error.message}`,true);}});
  editor.append(form);
}
function render(){
  state.issues=state.workspace?documentIssues(currentDocument(),state.workspace.type):[];
  state.issuesById=new Map();const positions=new Map();
  for(const entry of entries()) if(!entry.deleted){const index=positions.get(entry.key)||0;positions.set(entry.key,index+1);const found=state.issues.filter(issue=>issue.key===entry.key && issue.index===index);if(found.length)state.issuesById.set(entry.id,found.map(issue=>issue.message));}
  renderStats();renderList();renderEditor();renderComparison();
}
$('add-entry').addEventListener('click',()=>{if(!canDiscardDraft())return;state.selected='new';state.draftDirty=false;renderList();renderEditor();});
$('select-visible').addEventListener('change',event=>{for(const e of visibleEntries()) if(!e.deleted) event.target.checked?state.checked.add(e.id):state.checked.delete(e.id);renderList();});
function deleteSelected(ids){
  if(!ids.length)return;if(state.draftDirty&&!canDiscardDraft())return;
  if(!window.confirm(`선택한 ${ids.length}개 항목을 삭제 예정으로 표시할까요? 내보내기 전 복구할 수 있습니다.`))return;
  deleteEntries(state.workspace,ids);for(const id of ids)state.checked.delete(id);state.draftDirty=false;render();showNotice(`${ids.length}개 항목을 삭제 예정으로 표시했습니다.`);
}
$('delete-selected').addEventListener('click',()=>deleteSelected([...state.checked]));
for(const id of ['search','filter','status-filter','review-filter']) $(id).addEventListener(id==='search'?'input':'change',renderList);
function download(data,name){const blob=new Blob([JSON.stringify(data,null,2)+'\n'],{type:'application/json;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
$('export').addEventListener('click',()=>{
  if(state.draftDirty){showNotice('편집 중인 입력값을 먼저 변경 적용하거나 항목을 전환해 버려 주세요.',true);return;}
  try {const output=currentDocument();validateDocument(output,state.workspace.type);const name=state.workspace.type==='offers'?'offers.json':'basic_strategy.json';download(output,name);markDocumentSaved(state.workspace);state.checked.clear();if(!entries().some(e=>e.id===state.selected))state.selected=null;buildFilters();render();showNotice(`${name} 파일을 내려받았습니다. 업무 서버 반영은 기존 배포 절차를 이용하세요.`);}catch(error){showNotice(`내보내지 못했습니다: ${error.message}`,true);}
});
$('review-export').addEventListener('click',()=>{
  if(state.draftDirty){showNotice('편집 중인 입력값을 먼저 적용해 주세요.',true);return;}
  try{download(createReviewFile(state.workspace),state.workspace.type==='offers'?'offers.review.json':'basic_strategy.review.json');state.workspace.reviewBaseline=reviewSnapshot(state.workspace);renderStats();showNotice('검토 상태 파일을 내려받았습니다. 서비스 JSON과 함께 보관하세요.');}catch(error){showNotice(`검토 파일을 내보내지 못했습니다: ${error.message}`,true);}
});
window.addEventListener('beforeunload',event=>{if(unsaved()){event.preventDefault();event.returnValue='';}});
$('starter-version').value=$('version').value=new Date().toISOString().slice(0,10);render();
