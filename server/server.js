require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

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
const port = process.env.PORT;
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
    }).catch((e) => {
        res.status(400).send();
    });
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then((todos) => {
        if (!todos) {
            res.status(404).send();
        }
        res.send({
            todos
        });

    }).catch((e) => {
        res.status(400).send();
    });
});

app.patch('/todos/:id', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();


    } else {
        body.completed = false;
        body.completedAt = null;
    }
    Todo.findByIdAndUpdate(id, {
        $set: body
    }, {
        new: true
    }).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({
            todo
        });
    }).catch((e) => {
        res.status(400).send();
    });
});

// POST /users
app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);    

    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        console.log('RESPONSE 2',user);
        res.header('x-auth',token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
});





app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});


module.exports = {
    app
};