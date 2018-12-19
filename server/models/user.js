var mongoose = require ('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1 //Posteriormente vai ser feito uma validação melhorada.
    }
});

module.exports = {User};