const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    verifytoken: {
        type: String,
    },
    // isSeller: {
    //     type: Boolean,
    //     default: false,
    // },

});

const Users = mongoose.model('users', userSchema);
module.exports = Users;