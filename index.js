const express = require("express");
const { append } = require("express/lib/response");
const server=express();

server.use(express.static("public"))

server.listen(8000,()=>{
    console.log("server started");
})

