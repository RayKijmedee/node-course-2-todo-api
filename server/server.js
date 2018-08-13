

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');


// ----------Above : how Mongoose connect to the database-----------------------------

// ----------Below: create a model for a collection ----------------------------------

var Todo = mongoose.model('Todo', {

    text: {
        type: String
    },

    completed: {
        type: Boolean
    },

    completedAt: {
        type: Number
    }
});


// ------------Below: create a new collection ---------------------------------------

var newTodo = new Todo({

    text: 'Cook dinner'

})


newTodo.save().then((doc)=> {

    console.log('Save todo', doc)

}, (e) => {

    console.log('Unable to save a new todo')

})

var otherTodo = new Todo({

    text: 'Feed the cat',
    completed: true,
    completedAt: 123

});

otherTodo.save().then((doc) => {

    console.log(JSON.stringify(doc, undefined, 2));

}, (e) => {

    console.log('Unable to add other todo' + e)
})