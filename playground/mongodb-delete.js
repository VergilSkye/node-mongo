// const MongoCLient = require('mongodb').MongoCLient;
const {MongoClient,ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connect to MongoDB server');
    const db = client.db('TodoApp');
    // deleteMany
    //    db.collection('Todos').deleteMany({text:'Prepare Lunch'}).then((result)=>{
    //        console.log(result);
       
    //    });

    // deleteOne
    // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
    //     console.log(result);
        
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
        
    // });
    db.collection('Users').deleteMany({name:'Vergil'});
    db.collection('Users').deleteOne({name:'Mike'});
  




    //client.close();

});