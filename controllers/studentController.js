const Student = require("../models/Student");

/**
 * Enroll a student (SchoolAdmin only)
 */
exports.enrollStudent = async (req, res) => {
    try {
        const { name, age, enrolledIn, schoolId } = req.body;
        const student = await Student.create({ name, age, enrolledIn, schoolId });

        res.status(201).json({ message: "Student enrolled successfully", student });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * Get students by school (SchoolAdmin only)
 */
exports.getStudentsBySchool = async (req, res) => {
    try {
        const { schoolId } = req.params;
        const students = await Student.find({ schoolId });

        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
