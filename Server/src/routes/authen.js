const express = require("express");
const router = express.Router();

const authenController = require("../app/controllers/AuthenController");
const authenMiddleWare = require("../app/middleware/AuthenMiddleWare");

//authenController.index
// router.get("/:slug", authenController.show);
// router.get("/", authenController.index);
router.post("/register", authenController.register);
router.post("/login", authenController.login);
router.post("/refresh", authenController.requestRefreshToken);
router.post("/logout", authenMiddleWare.verifyToken, authenController.logout);

module.exports = router;
