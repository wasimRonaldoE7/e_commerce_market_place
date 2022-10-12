const express = require("express");
const router = express.Router();
const {createUser} = require("../services/user");

router.post("/signup", async function (req, res) {
	try {
		const result = await createUser(req.body);
		res.send(result);
	} catch (err_res) {
		res.status(400).send(err_res);
	}
});

router.get("/login", function (req, res) {
	res.send("login");
});

module.exports = router;
