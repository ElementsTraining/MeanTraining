var mongodb = require('mongodb');
var movies = require('./movies');
var mongoCon = require('./connect');
var dbInterface = require('./interface');

console.log(movies);

var connectionCallback = function(error, db){
	if(error) {
		console.log(error);
		process.exit(1);
	}

	var array = movies["movies"];
	for(var i in array) {
		var obj = array[i];
		dbInterface.insert(db, obj, function(error, result){
			if(error) {
				console.log(error);
				process.exit(1);
			}
		});
		console.log(i + ' row inserted.');
	}

	process.exit(0);

}

mongoCon(connectionCallback);