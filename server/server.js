const express = require('express');
const bodyParser = require('body-parser');

const {
    mongoose
} = require('./db/mongoose');
const {
    ObjectID
} = require('mongodb');

const {
    Todo
} = require('./models/todo');
const {
    User
} = require('./models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);

    });

});
app.get('/todos', (req, res) => {
    Todo.find().then((Todo) => {
        res.send({
            Todo
        });
    }, (e) => {
        res.status(400).send(e);
    });
});


app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findById(id).then((Todo) => {
        if (!Todo) {
            res.status(404).send();
        }
        res.send({
            Todo
        });
    }).catch((e)=>{
        res.status(400).send();
    });
    
});



app.listen(3000, () => {
    console.log('Started on port 3000');
});


module.exports = {
    app
};