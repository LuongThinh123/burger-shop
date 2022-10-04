const express = require("express");
const router = express.Router();

const coursesController = require("../app/controllers/CoursesController");

//coursesController.index
router.get("/:slug", coursesController.show);
router.get("/", coursesController.index);

module.exports = router;
