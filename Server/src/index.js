const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = 8000;

const route = require("./routes");
const db = require("./config/db");

//connect to db
db.connect();

//HTTP logger
app.use(morgan("combined"));

app.use(cors());

route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
