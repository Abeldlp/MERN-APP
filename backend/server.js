const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

app.use(cors());
app.use(morgan("dev"));

//MIDDLEWARES

const userRoute = require("./routes/user");
app.use("/users", userRoute);

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
