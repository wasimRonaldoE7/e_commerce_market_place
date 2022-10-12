const userModel = require("../database/models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function createUser(user) {
	try {
		validateRegistration(user);
		user.password = await bcrypt.hash(user.password, 10);
		const result = await userModel.create(user);
		console.log(`${result.name} created succesfully`);
		return `${result.name} created succesfully as ${result.type}`;
	} catch (e) {
		console.log(e);
		throw `User Creation Failed`;
	}
}

async function login(user) {
	try {
		const id = await validateLoginAndReturnID(user);
		const token = jwt.sign({user_id: id, name: user.name}, process.env.TOKEN_KEY, {
			expiresIn: "1h",
		});
		return {token};
	} catch (err) {
		console.log(err);
		throw err;
	}
}

function validateRegistration(user) {
	const {name, type, password} = user;
	if (!(name && password && type)) {
		throw "All input is required";
	}
}

async function validateLoginAndReturnID(user) {
	const {name, password} = user;
	if (!(name && password)) {
		throw "All input is required";
	}
	const result = await userModel.findOne({name});
	if (!result) {
		throw "No User Found";
	}
	const validation = await bcrypt.compare(password, result.password);
	if (!validation) {
		throw "Password Authentication Failed";
	}
	return result._id;
}

module.exports = {
	createUser,
	login,
};
