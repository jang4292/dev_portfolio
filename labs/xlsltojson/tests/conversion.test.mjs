import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync, writeFileSync, existsSync, mkdtempSync, rmSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import os from 'node:os';
import path from 'node:path';
import xlsx from 'xlsx';
import {convertStrategy, convertOffers, validateDocument, compareDocuments} from '../web/conversion.mjs';
const sample = path.resolve('input/data.xlsx');
const output = path.resolve('output/basic_strategy.json');
const config = {sheet:'Q&A', rulesetId:'BJ_6D_S17_DAS_NS', version:'2026-09-12'};
const aoa = sheet => xlsx.utils.sheet_to_json(sheet,{header:1,defval:'',raw:false,range:0,blankrows:true});

test('strategy conversion matches the existing CLI on the reference workbook', {skip:!existsSync(sample)}, () => {
  const wb=xlsx.read(readFileSync(sample),{type:'buffer'}); const generated=convertStrategy(aoa(wb.Sheets['Q&A']),config);
  const dir=mkdtempSync(path.join(os.tmpdir(),'strategy-test-')); const file=path.join(dir,'output.json');
  try {
    const result=spawnSync(process.execPath,['scripts/xlsx-to-json2.mjs',sample,'--rulesetId=BJ_6D_S17_DAS_NS','--version=2026-09-12',`--out=${file}`],{encoding:'utf8'});
    assert.equal(result.status,0,result.stderr);
    assert.deepEqual(generated,JSON.parse(readFileSync(file,'utf8')));
    assert.equal(generated.count,360);
  } finally {rmSync(dir,{recursive:true,force:true});}
});

test('the reference workbook offers read Action when choice is blank', {skip:!existsSync(sample)}, () => {
  const wb=xlsx.read(readFileSync(sample),{type:'buffer'}); const generated=convertOffers(aoa(wb.Sheets.offers),{...config,sheet:'offers'});
  assert.equal(generated.count,2);
  assert.deepEqual(Object.values(generated.items).map(item=>item.variants[0].choice),['N','N']);
  assert.deepEqual(Object.values(generated.items).map(item=>item.variants[0].when.playerState),['ANY','BLACKJACK']);
});

test('row offers follow the existing CLI including initial condition', {skip:!existsSync(sample)}, () => {
  const wb=xlsx.read(readFileSync(sample),{type:'buffer'}); const rows=xlsx.utils.sheet_to_json(wb.Sheets.offers,{header:1,defval:'',raw:false,range:1,blankrows:true});
  const generated=convertOffers(rows,{...config,sheet:'offers',range:1,format:'row'});
  const dir=mkdtempSync(path.join(os.tmpdir(),'offers-test-')); const file=path.join(dir,'output.json');
  try {
    const result=spawnSync(process.execPath,['scripts/xlsx-to-offers.mjs',sample,'--sheet=offers','--range=1','--format=row','--rulesetId=BJ_6D_S17_DAS_NS','--version=2026-09-12',`--out=${file}`],{encoding:'utf8'});
    assert.equal(result.status,0,result.stderr); assert.deepEqual(generated,JSON.parse(readFileSync(file,'utf8')));
  } finally {rmSync(dir,{recursive:true,force:true});}
});

test('reports the existing strategy keys missing from the reference workbook', {skip:!existsSync(sample) || !existsSync(output)}, () => {
  const wb=xlsx.read(readFileSync(sample),{type:'buffer'}); const generated=convertStrategy(aoa(wb.Sheets['Q&A']),config);
  const previous=validateDocument(JSON.parse(readFileSync(output,'utf8')),'strategy'); const diff=compareDocuments(generated,previous);
  assert.equal(diff.missingKeys.length,20); assert.equal(diff.addedKeys.length,0);
});

test('strategy preserves distinct conditions, priority replacement and rejects duplicate conditions', () => {
  const header=['PlayerHandType','PlayerHand','DealerUpcard','decisionWindow','Action','Answer','Reason','priority'];
  const base=['Hard','16','10','initial','Hit','Answer','Reason','0'];
  const other=['Hard','16','10','not_initial','Stand','Answer 2','Reason','0'];
  const result=convertStrategy([header,base,other],config); assert.equal(result.count,1); assert.equal(Object.values(result.items)[0].variants.length,2);
  assert.throws(()=>convertStrategy([header,base,base],config),/중복/);
  const updated=[...base]; updated[5]='New'; updated[7]='1';
  assert.equal(Object.values(convertStrategy([header,base,updated],config).items)[0].variants[0].answer,'New');
});

