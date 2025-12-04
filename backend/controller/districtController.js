const { DistrictDAO } = require("../dao");

const addDistrict = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "District added successfully",
      data: await DistrictDAO.addDistrict(req.body),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const getDistrict = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "District read successfully",
      data: await DistrictDAO.getDistrict(req.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const updateDistrict = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "District updated successfully",
      data: await DistrictDAO.updateDistrict(
        req.body.query,
        req.body.updateData
      ),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const deleteDistrict = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "District deleted successfully",
      data: await DistrictDAO.deleteDistrict(req.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

module.exports = {
  addDistrict,
  getDistrict,
  updateDistrict,
  deleteDistrict,
};
