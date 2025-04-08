const http = require('http');

const server = http.createServer();

function respondToRequestFromBrowser(request, response) {
    const fs = require('fs')
    if (request.url === "/"){
        response.writeHead(200,{ 'Content-Type': 'text.html'}); 
        const html = fs.readFileSync('eeg.csv', 'utf-8'); 
        response.end(html); 
    } 
    else {
        response.end('ERROR');
    }

}

server.on('request', respondToRequestFromBrowser)

server.listen(3000);