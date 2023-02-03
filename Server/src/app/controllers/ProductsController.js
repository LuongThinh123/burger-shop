const Product = require("../model/Products");
const Category = require("../model/Category");

const ProductsController = {
  //[GET] /products/
  index: async (req, res, next) => {
    try {
      const page = parseInt(req.query.page) - 1 || 0;
      const limit = parseInt(req.query.limit) || 6;
      const search = req.query.search || "";
      let price = req.query.price || "";
      let sort = req.query.sort || "default";
      let order = req.query.order || "";
      let categoryFilter = req.query.categoryIdList || "ALL";
      // let sort = req.query.sort || "price";

      if (price === "") {
        price = ["0", "30"];
      } else price = price.split(",");
      // const page = parseInt(req.params.page) - 1 || 0;
      // const limit = parseInt(req.params.limit) || 6;
      // const search = req.params.search || "";
      // let sort = req.params.sort || "default";
      // let order = req.params.order || "desc";
      // let categoryFilter = req.params.categoryIdList || "ALL";

      // console.log(categoryFilter);
      // const categoryIdList = await Category.find({}, { _id: 1 });

      // if (req.query.categories) {
      //   categoryFilter = req.query.categories.split(",");
      // }

      // const categoryOptions = [
      //   "Action",
      //   "Romance",
      //   "Fantasy",
      //   "Drama",
      //   "Crime",
      //   "Adventure",
      //   "Thriller",
      //   "Sci-fi",
      //   "Music",
      //   "Family",
      // ];
      if (categoryFilter === "ALL") {
        let categoryList = await Category.find({});
        categoryFilter = [...categoryList];
      } else {
        categoryFilter = req.query.categoryIdList.split(",");
      }

      // categoryFilter === "ALL"
      //   ? (categoryFilter = [...categoryIdList])
      //   : (categoryFilter = req.query.category.split(","));

      // req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);
      let products;
      if (sort === "default") {
        products = await Product.find({
          title: { $regex: search, $options: "i" },
          sale: { $gte: price[0], $lte: price[1] },
          // categoryId: {$in: }
        })
          .where("categoryId")
          .in([...categoryFilter])
          .skip(page * limit)
          .limit(limit);
      } else {
        let sortBy = {};
        sortBy[sort] = order;
        products = await Product.find({
          title: { $regex: search, $options: "i" },
          sale: { $gte: price[0], $lte: price[1] },
        })
          .where("categoryId")
          .in([...categoryFilter])
          .sort(sortBy)
          .skip(page * limit)
          .limit(limit);
      }

      // let sortBy = {};
      // if (sort[1]) {
      //   sortBy[sort[0]] = sort[1];
      // } else {
      //   sortBy[sort[0]] = "asc";
      // }

      // const products = await Product.find({
      //   name: { $regex: search, $options: "i" },
      // })
      //   .where("categoryId")
      //   .in([...category])
      //   .sort(sortBy)
      //   .skip(page * limit)
      //   .limit(limit);

      const total = await Product.countDocuments({
        categoryId: { $in: [...categoryFilter] },
        title: { $regex: search, $options: "i" },
        sale: { $gte: price[0], $lte: price[1] },
      });

      const response = {
        error: false,
        categoryList: req.query.categoryIdList,
        total,
        page: page + 1,
        limit,
        products,
        priceMin: price[0],
        priceMax: price[1],
      };

      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: true, message: err.message });
    }
  },

  //[GET] /products/:slug
  show: async (req, res, next) => {
    try {
      const product = await Product.findOne({ _id: req.params.id });
      res.status(200).json(product);
    } catch (err) {
      next(err);
    }
  },

  //[GET] /products/random?number='your number'
  getRandomProducts: async (req, res, next) => {
    try {
      const products = await Product.aggregate().sample(
        Number(req.query.number)
      );
      res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  },
};

// ProductsController.index();

async function getList() {
  const categoryIdList = await Category.find({
    _id: { $in: ["6352bc20c53137365907dc98", "6352bc5bc53137365907dc99"] },
  });

  // const product = await Product.find({
  //   title: { $regex: "pizza", $options: "i" },
  //   categoryId: {
  //     $in: [...categoryIdList],
  //   },
  //   // price: { $gte: "4.99", $lte: "16.99" },
  // }).sort({ price: "desc" });

  // .populate("categoryId")
  // .where("categoryId")
  // // .all(["Desserts"]);
  // .in([
  //   {
  //     _id: "6352bc66c53137365907dc9a",
  //     title: "Desserts",
  //   },
  // ]);
  console.log(categoryIdList);
}

// getList();

module.exports = ProductsController;
