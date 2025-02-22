const Classroom = require("../../models/Classroom");

module.exports = class ClassroomManager {
    constructor({ managers }) {
        this.managers = managers;
    }

    async createClassroom(data) {
        return await Classroom.create(data);
    }

    async getClassroomsBySchool(schoolId) {
        return await Classroom.find({ schoolId });
    }
};
