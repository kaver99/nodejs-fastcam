const http = require('http');
const port = 5000;

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World!');
    response.end();
}).listen(port, () => {
    console.log(`Http Server is running. http://localhost:${port}`);
});