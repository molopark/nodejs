var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response){
	var parsedUrl = url.parse(request.url);
	var resource = parsedUrl.pathname;

	if(resource == '/hello'){
		fs.readFile('hello.html', 'utf-8', function(error, data){
			if(error){
				response.writeHead('500', {'Content-Type':'text/html'});
				response.end('500 server error:'+error);
			} else {
				response.writeHead('200', {'Content-Type':'text/html'});
				response.end(data);
			}
		});
	} else {
		response.writeHead('404', {'Content-Type':'text/html'});
		response.end('404 page not found');
	}
});

server.listen(5050, function(){
	console.log('server running...');
});
