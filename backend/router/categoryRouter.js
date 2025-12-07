const express = require("express");
const { checkSession } = require("../util/sessionCheck");
const { CategoryController } = require("../controller");
const categoryRouter = express.Router();

categoryRouter.get(
  "/get-category",
  checkSession,
  CategoryController.getCategory
);
categoryRouter.post(
  "/add-category",
  checkSession,
  CategoryController.addCategory
);
categoryRouter.put(
  "/update-category",
  checkSession,
  CategoryController.updateCategory
);
categoryRouter.delete(
  "/delete-category",
  checkSession,
  CategoryController.deleteCategory
);

module.exports = categoryRouter;
