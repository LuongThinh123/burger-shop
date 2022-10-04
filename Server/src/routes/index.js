const newsRouter = require("./news");
const siteRouter = require("./site");
const coursesRouter = require("./courses");
const productsRouter = require("./products");

function route(app) {
  app.use("/products", productsRouter);
  app.use("/courses", coursesRouter);
  app.use("/news", newsRouter);

  app.use("/", siteRouter);
}

module.exports = route;
