const express = require('express');
const app = express();

const port = process.env.PORT || 5004 ;

app.get("/",(req,res)=>{
    console.log("good to go");
    res.send("hey,Docker tested succesfully");
})
app.listen(port,()=>{
    console.log("server is running succesfully");
})