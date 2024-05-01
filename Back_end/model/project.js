const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    truename:{
        type: mongoose.Schema.Types.String,
        ref:'user'
    },
    name:{
        type: String,
    },

    rank:{
        type: String,
        required:true,
        default: 'E'
    },

    tasks:[
        {
            content:{
                type: String
            }, 

            rank:{
                type: String,
                required:true,
                default: 'E'
            },

            isdone:{
                type: Boolean,
                required: true,
                default: false
            },
            byuser:{
                type:String,
                required:true,

            }
        }
    ],
})

const user_collection = mongoose.model("user_collection",UserSchema)

module.exports = user_collection