const Product = require("../model/Products");

const ProductsController = {
  //[GET] /products/
  index: async (req, res, next) => {
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (err) {
      res.status(404).json({ message: "Lỗi cmnr" });
    }
  },
  //[GET] /products/:slug
  show: async (req, res, next) => {
    try {
      let product = await Product.findOne({ slug: req.params.slug });
      console.log(req.params.slug);
      console.log(product);
      res.status(200).res.json(product);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = ProductsController;
