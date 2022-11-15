const express = require("express");
const router = express.Router();

const movieController = require("../app/controllers/MovieController");

//movieController.index

router.get("/:slug", movieController.show);
router.get("/", movieController.index);

module.exports = router;
