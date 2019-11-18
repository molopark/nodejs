var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response){
	var parsedUrl = url.parse(request.url);
	var resource = parsedUrl.pathname;
	var resourcePath = '.'+resource;

	//console.log(resourcePath);

	if(resource.indexOf('/html/') == 0 || resource.indexOf('/js/') == 0){
		fs.readFile(resourcePath, 'utf-8', function(error, data){
			if(error){
				response.writeHead('500', {'Content-Type':'text/html'});
				response.end('500 server error:'+error);
			} else {
				response.writeHead('200', {'Content-Type':'text/html'});
				response.end(data);
			}
		});
	} else if(resource.indexOf('/movie/') == 0){
		var stream = fs.createReadStream(resourcePath);
		var count = 0;

		stream.on('data', function(data){
			count = count + 1;
			response.write(data);
		});

		stream.on('error',function(err){
			response.end('500 server error:'+err);
		});

		stream.on('end',function(){
			response.end();
		});
	} else {
		response.writeHead('404', {'Content-Type':'text/html'});
		response.end('404 page not found');
	}
});

server.listen(5050, function(){
	console.log('server running...');
});
