const express = require("express");
const { checkSession } = require("../util/sessionCheck");
const { StateController } = require("../controller");
const stateRouter = express.Router();

stateRouter.get("/get-state", checkSession, StateController.getState);
stateRouter.post("/add-state", checkSession, StateController.addState);
stateRouter.put("/update-state", checkSession, StateController.updateState);
stateRouter.delete("/delete-state", checkSession, StateController.deleteState);

module.exports = stateRouter;
