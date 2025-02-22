const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/Users");
const { JWT_SECRET } = require("../config/index.config");

/**
 * User Registration
 */
exports.register = async (req, res) => {
    try {
        const { name, email, password, role, schoolId } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = await User.create({ name, email, password: hashedPassword, role, schoolId });

        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * User Login
 */
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(401).json({ message: "Invalid email or password" });

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid email or password" });

        // Generate JWT token
        const token = jwt.sign({ id: user._id, role: user.role, schoolId: user.schoolId }, JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
