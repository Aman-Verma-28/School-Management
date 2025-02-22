const AuthMiddleware = require("../mws/AuthMiddleware");
const RoleMiddleware = require("../mws/RoleMiddleware");
const RateLimiter = require("../mws/RateLimiter");

module.exports = class MiddlewaresLoader {
    constructor({ managers }) {
        this.managers = managers;
    }

    load() {
        return {
            auth: AuthMiddleware,
            role: RoleMiddleware,
            rateLimit: RateLimiter,
        };
    }
};
