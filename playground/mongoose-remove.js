const {ObjectID} = require('mongodb');
const {moongose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove ({}).then((res)=>{
//     console.log(res);
// });

// Todo.findOneAndRemove({_id:'5b54cb4378d68b6eb5045a2f'}).then((res)=>{

// });

// Todo.findByIdAndRemove('5b54cb4378d68b6eb5045a2f').then((res) => {
//     console.log(res);
    
// });