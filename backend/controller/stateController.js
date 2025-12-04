const { StateDAO } = require("../dao");

const addState = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "State added successfully",
      data: await StateDAO.addState(req.body),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const getState = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "State read successfully",
      data: await StateDAO.getState(req.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const updateState = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "State updated successfully",
      data: await StateDAO.updateState(req.body.query, req.body.updateData),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const deleteState = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "State deleted successfully",
      data: await StateDAO.deleteState(req.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

module.exports = {
  addState,
  getState,
  updateState,
  deleteState,
};
