const mySecret = process.env['newpass']
const express = require('express'); 
const app = express(); 
const mongoose = require("mongoose")
const cors = require("cors")
const port = 8080; 
const bodyparser = require("body-parser")
app.use(bodyparser.json())

const AuthenticatorRouter = require("./Router/account")

const url = "mongodb+srv://khaangnguyeen:"+mySecret+"@cluster0.dm9tbco.mongodb.net/?retryWrites=true&w=majority";

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



app.get('/', function(req, res){
    res.send("Server NFT Market <p style='color:green'> ON </p> <br> You are connecting to the database server</br><a href='https://github.com/khengyun/nft-api-server' target='_blank'> click here</a> to see source on the api server  ");
})

app.listen(port, function(){
    console.log("Your app running on port " + port);
})

app.use("/api/auth", AuthenticatorRouter)





