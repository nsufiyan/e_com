const mongoose = require("mongoose");

const districtSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: String,
    country: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "country",
    },
    state: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "state",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("district", districtSchema);
