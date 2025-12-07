const express = require("express");
const { checkSession } = require("../util/sessionCheck");
const { CartController } = require("../controller");
const cartRouter = express.Router();

cartRouter.get("/get-cart", checkSession, CartController.getCart);
cartRouter.post("/add-cart", checkSession, CartController.addCart);
cartRouter.put("/update-cart", checkSession, CartController.updateCart);
cartRouter.delete("/delete-cart", checkSession, CartController.deleteCart);
cartRouter.post("/add-to-cart", checkSession, CartController.addToCart);

module.exports = cartRouter;
