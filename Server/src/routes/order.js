const express = require("express");
const router = express.Router();

const orderController = require("../app/controllers/OrderController");
const authenMiddleWare = require("../app/middleware/AuthenMiddleWare");

//productsController.index
router.get("/", authenMiddleWare.verifyToken, orderController.getOrders);
router.post("/", authenMiddleWare.verifyToken, orderController.addOrder);
router.post(
  "/update",
  authenMiddleWare.verifyToken,
  orderController.updateOrderStatus
);

module.exports = router;
