const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
    },

    password:{
        type: String,
    },

    truename:{
        type: String,
    },

    ismale:{
        type: Boolean,
        required: true,
        default: true
    },

    role:{
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
            }
        }
    ],

    stats :
        {
            organizational_skill:{
                type: Number,
                required:true,
                default: 0
            },

            techical_skill:{
                type: Number,
                required:true,
                default: 0
            },

            idea_contribution:{
                type: Number,
                required:true,
                default: 0
            },

            communication_skill:{
                type: Number,
                required:true,
                default: 0
            },

            product_optimization:{
                type: Number,
                required:true,  
                default: 0
            }
        },

        history:[
            {
                time:{
                    type: Date
                }, 
    
                change:{
                    type: Number,
                    required:true,
                    default: 0
                },
    
                point:{
                    type: Number,
                    required: true,
                    default: 0
                }
            }
        ]
})

const user_collection = mongoose.model("user_collection",UserSchema)

module.exports = user_collection