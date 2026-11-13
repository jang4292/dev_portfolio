import fs from 'node:fs';
import path from 'node:path';
import xlsx from 'xlsx';
import {convertOffers,validateDocument} from '../web/conversion.mjs';

function parseArgs(argv) {
  const args={_:[]};
  for(const arg of argv) {
    if(!arg.startsWith('--')) args._.push(arg);
    else {const pos=arg.indexOf('=');args[pos<0?arg.slice(2):arg.slice(2,pos)]=pos<0?'true':arg.slice(pos+1);}
  }
  return args;
}
try {
  const args=parseArgs(process.argv.slice(2));
  if(!args._[0]) throw new Error('input xlsx path required');
  const range=args.range === undefined ? 0 : Number(args.range);
  if(!Number.isInteger(range)||range<0) throw new Error(`range invalid: ${args.range}`);
  const workbook=xlsx.read(fs.readFileSync(args._[0]),{type:'buffer'});
  const sheet=args.sheet || workbook.SheetNames[0];
  if(!sheet || !workbook.Sheets[sheet]) throw new Error(`sheet not found: ${sheet || '(first sheet)'}`);
  const rows=xlsx.utils.sheet_to_json(workbook.Sheets[sheet],{header:1,defval:'',raw:false,range,blankrows:true});
  const output=convertOffers(rows,{sheet,range,rulesetId:String(args.rulesetId || '').trim(),version:args.version || new Date().toISOString().slice(0,10),format:String(args.format || 'auto').toLowerCase(),defaultUpcard:String(args.defaultUpcard || 'A').trim().toUpperCase(),duplicates:String(args['allow-duplicate'] || 'variants').toLowerCase()});
  validateDocument(output,'offers');
  const out=args.out || './offers.json';fs.mkdirSync(path.dirname(out),{recursive:true});fs.writeFileSync(out,JSON.stringify(output,null,2),'utf8');
  console.log(`OK: ${output.count} keys -> ${path.resolve(out)}`);
} catch(error) {console.error(`Error: ${error.message}`);process.exitCode=1;}
