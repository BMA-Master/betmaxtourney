from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
import sys
# Usage: python3 scripts/serve-quiet-cards.py SITE IOS_BUNDLE PATCHED_WEB_JS PATCHED_IOS_JS FIXTURE_JS [OUTPUT]
root, ios, web_js, ios_js, fixture = map(Path, sys.argv[1:6])
output=Path(sys.argv[6]) if len(sys.argv)>6 else Path('/tmp/bmt-quiet-results')
output.mkdir(parents=True,exist_ok=True)
class Handler(SimpleHTTPRequestHandler):
 def do_GET(self):
  path=self.path.split('?')[0]
  if path=='/app/quiet-test.html':
   platform='ios' if 'ios=1' in self.path else 'web'
   bundle=root/'app' if platform=='web' else ios
   s=(bundle/'index.html').read_text()
   import re
   s=re.sub(r'<script type="module"[^>]*src="[^"]+"[^>]*></script>',f'<script type="module" src="/quiet-{platform}.js"></script>',s)
   s=s.replace('./assets/index.css','/ios/assets/index.css')
   s=s.replace('<head>','<head><script>const f=window.fetch;window.fetch=(u,...a)=>String(u).includes("machfive-bmacdev-rest")?Promise.resolve(new Response(JSON.stringify({rows:[]}))):f(u,...a);</script>')
   s=s.replace('</body>','<script type="module" src="/test.js"></script></body>')
   self.send_response(200);self.send_header('Content-Type','text/html');self.end_headers();self.wfile.write(s.encode());return
  super().do_GET()
 def do_POST(self):
  if self.path != '/quiet-results': self.send_error(404); return
  import json,time
  data=self.rfile.read(int(self.headers['Content-Length']))
  value=json.loads(data)
  (output/('results-'+str(time.time_ns())+'.json')).write_text(json.dumps(value,indent=2))
  self.send_response(204);self.end_headers()
 def translate_path(self,path):
  path=path.split('?')[0]
  if path in ['/quiet-web.js','/quiet-ios.js']:return str(web_js if path=='/quiet-web.js' else ios_js)
  if path=='/test.js':return str(fixture)
  if path.startswith('/ios/'):return str(ios/path[5:])
  return str(root/path.lstrip('/'))
ThreadingHTTPServer(('127.0.0.1',5176),Handler).serve_forever()
