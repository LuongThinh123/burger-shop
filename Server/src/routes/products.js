const express = require("express");
const router = express.Router();

const productsController = require("../app/controllers/ProductsController");

//productsController.index
router.get("/random", productsController.getRandomProducts);
router.get("/:id", productsController.show);
router.get("/", productsController.index);

module.exports = router;
