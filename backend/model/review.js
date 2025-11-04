const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    comment: String,
    image: String,
    rating: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("review", reviewSchema);
