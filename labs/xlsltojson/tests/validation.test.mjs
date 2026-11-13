import test from 'node:test';
import assert from 'node:assert/strict';
import {validateDocument,validateEditableDocument,documentIssues,compareDocuments} from '../web/conversion.mjs';
const key='RS::HARD:16::D:10';
const variant={when:{},priority:0,playerHandType:'HARD',playerHand:16,dealerUpcard:'10',actionCode:'H',answer:'A',reason:'R',extra:{keep:true}};
const doc=v=>({rulesetId:'RS',items:{[key]:{variants:[v]}}});

test('editable imports identify missing or inconsistent fields and block invalid exports',()=>{
 const invalid=doc({...variant,playerHand:undefined,dealerUpcard:undefined});
 assert.equal(validateEditableDocument(invalid,'strategy'),invalid);assert.ok(documentIssues(invalid,'strategy').some(x=>x.message.includes('playerHand')));assert.throws(()=>validateDocument(invalid,'strategy'),/dealerUpcard/);
 assert.throws(()=>validateDocument({items:{bad:{variants:[variant]}}},'strategy'),/구분자/);
 assert.throws(()=>validateDocument({items:{'RS::HARD:15::D:10':{variants:[variant]}}},'strategy'),/일치하지/);
 assert.throws(()=>validateDocument(doc({...variant,actionCode:'X'}),'strategy'),/actionCode/);
 assert.throws(()=>validateDocument(doc({...variant,when:{decisionWindow:'later'}}),'strategy'),/decisionWindow/);
 assert.deepEqual(validateDocument(doc(variant),'strategy').items[key].variants[0].extra,{keep:true});
});

test('duplicate conditions are flagged and comparison uses unambiguous condition identities',()=>{
 assert.throws(()=>validateDocument({items:{[key]:{variants:[variant,{...variant}]}}},'strategy'),/중복 조건/);
 const a={items:{[key]:{variants:[{when:{a:'x&b=y'},choice:'N'}]}}};
 const b={items:{[key]:{variants:[{when:{a:'x',b:'y'},choice:'N'}]}}};
 const difference=compareDocuments(a,b);assert.equal(difference.addedVariants.length,1);assert.equal(difference.missingVariants.length,1);
});

test('malformed structures are rejected before reaching the editor',()=>{
 assert.throws(()=>validateEditableDocument({items:{bad:{variants:[null]}}},'strategy'),/객체/);
 assert.throws(()=>validateEditableDocument({items:{bad:{variants:[{offerType:{}}]}}},'offers'),/단일 값/);
 assert.throws(()=>validateEditableDocument({items:{bad:{variants:[{when:[]}]}}},'strategy'),/객체/);
});
