const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    code: String,
    country: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "country",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("state", stateSchema);
