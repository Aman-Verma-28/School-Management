const Classroom = require("../models/Classroom");

/**
 * Create a new classroom (SchoolAdmin only)
 */
exports.createClassroom = async (req, res) => {
    try {
        const { name, capacity, resources, schoolId } = req.body;
        const classroom = await Classroom.create({ name, capacity, resources, schoolId });

        res.status(201).json({ message: "Classroom created successfully", classroom });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * Get classrooms by school (SchoolAdmin only)
 */
exports.getClassroomsBySchool = async (req, res) => {
    try {
        const { schoolId } = req.params;
        const classrooms = await Classroom.find({ schoolId });

        res.status(200).json(classrooms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
