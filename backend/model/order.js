const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
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
    transaction: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "transaction",
    },
    transactionMode: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "transactionmode",
    },
    status: {
      type: String,
      enum: ["packed", "on the way", "delivered", "delivery failed"],
      default: "packed",
    },
    coupon: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "coupon",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("order", orderSchema);
