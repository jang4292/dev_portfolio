import test from 'node:test';
import assert from 'node:assert/strict';
import {parseRuleset,formatRuleset} from '../web/ruleset.mjs';
import {createWorkspace,saveEntry,saveEntryWithRuleset,deleteEntries,restoreEntry,buildDocument,createReviewFile,reviewSnapshot,markDocumentSaved,hasDocumentChanges} from '../web/workspace.mjs';
import {convertStrategy,convertOffers} from '../web/conversion.mjs';
const form={rulesetId:'BJ_6D_S17_DAS_NS',playerHandType:'HARD',playerHand:'16',dealerUpcard:'10',actionCode:'H',decisionWindow:'',priority:'0',answer:'A',reason:'R'};
const doc=()=>({version:'v',rulesetId:form.rulesetId,sheet:'',count:0,items:{}});
const newId='BJ_8D_H17_NDAS_LS';

test('structured rulesets round trip while custom IDs stay unparsed',()=>{
 const parts={decks:'8',dealer:'H17',double:'NDAS',surrender:'LS'};
 assert.equal(formatRuleset(parts),newId);assert.deepEqual(parseRuleset(newId),parts);
 for(const x of ['CUSTOM','BJ_0D_S17_DAS_NS','BJ_6D_X17_DAS_NS','BJ_06D_S17_DAS_NS','bj_6d_s17_das_ns'])assert.equal(parseRuleset(x),null);
 for(const decks of ['0','-1','1.5','',String(Number.MAX_SAFE_INTEGER+1)])assert.throws(()=>formatRuleset({...parts,decks}),/덱 수/);
});

test('ID change rekeys every item including deleted and preserves meta, extras and review',()=>{
 const w=createWorkspace(doc(),'strategy');const a=saveEntry(w,form),b=saveEntry(w,{...form,playerHand:'15'}),c=saveEntry(w,{...form,playerHand:'14'});w.itemExtras.set(a.key,{custom:'keep'});a.review='complete';b.review='in_progress';deleteEntries(w,[c.id]);markDocumentSaved(w);
 // Delete after baseline so that the pending deletion participates in the change.
 const deleted=saveEntry(w,{...form,playerHand:'14'});deleteEntries(w,[deleted.id]);
 const oldReview=createReviewFile(w);w.reviewBaseline=reviewSnapshot(w);
 const updated=saveEntryWithRuleset(w,{...form,rulesetId:newId,answer:'Changed'},a.id);
 assert.equal(updated.review,'complete');assert.equal(w.meta.rulesetId,newId);assert.ok(w.entries.every(e=>e.key.startsWith(`${newId}::`)));assert.equal(w.entries.find(e=>e.id===b.id).review,'in_progress');assert.equal(w.entries.find(e=>e.id===deleted.id).deleted,true);
 assert.equal(w.itemExtras.get(updated.key).custom,'keep');assert.equal(updated.variant.answer,'Changed');assert.equal(hasDocumentChanges(w),true);assert.notEqual(reviewSnapshot(w),w.reviewBaseline);
 assert.notDeepEqual(createReviewFile(w),oldReview);restoreEntry(w,deleted.id);assert.ok(w.entries.find(e=>e.id===deleted.id).key.startsWith(newId));
 const output=buildDocument(w);assert.equal(output.rulesetId,newId);assert.ok(Object.keys(output.items).every(k=>k.startsWith(`${newId}::`)));
 markDocumentSaved(w);assert.equal(hasDocumentChanges(w),false);
});

test('different rulesets that would merge duplicate variants are rejected atomically',()=>{
 const w=createWorkspace(doc(),'strategy');const a=saveEntry(w,form);saveEntry(w,{...form,rulesetId:'OTHER'});markDocumentSaved(w);
 const before=structuredClone(w);assert.throws(()=>saveEntryWithRuleset(w,{...form,rulesetId:newId},a.id),/중복 조건/);assert.deepEqual(w,before);
});

test('conflicting item extra fields reject whole change atomically even when variants differ',()=>{
 const w=createWorkspace(doc(),'strategy');const a=saveEntry(w,form);const b=saveEntry(w,{...form,rulesetId:'OTHER',decisionWindow:'initial'});w.itemExtras.set(a.key,{custom:'one'});w.itemExtras.set(b.key,{custom:'two'});const before=structuredClone(w);
 assert.throws(()=>saveEntryWithRuleset(w,{...form,rulesetId:newId},a.id),/추가 필드/);assert.deepEqual(w,before);
});

test('editing text without changing a mixed document ID does not rewrite other keys',()=>{
 const w=createWorkspace(doc(),'strategy');const a=saveEntry(w,form);const b=saveEntry(w,{...form,rulesetId:'OTHER',playerHand:'15'});saveEntryWithRuleset(w,{...form,answer:'edited'},a.id);
 assert.equal(w.meta.rulesetId,form.rulesetId);assert.ok(w.entries.find(e=>e.id===b.id).key.startsWith('OTHER::'));
});

test('row ruleset ID still overrides the Excel fallback',()=>{
 const cfg={sheet:'sheet',rulesetId:'DEFAULT',version:'v'};
 const strategy=convertStrategy([['rulesetId','playerHandType','playerHand','dealerUpcard','actionCode','answer','reason'],['ROW','HARD','16','10','H','A','R']],cfg);
 const offers=convertOffers([['rulesetId','offerType','choice','answer','reason'],['ROW','INSURANCE','N','A','R']],cfg);
 assert.ok(Object.keys(strategy.items)[0].startsWith('ROW::'));assert.ok(Object.keys(offers.items)[0].startsWith('ROW::'));
});
