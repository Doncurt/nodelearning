//require module in javascript
var http= require('http');
// takes a callback as its parameter so other thngs can keep going
http.createServer(function(request, response){
// this places the status code in the header
response.writeHead(200);
console.log("listening on port 8080");
//response body to be executed
response.write("this is a dog");
// closes the connection IMPORTANT
response.end();
}).listen(8080); //listen for connections on this port
console.log("listening on port 8080");
