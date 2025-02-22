const connectDB = require("../connect/mongo");

module.exports = async (app) => {
  await connectDB();
  console.log("🚀 System initialized");
};
