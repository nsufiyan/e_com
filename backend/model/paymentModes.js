const mongoose = require("mongoose");

const paymentModeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("paymentmode", paymentModeSchema);
