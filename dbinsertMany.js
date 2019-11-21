var Client = require('mongodb').MongoClient;

Client.connect('mongodb://localhost:27017/school', function(error,db){
	if(error){
		console.log(error);
	} else {
		var jordan = {name:'Jordan',age:16,gender:'M'};
		var amanda = {name:'Amanda',age:17,gender:'W'};
		db.student.insertMany(jordan,amanda);
		db.close();
	}
});
