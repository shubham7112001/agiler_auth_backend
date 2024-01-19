const port = 3000;
const mysql  = require('./connections/mysql')

app.get('/users',(req,res)=>{
    res.send("My Name is Shubham Tiwari");
})

app.listen(port,(req,res) =>{
    console.log("Server has started");
})