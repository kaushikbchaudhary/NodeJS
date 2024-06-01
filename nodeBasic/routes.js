const fs = require('fs');

const requestHnadler = (req, res) => {
    const url = req.url;
    if (url === '/hi') {
        res.setHeader('Content-Type', 'text-html');
        res.write('<head><title>My First Page</title></head>');
        res.write(`<body><form action="/message" method="POST"><input type="text" name="enter somthing"><button type="submit">submit</button></form>`);
        return res.end();
    }

    if (url === '/message' && method === "POST") {
        const body = [];
        req.on('data', (chank) => {
            console.log('chank::', chank);
            body.push(chank);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log('parsedBody: ', parsedBody);
            fs.writeFile('message.txt', message);
            res.statusCode = 302,
                res.setHeader('Location', '/')
            return res.end();
        });
    }

    res.setHeader('Content-Type', 'text-html');
    res.write('<head><title>My First Page</title></head>');
    res.write(`<body><h1 style="text-align:center;color:orange">Hello From my node js server</h1></body>`);
    res.end();
}

module.exports = {
    Handler: requestHnadler,
    someTexts: 'Hard coded Text here!'
};
