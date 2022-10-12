const express = require("express");
require('dotenv').config();
require('./database/connection');
const userRouter=require('./routers/user');
var bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || "5000";

app.get("/", (req, res) => {
	res.status(200).send("WELCOME TO E-COMMERCE MARKET PLACE");
});

app.use(bodyParser.json());

app.use("/users", userRouter);

app.listen(port, () => {
	console.log(`Listening to requests on http://localhost:${port}`);
});
