const express = require("express");
require("dotenv").config();
require("./database/connection");
const userRouter = require("./routers/user");
const buyerRouter = require("./routers/buyer");
const sellerRouter = require("./routers/seller");
const {verifyToken} = require("./services/auth");
var bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || "5000";

app.get("/", (req, res) => {
	res.status(200).send("WELCOME TO E-COMMERCE MARKET PLACE");
});

app.use(bodyParser.json());

app.use("/api/auth", userRouter);

app.use("/api/buyer", verifyToken, buyerRouter);

app.use("/api/seller", verifyToken, sellerRouter);

app.listen(port, () => {
	console.log(`Listening to requests on http://localhost:${port}`);
});
