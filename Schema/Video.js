const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Video_Schema = new Schema({

  name:{
    type:String,
    required:true,
    unique:true
  },
  url:{
    type:String,
   required: "URL can\'t be empty !!",
    unique:true
  },
  id_author:{
    type:String,
    ref:"account"
  },
  id_NFT:{
    type:String,
    ref:"nft"
  }
  
})

userSchema.path('url').validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');
module.exports = mongoose.model("video",Video_Schema)


