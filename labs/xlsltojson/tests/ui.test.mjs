import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {JSDOM} from 'jsdom';

test('new workspace supports editing, review, delete, restore and separate downloads',async()=>{
  const dom=new JSDOM(readFileSync('web/index.html','utf8'),{url:'http://localhost:4173/'});const {window}=dom;const {document}=window;
  const assigned={window,document,Option:window.Option,FormData:window.FormData};
  Object.assign(globalThis,assigned);
  window.confirm=()=>true;let blob;const names=[];
  URL.createObjectURL=value=>{blob=value;return 'blob:testing';}; URL.revokeObjectURL=()=>{};
  window.HTMLAnchorElement.prototype.click=function(){names.push(this.download);};
  globalThis.fetch=async url=>({ok:true,json:async()=>JSON.parse(readFileSync(`web/${url}`,'utf8'))});
  const $=id=>document.getElementById(id),click=id=>$(id).click();
  await import('../web/app.mjs');
  for (const [type, input] of [['strategy',''],['offers','   ']]) {
    $('starter').value=`empty-${type}`;$('starter').dispatchEvent(new window.Event('change'));$('starter-ruleset').value=input;$('starter-version').value='2026-11-13';click('create');
    assert.equal($('starter-ruleset').value,'BJ_6D_S17_DAS_NS');assert.match($('dataset-detail').textContent,/BJ_6D_S17_DAS_NS/);
    click('add-entry');const draft=document.querySelector('.entry-form');assert.equal(draft.elements.rulesetId.value,'BJ_6D_S17_DAS_NS');
    if(type==='strategy')draft.elements.playerHand.value='16';draft.elements.answer.value='Answer';draft.elements.reason.value='Reason';draft.dispatchEvent(new window.Event('submit',{bubbles:true,cancelable:true}));click('export');
    const generated=JSON.parse(await blob.text());assert.equal(generated.rulesetId,'BJ_6D_S17_DAS_NS');assert.ok(Object.keys(generated.items)[0].startsWith('BJ_6D_S17_DAS_NS::'));
  }
  $('starter-ruleset').value='invalid::id';click('create');assert.match($('notice').textContent,/구분자/);names.length=0;
  $('starter').value='empty-strategy';$('starter').dispatchEvent(new window.Event('change'));$('starter-ruleset').value='RS';$('starter-version').value='2026-11-13';click('create');
  assert.equal($('keys-count').textContent,'0');click('add-entry');
  const form=document.querySelector('.entry-form');form.elements.playerHand.value='16';form.elements.dealerUpcard.value='10';form.elements.answer.value='Hit';form.elements.reason.value='Reason';form.elements.answer.dispatchEvent(new window.Event('input',{bubbles:true}));form.dispatchEvent(new window.Event('submit',{bubbles:true,cancelable:true}));
  assert.equal($('keys-count').textContent,'1');assert.match($('change-badge').textContent,/추가 1/);assert.match($('list').textContent,/추가됨/);
  const review=document.querySelector('.review-control select');review.value='complete';review.dispatchEvent(new window.Event('change',{bubbles:true}));assert.match($('list').textContent,/검토 완료/);
  document.querySelector('.row-check').click();click('delete-selected');assert.match($('list').textContent,/삭제 예정/);document.querySelector('.list-item').click();assert.match($('editor').textContent,/삭제 취소/);[...document.querySelectorAll('#editor button')].find(b=>b.textContent==='삭제 취소').click();
  assert.match($('list').textContent,/추가됨/);assert.match($('list').textContent,/검토 완료/);
  const edit=document.querySelector('.entry-form');edit.elements.answer.value='Draft';edit.elements.answer.dispatchEvent(new window.Event('input',{bubbles:true}));document.querySelector('.list-item').click();assert.equal(document.querySelector('.entry-form').elements.answer.value,'Draft');assert.match($('work-status').textContent,/입력 적용 필요/);edit.elements.answer.value='Hit';edit.dispatchEvent(new window.Event('submit',{bubbles:true,cancelable:true}));
  click('export');const service=JSON.parse(await blob.text());assert.equal(service.count,1);assert.equal(service.rulesetId,'RS');assert.ok(Object.keys(service.items)[0].startsWith('RS::'));assert.equal(Object.values(service.items)[0].variants[0].answer,'Hit');assert.equal(JSON.stringify(service).includes('complete'),false);assert.match($('change-badge').textContent,/추가 0/);assert.match($('review-save-status').textContent,/저장 필요/);
  click('review-export');const reviewFile=JSON.parse(await blob.text());assert.equal(reviewFile.entries[0].status,'complete');assert.deepEqual(names,['basic_strategy.json','basic_strategy.review.json']);assert.match($('review-save-status').textContent,/변경 없음/);
  $('starter').value='example-offers';$('starter').dispatchEvent(new window.Event('change'));click('create');await new Promise(resolve=>setTimeout(resolve,0));assert.equal($('keys-count').textContent,'2');
  const damaged={rulesetId:'RS',version:'v',sheet:'',items:{'RS::HARD:16::D:10':{variants:[{playerHandType:'HARD',actionCode:'H',answer:'',reason:'Reason',extra:'preserved'}]}}};
  Object.defineProperty($('file'),'files',{configurable:true,value:[{name:'damaged.json',text:async()=>JSON.stringify(damaged)}]});$('file').dispatchEvent(new window.Event('change'));await new Promise(resolve=>setTimeout(resolve,0));click('import');await new Promise(resolve=>setTimeout(resolve,0));
  assert.match($('notice').textContent,/검증 오류/);assert.match($('list').textContent,/검증 오류/);document.querySelector('.list-item').click();const repair=document.querySelector('.entry-form');repair.elements.playerHand.value='16';repair.elements.dealerUpcard.value='10';repair.elements.answer.value='Fixed';repair.dispatchEvent(new window.Event('submit',{bubbles:true,cancelable:true}));click('export');const fixed=JSON.parse(await blob.text());assert.equal(Object.values(fixed.items)[0].variants[0].extra,'preserved');assert.equal(Object.values(fixed.items)[0].variants[0].answer,'Fixed');
  dom.window.close();
});
