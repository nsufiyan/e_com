const { CartDAO } = require("../dao");
const product = require("../model/product");

const addCart = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Cart added successfully",
      data: await CartDAO.addCart(req.body),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const getCart = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Cart read successfully",
      data: await CartDAO.getCart(req.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const updateCart = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Cart updated successfully",
      data: await CartDAO.updateCart(req.body.query, req.body.updateData),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const deleteCart = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Cart deleted successfully",
      data: await CartDAO.deleteCart(req.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const addToCart = async (req, res, next) => {
  try {
    let response = null;
    let checkExist = await CartDAO.getCart({ user: req?.body?.user });
    if (checkExist?.length) {
      const item = [];
      for (let key in req?.body?.cart) {
        item.push({ product: key, qty: req?.body?.cart?.[key] });
      }
      response = await CartDAO.updateCart(
        { user: req?.body?.user },
        {
          item: item,
        }
      );
    } else {
      const item = [];
      for (let key in req?.body?.cart) {
        item.push({ product: key, qty: req?.body?.cart?.[key] });
      }
      response = await CartDAO.addCart({
        user: req?.body?.user,
        item: item,
      });
    }
    res.json({
      success: true,
      message: "Cart updated successfully",
      data: response,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

module.exports = {
  addCart,
  getCart,
  updateCart,
  deleteCart,
  addToCart,
};
