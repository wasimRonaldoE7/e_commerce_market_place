const userModel = require("../database/models/user");
const bcrypt=require("bcryptjs");

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

function validateRegistration(user) {
	const {name, type, password} = user;
	if (!(name && password && type)) {
		throw "All input is required";
	}
}

module.exports = {
	createUser,
};
