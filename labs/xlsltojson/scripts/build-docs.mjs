import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const docs=path.join(root,'docs'),target=path.join(docs,'html');
const pages=[['index','시작하기'],['architecture','구조와 데이터 흐름'],['formats','입력과 JSON 구조'],['workflow','편집 실습'],['operations','실행과 운영'],['audit','테스트와 감사']];
const escape=value=>String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
function inline(value){
  return escape(value).replace(/`([^`]+)`/g,'<code>$1</code>').replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/\[([^\]]+)\]\(([^)]+)\)/g,(_,label,href)=>{
    if(!/^(?:https:\/\/|[a-zA-Z0-9_.#/-]+$)/.test(href))return label;
    return `<a href="${href.replace(/\.md$/i,'.html')}"${href.startsWith('https://')?' rel="noopener noreferrer"':''}>${label}</a>`;
  });
}
function markdown(source){
  const lines=source.replace(/\r\n/g,'\n').split('\n'),out=[];let list='',code=false,codeLines=[],paragraph=[];
  const flush=()=>{if(paragraph.length){out.push(`<p>${inline(paragraph.join(' '))}</p>`);paragraph=[];}};
  const close=()=>{if(list){out.push(`</${list}>`);list='';}};
  for(const line of lines){
    if(line.startsWith('```')){flush();close();if(code){out.push(`<pre><code>${escape(codeLines.join('\n'))}</code></pre>`);codeLines=[];code=false;}else code=true;continue;}
    if(code){codeLines.push(line);continue;}
    if(!line.trim()){flush();close();continue;}
    const heading=/^(#{1,3})\s+(.+)$/.exec(line);if(heading){flush();close();out.push(`<h${heading[1].length}>${inline(heading[2])}</h${heading[1].length}>`);continue;}
    const item=/^\s*(?:([-*])\s+|(\d+)\.\s+)(.+)$/.exec(line);if(item){flush();const kind=item[2]?'ol':'ul';if(list!==kind){close();list=kind;out.push(`<${kind}>`);}out.push(`<li>${inline(item[3])}</li>`);continue;}
    close();paragraph.push(line.trim());
  }
  if(code)throw new Error('닫히지 않은 코드 블록이 있습니다.');flush();close();return out.join('\n');
}
function pageHtml(id,title,body,index){
  const links=pages.map(([name,label],i)=>`<a href="${name}.html"${name===id?' aria-current="page"':''}>${String(i+1).padStart(2,'0')} &nbsp; ${escape(label)}</a>`).join('\n');
  const previous=index?`<a href="${pages[index-1][0]}.html">← ${escape(pages[index-1][1])}</a>`:'<span></span>';
  const next=index<pages.length-1?`<a href="${pages[index+1][0]}.html">${escape(pages[index+1][1])} →</a>`:'<span></span>';
  return `<!doctype html>\n<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="xlsltojson 프로젝트 독립 학습 가이드"><title>${escape(title)} · Strategy Studio Guide</title><link rel="stylesheet" href="guide.css"></head><body>\n<a class="skip" href="#content">본문으로 건너뛰기</a><header class="topbar"><div class="top-inner"><a class="brand" href="index.html"><span class="brand-icon">✳</span><span>Strategy Studio<small>LEARNING GUIDE</small></span></a><span class="top-label">XLSX / JSON CONTENT WORKFLOW</span></div></header><div class="hero"><div class="hero-inner"><div><div class="eyebrow">A PRACTICAL PROJECT GUIDE</div><h1>데이터를 이해하고,<br>안심하고 편집하기.</h1><p>프로젝트 구조부터 변환, 검증, 운영까지 차근차근 살펴보세요.</p></div><span class="hero-mark">독립 실행 · 오프라인 지원</span></div></div><div class="layout"><aside class="sidebar"><div class="nav-label">LEARNING PATH</div><nav aria-label="가이드 목차">${links}</nav><div class="side-note"><strong>가이드는 독립적으로 동작합니다</strong>앱 서버 없이 폴더를 열어 읽을 수 있습니다.</div></aside><main id="content" class="article"><div class="chapter-label">CHAPTER ${String(index+1).padStart(2,'0')} / ${String(pages.length).padStart(2,'0')}</div><div class="content">${body}</div><nav class="page-nav" aria-label="이전과 다음 문서">${previous}${next}</nav><div class="footer">STRATEGY STUDIO · PROJECT LEARNING GUIDE</div></main></div></body></html>\n`;
}
const expected=new Map();
for(const [index,[id,title]] of pages.entries()){const source=await fs.readFile(path.join(docs,`${id}.md`),'utf8');expected.set(`${id}.html`,pageHtml(id,title,markdown(source),index));}
expected.set('guide.css',await fs.readFile(path.join(docs,'guide.css'),'utf8'));
if(process.argv.includes('--check')){
  const stale=[];for(const [name,content] of expected){try{if(await fs.readFile(path.join(target,name),'utf8')!==content)stale.push(name);}catch{stale.push(name);}}
  if(stale.length){console.error(`학습 가이드가 문서와 다릅니다: ${stale.join(', ')}. npm run docs:build 실행`);process.exitCode=1;}else console.log('학습 가이드와 Markdown 문서가 일치합니다.');
}else{await fs.mkdir(target,{recursive:true});for(const [name,content] of expected)await fs.writeFile(path.join(target,name),content,'utf8');console.log(`학습 가이드 ${expected.size}개 파일 생성: ${target}`);}
