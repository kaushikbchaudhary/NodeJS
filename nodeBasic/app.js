const http = require('http');

function rqListener(req, res) {
    const url = req.url;
    console.log('req.url: ', req.url);
    if (url === '/hi') {
        res.setHeader('Content-Type', 'text-html');
        res.write('<head><title>My First Page</title></head>');
        res.write(`<body><form action="/message" style="text-align:center;color:orange"><input type="text" name="enter somthing"><button type="submit">submit</button></form>`);
        return res.end();
    }

    res.setHeader('Content-Type', 'text-html');
    res.write('<head><title>My First Page</title></head>');
    res.write(`<body><h1 style="text-align:center;color:orange">Hello From my node js server</h1></body>`);
    res.end();

    // process.exit(); // close process which we never do because we never want to our servert to close
};

const server = http.createServer(rqListener);

server.listen(3000);