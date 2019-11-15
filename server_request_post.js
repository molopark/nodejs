var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(request, response){
	var postdata = '';

	request.on('data', function(data){
		postdata = postdata + data;
	});

	request.on('end', function(data){
		var parsedQuery = querystring.parse(postdata);
		console.log(parsedQuery);

		response.writeHead('200', {'Content-Type':'text/html'});
		response.end('a = ' + parsedQuery.a);
	});
});

server.listen(5050, function(){
	console.log('server running...');
});
