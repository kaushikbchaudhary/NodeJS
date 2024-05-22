const http = require('http');
const request = require('./routes');

const server = http.createServer(request.Handler);

console.log(request.someTexts);

server.listen(3000);