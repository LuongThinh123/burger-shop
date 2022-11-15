const mongoose = require("mongoose");

const refreshToken = new mongoose.Schema(
  {
    userId: {
      type: mongoose.ObjectId,
      required: true,
    },
    refreshToken: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("RefreshToken", refreshToken);
