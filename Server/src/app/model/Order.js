const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.ObjectId,
    },
    orderNumber: {
      type: mongoose.Number,
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
        title: "PENDING",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
