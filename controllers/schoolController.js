const School = require("../models/School");

/**
 * Create a new school (Superadmin only)
 */
exports.createSchool = async (req, res) => {
    try {
        const { name, address, contact, adminId } = req.body;
        const school = await School.create({ name, address, contact, adminId });

        res.status(201).json({ message: "School created successfully", school });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * Get all schools (Superadmin only)
 */
exports.getAllSchools = async (req, res) => {
    try {
        const schools = await School.find().populate("adminId", "name email");
        res.status(200).json(schools);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
