const Category = require("../model/Category");

const CategoriesController = {
  getCategories: async (req, res) => {
    try {
      const categories = await Category.find({});
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = CategoriesController;
