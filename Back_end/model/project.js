const mongoose = require('mongoose')

const Projectschema = new mongoose.Schema({
    owner_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    name:{
        type: String,
        required:true,
        default:''
    },
    desc:{
        type:String,
        default:''
    },
    tasks:[
        {
            task_id:{
                type:mongoose.Schema.Types.ObjectId,
                required:true
            }, 
        }
    ],
})

const Project_collection = mongoose.model("Project_collection",Projectschema)

module.exports = Project_collection