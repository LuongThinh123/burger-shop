const User = require("../model/User");

const UsersController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  updateUser: async (req, res) => {
    try {
      const userId = req.user.id;
      const fullname = req.body.fullname || "";
      const username = req.body.username || "";
      const email = req.body.email || "";
      const phone = req.body.phone || "";

      const existUserEmail = await User.findOne({
        _id: { $nin: userId },
        email: email,
      });
      if (existUserEmail) {
        return res
          .status(200)
          .json({ errorMessage: "Email is already exist", error: true });
      }

      const existUserName = await User.findOne({
        _id: { $nin: userId },
        username: username,
      });
      if (existUserName) {
        return res
          .status(200)
          .json({ errorMessage: "Username is already exist", error: true });
      }

      await User.updateOne(
        {
          userId: userId,
        },
        { fullname: fullname, username: username, email: email, phone: phone }
      );
      return res
        .status(200)
        .json({ message: "Update userInfor successfully", error: false });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = UsersController;
