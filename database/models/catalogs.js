const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const CatelogsSchema = new Schema({
  seller_id: String,
  password:String,
  type: {
    type: String,
    enum : ['buyer','seller'],
},

});

const UserModel = mongoose.model("catelog", CatelogsSchema);

module.exports=UserModel;
 