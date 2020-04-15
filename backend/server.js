const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(morgan("dev"));

//MIDDLEWARES

const userRoute = require("./routes/user");
app.use("/users", userRoute);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
