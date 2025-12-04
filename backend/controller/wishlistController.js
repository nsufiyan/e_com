const { WishlistDAO } = require("../dao");

const addWishlist = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Wishlist added successfully",
      data: await WishlistDAO.addWishlist(req.body),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const getWishlist = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Wishlist read successfully",
      data: await WishlistDAO.getWishlist(req.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const updateWishlist = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Wishlist updated successfully",
      data: await WishlistDAO.updateWishlist(
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

const deleteWishlist = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Wishlist deleted successfully",
      data: await WishlistDAO.deleteWishlist(req.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const modifyWishlist = async (req, res, next) => {
  try {
    let response = null;
    let checkExist = await WishlistDAO.getWishlist({ user: req?.body?.user });
    if (checkExist?.length) {
      if (req?.body?.type) {
        // add
        response = await WishlistDAO.updateWishlist(
          { user: req?.body?.user },
          { $push: { item: { qty: 1, product: req?.body?.product } } }
        );
      } else {
        //remove
        response = await WishlistDAO.updateWishlist(
          { user: req?.body?.user },
          { $pull: { item: { product: req?.body?.product } } }
        );
      }
    } else {
      response = await WishlistDAO.addWishlist({
        user: req?.body?.user,
        item: [{ qty: 1, product: req?.body?.product }],
      });
    }
    res.json({
      success: true,
      message: "Wishlist updated successfully",
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
  addWishlist,
  getWishlist,
  updateWishlist,
  deleteWishlist,
  modifyWishlist,
};
