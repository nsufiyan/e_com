const { Country } = require("../model");

const addCountry = async (data) => {
  try {
    return await Country.create(data);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const getCountry = async (query) => {
  try {
    return await Country.find(query).exec();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const updateCountry = async (query, updateData) => {
  try {
    return await Country.findOneAndUpdate(query, updateData).exec();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const deleteCountry = async (query) => {
  try {
    return await Country.findOneAndDelete(query).exec();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = { addCountry, getCountry, updateCountry, deleteCountry };
