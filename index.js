const express = require("express")
require("dotenv").config()

const app = express();

const PORT = process.env.PORT || 8500

app.get("/",(req,res)=>{
    res.send("hello rishi, this is check of deploymet.")
})

app.get("/about",(req,res)=>{
    res.send("this is about page")
})

app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`)
})