const express = require("express");
const router = express.Router();

const usersController = require("../app/controllers/UsersController");
const authenMiddleWare = require("../app/middleware/AuthenMiddleWare");

//usersController.index
// router.get("/:slug", usersController.show);
router.get("/", authenMiddleWare.verifyToken, usersController.getAllUsers);
router.post(
  "/update",
  authenMiddleWare.verifyToken,
  usersController.updateUser
);

// router.delete(
//   "/:id",
//   authenMiddleWare.verifyTokenAndAminAuth,
//   usersController.deleteUser
// );

module.exports = router;
