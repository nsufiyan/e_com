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
      enum: [
        "packed",
        "on the way",
        "delivered",
        "delivery failed",
        "cancelled",
      ],
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
    cost: Number,
    expectedBy: { type: Date },
    rating: {
      type: Number,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("order", orderSchema);
