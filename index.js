const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    console.log("good to go");
    res.send("hey,Docker tested succesfully");
})
app.listen(5003,()=>{
    console.log("server is running succesfully");
})