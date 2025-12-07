const express = require("express");
const multer = require("multer");
const { checkSession } = require("../util/sessionCheck");
const { ProductController } = require("../controller");
const productRouter = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "media");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

productRouter.get("/get-product", checkSession, ProductController.getProduct);
productRouter.post(
  "/add-product",
  upload.single("productImage"),
  checkSession,
  ProductController.addProduct
);
productRouter.put(
  "/update-product/:id",
  upload.single("productImage"),
  checkSession,
  ProductController.updateProduct
);
productRouter.delete(
  "/delete-product",
  checkSession,
  ProductController.deleteProduct
);

module.exports = productRouter;
