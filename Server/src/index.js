const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();
const port = 8000 || process.env.PORT;

const route = require("./routes");
const db = require("./config/db");

//connect to db
db.connect();

//HTTP logger
app.use(morgan("combined"));

app.use(cors());
app.use(cookieParser());
app.use(express.json());

route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
