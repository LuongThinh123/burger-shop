const jwt = require("jsonwebtoken");

const AuthenMiddleWare = {
  verifyToken: (req, res, next) => {
    const token = req.headers.token;
    if (token) {
      const accessToken = token.split(" ")[1];
      jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
        if (err) {
          return res.status(403).json("Token is not valid");
        }

        req.user = user;
        next();
      });
    } else {
      return res.status(401).json("You're not authenticated");
    }
  },
  verifyTokenAndAminAuth: (req, res, next) => {
    AuthenMiddleWare.verifyToken(req, res, () => {
      if (req.user.id == req.params.id || req.user.admin) {
        next();
      } else {
        return res.status(403).json("You're not allowed to do this");
      }
    });
  },
};

module.exports = AuthenMiddleWare;
