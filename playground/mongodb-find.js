// const MongoCLient = require('mongodb').MongoCLient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }
    // console.log('Connect to MongoDB server');
    // const db = client.db('TodoApp');
    // db.collection('Todos').find({
    //     _id: new ObjectID('5b0c9a6adcb45201fd2659af')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fecth todos', err);        
    // });
     console.log('Connect to MongoDB server');
    const db = client.db('TodoApp');
    //  const db = client.db('TodoApp');
    //  db.collection('Todos').find().count().then((count) => {
    //      console.log(`Todos count: ${count}`);         
    //  }, (err) => {
    //      console.log('Unable to fecth todos', err);
    //  });
    
    
    db.collection('Users').find({name: 'Vergil'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
        
    });


    // client.close();

});