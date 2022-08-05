const mySecret = process.env['newpass']
const express = require('express'); 
const app = express(); 
const mongoose = require("mongoose")
const cors = require("cors")

const url = "mongodb+srv://khaangnguyeen:khang1142003@cluster0.dm9tbco.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(url)
        console.log("Mongoose connected")
    } catch (error) {
        console.log(error.message)
        process.exit()
    }
};
connectDB();//run connectdb function

const port = 8080; 

app.get('/', function(req, res){
    res.send("Hello World");
})

app.listen(port, function(){
    console.log("Your app running on port " + port);
})





