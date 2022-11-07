const express = require("express")

const app = express();

app.get("/",(req,res)=>{
    res.send("hello rishi, this is check of deploymet")
})

app.listen(8000,()=>{
    console.log("app is running")
})