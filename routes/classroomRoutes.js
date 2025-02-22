const express = require("express");
const { createClassroom, getClassroomsBySchool } = require("../controllers/classroomController");
const AuthMiddleware = require("../mws/AuthMiddleware");
const RoleMiddleware = require("../mws/RoleMiddleware");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Classrooms
 *   description: Classroom management endpoints
 */

/**
 * @swagger
 * /api/classrooms:
 *   post:
 *     summary: Create a new classroom
 *     tags: [Classrooms]
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
 *                 example: "Physics Lab"
 *               capacity:
 *                 type: number
 *                 example: 30
 *               resources:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["Projector", "Whiteboard"]
 *               schoolId:
 *                 type: string
 *                 example: "67b8a10c289cea26006f7ef6"
 *     responses:
 *       201:
 *         description: Classroom created successfully
 *       400:
 *         description: Invalid input
 *       403:
 *         description: Forbidden (Insufficient permissions)
 */
router.post("/", AuthMiddleware, RoleMiddleware(["Superadmin", "SchoolAdmin"]), createClassroom);

/**
 * @swagger
 * /api/classrooms/{schoolId}:
 *   get:
 *     summary: Get all classrooms in a school
 *     tags: [Classrooms]
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
 *         description: List of classrooms
 *       403:
 *         description: Forbidden (Insufficient permissions)
 */
router.get("/:schoolId", AuthMiddleware, RoleMiddleware(["Superadmin", "SchoolAdmin"]), getClassroomsBySchool);

module.exports = router;
