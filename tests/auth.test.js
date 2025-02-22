const request = require("supertest");
const app = require("../app");

describe("🔑 Authentication API Tests", () => {
    let token = "";

    it("✅ Should register a new user", async () => {
        const res = await request(app)
            .post("/api/auth/register")
            .send({
                name: "Test User",
                email: "test@example.com",
                password: "test123",
                role: "Superadmin"
            });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("user");
    });

    it("✅ Should log in the user", async () => {
        const res = await request(app)
            .post("/api/auth/login")
            .send({
                email: "test@example.com",
                password: "test123"
            });

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("token");
        token = res.body.token;
    });

    it("❌ Should return 401 for invalid credentials", async () => {
        const res = await request(app)
            .post("/api/auth/login")
            .send({
                email: "wrong@example.com",
                password: "wrongpassword"
            });

        expect(res.statusCode).toBe(401);
    });
});
