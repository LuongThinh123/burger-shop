const newsRouter = require("./news");
const siteRouter = require("./site");
const coursesRouter = require("./courses");
const moviesRouter = require("./movies");

const authenRouter = require("./authen");
const userRouter = require("./users");
const categoriesRouter = require("./categories");
const productsRouter = require("./products");
const cartRouter = require("./cart");
const orderRouter = require("./order");

function route(app) {
  app.use("/auth", authenRouter);
  app.use("/user", userRouter);
  app.use("/categories", categoriesRouter);
  app.use("/products", productsRouter);
  app.use("/cart", cartRouter);
  app.use("/order", orderRouter);

  app.use("/courses", coursesRouter);
  app.use("/news", newsRouter);
  app.use("/movies", moviesRouter);
  app.use("/", siteRouter);
}

module.exports = route;
