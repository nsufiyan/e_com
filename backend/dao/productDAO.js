const { Product, Stock } = require("../model");

const addProduct = async (data) => {
  try {
    let product = await Product.create(data);

    await Stock.create({ product: product?._id, qty: 0 });
    return product;
  } catch (err) {
    console.log("ERROR:", err);
    throw new Error(err);
  }
};

const getProduct = async (query) => {
  try {
    return await Product.find(query)
      .populate([{ path: "category", model: "category", select: "name" }])
      .exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

const updateProduct = async (query, updateData) => {
  try {
    return await Product.findOneAndUpdate(query, updateData).exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

const deleteProduct = async (query) => {
  try {
    return await Product.findOneAndDelete(query).exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

module.exports = { addProduct, getProduct, updateProduct, deleteProduct };
