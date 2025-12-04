const { CouponDAO } = require("../dao");

const addCoupon = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Coupon added successfully",
      data: await CouponDAO.addCoupon(req.body),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const getCoupon = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Coupon read successfully",
      data: await CouponDAO.getCoupon(req.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const updateCoupon = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Coupon updated successfully",
      data: await CouponDAO.updateCoupon(req.body.query, req.body.updateData),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const deleteCoupon = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Coupon deleted successfully",
      data: await CouponDAO.deleteCoupon(req.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

module.exports = {
  addCoupon,
  getCoupon,
  updateCoupon,
  deleteCoupon,
};
