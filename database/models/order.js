const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const orderSchema = new Schema({
    user_id:String,
	seller_id: String,
	products: {
		type: [mongoose.ObjectId],
		ref: "product",
	},
});

const OrderModel = mongoose.model("order", orderSchema);

module.exports = OrderModel;
