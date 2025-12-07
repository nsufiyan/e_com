const express = require("express");
const { checkSession } = require("../util/sessionCheck");
const { DistrictController } = require("../controller");
const districtRouter = express.Router();

districtRouter.get(
  "/get-district",
  checkSession,
  DistrictController.getDistrict
);
districtRouter.post(
  "/add-district",
  checkSession,
  DistrictController.addDistrict
);
districtRouter.put(
  "/update-district",
  checkSession,
  DistrictController.updateDistrict
);
districtRouter.delete(
  "/delete-district",
  checkSession,
  DistrictController.deleteDistrict
);

module.exports = districtRouter;
