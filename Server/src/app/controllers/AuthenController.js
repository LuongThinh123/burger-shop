const User = require("../model/User");
const RefreshToken = require("../model/RefreshToken");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const AuthenController = {
  register: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);
      let errorMessage = "";

      const userNameExistCount = await User.countDocuments({
        username: req.body.username,
      });
      const emailExistCount = await User.countDocuments({
        email: req.body.email,
      });

      if (userNameExistCount > 0 && emailExistCount > 0) {
        errorMessage = "Username and Email already exists";
      } else if (userNameExistCount > 0) {
        errorMessage = "Username already exists";
      } else if (emailExistCount > 0) {
        errorMessage = "Email already exists";
      }

      if (errorMessage) {
        const response = { errorMessage, error: true };
        res.status(200).json(response);
      } else {
        const newUser = await User({
          fullname: req.body.fullname,
          email: req.body.email,
          username: req.body.username,
          password: hashed,
        });
        const user = await newUser.save();
        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, error: false });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  generateAccessToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        admin: user.admin,
      },
      process.env.JWT_ACCESS_KEY,
      { expiresIn: "100d" }
    );
  },

  generateRefreshToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        admin: user.admin,
      },
      process.env.JWT_REFRESH_KEY,
      { expiresIn: "365d" }
    );
  },

  login: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res
          .status(200)
          .json({ errorMessage: "Wrong username", error: true });
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        return res
          .status(200)
          .json({ errorMessage: "Wrong username", error: true });
      }
      if (user && validPassword) {
        const accessToken = AuthenController.generateAccessToken(user);

        const refreshToken = AuthenController.generateRefreshToken(user);

        const newRefreshToken = await RefreshToken({
          userId: user.id,
          refreshToken: refreshToken,
        });

        await newRefreshToken.save();

        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: false,
          path: "/",
          sameSite: "strict",
        });

        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, accessToken });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  requestRefreshToken: async (req, res) => {
    const refreshTokenRequest = req.cookies.refreshToken;
    if (!refreshTokenRequest)
      return res.status(404).json("You are not authenticated");

    const isTokenMatch = await RefreshToken.findOne({
      refreshToken: refreshTokenRequest,
    });

    if (!isTokenMatch) return res.status(404).json("Token is not valid");

    jwt.verify(
      refreshTokenRequest,
      process.env.JWT_REFRESH_KEY,
      async (err, user) => {
        if (err) {
          // await RefreshToken.deleteOne({ refreshToken: refreshTokenRequest });
          res.status(404).json("Token is not valid :((");
        }

        const newAccessToken = AuthenController.generateAccessToken(user);
        const newRefreshToken = AuthenController.generateRefreshToken(user);

        await RefreshToken.updateOne(
          {
            refreshToken: refreshTokenRequest,
          },
          { refreshToken: newRefreshToken }
        );

        res.cookie("refreshToken", newRefreshToken, {
          httpOnly: true,
          secure: false,
          path: "/",
          sameSite: "strict",
        });
        res.status(200).json({ accessToken: newAccessToken });
      }
    );
  },

  logout: async (req, res) => {
    const userId = req.user.id;
    res.clearCookie("refreshToken");
    await RefreshToken.deleteMany({
      userId: userId,
      // refreshToken: req.cookies.refreshToken,
    });
    res.status(200).json("Logout successfully");
  },
};

module.exports = AuthenController;
