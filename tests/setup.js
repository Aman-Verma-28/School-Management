const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");

require("dotenv").config();

beforeAll(async () => {
    jest.setTimeout(30000);  // ✅ Increase timeout to avoid test failures
    await mongoose.connect(process.env.MONGO_URI, {
        serverSelectionTimeoutMS: 5000,  // Prevents infinite waiting
    });

    console.log("✅ Connected to test database");
});

afterAll(async () => {
    await mongoose.connection.close();
    console.log("✅ Test database connection closed");
});
