const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    code: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("country", countrySchema);
