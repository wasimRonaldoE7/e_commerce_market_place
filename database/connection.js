const mongoose = require("mongoose");

async function startConnection() {
	try {
        const mongoDbURI = `mongodb://127.0.0.1/${process.env.DATABASE_NAME}`;
		await mongoose.connect(mongoDbURI);
		console.log('DATABASE CONNECTION SUCCESSFULLY');
	} catch (error) {
		console.error(error);
        console.log('DATABASE CONNECTION FAILED');
		process.exit(1);
	}
}

startConnection();
