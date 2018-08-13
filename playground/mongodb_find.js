

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {

    if(err){
        return console.log('Unable to connect to MongoDB Server')
    };




    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');


    // ---------------Above this is connecting to the mongoDB server-----------------------------


    

    // db.collection('Todos').find().count().then((count)=>{

    //     console.log('Todos: '+ count);


    // }, (err) => {

    //     console.log('Unable to fetch Todo', err)

    // });


    db.collection('Users').find({name: 'Bina'}).toArray().then((docs) => {

            console.log(JSON.stringify(docs, undefined, 2));


    }, (err) => {


        console.log('Unable to find the user')


    })










    // client.close();

});
