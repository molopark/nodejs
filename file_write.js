var fs = require('fs');

var data = 'my data write to file...';

fs.writeFile('file01_async.txt', data, 'utf-8', function(e){
	if(e){
		console.log(e);
	} else {
		console.log('01 write done');
	}
});

try{
	fs.writeFileSync('file02_sync.txt', data, 'utf-8');
	console.log('02 write done');
} catch(e){
	console.log(e);
}
