// const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to Database servers');
    };
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return ('Not able to insert todo');
    //     };

    //     console.log(JSON.stringify(result.ops, undefined, 2));

    // });
    
//     db.collection('Users').insertOne({
//         name: 'Leonardo',
//         age: 21,
//         location: 'Canoas'
//     }, (err, result) => {
//         if(err){
//             return console.log('Unable to insert User to Database');
//         }
//         console.log(JSON.stringify(result.ops, undefined, 2));
//     });


//     client.close();
});