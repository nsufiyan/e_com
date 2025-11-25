const { Review } = require("../model");

const addReview = async (data) => {
  try {
    return await Review.create(data);
  } catch (err) {
    console.log("ERROR:", err);
    throw new Error(err);
  }
};

const getReview = async (query) => {
  try {
    return await Review.find(query).exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

const updateReview = async (query, updateData) => {
  try {
    return await Review.findOneAndUpdate(query, updateData).exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

const deleteReview = async (query) => {
  try {
    return await Review.findOneAndDelete(query).exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

module.exports = { addReview, getReview, updateReview, deleteReview };
