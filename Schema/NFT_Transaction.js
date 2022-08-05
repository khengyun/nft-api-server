const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NFT_Transaction = new Schema({
  
total_price:{
  type: String,
},
auction_type:{
  type: String,
  required:true
},
seller_id:{
  type:String,
  ref: "account"
},
buyer_id:{
  type:String,
  ref:"account"
},
timestamps:{
  createAt: true,
  updateAt:false
},
  



  
})
module.exports = mongoose.model("user",AccountSchema)



