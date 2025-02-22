const School = require("../../models/School");

module.exports = class SchoolManager {
    constructor({ managers }) {
        this.managers = managers;
    }

    async createSchool(data) {
        return await School.create(data);
    }

    async getSchools() {
        return await School.find().populate("adminId", "name email");
    }
};
