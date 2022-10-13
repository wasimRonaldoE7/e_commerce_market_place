const CatelogModel = require("../database/models/catalogs");
const ProductModel = require("../database/models/product");
const OrderModel = require("../database/models/order");

async function createCatelog(data) {
	let {name, items, seller_id} = data;
	const products = await ProductModel.create(items);

	console.log(products, "hai");
	await CatelogModel.create({products: products.map(product => product._id), name, seller_id});
	return "Catelogue created successfully";
}

async function getCatelogs(seller_id) {
	console.log(seller_id,'ser')
	return await CatelogModel.find({seller_id}).populate("products");
}

async function createOrders(data, seller_id) {
	const {products,user_id}=data;
	await OrderModel.create({seller_id,user_id, products});
	return "Order Created Successfully";
}

async function getOrders({seller_id}) {

	return   await OrderModel.find({seller_id}).populate("products");
}

module.exports = {createCatelog, getCatelogs, createOrders,getOrders};
