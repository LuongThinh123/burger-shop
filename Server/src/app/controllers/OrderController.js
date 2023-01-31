const Order = require("../model/Order");

const OrderController = {
  getOrders: async (req, res) => {
    try {
      const userId = req.user.id;
      const status = req.query.status;
      let orders;

      if (status) {
        orders = await Order.find({
          userId: userId,
          status: status,
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
    } catch (err) {
      res.status(500).json(err);
    }
  },
  updateOrderStatus: async (req, res) => {
    try {
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = OrderController;
