var Client = require('mongodb').MongoClient;

Client.connect('mongodb://localhost:27017/school', function(error,db){
	if(error){
		console.log(error);
	} else {
		var michael = {name:'Michael',age:15,gender:'M'};
		db.collection('student').insert(michael);
		db.close();
	}
});
