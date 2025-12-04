const { ProductDAO } = require("../dao");

const addProduct = async (req, res, next) => {
  try {
    if (req?.file?.originalname) {
      req.body.productImage = `http://localhost:4000/${req.file.originalname}`;
    }
    req.body.price = JSON.parse(req.body.price);
    res.json({
      success: true,
      message: "Product added successfully",
      data: await ProductDAO.addProduct(req.body),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const getProduct = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Product read successfully",
      data: await ProductDAO.getProduct(req.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const updateProduct = async (req, res, next) => {
  try {
    if (req?.file?.originalname) {
      req.body.productImage = `http://localhost:4000/${req.file.originalname}`;
    }
    req.body.price = JSON.parse(req.body.price);
    res.json({
      success: true,
      message: "Product updated successfully",
      data: await ProductDAO.updateProduct({ _id: req?.params?.id }, req.body),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Product deleted successfully",
      data: await ProductDAO.deleteProduct(req.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

module.exports = {
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
