const express=require('express');
const users = require("./Mock_Data.json")
const app=express();
const http=require("http");
// const nodemailer=require("nodemailer");


const PORT=8000;

///middleware -plugin
app.use(express.urlencoded({extended:false}));
// app.use('body-parser')

// //Routes

app.get("/api/users",(req,res)=>{
    return res.json(users);
})
app.get(`/api/users/:id`,(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    return res.json(user);
})
app.post(`/api/users`,(req,res)=>{
    console.log("req params",req)
    const body = req.body;
    console.log("body",body)
    /// 
    return res.json({
       action:'ShowBlockPage',
       userMessage: "There was a problem with your request. You are not able to sign up at this time. Please contact your system people!"
    })
})

app.listen(PORT,()=>console.log(`Server started at PORT:${PORT}`))

