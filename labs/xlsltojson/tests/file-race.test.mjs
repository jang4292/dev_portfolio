import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {JSDOM} from 'jsdom';

test('slow file selections and imports cannot replace a newer selection or active edits',async()=>{
 const dom=new JSDOM(readFileSync('web/index.html','utf8'),{url:'http://localhost:4173/'}),{window}=dom,{document}=window;
 Object.assign(globalThis,{window,document,Option:window.Option,FormData:window.FormData});window.confirm=()=>true;
 const $=id=>document.getElementById(id),tick=()=>new Promise(resolve=>setTimeout(resolve,0));
 await import('../web/app.mjs');
 let releaseFirst;const first={name:'first.json',text:()=>new Promise(resolve=>{releaseFirst=resolve;})};
 const doc={version:'v',rulesetId:'RS',sheet:'',items:{'RS::HARD:16::D:10':{variants:[{when:{},playerHandType:'HARD',playerHand:16,dealerUpcard:'10',actionCode:'H',answer:'A',reason:'R'}]}}};
 let calls=0,releaseImport;const second={name:'second.json',text:()=>++calls===1?Promise.resolve(JSON.stringify(doc)):new Promise(resolve=>{releaseImport=resolve;})};
 const choose=file=>{Object.defineProperty($('file'),'files',{configurable:true,value:[file]});$('file').dispatchEvent(new window.Event('change'));};
 choose(first);choose(second);await tick();releaseFirst(JSON.stringify(doc));await tick();assert.equal($('file-name').textContent,'second.json');
 $('starter').value='empty-strategy';$('starter').dispatchEvent(new window.Event('change'));$('starter-version').value='v';$('create').click();$('add-entry').click();
 $('import').click();const form=document.querySelector('.entry-form');form.elements.answer.value='unsaved edit';form.elements.answer.dispatchEvent(new window.Event('input',{bubbles:true}));
 releaseImport(JSON.stringify(doc));await tick();assert.match($('notice').textContent,/작업이 변경/);assert.equal(document.querySelector('.entry-form').elements.answer.value,'unsaved edit');assert.equal($('keys-count').textContent,'0');
 dom.window.close();
});
