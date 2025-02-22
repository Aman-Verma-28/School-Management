const express = require("express");
const authRoutes = require("./authRoutes");
const schoolRoutes = require("./schoolRoutes");
const classroomRoutes = require("./classroomRoutes");
const studentRoutes = require("./studentRoutes");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/schools", schoolRoutes);
router.use("/classrooms", classroomRoutes);
router.use("/students", studentRoutes);

console.log("✅ All routes loaded in index.js");

module.exports = router;
