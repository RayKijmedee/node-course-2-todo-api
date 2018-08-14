var express = require('express');
var bodyParser = require('body-parser');  // take JSON and convert to an object

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./model/todo.js');
var {User} = require('./model/user.js');


var app = express();


app.use(bodyParser.json());

app.post('/todos', (req, res) => {

    var todo = new Todo({

        text: req.body.text

    });

    todo.save().then((doc) =>{

        res.send(doc);

    }, (e) => {

        res.status(400).send(e);

    });

});


/*--This below set up a port and also console log to confirm--*/

app.listen(3000, () => {

    console.log('Started on port 3000');

})