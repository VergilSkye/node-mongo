const {
    ObjectID
} = require('mongodb');
const {
    moongose
} = require('./../server/db/mongoose');
const {
    Todo
} = require('./../server/models/todo');
const {
    User
} = require('./../server/models/user');

// let id = '5b548c07fe14013d3889c0ec11';

let id = '5b53a9c572668b33185d2d38';

if (!ObjectID.isValid(id)) {
    console.log('Id not valid');

}
User.findById(id).then((user) => {


    if (!user) {
        return console.log('Id not Found');

    }
    console.log(JSON.stringify(user,undefined,2));
}).catch((e) => console.log(e));


// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');

// }

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos',todos);

// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);

// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('Id not Found');

//     }
//     console.log('Todo By Id', todo);
// }).catch((e)=>console.log(e)) ;