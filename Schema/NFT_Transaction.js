const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NFT_Transaction = new Schema({
  
total_price:{
  type: String,
  default: "0",
  
},
auction_type:{
  type: String,
  require:true,
  required:true
},
seller_id:{
  type:String,
  required:true ,
  ref: "account"
},
buyer_id:{
  type:String,
  required:true,
  ref:"account"
},

address_smart_contract:{
  type:String,
  required:true
},
  
timestamps:{
  required:true,
  createAt: true,
  updateAt:false
},
  



  
})
module.exports = mongoose.model("transaction",NFT_Transaction)



