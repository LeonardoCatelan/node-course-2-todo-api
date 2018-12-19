const {MongoClient, ObjectID} = require ('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to Database servers');
    };
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
   
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c1a19d3b0c91ce99a7c4def')
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });


    // Desafio
    db.collection('Users').findOneAndUpdate(
        {
            _id: new ObjectID('5c18f60ab0c91ce99a7c4c7d')
        }, {
            $set: {
                name:'Leonardo'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
    });

    //client.close
});











