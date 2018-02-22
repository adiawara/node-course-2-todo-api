//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect(
'mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('unable to connect to mongodb server');
	         }
	console.log('connected to mongodb server');

	db.collection('User').findOneAndUpdate({
		_id: new ObjectID('5a8c59e707751964aebdc8a5')
	},{
		$set:{
			name:'Abou'
		},
		$inc:{age:1}

	},
	
	
	{
		returnOriginal:false 
	}).then((result)=>{console.log(result)},(err)=>{console.log('handling error ',err )});
//db.close();
	               } );
