import test from 'node:test';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';

test('local preview serves JSON and blocks paths outside the build',async t=>{
 const child=spawn(process.execPath,['scripts/serve-web.mjs'],{env:{...process.env,PORT:'0'},stdio:['ignore','pipe','pipe']});let stdout='',stderr='';
 try {
  const port=await new Promise((resolve,reject)=>{
   const timer=setTimeout(()=>reject(new Error('preview startup timeout')),10000);
   child.stdout.on('data',chunk=>{stdout+=chunk;const match=/Preview: http:\/\/127\.0\.0\.1:(\d+)/.exec(stdout);if(match){clearTimeout(timer);resolve(Number(match[1]));}});
   child.stderr.on('data',chunk=>{stderr+=chunk;});child.once('exit',code=>{clearTimeout(timer);reject(new Error(`preview exited ${code}: ${stderr}`));});child.once('error',reject);
  }).catch(error=>{if(/EPERM|EACCES/.test(error.message)){t.skip('로컬 포트 사용 불가');return null;}throw error;});
  if(port===null)return;
  const base=`http://127.0.0.1:${port}`;const home=await fetch(`${base}/`);assert.equal(home.status,200);assert.match(home.headers.get('content-type'),/text\/html/);assert.equal(home.headers.get('x-content-type-options'),'nosniff');
  const json=await fetch(`${base}/templates/offers.json`);assert.equal(json.status,200);assert.match(json.headers.get('content-type'),/application\/json/);assert.equal((await json.json()).count,2);
  const escaped=await fetch(`${base}/%2e%2e%2fpackage.json`);assert.equal(escaped.status,404);
 } finally {if(child.exitCode===null && child.signalCode===null){child.kill('SIGTERM');await new Promise(resolve=>child.once('exit',resolve));}}
});
