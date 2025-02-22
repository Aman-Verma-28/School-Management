const SchoolValidation = require("../managers/school/School.validation");
const ClassroomValidation = require("../managers/classroom/Classroom.validation");
const StudentValidation = require("../managers/student/Student.validation");

module.exports = class ValidatorsLoader {
    constructor() {}

    load() {
        return {
            school: SchoolValidation,
            classroom: ClassroomValidation,
            student: StudentValidation,
        };
    }
};
