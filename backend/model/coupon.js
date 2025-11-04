const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema(
  {
    code: String,
    value: Number,
    redeemedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("coupon", couponSchema);
