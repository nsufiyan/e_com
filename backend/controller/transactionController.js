const { TransactionDAO } = require("../dao");

const addTransaction = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Transaction added successfully",
      data: await TransactionDAO.addTransaction(req.body),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const getTransaction = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Transaction read successfully",
      data: await TransactionDAO.getTransaction(req.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const updateTransaction = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Transaction updated successfully",
      data: await TransactionDAO.updateTransaction(req.body.query, req.body.updateData),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const deleteTransaction = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Transaction deleted successfully",
      data: await TransactionDAO.deleteTransaction(req.body.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

module.exports = {
  addTransaction,
  getTransaction,
  updateTransaction,
  deleteTransaction,
};
