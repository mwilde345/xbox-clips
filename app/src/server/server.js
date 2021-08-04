
const handleRequest = require('./requestHandler');


const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const routes = {
    '/test': handleRequest
}

const server = http.createServer((req, res) => {
    let path = req.url
    let route = routes[path];
    if (route) route(req, res);
    else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end('Hello World');
    }
});

server.listen(port, hostname);
console.log(`Server running at http://${hostname}:${port}/`);

