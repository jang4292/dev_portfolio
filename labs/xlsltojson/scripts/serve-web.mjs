import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import './build-web.mjs';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../dist');
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8'};
const port = Number(process.env.PORT || 4173);
const server=createServer(async (req,res) => {
  try {
    const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    const name=path.resolve(root,'.'+(pathname === '/' ? '/index.html' : pathname));
    if (!name.startsWith(root + path.sep)) throw new Error('Invalid path');
    const data=await readFile(name); res.writeHead(200,{'Content-Type':mime[path.extname(name)] || 'application/octet-stream','X-Content-Type-Options':'nosniff','Cache-Control':'no-store'}); res.end(data);
  } catch {res.writeHead(404);res.end('Not found');}
});
server.listen(port,'127.0.0.1',() => console.log(`Preview: http://127.0.0.1:${server.address().port}`));
