

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {

    if(err){
        return console.log('Unable to connect to MongoDB Server')
    };

    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');



    // ---------------Above this is connecting to the mongoDB server-----------------------------

    // -------------- Below is creating a new table and insert a document ------------------

    db.collection('Todos').insertOne({

        text: 'Something to do',
        completed: false

    }, (error, result) => {


        if(err){
            return console.log('Unable to insert todo', err)
        }

        console.log(JSON.stringify(result.ops, undefined, 2))

    })


    


    // db.collection('Users').insertOne({
    //         name: 'Bina',
    //         age: 41,
    //         location: 'New York'
    // }, (err, result) => {

    //     if(err){

    //         return console.log('Unable to add a collection', err)

    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined, 2));


    // })



    client.close();

});
