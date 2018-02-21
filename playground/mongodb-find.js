//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect(
'mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('unable to connect to mongodb server');
	         }
	console.log('connected to mongodb server');

	//db.collection('Todo').find({_id: new ObjectID("5a8c77e4169a2731a9c8d941")}).toArray().then((docs)=>{
	//	console.log('Todo');
	//	console.log(JSON.stringify(docs, undefined, 2));
	//},(err)=>{
	//	console.log('unable to fetch todos', err);
	//});

//db.collection('Todo').find().count().then((count)=>{
//		console.log(`Todo count: ${count}`);
//		
//	},(err)=>{
//		console.log('unable to fetch todos', err);
//	});
            
 db.collection('User').find({name:'Andrew'}).toArray().then((docs)=>{
 console.log('Users  : ');
 console.log(JSON.stringify(docs, undefined, 2));
},
 (err)=>{console.log('unable to fetch todo',err);})
;                                                 

//db.collection('Todo').insertOne({
//	text: 'Some to do',
//	completed: false
  //                              }, 
//(err, result)=>{
//	if (err){
//		return console.log('unable to insert to do', err); 
//	        }
//	console.log(JSON.stringify(result.ops, undefined, 2));
  //             });
//db.collection('User').insertOne({
//	name:'Andrew',
//	age:25,
//	location:'philadelphia',
//	completed:false
//},(err,result)=>{
//	if(err){
//		return console.log('unable to insert User');
//	}
//	console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
//});
                                
//db.close();
	               } );
