const userModel = require("../database/models/user");

async function createUser(user) {
	try {
		const result = await userModel.create(user);
		console.log(`${result.name} created succesfully`);
		return `${result.name} created succesfully as ${result.type}`;
	} catch (e) {
		console.log(e);
        throw `User Creation Failed`; 
	}
};


module.exports = {
	createUser,
};
