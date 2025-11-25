const { Coupon } = require("../model");

const addCoupon = async (data) => {
  try {
    return await Coupon.create(data);
  } catch (err) {
    console.log("ERROR:", err);
    throw new Error(err);
  }
};

const getCoupon = async (query) => {
  try {
    return await Coupon.find(query).exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

const updateCoupon = async (query, updateData) => {
  try {
    return await Coupon.findOneAndUpdate(query, updateData).exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

const deleteCoupon = async (query) => {
  try {
    return await Coupon.findOneAndDelete(query).exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

module.exports = { addCoupon, getCoupon, updateCoupon, deleteCoupon };
