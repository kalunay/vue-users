const { model, Schema } = require('mongoose');

const schema = new Schema({
    title: {
        type: String,
        default: ''
    },
    profession: {
        type: String,
        maxLength: 155,
        default: ''
    },
    email: {
        type: String,
        maxLength: 155,
        default: ''
    }

});

module.exports = model('User', schema);