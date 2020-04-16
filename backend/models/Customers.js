const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);
