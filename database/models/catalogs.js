const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const CatelogsSchema = new Schema({
	seller_id: String,
	name: String,
	products: {
		type: [mongoose.ObjectId],
		ref: "product",
	},
});

const CatelogModel = mongoose.model("catelog", CatelogsSchema);

module.exports = CatelogModel;
