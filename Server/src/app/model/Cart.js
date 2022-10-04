const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Cart = new Schema(
  {
    userId: { type: mongoose.ObjectId },
    productId: { type: mongoose.ObjectId },
    quantity: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", Cart);
