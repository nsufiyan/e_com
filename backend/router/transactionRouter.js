const express = require("express");
const { checkSession } = require("../util/sessionCheck");
const { TransactionController } = require("../controller");
const transactionRouter = express.Router();

transactionRouter.get(
  "/get-transaction",
  checkSession,
  TransactionController.getTransaction
);
transactionRouter.post(
  "/add-transaction",
  checkSession,
  TransactionController.addTransaction
);
transactionRouter.put(
  "/update-transaction",
  checkSession,
  TransactionController.updateTransaction
);
transactionRouter.delete(
  "/delete-transaction",
  checkSession,
  TransactionController.deleteTransaction
);

module.exports = transactionRouter;
