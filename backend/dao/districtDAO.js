const { District } = require("../model");

const addDistrict = async (data) => {
  try {
    return await District.create(data);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const getDistrict = async (query) => {
  try {
    return await District.find(query)
      .populate([
        {
          path: "country",
          model: "country",
          select: "name",
        },
        {
          path: "state",
          model: "state",
          select: "name",
        },
      ])
      .exec();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const updateDistrict = async (query, updateData) => {
  try {
    return await District.findOneAndUpdate(query, updateData).exec();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const deleteDistrict = async (query) => {
  try {
    return await District.findOneAndDelete(query).exec();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = { addDistrict, getDistrict, updateDistrict, deleteDistrict };
