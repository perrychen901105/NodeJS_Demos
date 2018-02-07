const http = require('http');
http.createServer((request, response) => {
  response.writeHead(200);
  response.end('hello, world');
}).listen(3000);

console.log('server running on http://localhost:3000');