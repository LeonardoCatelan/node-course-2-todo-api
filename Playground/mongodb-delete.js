const {MongoClient, ObjectID} = require ('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to Database servers');
    };
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
   
//deleteMany - seleciona varios alvos p/ deletar
//deleteOne - deleta o PRIMEIRO da lista que for achado
//findOneAndDelete - Deleta 1 e printa o que foi deletado, bem útil


//Delete Many
// db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
//     console.log(result);
// });
    

//Delete One
// db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
//     console.log(result);
// });

//findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//     console.log(result);
// });

//Desafio
// db.collection('Users').deleteMany({name: 'Leonardo'}).then((result) => {
//     console.log(result);
// });

// db.collection('Users').findOneAndDelete({_id: new ObjectID('5c18f5f7b0c91ce99a7c4c76')}).then((result) => {
//     console.log(result);
// });



    //client.close
});











