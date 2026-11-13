import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createWorkspace,saveEntry,deleteEntries,restoreEntry,buildDocument,changeStatus,markDocumentSaved,createReviewFile,applyReviewFile,reviewSnapshot} from '../web/workspace.mjs';
import {validateDocument} from '../web/conversion.mjs';
const examples={strategy:JSON.parse(readFileSync('web/templates/basic_strategy.json','utf8')),offers:JSON.parse(readFileSync('web/templates/offers.json','utf8'))};
const strategyForm = {rulesetId:'RS',playerHandType:'HARD',playerHand:'16',dealerUpcard:'10',actionCode:'H',decisionWindow:'initial',priority:'0',answer:'Hit',reason:'Reason'};
const offerForm = {rulesetId:'RS',offerType:'INSURANCE',dealerUpcard:'A',choice:'N',decisionWindow:'initial',playerState:'ANY',priority:'0',answer:'No',reason:'Reason'};
const blank = () => ({version:'2026-11-13',rulesetId:'RS',sheet:'',count:0,items:{}});

test('bundled examples round-trip and retain all service fields',()=>{
 for(const [type,doc] of Object.entries(examples)) {const w=createWorkspace(doc,type);assert.deepEqual(buildDocument(w),doc);validateDocument(buildDocument(w),type);}
});

test('add strategy variants, reject duplicate identities, move a key and preserve unrelated properties',()=>{
 const w=createWorkspace(blank(),'strategy'); const a=saveEntry(w,strategyForm);const b=saveEntry(w,{...strategyForm,decisionWindow:'not_initial',answer:'Stand'});
 assert.equal(changeStatus(a),'added'); assert.equal(buildDocument(w).count,1); assert.equal(Object.values(buildDocument(w).items)[0].variants.length,2);
 assert.throws(()=>saveEntry(w,strategyForm),/이미 있습니다/);
 a.variant.extra={custom:'preserve'};saveEntry(w,{...strategyForm,playerHand:'15'},a.id);
 assert.equal(a.key,'RS::HARD:15::D:10');assert.deepEqual(a.variant.extra,{custom:'preserve'});assert.equal(buildDocument(w).count,2);
 assert.equal(b.key,'RS::HARD:16::D:10'); assert.equal(b.variant.answer,'Stand');
 assert.throws(()=>saveEntry(w,{...strategyForm,priority:'abc'}),/정수/);
 assert.throws(()=>saveEntry(w,{...strategyForm,answer:'  '}),/필수/);
 markDocumentSaved(w); assert.equal(changeStatus(a),'unchanged');saveEntry(w,{...strategyForm,playerHand:'15',answer:'Changed'},a.id);assert.equal(changeStatus(a),'modified');
});

test('deleting and restoring entries is independent of ordering and exports remove empty keys',()=>{
 const w=createWorkspace(blank(),'strategy');const a=saveEntry(w,strategyForm);const b=saveEntry(w,{...strategyForm,decisionWindow:'not_initial'});const c=saveEntry(w,{...strategyForm,playerHand:'15'});markDocumentSaved(w);
 a.review='complete'; b.review='in_progress';deleteEntries(w,[a.id,c.id]);assert.equal(changeStatus(a),'deleted');assert.equal(buildDocument(w).count,1);assert.equal(Object.values(buildDocument(w).items)[0].variants.length,1);assert.equal(b.review,'in_progress');
 restoreEntry(w,a.id);assert.equal(changeStatus(a),'unchanged');assert.equal(a.review,'complete');deleteEntries(w,[b.id]);markDocumentSaved(w);assert.equal(w.entries.length,1);assert.equal(w.entries[0].id,a.id);assert.equal(buildDocument(w).count,1);
});

test('offers preserve choice, optional condition and unknown fields while editing',()=>{
 const w=createWorkspace(blank(),'offers'); const a=saveEntry(w,offerForm);assert.equal(a.key,'RS::OFFER:INSURANCE::D:A');assert.equal(a.variant.when.playerState,'ANY');assert.throws(()=>saveEntry(w,offerForm),/이미 있습니다/);
 saveEntry(w,{...offerForm,choice:'Y'});assert.equal(buildDocument(w).count,1);assert.equal(w.entries.length,2);
 const source={...blank(),items:{'RS::OFFER:INSURANCE::D:A':{extra:5,variants:[{offerType:'INSURANCE',dealerUpcard:'A',choice:'N',when:{custom:'kept'},answer:'A',reason:'R',unrelated:7}]}}};
 const imported=createWorkspace(source,'offers');const first=imported.entries[0];saveEntry(imported,{...offerForm,decisionWindow:'',playerState:'',answer:'Edited'},first.id);
 const doc=buildDocument(imported);const v=Object.values(doc.items)[0].variants[0];assert.deepEqual(v.when,{custom:'kept'});assert.equal(v.unrelated,7);assert.equal(Object.hasOwn(v,'priority'),false);assert.equal(Object.values(doc.items)[0].extra,5);
});

test('review file round-trips separately from service JSON and reports unmatched identities',()=>{
 const w=createWorkspace(blank(),'strategy');const a=saveEntry(w,strategyForm);const b=saveEntry(w,{...strategyForm,playerHand:'15'});a.review='complete';b.review='in_progress';
 const service=buildDocument(w),file=createReviewFile(w);assert.equal(JSON.stringify(service).includes('in_progress'),false);assert.notEqual(reviewSnapshot(w),w.reviewBaseline);
 const restored=createWorkspace(service,'strategy');assert.deepEqual(applyReviewFile(restored,file),{applied:2,unmatched:0,ambiguous:0});assert.deepEqual(restored.entries.map(e=>e.review),['complete','in_progress']);
 const mismatch=createWorkspace({...service,items:{[a.key]:service.items[a.key]}},'strategy');assert.deepEqual(applyReviewFile(mismatch,file),{applied:1,unmatched:1,ambiguous:0});
 assert.throws(()=>applyReviewFile(restored,{...file,type:'offers'}),/유형/);
});

test('ambiguous existing variants are not assigned review statuses by position',()=>{
 const w=createWorkspace(blank(),'offers');const a=saveEntry(w,offerForm);const v=structuredClone(a.variant);w.entries.push({id:100,key:a.key,variant:v,deleted:false,baseline:{key:a.key,variant:structuredClone(v)},review:'before'});
 const file=createReviewFile(w);file.entries[0].status='complete';assert.deepEqual(applyReviewFile(w,file),{applied:0,unmatched:0,ambiguous:2});assert.equal(a.review,'before');
 markDocumentSaved(w);deleteEntries(w,[100]);restoreEntry(w,100);assert.equal(w.entries.find(e=>e.id===100).deleted,false);
});
