const express = require("express");
// import { engine } from "express-handlebars";
const morgan = require("morgan");
const app = express();
// const handlebars = engine;
const port = 3001;

const route = require("./routes");

//HTTP logger
app.use(morgan("combined"));

//Template engine
// app.engine("handlebars", handlebars());
// app.set("view engine", "handlebars");

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
