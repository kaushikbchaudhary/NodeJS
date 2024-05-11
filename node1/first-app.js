const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  // console.log(req)
  const url = req.url;
  console.log('url',url)

  res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello World\n');
  res.setHeader('Content-Type','text/html');
  res.write('<Html>');
  res.write('<Head>');
  res.write('<Title>This Is My First Page</Title>');
  res.write('</Head>');
  res.write('<Body><H1 style = "text-align:center; background-color:red;" >How is looking</H1></Body>');
  res.write('</Html>');
  res.end();

});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});