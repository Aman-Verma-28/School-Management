const Student = require("../../models/Student");

module.exports = class StudentManager {
    constructor({ managers }) {
        this.managers = managers;
    }

    async enrollStudent(data) {
        return await Student.create(data);
    }

    async getStudentsBySchool(schoolId) {
        return await Student.find({ schoolId });
    }
};
