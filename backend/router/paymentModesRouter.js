const express = require("express");
const { checkSession } = require("../util/sessionCheck");
const { PaymentModesController } = require("../controller");
const paymentModesRouter = express.Router();

paymentModesRouter.get(
  "/get-paymentModes",
  checkSession,
  PaymentModesController.getPaymentModes
);
paymentModesRouter.post(
  "/add-paymentModes",
  checkSession,
  PaymentModesController.addPaymentModes
);
paymentModesRouter.put(
  "/update-paymentModes",
  checkSession,
  PaymentModesController.updatePaymentModes
);
paymentModesRouter.delete(
  "/delete-paymentModes",
  checkSession,
  PaymentModesController.deletePaymentModes
);

module.exports = paymentModesRouter;
