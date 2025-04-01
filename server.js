// http is a library of code built into NodeJS that handles communication with any browser that is sending it commands
//let heartbeat = 0
const http = require('http');

// This line of code creates the web server and puts it into a variable called server:
const server = http.createServer();

// A function that will handle responding to requests made by the browser
function respondToRequestFromBrowser(request, response) {
    const fs = require('fs')
    if (request.url === "/"){
        response.writeHead(200,{ 'Content-Tpye': 'text.html'}); 
        const html = fs.readFileSync('eeg.csv', 'utf-8'); 
        response.end(html); 
    } else {
        response.end('ERROR');
    }

}

// // This tells the server what to send the browser when the browser sends a request:
server.on('request', respondToRequestFromBrowser)

// // This tells our server to listen to commands coming in from port 3000.  
server.listen(3000);
console.log("asdfjkl");