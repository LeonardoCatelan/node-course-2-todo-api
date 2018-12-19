const {ObjectID} = require ('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require ('./../server/models/todo');
const {User} = require ('./../server/models/user');

// var id = '5c1a46226ae4ac20b0d309a8';

// if(!ObjectID.isValid(id)){
//     console.log('Id is not valid');
// }

// Todo.find ({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo)
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found.');
//     }
//     console.log('Todo by Id', todo)
// }).catch((e) => console.log(e));

var id = '5c1a2d73791615275cb2825d';

User.findById(id).then((user) => {
    if(!user){
        return console.log('User not found');
    }
    console.log('User by ID: ', user);
}).catch((e) => console.log(e));
