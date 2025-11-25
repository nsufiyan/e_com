const { State } = require("../model");

const addState = async (data) => {
  try {
    return await State.create(data);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const getState = async (query) => {
  try {
    return await State.find(query)
      .populate({
        path: "country",
        model: "country",
        select: "name",
      })
      .exec();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const updateState = async (query, updateData) => {
  try {
    return await State.findOneAndUpdate(query, updateData).exec();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const deleteState = async (query) => {
  try {
    return await State.findOneAndDelete(query).exec();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = { addState, getState, updateState, deleteState };
