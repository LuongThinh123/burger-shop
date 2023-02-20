const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema(
  {
    fullname: { type: String, min: 6, maxLength: 255, required: true },
    username: {
      type: String,
      min: 6,
      maxLength: 25,
      required: true,
      unique: true,
    },
    email: { type: String, maxLength: 255, unique: true },
    phone: {
      type: String,
      default: "",
    },
    password: { type: String, min: 6, maxLength: 255, required: true },
    avatar: { type: String, default: "" },
    admin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);
