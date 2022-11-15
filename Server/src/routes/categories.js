const express = require("express");
const router = express.Router();

const categoriesController = require("../app/controllers/CategoriesController");

//categoriesController.index
// router.get("/:slug", categoriesController.show);
router.get("/", categoriesController.getCategories);

module.exports = router;
