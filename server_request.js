var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response){
	console.log(request.url);
	var parsedUrl = url.parse(request.url);
	console.log('parsedUrl:%s',parsedUrl);
	var resource = parsedUrl.pathname;
	console.log('resource path:%s',resource);

	if(resource == '/address'){
		response.writeHead('200', {'Content-Type':'text/html'});
		response.end('서울 은평구');
	} else if(resource == '/phone'){
		response.writeHead('200', {'Content-Type':'text/html'});
		response.end('010-1234-4321');
	} else {
		response.writeHead('404', {'Content-Type':'text/html'});
		response.end('404 page not found');
	}
});

server.listen(5050, function(){
	console.log('server running...');
});
