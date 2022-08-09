const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
    firstname:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    phone:{
        type:Number,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    confirm_password:{
        type:String,
        required: true
    }
})

const User = mongoose.model('USER', userSchema);

module.exports = User;