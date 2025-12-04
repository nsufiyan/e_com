const { CategoryDAO } = require("../dao");

const addCategory = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Category added successfully",
      data: await CategoryDAO.addCategory(req.body),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const getCategory = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Category read successfully",
      data: await CategoryDAO.getCategory(req.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const updateCategory = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Category updated successfully",
      data: await CategoryDAO.updateCategory(
        req.body.query,
        req.body.updateData
      ),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Category deleted successfully",
      data: await CategoryDAO.deleteCategory(req.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

module.exports = {
  addCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};
