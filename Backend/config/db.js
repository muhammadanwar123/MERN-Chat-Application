const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            dbName: "MERN_CHAT_APPLICATION",

        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(); // Exit with a non-zero status code to indicate an error

    }
};

module.exports = connectDB;