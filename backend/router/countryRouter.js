const express = require("express");
const { checkSession } = require("../util/sessionCheck");
const { CountryController } = require("../controller");
const countryRouter = express.Router();

countryRouter.get("/get-country", checkSession, CountryController.getCountry);
countryRouter.post("/add-country", checkSession, CountryController.addCountry);
countryRouter.put(
  "/update-country",
  checkSession,
  CountryController.updateCountry
);
countryRouter.delete(
  "/delete-country",
  checkSession,
  CountryController.deleteCountry
);

module.exports = countryRouter;
