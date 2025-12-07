const express = require("express");
const { checkSession } = require("../util/sessionCheck");
const { ReviewController } = require("../controller");
const reviewRouter = express.Router();

reviewRouter.get("/get-review", checkSession, ReviewController.getReview);
reviewRouter.post("/add-review", checkSession, ReviewController.addReview);
reviewRouter.put("/update-review", checkSession, ReviewController.updateReview);
reviewRouter.delete(
  "/delete-review",
  checkSession,
  ReviewController.deleteReview
);

module.exports = reviewRouter;
