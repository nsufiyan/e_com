const { ReviewDAO } = require("../dao");

const addReview = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Review added successfully",
      data: await ReviewDAO.addReview(req.body),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const getReview = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Review read successfully",
      data: await ReviewDAO.getReview(req.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const updateReview = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Review updated successfully",
      data: await ReviewDAO.updateReview(req.body.query, req.body.updateData),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const deleteReview = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Review deleted successfully",
      data: await ReviewDAO.deleteReview(req.body.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

module.exports = {
  addReview,
  getReview,
  updateReview,
  deleteReview,
};
