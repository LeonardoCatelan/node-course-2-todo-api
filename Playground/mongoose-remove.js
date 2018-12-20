const {ObjectID} = require ('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require ('./../server/models/todo');

const {User} = require ('./../server/models/user');


//Todo.remove({}) (remove vários registros)

// Todo.findOneAndRemove
// Todo.findByIdAndRemove São os dois melhores métodos, pois retornam o objeto

// Todo.findOneAndRemove({_id: '5c1a8d1bc64b5302fc96b847'}).then((todo) => {
//     console.log(todo);
// });

// Todo.findByIdAndRemove('5c1a8d1bc64b5302fc96b847').then((todo) => {
//     console.log(todo);
// });

