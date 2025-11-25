const { Transaction } = require("../model");

const addTransaction = async (data) => {
  try {
    return await Transaction.create(data);
  } catch (err) {
    console.log("ERROR:", err);
    throw new Error(err);
  }
};

const getTransaction = async (query) => {
  try {
    return await Transaction.find(query).exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

const updateTransaction = async (query, updateData) => {
  try {
    return await Transaction.findOneAndUpdate(query, updateData).exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

const deleteTransaction = async (query) => {
  try {
    return await Transaction.findOneAndDelete(query).exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

module.exports = {
  addTransaction,
  getTransaction,
  updateTransaction,
  deleteTransaction,
};
