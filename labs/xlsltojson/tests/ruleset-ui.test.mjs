import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {JSDOM} from 'jsdom';

test('ruleset controls synchronize in all three locations and whole-document edits require confirmation',async()=>{
 const dom=new JSDOM(readFileSync('web/index.html','utf8'),{url:'http://localhost:4173/'}),{window}=dom,{document}=window;
 Object.assign(globalThis,{window,document,Option:window.Option,FormData:window.FormData});
 let allow=true,confirmations=[];window.confirm=message=>{confirmations.push(message);return allow;};let blob;
 URL.createObjectURL=x=>{blob=x;return 'blob:test';};URL.revokeObjectURL=()=>{};window.HTMLAnchorElement.prototype.click=function(){};
 const $=id=>document.getElementById(id),fire=(element,name='input')=>element.dispatchEvent(new window.Event(name,{bubbles:true}));
 await import('../web/app.mjs');
 const starter=$('starter-ruleset'),starterBuilder=starter.parentElement.nextElementSibling;
 $('starter').value='empty-strategy';fire($('starter'),'change');starter.value='CUSTOM_ID';fire(starter);
 allow=false;starterBuilder.querySelector('button').click();assert.equal(starter.value,'CUSTOM_ID');assert.equal(starterBuilder.querySelector('button').getAttribute('aria-expanded'),'false');
 allow=true;starterBuilder.querySelector('button').click();assert.equal(starter.value,'BJ_6D_S17_DAS_NS');
 const part=(builder,name)=>builder.querySelector(`[data-ruleset-part="${name}"]`);
 starter.value='BJ_8D_H17_NDAS_LS';fire(starter);assert.equal(part(starterBuilder,'decks').value,'8');assert.equal(part(starterBuilder,'double').value,'NDAS');starter.value='BJ_6D_S17_DAS_NS';fire(starter);
 part(starterBuilder,'decks').value='0';fire(part(starterBuilder,'decks'));$('create').click();assert.match($('notice').textContent,/덱 수/);
 part(starterBuilder,'decks').value='4';fire(part(starterBuilder,'decks'));part(starterBuilder,'dealer').value='H17';fire(part(starterBuilder,'dealer'),'change');
 assert.equal(starter.value,'BJ_4D_H17_DAS_NS');$('starter-version').value='v';$('create').click();assert.match($('dataset-detail').textContent,/BJ_4D_H17_DAS_NS/);
 const excel=$('ruleset'),excelBuilder=excel.parentElement.nextElementSibling;excelBuilder.querySelector('button').click();part(excelBuilder,'double').value='NDAS';fire(part(excelBuilder,'double'),'change');assert.equal(excel.value,'BJ_6D_S17_NDAS_NS');
 $('add-entry').click();let form=document.querySelector('.entry-form');assert.equal(form.elements.rulesetId.value,'BJ_4D_H17_DAS_NS');form.elements.playerHand.value='16';form.elements.answer.value='A';form.elements.reason.value='R';fire(form,'submit');
 $('add-entry').click();form=document.querySelector('.entry-form');form.elements.playerHand.value='15';form.elements.answer.value='B';form.elements.reason.value='R';fire(form,'submit');
 document.querySelector('.list-item').click();form=document.querySelector('.entry-form');const builder=form.elements.rulesetId.parentElement.nextElementSibling;builder.querySelector('button').click();part(builder,'surrender').value='LS';fire(part(builder,'surrender'),'change');
 allow=false;fire(form,'submit');assert.match($('dataset-detail').textContent,/BJ_4D_H17_DAS_NS/);assert.match(confirmations.at(-1),/2개 항목/);assert.equal(form.elements.rulesetId.value,'BJ_4D_H17_DAS_LS');
 allow=true;fire(form,'submit');assert.match($('dataset-detail').textContent,/BJ_4D_H17_DAS_LS/);$('export').click();const output=JSON.parse(await blob.text());assert.equal(output.rulesetId,'BJ_4D_H17_DAS_LS');assert.equal(Object.keys(output.items).length,2);assert.ok(Object.keys(output.items).every(k=>k.startsWith('BJ_4D_H17_DAS_LS::')));
 dom.window.close();
});
