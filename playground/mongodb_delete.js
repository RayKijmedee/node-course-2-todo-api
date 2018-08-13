

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {

    if(err){
        return console.log('Unable to connect to MongoDB Server')
    };


    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');


// ---------------Above this is connecting to the mongoDB server-----------------------------

// -------------- Below is how to delete document form MongoDB server -----------------------


// deleteMany
    // db.collection('Todos')
   //    .deleteMany({text: 'eat lunch'})
   //    .then((result) => {
   //     console.log(result);
    // })



    db.collection('Users')
      .deleteMany({name: 'Nina'})



// deleteOne

    // db.collection('Todos')
    //   .deleteOne({text: 'eat lunch'})
    //   .then((result) => {
    //     console.log(result);
    //   })





// --------------------Might be the most useful-----------------------------
// findOneAndDelete

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {


    //     console.log(result);
    // })


    db.collection('Users')
      .findOneAndDelete({_id: new ObjectID("5b70c1cacff7f125e400e6e3")})
      .then((result) => {

        console.log(JSON.stringify(result, undefined, 2));
      })


    // client.close();

});
