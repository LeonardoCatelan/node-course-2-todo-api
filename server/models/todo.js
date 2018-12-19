var mongoose = require('mongoose'); 

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, 
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo};
// var otherTodo = new Todo ({
//     text: 'Edit this vídeo'
// });

// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save');
// });


/*Desafio = criar tabela de User com e-mail e requerimentos de obrigatorio
tipo string, com trim e tamanho de 1, e implementar
*/


// var newUser = new User ({
//     email: 'leocatelan@gmail.com'
// });

// newUser.save().then((doc) => {
//     console.log(`Salvo com sucesso: ${JSON.stringify(doc, undefined, 2)}`);
// }, (e) => {
//     console.log('Não foi possível salvar o usuário.');
// });
