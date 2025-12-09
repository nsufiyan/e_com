const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
    productImage: String,
    price: [
      {
        amount: Number,
        type: {
          type: String,
          enum: ["inc", "dec"],
        },
        label: String,
      },
    ],
    vendor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
