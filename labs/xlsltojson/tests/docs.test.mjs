import test from 'node:test';
import assert from 'node:assert/strict';
import {cpSync,mkdtempSync,readFileSync,readdirSync,existsSync,rmSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {createServer} from 'node:http';
import path from 'node:path';
import os from 'node:os';
import {fileURLToPath} from 'node:url';
import {JSDOM} from 'jsdom';
const waitLoad=dom=>dom.window.document.readyState==='complete'?Promise.resolve():new Promise(resolve=>dom.window.addEventListener('load',resolve,{once:true}));
const copyGuide=()=>{const temp=mkdtempSync(path.join(os.tmpdir(),'guide-independent-'));cpSync('docs/html',temp,{recursive:true});return temp;};

test('generated guide matches Markdown and works as a copied folder via file',async()=>{
 const check=spawnSync(process.execPath,['scripts/build-docs.mjs','--check'],{encoding:'utf8'});assert.equal(check.status,0,check.stderr);
 const temp=copyGuide();let local;
 try {
  assert.doesNotMatch(readFileSync(path.join(temp,'guide.css'),'utf8'),/@import|url\(\s*['"]?https?:/i);
  const pages=readdirSync(temp).filter(name=>name.endsWith('.html'));assert.equal(pages.length,6);
  for(const page of pages){
   local=await JSDOM.fromFile(path.join(temp,page),{resources:'usable'});await waitLoad(local);
   assert.ok(local.window.document.querySelector('.content h1'));if(page==='index.html')assert.equal(local.window.document.querySelector('.content h1').textContent,'Strategy Studio 학습 가이드');
   for(const a of local.window.document.querySelectorAll('a[href]')){const raw=a.getAttribute('href');if(raw.startsWith('#')||raw.startsWith('https://'))continue;const url=new URL(raw,local.window.location.href);assert.equal(url.protocol,'file:');assert.ok(fileURLToPath(url).startsWith(temp+path.sep));assert.ok(existsSync(fileURLToPath(url)),raw);}
   assert.equal(local.window.document.querySelectorAll('script').length,0);
   assert.equal(local.window.document.querySelector('link[rel=stylesheet]').getAttribute('href'),'guide.css');assert.ok(local.window.document.styleSheets.length>0);local.window.close();local=null;
  }
 } finally {local?.window.close();rmSync(temp,{recursive:true,force:true});}
});

test('copied guide works over a static HTTP server',async t=>{
 const temp=copyGuide();let server,online;
 try {
  server=createServer((req,res)=>{const name=new URL(req.url,'http://local').pathname==='/'?'index.html':new URL(req.url,'http://local').pathname.slice(1);try{res.setHeader('Content-Type',name.endsWith('.css')?'text/css':'text/html; charset=utf-8');res.end(readFileSync(path.join(temp,name)));}catch{res.writeHead(404);res.end();}});
  try {await new Promise((resolve,reject)=>{server.once('error',reject);server.listen(0,'127.0.0.1',resolve);});}catch(error){if(['EPERM','EACCES'].includes(error.code)){t.skip(`로컬 포트 사용 불가: ${error.code}`);return;}throw error;}
  const base=`http://127.0.0.1:${server.address().port}`;
  online=await JSDOM.fromURL(`${base}/formats.html`,{resources:'usable'});await waitLoad(online);assert.equal(online.window.document.querySelector('.content h1').textContent,'입력과 JSON 구조');assert.ok(online.window.document.styleSheets.length>0);
  const css=await fetch(`${base}/guide.css`);assert.equal(css.status,200);
 } finally {online?.window.close();if(server?.listening)await new Promise(resolve=>server.close(resolve));rmSync(temp,{recursive:true,force:true});}
});
