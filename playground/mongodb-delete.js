//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect(
'mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('unable to connect to mongodb server');
	         }
	console.log('connected to mongodb server');

	//db.collection('Todo').deleteMany({text:'Some to do'}).then((result)=>{console.log(result)});
	db.collection('Todo').findOneAndDelete({
		_id: new ObjectID("5a8df1a2169a2731a9c91eba")}).then(
		(result)=>{console.log(JSON.stringify(result, undefined, 2))});
                                
//db.close();
	               } );
