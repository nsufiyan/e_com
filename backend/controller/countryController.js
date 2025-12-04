const { CountryDAO } = require("../dao");

const addCountry = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Country added successfully",
      data: await CountryDAO.addCountry(req.body),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const getCountry = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Country read successfully",
      data: await CountryDAO.getCountry(req.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const updateCountry = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Country updated successfully",
      data: await CountryDAO.updateCountry(req.body.query, req.body.updateData),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const deleteCountry = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Country deleted successfully",
      data: await CountryDAO.deleteCountry(req.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

module.exports = {
  addCountry,
  getCountry,
  updateCountry,
  deleteCountry,
};
