var http = require('http');

var server = http.createServer(function(request, response){
	response.writeHead('200', {'Content-Type':'text/html'});
	response.end('Hello node.js!');
});

server.listen(5050, function(){
	console.log('server running...');
});
