const express = require("express");
require('dotenv').config();

const app = express();
const port = process.env.PORT || "5000";

app.get("/", (req, res) => {
	res.status(200).send("WELCOME TO E-COMMERCE MARKET PLACE");
});

app.listen(port, () => {
	console.log(`Listening to requests on http://localhost:${port}`);
});
