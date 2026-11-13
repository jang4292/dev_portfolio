export const DEFAULT_RULESET_ID = 'BJ_6D_S17_DAS_NS';
const DEFAULT_PARTS = {decks:'6',dealer:'S17',double:'DAS',surrender:'NS'};
export function parseRuleset(value) {
  const m = /^BJ_([1-9]\d*)D_(S17|H17)_(DAS|NDAS)_(NS|LS)$/.exec(String(value ?? '').trim());
  if (!m || !Number.isSafeInteger(Number(m[1]))) return null;
  return {decks:m[1],dealer:m[2],double:m[3],surrender:m[4]};
}
export function formatRuleset(parts) {
  const decks=String(parts.decks ?? '').trim();
  if (!/^[1-9]\d*$/.test(decks) || !Number.isSafeInteger(Number(decks))) throw new Error('덱 수는 1 이상의 정수여야 합니다.');
  if (!['S17','H17'].includes(parts.dealer) || !['DAS','NDAS'].includes(parts.double) || !['NS','LS'].includes(parts.surrender)) throw new Error('Ruleset 구성 값을 확인해 주세요.');
  return `BJ_${decks}D_${parts.dealer}_${parts.double}_${parts.surrender}`;
}
export function mountRulesetBuilder(input) {
  const container=document.createElement('div'); container.className='ruleset-builder';
  const toggle=document.createElement('button');toggle.type='button';toggle.className='ruleset-toggle';toggle.textContent='규칙으로 구성';toggle.setAttribute('aria-expanded','false');
  const panel=document.createElement('div');panel.className='ruleset-parts hidden';
  const help=document.createElement('p');help.className='ruleset-help';help.textContent='BJ · 덱 수 · 딜러 소프트 17 · 스플릿 후 더블 · 서렌더';
  const controls={};
  const field=(key,label,options) => {
    const wrapper=document.createElement('label');wrapper.className='ruleset-field';const caption=document.createElement('span');caption.textContent=label;wrapper.append(caption);
    let el;if(options){el=document.createElement('select');for(const [value,title] of options)el.add(new Option(title,value));}else{el=document.createElement('input');el.type='number';el.min='1';el.step='1';}
    el.dataset.rulesetPart=key;el.setAttribute('aria-label',label);controls[key]=el;wrapper.append(el);panel.append(wrapper);
  };
  field('decks','덱 수');field('dealer','딜러 소프트 17',[['S17','S17 · 스탠드'],['H17','H17 · 히트']]);field('double','스플릿 후 더블',[['DAS','DAS · 허용'],['NDAS','NDAS · 불가']]);field('surrender','서렌더',[['NS','NS · 불가'],['LS','LS · 레이트']]);
  const error=document.createElement('p');error.className='ruleset-error hidden';error.setAttribute('role','alert');panel.append(error);
  container.append(toggle,help,panel); input.parentElement.insertAdjacentElement('afterend',container);
  let partError='', updating=false;
  const applyParts=parts=>{for(const [key,control] of Object.entries(controls))control.value=parts[key];};
  const changed=()=>{
    try{const value=formatRuleset(Object.fromEntries(Object.entries(controls).map(([k,v])=>[k,v.value])));partError='';error.classList.add('hidden');input.setCustomValidity('');input.value=value;}
    catch(err){partError=err.message;error.textContent=partError;error.classList.remove('hidden');input.setCustomValidity(partError);}
    updating=true;input.dispatchEvent(new input.ownerDocument.defaultView.Event('input',{bubbles:true}));updating=false;
  };
  for(const control of Object.values(controls)){control.addEventListener('input',changed);control.addEventListener('change',changed);}
  input.addEventListener('input',()=>{if(updating)return;const parts=parseRuleset(input.value);if(parts)applyParts(parts);else{panel.classList.add('hidden');toggle.setAttribute('aria-expanded','false');}if(partError){partError='';error.classList.add('hidden');input.setCustomValidity('');}});
  toggle.addEventListener('click',()=>{
    if(!panel.classList.contains('hidden')){panel.classList.add('hidden');toggle.setAttribute('aria-expanded','false');return;}
    const current=input.value.trim();let parts=parseRuleset(current);
    if(current && !parts && !window.confirm('현재 Ruleset ID는 구성 폼으로 해석할 수 없습니다. 기본 규칙으로 바꾸시겠습니까?'))return;
    parts ||= DEFAULT_PARTS;applyParts(parts);panel.classList.remove('hidden');toggle.setAttribute('aria-expanded','true');
    if(!current || !parseRuleset(current))changed();
  });
  return {getValue(){if(partError)throw new Error(partError);return input.value.trim();},setValue(value){input.value=value;input.setCustomValidity('');partError='';error.classList.add('hidden');const parts=parseRuleset(value);if(parts)applyParts(parts);}};
}
