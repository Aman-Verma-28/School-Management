const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const connectDB = require("./connect/mongo");
const ManagersLoader = require("./loaders/ManagersLoader");
const routes = require("./routes");
const errorHandler = require("./mws/ErrorHandler");
const setupSwagger = require("./config/swagger");  // ✅ Import Swagger
const { PORT } = require("./config/index.config");

const app = express();

connectDB().then(() => {
    console.log("✅ MongoDB Connected");

    const managers = new ManagersLoader({ config: require("./config/index.config") }).load();

    app.use(express.json());
    app.use(cors());
    app.use(helmet());

    setupSwagger(app); // ✅ Set up Swagger documentation

    app.use("/api", routes);
    console.log("✅ API routes loaded");

    app.use(errorHandler);

    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
        console.log(`📖 Swagger Docs available at http://localhost:${PORT}/api-docs`);
    });
});

module.exports = app;
