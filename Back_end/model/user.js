const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
    },

    password:{
        type:String,
    },

    truename:{
        type:String,
    },

    role:{
        type:String,
    },

    rank:{
        type:String,
        required:true,
        default: 'E'
    },

    stats : [
        {
            team_work:{
                type:String,
                required:true,
                default: '0'
            },

            tech_skill:{
                type:String,
                required:true,
                default: '0'
            },

            patient:{
                type:String,
                required:true,
                default: '0'
            },

            learning_attitude:{
                type:String,
                required:true,
                default: '0'
            },

            leading_skill:{
                type:String,
                required:true,
                default: '0'
            }
        }
    ]
})

const user_collection = new mongoose.model("user_collection",UserSchema)

module.export = user_collection