const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    truename:{
        type:String,
        required:true
    },

    role:{
        type:String,
        required:true
    },

    rank:{
        type:String,
        required:true
    },

    rating:{
        type:String,
        required:true
    }
})

const user_collection = new mongoose.model("user_collection",UserSchema)

module.export = user_collection