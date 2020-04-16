const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
  {
    username: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);
