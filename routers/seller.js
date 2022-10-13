const express = require("express");
const router = express.Router();
const {createCatelog,getOrders} = require("../services/items");

router.post("/create-catalog", async function (req, res) {
	try {
		const result=await createCatelog(req.body);
		res.send(result);
	} catch (err_res) {
        console.log(err_res)
		res.status(400).send(err_res);
	}
});

router.get("/orders", async function (req, res) {
    try {
        const result=await getOrders(req.query);
		res.send(result);
	} catch (err_res) {
        console.log(err_res)
		res.status(400).send(err_res);
	}
});

module.exports = router;
