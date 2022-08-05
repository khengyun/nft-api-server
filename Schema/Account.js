const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
username:{
  type: String,
  required:"username not empty",
  unique:true,
},
 password: {
  type: String,
  required: "password is empty"
 },
fullname:{
  type:String,
  required: false
},
address:{
  type:String,
  required:false
},
phone:{
  type: String,
  required:false
},
role:{
  type:Number,
  default: 0
  // default: 0 (member)
  // default: 1 (admin)
  // without setting default is member
},
avatar:{
  type: String,
  default: ""
}
})
module.exports = mongoose.model("account",AccountSchema)



