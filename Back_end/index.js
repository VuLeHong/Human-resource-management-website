const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv');
const user_collection = require('./model/user')

dotenv.config();

const app = express()
app.use(cors())
app.use(express.json())

app.post("/login", async(req, res) => {
    const{username,password}=req.body
    try{
        const check = await user_collection.findOne({username:username})
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

app.put('/home/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const user = await user_collection.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!user){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updatedUser = await user_collection.findById(id);
        res.status(200).json(updatedUser);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.delete('/home/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const user = await user_collection.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
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