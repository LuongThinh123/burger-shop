const Order = require("../model/Order");
const Cart = require("../model/Cart");

const OrderController = {
  getOrders: async (req, res) => {
    try {
      const userId = req.user.id;
      const status = Number(req.query.status);
      let orders;

      if (status !== 0) {
        orders = await Order.find({
          userId: userId,
          "status.code": status,
        });
      } else {
        orders = await Order.find({
          userId: userId,
        });
      }
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  addOrder: async (req, res) => {
    try {
      const userId = req.user.id;
      const products = req.body.products;
      const totalPrice = req.body.totalPrice;
      const paymentMethod = req.body.shippingInfor.payment;
      const orderNum = req.body.shippingInfor.orderNumber;
      const { payment, orderNumber, ...shippingInfor } = req.body.shippingInfor;

      const newOrder = await Order({
        userId: userId,
        orderNumber: orderNum,
        products,
        totalPrice,
        shippingInfor,
        payment: paymentMethod,
      });

      await newOrder.save();

      await Cart.deleteMany({
        userId: userId,
      });

      res.status(200).json("successfully add order");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  updateOrderStatus: async (req, res) => {
    try {
      const userId = req.user.id;
      const orderId = req.body.orderId;
      const statusCode = Number(req.body.status);
      let status;
      switch (statusCode) {
        case 1:
          status = {
            code: 1,
            title: "PENDING",
          };
          break;
        case 2:
          status = {
            code: 2,
            title: "COMPLETED",
          };
          break;
        case 3:
          status = {
            code: 3,
            title: "CANCELED",
          };
          break;
        default:
      }

      await Order.updateOne(
        {
          userId: userId,
          _id: orderId,
        },
        { status: status }
      );
      res.status(200).json("updated successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = OrderController;
