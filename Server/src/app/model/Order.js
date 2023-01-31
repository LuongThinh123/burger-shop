const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.ObjectId,
    },
    products: {
      type: Array,
    },
    totalPrice: {
      type: Number,
    },
    shippingInfor: {
      type: Object,
    },
    payment: {
      type: String,
    },
    status: {
      type: Object,
      default: {
        code: 1,
        title: "Pending",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
