const { StockDAO } = require("../dao");

const addStock = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Stock added successfully",
      data: await StockDAO.addStock(req.body),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const getStock = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Stock read successfully",
      data: await StockDAO.getStock(req.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const updateStock = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Stock updated successfully",
      data: await StockDAO.updateStock(req.body.query, req.body.updateData),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const deleteStock = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Stock deleted successfully",
      data: await StockDAO.deleteStock(req.body.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

module.exports = {
  addStock,
  getStock,
  updateStock,
  deleteStock,
};
