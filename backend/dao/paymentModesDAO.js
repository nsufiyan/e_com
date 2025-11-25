const { PaymentModes } = require("../model");

const addPaymentModes = async (data) => {
  try {
    return await PaymentModes.create(data);
  } catch (err) {
    console.log("ERROR:", err);
    throw new Error(err);
  }
};

const getPaymentModes = async (query) => {
  try {
    return await PaymentModes.find(query).exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

const updatePaymentModes = async (query, updateData) => {
  try {
    return await PaymentModes.findOneAndUpdate(query, updateData).exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

const deletePaymentModes = async (query) => {
  try {
    return await PaymentModes.findOneAndDelete(query).exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

module.exports = {
  addPaymentModes,
  getPaymentModes,
  updatePaymentModes,
  deletePaymentModes,
};
