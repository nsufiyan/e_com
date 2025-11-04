const mongoose = require("mongoose");

const wishListSchema = new mongoose.Schema(
  {
    item: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "product",
        },
        qty: Number,
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("wishlist", wishListSchema);
