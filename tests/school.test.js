const request = require("supertest");
const app = require("../app");

describe("🏫 School API Tests", () => {
    let token = "";
    let schoolId = "";

    beforeAll(async () => {
        const loginRes = await request(app)
            .post("/api/auth/login")
            .send({
                email: "test@example.com",
                password: "test123"
            });

        token = loginRes.body.token;
    });

    it("✅ Should create a new school", async () => {
        const res = await request(app)
            .post("/api/schools")
            .set("Authorization", `Bearer ${token}`)
            .send({
                name: "Greenwood High",
                address: "123 School St",
                contact: "123-456-7890",
                adminId: "someAdminId"
            });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("school");
        schoolId = res.body.school._id;
    });

    it("✅ Should retrieve all schools", async () => {
        const res = await request(app)
            .get("/api/schools")
            .set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    it("❌ Should return 403 for unauthorized user", async () => {
        const res = await request(app)
            .get("/api/schools");

        expect(res.statusCode).toBe(403);
    });
});
