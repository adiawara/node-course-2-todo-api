//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect(
'mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('unable to connect to mongodb server');
	         }
	console.log('connected to mongodb server');
                                                  

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
                                
db.close();
	               } );
