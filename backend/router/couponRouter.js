const express = require("express");
const { checkSession } = require("../util/sessionCheck");
const { CouponController } = require("../controller");
const couponRouter = express.Router();

couponRouter.get("/get-coupon", checkSession, CouponController.getCoupon);
couponRouter.post("/add-coupon", checkSession, CouponController.addCoupon);
couponRouter.put("/update-coupon", checkSession, CouponController.updateCoupon);
couponRouter.delete(
  "/delete-coupon",
  checkSession,
  CouponController.deleteCoupon
);

module.exports = couponRouter;
