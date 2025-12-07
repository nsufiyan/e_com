const express = require("express");
const { checkSession } = require("../util/sessionCheck");
const { OrderController } = require("../controller");
const orderRouter = express.Router();

orderRouter.get("/get-order", checkSession, OrderController.getOrder);
orderRouter.post("/add-order", checkSession, OrderController.addOrder);
orderRouter.put("/update-order", checkSession, OrderController.updateOrder);
orderRouter.delete("/delete-order", checkSession, OrderController.deleteOrder);

module.exports = orderRouter;
