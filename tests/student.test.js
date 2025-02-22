const request = require("supertest");
const app = require("../app");

describe("🧑‍🎓 Student API Tests", () => {
    let token = "";
    let schoolId = "";
    let classroomId = "";
    let studentId = "";

    beforeAll(async () => {
        const loginRes = await request(app)
            .post("/api/auth/login")
            .send({
                email: "test@example.com",
                password: "test123"
            });

        token = loginRes.body.token;
    });

    it("✅ Should enroll a new student", async () => {
        const res = await request(app)
            .post("/api/students")
            .set("Authorization", `Bearer ${token}`)
            .send({
                name: "John Doe",
                age: 15,
                enrolledIn: classroomId,
                schoolId: schoolId
            });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("student");
        studentId = res.body.student._id;
    });

    it("✅ Should retrieve students by school", async () => {
        const res = await request(app)
            .get(`/api/students/${schoolId}`)
            .set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});
