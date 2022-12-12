const express = require("express");
const router = express.Router();

const cartController = require("../app/controllers/CartController");
const authenMiddleWare = require("../app/middleware/AuthenMiddleWare");

router.get("/", authenMiddleWare.verifyToken, cartController.getCartProducts);
router.post("/", authenMiddleWare.verifyToken, cartController.addProductToCart);
router.post(
  "/update",
  authenMiddleWare.verifyToken,
  cartController.updateToCart
);
router.post(
  "/delete",
  authenMiddleWare.verifyToken,
  cartController.deleteProductFromCart
);

module.exports = router;
