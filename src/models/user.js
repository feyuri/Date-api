const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true,
    },
    number: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: true,

    },

});

var User = mongoose.model('user', UserSchema);

module.exports = User;