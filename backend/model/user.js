const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fName: {
      type: String,
      required: true,
    },
    mName: String,
    lName: String,
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: String,
    pinCode: String,
    profilePic: String,
    password: String,
    country: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "country",
    },
    state: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "state",
    },
    district: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "district",
    },
    userType: {
      type: String,
      enum: ["root", "vendor", "customer"],
      default: "customer",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
