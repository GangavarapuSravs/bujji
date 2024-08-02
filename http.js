 
// Install Node.js, set up a new project, and create a "Hello World" application.
const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(8080, 'localhost');

console.log("sever running");