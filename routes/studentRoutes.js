const express = require("express");
const { enrollStudent, getStudentsBySchool } = require("../controllers/studentController");
const AuthMiddleware = require("../mws/AuthMiddleware");
const RoleMiddleware = require("../mws/RoleMiddleware");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Student management endpoints
 */

/**
 * @swagger
 * /api/students:
 *   post:
 *     summary: Enroll a new student
 *     tags: [Students]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               age:
 *                 type: number
 *                 example: 15
 *               enrolledIn:
 *                 type: string
 *                 example: "67b89b0c80a17c036afe0041"
 *               schoolId:
 *                 type: string
 *                 example: "67b8a10c289cea26006f7ef6"
 *     responses:
 *       201:
 *         description: Student enrolled successfully
 *       400:
 *         description: Invalid input
 *       403:
 *         description: Forbidden (Insufficient permissions)
 */
router.post("/", AuthMiddleware, RoleMiddleware(["Superadmin", "SchoolAdmin"]), enrollStudent);

/**
 * @swagger
 * /api/students/{schoolId}:
 *   get:
 *     summary: Get all students in a school
 *     tags: [Students]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: schoolId
 *         required: true
 *         schema:
 *           type: string
 *         example: "67b8a10c289cea26006f7ef6"
 *     responses:
 *       200:
 *         description: List of students
 *       403:
 *         description: Forbidden (Insufficient permissions)
 */
router.get("/:schoolId", AuthMiddleware, RoleMiddleware(["Superadmin", "SchoolAdmin"]), getStudentsBySchool);

module.exports = router;
