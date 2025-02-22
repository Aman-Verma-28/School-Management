const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "School Management API",
            version: "1.0.0",
            description: "API documentation for the School Management System",
        },
        servers: [
            { url: "http://localhost:8000", description: "Local Server" },
        ],
    },
    apis: ["./routes/*.js"], // Point to your route files
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

const setupSwagger = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
