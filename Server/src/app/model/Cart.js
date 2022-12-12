const mongoose = require("mongoose");

const User = require("./User");
const Product = require("./Products");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Cart = new Schema(
  {
    userId: { type: mongoose.ObjectId, ref: User },
    productId: { type: mongoose.ObjectId, ref: Product },
    quantity: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", Cart);
