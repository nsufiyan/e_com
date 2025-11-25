const { Category } = require("../model");

const addCategory = async (data) => {
  try {
    return await Category.create(data);
  } catch (err) {
    console.log("ERROR:", err);
    throw new Error(err);
  }
};

const getCategory = async (query) => {
  try {
    return await Category.find(query).exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

const updateCategory = async (query, updateData) => {
  try {
    return await Category.findOneAndUpdate(query, updateData).exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

const deleteCategory = async (query) => {
  try {
    return await Category.findOneAndDelete(query).exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

module.exports = { addCategory, getCategory, updateCategory, deleteCategory };
