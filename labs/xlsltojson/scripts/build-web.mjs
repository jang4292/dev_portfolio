import {cp, mkdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
await mkdir(path.join(root,'dist','vendor'),{recursive:true});
for (const file of ['index.html','style.css','app.mjs','conversion.mjs','workspace.mjs','ruleset.mjs']) await cp(path.join(root,'web',file),path.join(root,'dist',file));
await cp(path.join(root,'node_modules','xlsx','dist','xlsx.full.min.js'),path.join(root,'dist','vendor','xlsx.full.min.js'));
await cp(path.join(root,'web','templates'),path.join(root,'dist','templates'),{recursive:true});
console.log('Built static site in labs/xlsltojson/dist');
