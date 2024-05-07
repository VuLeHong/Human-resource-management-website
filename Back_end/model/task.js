const mongoose = require('mongoose')

const Taskschema = new mongoose.Schema({
    content:{
        type: String,
        required: true,
        default: ''
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
    t_desc:{
        type:String,
        default:''
    },
    Project_id: {
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    user_id:{
        type:mongoose.Schema.Types.String,
        required:true
    },
    res:{
        type:String,
        default:''
    }
        
})

const Task_collection = mongoose.model("Task_collection",Taskschema)

module.exports = Task_collection