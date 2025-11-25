const { Stock } = require("../model");

const addStock = async (data) => {
  try {
    return await Stock.create(data);
  } catch (err) {
    console.log("ERROR:", err);
    throw new Error(err);
  }
};

const getStock = async (query) => {
  try {
    return await Stock.find(query)
      .populate({
        path: "product",
        model: "product",
        populate: {
          path: "category",
          model: "category",
          select: "name",
        },
      })
      .exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

const updateStock = async (query, updateData) => {
  try {
    return await Stock.findOneAndUpdate(query, updateData).exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

const deleteStock = async (query) => {
  try {
    return await Stock.findOneAndDelete(query).exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

module.exports = { addStock, getStock, updateStock, deleteStock };
