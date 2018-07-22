// const MongoCLient = require('mongodb').MongoCLient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connect to MongoDB server');
    const db = client.db('TodoApp');

    // FindOneAndDelete

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5b538c12592ee0cc85e03244")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);

    // });
    db.collection('Users').findOneAndUpdate({        
        _id: new ObjectID("012450124501245012450124")
    }, {
        $set: {
            name: 'Vergil'
        },
        $inc:{
            age:+1
        }
    },{
        returnOriginal:false
    }).then((docs)=>{
        console.log(docs);
        
    });


    //client.close();

});