const { Order } = require("../model");

const addOrder = async (data) => {
  try {
    return await Order.create(data);
  } catch (err) {
    console.log("ERROR:", err);
    throw new Error(err);
  }
};

const getOrder = async (query) => {
  try {
    return await Order.find(query).exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

const updateOrder = async (query, updateData) => {
  try {
    return await Order.findOneAndUpdate(query, updateData).exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

const deleteOrder = async (query) => {
  try {
    return await Order.findOneAndDelete(query).exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

module.exports = { addOrder, getOrder, updateOrder, deleteOrder };
