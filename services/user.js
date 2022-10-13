const userModel = require("../database/models/user");



async function getSellers() {
	return userModel.find({type: "seller"});
}



module.exports = {
	getSellers,
};
