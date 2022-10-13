const express = require("express");
const router = express.Router();
const {getSellers} = require("../services/user");
const {getCatelogs, createOrders} = require("../services/items");

router.get("/list-of-sellers", async function (req, res) {
	try {
		const result = await getSellers();
		res.send(result);
	} catch (err_res) {
		res.status(400).send(err_res);
	}
});

router.get("/seller-catalog/:seller_id", async function (req, res) {
	try {
		const result = await getCatelogs(req.params.seller_id);
		res.send(result);
	} catch (err_res) {

		res.status(400).send(err_res);
	}
});

router.post("/create-order/:seller_id", async function (req, res) {
	try {
		const result = await createOrders(req.body.data, req.params.seller_id);
		res.send(result);
	} catch (err_res) {
		res.status(400).send(err_res);
	}
});

module.exports = router;
