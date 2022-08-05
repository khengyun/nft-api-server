const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NFT_Schema = new Schema({
  name:{
    type:String,
    required: true,
    unique: true
  },
  description:{
    type:String,
    default:""
    
  },
  url:{
    type:String,
    required: "URL can\'t be empty !!",
    unique: true
  },
  id_author:{
    type: String,
    ref:"account"
  },
  detail:{
    type:String,
      default:""
  }


  
})




userSchema.path('url').validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');

module.exports = mongoose.model("nft",NFT_Schema)

