const express = require("express");
const { checkSession } = require("../util/sessionCheck");
const { StockController } = require("../controller");
const stockRouter = express.Router();

stockRouter.get("/get-stock", checkSession, StockController.getStock);
stockRouter.post("/add-stock", checkSession, StockController.addStock);
stockRouter.put("/update-stock", checkSession, StockController.updateStock);
stockRouter.delete("/delete-stock", checkSession, StockController.deleteStock);

module.exports = stockRouter;
