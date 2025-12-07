const express = require("express");
const { checkSession } = require("../util/sessionCheck");
const { WishlistController } = require("../controller");
const wishlistRouter = express.Router();

wishlistRouter.get(
  "/get-wishlist",
  checkSession,
  WishlistController.getWishlist
);
wishlistRouter.post(
  "/add-wishlist",
  checkSession,
  WishlistController.addWishlist
);
wishlistRouter.post(
  "/add-item-wishlist",
  checkSession,
  WishlistController.modifyWishlist
);
wishlistRouter.put(
  "/update-wishlist",
  checkSession,
  WishlistController.updateWishlist
);
wishlistRouter.delete(
  "/delete-wishlist",
  checkSession,
  WishlistController.deleteWishlist
);

module.exports = wishlistRouter;
