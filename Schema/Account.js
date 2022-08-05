const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
username:{
  type: String,
  required:false,
  unique:true,
},
 password: {
  type: String,
  required: false
 },
fullname:{
  type:String,
  required: false
},
address:{
  type:String,
  required:true
},
phone:{
  type: String,
  required:true
},
role:{
  type:number,
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



