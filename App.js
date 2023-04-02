//require express
const express = require("express");

const http = require("http");

http.createServer((request, response) => {
    response.end("hello from server");
}).listen(5000);

console.log("the server is running at http://127.0.0.1:5000/")

//require file systeme FS
const fs = require("fs")

//create file with fs
fs.writeFile("Welcome.txt", "Hello node", function(error){
    if (error) throw (error) 
    console.log("file created successfully")
})

//password generator 
