const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
// const authMiddleware = require("../middlewares/authMiddleware");

// Public route to get all students
router.get("/students", studentController.getAllStudents);
// Public route to get a student by ID
router.get("/students/:id", studentController.getStudentById);
// Protected route to create a new student
router.post("/students", studentController.addStudent);
// Protected route to update a student by ID
router.put("/students/:id", studentController.updateStudentById);
// Protected route to delete a student by ID
router.delete("/students/:id", studentController.deleteStudentById);
module.exports = router;
