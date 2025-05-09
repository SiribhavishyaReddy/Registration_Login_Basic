const express =require("express");
const mongoose=require('mongoose');
const cors =require('cors');
const EmployeeModel=require('./models/Employee');

const app =express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    EmployeeModel.findOne({email: email})
    .then(user=>{
        if(user){
          if(user.password===password){
            res.json("success")
          } 
         else{
            res.json("incorrect password")
          }
        }else {
            res.json("no record existed ")
        }
    })
})
app.post('/register', async(req,res)=>{
    console.log("recevied data:",req.body);
    try {
        const newUser=await
        EmployeeModel.create(req.body);
        res.status(201).json(newUser);
    }
    catch(err){
        console.error("error saving to database",err);
        res.status(500).json({error:err.message});
    }
})

app.listen(3001,()=>{
    console.log("server is running");
})