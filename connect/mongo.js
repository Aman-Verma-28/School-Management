const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/index.config");

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000, // Wait only 5 seconds for MongoDB response
        });

        console.log("✅ MongoDB Connected to Atlas");
    } catch (err) {
        console.error("❌ Database connection error:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
