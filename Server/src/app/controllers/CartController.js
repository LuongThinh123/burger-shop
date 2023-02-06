const Cart = require("../model/Cart");

const CartController = {
  getCartProducts: async (req, res) => {
    try {
      const userId = req.user.id;

      let cartInfor = await Cart.find(
        {
          userId: userId,
        },
        { _id: 0, productId: 1, quantity: 1 }
      ).populate("productId");

      const result = [];

      cartInfor.map((item) => {
        result.push({
          ...item.productId.toObject(),
          quantity: item.quantity,
        });
      });

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  addProductToCart: async (req, res) => {
    try {
      const userId = req.user.id;
      const productId = req.body.productId;
      const productQuantity = req.body.amount;

      const count = await Cart.countDocuments({
        userId: userId,
        productId: productId,
      });
      
      if (count > 0) {
        await Cart.updateOne(
          {
            userId: userId,
            productId: productId,
          },
          { $inc: { quantity: productQuantity } }
        );
      } else {
        const newCart = await Cart({
          userId: userId,
          productId: productId,
          quantity: productQuantity,
        });

        await newCart.save();
      }

      res.status(200).json("add successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  updateToCart: async (req, res) => {
    try {
      const userId = req.user.id;
      const productId = req.body.productId;
      const productQuantity = req.body.amount;

      await Cart.updateOne(
        {
          userId: userId,
          productId: productId,
        },
        { quantity: productQuantity }
      );
      res.status(200).json("updated successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteProductFromCart: async (req, res) => {
    try {
      const userId = req.user.id;
      const productId = req.body.productId;

      await Cart.deleteOne({ userId, productId });
      res.status(200).json("Delete successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = CartController;
