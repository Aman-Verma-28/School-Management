const request = require("supertest");
const app = require("../app");

describe("📚 Classroom API Tests", () => {
    let token = "";
    let schoolId = "";
    let classroomId = "";

    beforeAll(async () => {
        const loginRes = await request(app)
            .post("/api/auth/login")
            .send({
                email: "test@example.com",
                password: "test123"
            });

        token = loginRes.body.token;
    });

    it("✅ Should create a new classroom", async () => {
        const res = await request(app)
            .post("/api/classrooms")
            .set("Authorization", `Bearer ${token}`)
            .send({
                name: "Physics Lab",
                capacity: 30,
                resources: ["Projector", "Whiteboard"],
                schoolId: schoolId
            });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("classroom");
        classroomId = res.body.classroom._id;
    });

    it("✅ Should retrieve classrooms by school", async () => {
        const res = await request(app)
            .get(`/api/classrooms/${schoolId}`)
            .set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});
