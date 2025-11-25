const { Cart } = require("../model");

const addCart = async (data) => {
  try {
    return await Cart.create(data);
  } catch (err) {
    console.log("ERROR:", err);
    throw new Error(err);
  }
};

const getCart = async (query) => {
  try {
    return await Cart.find(query)
      .populate([
        {
          path: "item.product",
          model: "product",
          select: "name category productImage price",
          populate: {
            path: "category",
            model: "category",
            select: "name",
          },
        },
      ]).exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

const updateCart = async (query, updateData) => {
  try {
    return await Cart.findOneAndUpdate(query, updateData).exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

const deleteCart = async (query) => {
  try {
    return await Cart.findOneAndDelete(query).exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

module.exports = { addCart, getCart, updateCart, deleteCart };
