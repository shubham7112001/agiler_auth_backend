const dotenv = require('dotenv').config({path:'./config.env'});
const mysql  = require('./mysql/user-credentials')

// dotenv.config({path:'./config.env'});
app.get('/users',(req,res)=>{
    res.send("My Name is Shubham Tiwari");
})

app.listen(process.env.PORT,(req,res) =>{
    console.log("Server has started");
})