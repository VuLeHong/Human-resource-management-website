const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv');
const user_collection = require('./model/user')
const asyncHandler = require('express-async-handler')
const Project_collection = require('./model/project')
const Task_collection = require('./model/task')

dotenv.config();

const app = express()
app.use(cors())
app.use(express.json())

app.post("/login", async(req, res) => {
    const{user_id,password}=req.body
    try{
        const check = await user_collection.findOne({user_id:user_id})
        .then (check => {
            if(check){
                if (check.password === password) {
                    res.status(200).json(check)
                }
                else {
                    res.status(202).json(check)
                }
            }
            else{
                res.status(204).json(check)
            }
        })
    }
    catch(e){
        res.json("fail")
    }
})

app.get('/home', async(req, res) => {
    try {
        const user = await user_collection.find({});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/home/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const user = await user_collection.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post('/home', async(req, res) => {
    try {
        const user = await user_collection.create(req.body)
        res.status(200).json(user);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})


app.post('/get', (req,res) =>{
    const {username} = req.body;
    user_collection.findOne({username: username})
    .then(user => {
            res.json(user);   
    })
    .catch(err => res.json(err))
})

//project
app.post('/project', async(req, res) => {
    try {
        const result = await Project_collection.create(req.body)
        res.status(200).json(result);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})
app.post('/pushtaskid', asyncHandler(async(req,res) =>{
    const{ Project_id:Project_id, task_id: task_id} = req.body;
    const task = {task_id};
   const works = await Project_collection.findOneAndUpdate({Project_id: Project_id}, {$push: {tasks:task}})
    .then(result => res.json(result))
    .catch(err => res.json(err))
}))

//task 
app.post('/addtask', asyncHandler(async(req,res) =>{
    const{ content, rank, Project_id: Project_id, user_id:user_id} = req.body;
    const task = {content: content, rank: rank, isdone: false ,Project_id: Project_id, user_id: user_id};
   const works = await Task_collection.create(task)
    .then(result => res.json(result))
    .catch(err => res.json(err))
}))

app.get('/gettasks', async(req, res) => {
    try {
        const user = await Task_collection.find({});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
app.post('/addcmt', asyncHandler(async(req,res) =>{
    const{_id: _id, t_desc : t_desc} = req.body;
   const works = await Task_collection.findOneAndUpdate({_id: _id}, {t_desc:t_desc})
    .then(result => res.json(result))
    .catch(err => res.json(err))
}))
app.post('/updone', asyncHandler(async(req,res) =>{
    const{_id: _id} = req.body;
   const works = await Task_collection.findOneAndUpdate({_id: _id}, {isdone:true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
}))

//project
app.post('/project', async(req, res) => {
    try {
        const user = await Project_collection.create(req.body)
        res.status(200).json(user);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

//task 
app.post('/addtask', asyncHandler(async(req,res) =>{
    const{ content, rank, Project_id: Project_id, user_id:user_id} = req.body;
    const task = {content: content, rank: rank, isdone: false ,Project_id: Project_id, user_id: user_id};
   const works = await Task_collection.create(task)
    .then(result => res.json(result))
    .catch(err => res.json(err))
}))
app.get('/gettask', async(req, res) => {
    try {
        const user = await Task_collection.find({});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})



async function connect () {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("Mongo Connected");
    }
    catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

connect();

const PORT =process.env.PORT || 1000;

app.listen(PORT, console.log(`server is running in port ${PORT}`));