test('validation rejects missing text and comparisons retain repeated variants', () => {
  const v={when:{},playerHandType:'HARD',playerHand:16,dealerUpcard:'10',actionCode:'H',answer:'A',reason:'R'};
  const key='RS::HARD:16::D:10';
  const doc={items:{[key]:{variants:[v]}}}; validateDocument(doc,'strategy');
  assert.throws(()=>validateDocument({items:{[key]:{variants:[{...v,reason:' '}]}}},'strategy'),/reason/);
  assert.equal(compareDocuments({items:{[key]:{variants:[v,v]}}},doc).addedVariants.length,1);
});

test('existing JSON documents retain all fields through a text-only edit', {skip:!existsSync(output) || !existsSync('output/offers.json')}, () => {
  for (const [file,type] of [[output,'strategy'],['output/offers.json','offers']]) {
    const original=JSON.parse(readFileSync(file,'utf8'));
    const edited=structuredClone(validateDocument(original,type));
    const first=Object.values(edited.items)[0].variants[0];
    first.answer += '\n수정된 문구';
    const exported=JSON.parse(JSON.stringify(edited));
    const expected=structuredClone(original); Object.values(expected.items)[0].variants[0].answer += '\n수정된 문구';
    assert.deepEqual(exported,expected);
  }
});

test('CLI respects the named strategy sheet and preserves actual row numbers after blanks', () => {
  const workbook=xlsx.utils.book_new();
  const header=['PlayerHandType','PlayerHand','DealerUpcard','Action','Answer','Reason'];
  xlsx.utils.book_append_sheet(workbook,xlsx.utils.aoa_to_sheet([header,['Hard',10,2,'Hit','first','Reason']]),'first');
  xlsx.utils.book_append_sheet(workbook,xlsx.utils.aoa_to_sheet([header,['Hard',11,2,'Hit','second','Reason']]),'second');
  xlsx.utils.book_append_sheet(workbook,xlsx.utils.aoa_to_sheet([header,[],['Hard',12,2,'Hit','third','Reason']]),'chosen');
  const dir=mkdtempSync(path.join(os.tmpdir(),'strategy-sheet-'));const input=path.join(dir,'source.xlsx'),output=path.join(dir,'result.json');
  try {
    writeFileSync(input,xlsx.write(workbook,{type:'buffer',bookType:'xlsx'}));
    const run=spawnSync(process.execPath,['scripts/xlsx-to-json2.mjs',input,'--sheet=chosen','--rulesetId=RS',`--out=${output}`],{encoding:'utf8'});
    assert.equal(run.status,0,run.stderr);const result=JSON.parse(readFileSync(output,'utf8'));assert.equal(result.sheet,'chosen');assert.equal(result.items['RS::HARD:12::D:2'].variants[0].meta.row,3);
    const missing=spawnSync(process.execPath,['scripts/xlsx-to-json2.mjs',input,'--sheet=absent','--rulesetId=RS',`--out=${output}`],{encoding:'utf8'});assert.notEqual(missing.status,0);assert.match(missing.stderr,/sheet not found/);
  } finally {rmSync(dir,{recursive:true,force:true});}
});

test('rejects ambiguous headers and invalid priorities instead of silently changing data',()=>{
  const row=['HARD','16','10','H','Answer','Reason','not-a-number'];
  const header=['PlayerHandType','PlayerHand','DealerUpcard','ActionCode','Answer','Reason','Priority'];
  assert.throws(()=>convertStrategy([header,row],config),/priority/);
  assert.throws(()=>convertStrategy([[...header,'answer'],[...row,'different']],config),/중복된 열/);
  assert.throws(()=>convertOffers([['offerType','choice','answer','reason','priority'],['INSURANCE','N','A','R','1.5']],config),/priority/);
});

test('offers CLI rejects exact duplicate variants without writing unsafe output',()=>{
  const workbook=xlsx.utils.book_new();
  const header=['offerType','choice','answer','reason'];const row=['INSURANCE','N','A','R'];
  xlsx.utils.book_append_sheet(workbook,xlsx.utils.aoa_to_sheet([header,row,row]),'offers');
  const dir=mkdtempSync(path.join(os.tmpdir(),'offers-duplicates-'));const input=path.join(dir,'source.xlsx'),output=path.join(dir,'output.json');
  try {
    writeFileSync(input,xlsx.write(workbook,{type:'buffer',bookType:'xlsx'}));
    const result=spawnSync(process.execPath,['scripts/xlsx-to-offers.mjs',input,'--sheet=offers','--rulesetId=RS','--allow-duplicate=variants',`--out=${output}`],{encoding:'utf8'});
    assert.notEqual(result.status,0);assert.match(result.stderr,/중복 조건/);assert.equal(existsSync(output),false);
  } finally {rmSync(dir,{recursive:true,force:true});}
});
