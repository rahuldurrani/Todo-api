var express = require('express');
var bodyParser = require('body-parser');
var { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (error) => {
        res.status(400).send(error);
    });
});

app.get("/todos", (req, res) => {
    Todo.find().then((todos) => {
        res.status(200).send({ todos });
    }, (error) => {
        res.status(400).send(error);
    });
});

app.get("/todos/:id", (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.status(200).send({ todo });
    }, (error) => {
        res.status(400).send(error);
    });
});

app.listen(3000, () => {
    console.log('Started listening on port 3000');
});

module.exports = {
    app
};