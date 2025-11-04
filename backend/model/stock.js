const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
    qty: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("stock", stockSchema);
