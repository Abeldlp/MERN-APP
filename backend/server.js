const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

//MIDDLEWARES

const customersRoute = require("./routes/customers");
const exerciseRoute = require("./routes/exercise");

app.use("/customers", customersRoute);
app.use("/exercise", exerciseRoute);

const PORT = process.env.PORT || 3333;

mongoose.connect(
  process.env.DB_CONECCTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected succesfully to the database");
  }
);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
