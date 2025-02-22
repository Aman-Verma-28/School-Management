const express = require("express");
const { createSchool, getAllSchools } = require("../controllers/schoolController");
const AuthMiddleware = require("../mws/AuthMiddleware");
const RoleMiddleware = require("../mws/RoleMiddleware");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Schools
 *   description: School management endpoints
 */

/**
 * @swagger
 * /api/schools:
 *   post:
 *     summary: Create a new school
 *     tags: [Schools]
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
 *               address:
 *                 type: string
 *               contact:
 *                 type: string
 *               adminId:
 *                 type: string
 *     responses:
 *       201:
 *         description: School created successfully
 *       403:
 *         description: Forbidden (Insufficient permissions)
 */
router.post("/", AuthMiddleware, RoleMiddleware(["Superadmin"]), createSchool);

/**
 * @swagger
 * /api/schools:
 *   get:
 *     summary: Get all schools
 *     tags: [Schools]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of schools
 *       403:
 *         description: Forbidden (Insufficient permissions)
 */
router.get("/", AuthMiddleware, RoleMiddleware(["Superadmin", "SchoolAdmin"]), getAllSchools);

module.exports = router;
