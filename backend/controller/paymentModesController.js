const { PaymentModesDAO } = require("../dao");

const addPaymentModes = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "PaymentModes added successfully",
      data: await PaymentModesDAO.addPaymentModes(req.body),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const getPaymentModes = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "PaymentModes read successfully",
      data: await PaymentModesDAO.getPaymentModes(req.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const updatePaymentModes = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "PaymentModes updated successfully",
      data: await PaymentModesDAO.updatePaymentModes(req.body.query, req.body.updateData),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const deletePaymentModes = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "PaymentModes deleted successfully",
      data: await PaymentModesDAO.deletePaymentModes(req.body.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

module.exports = {
  addPaymentModes,
  getPaymentModes,
  updatePaymentModes,
  deletePaymentModes,
};
