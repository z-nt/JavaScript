const express = require("express");
const httpServer = require("http");
const app = express();
const server = httpServer.createServer(app)
const cors = require('cors') 

app.use(cors())

app.get("/kian",(req,res)=>{
    res.send("hello koni");
})



server.listen(8080,()=>{
    console.log("server is open ");
})