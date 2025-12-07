const express = require("express");
const multer = require("multer");
const { checkSession } = require("../util/sessionCheck");
const { UserController } = require("../controller");
const userRouter = express.Router();
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

userRouter.post("/login", UserController.login);
userRouter.get("/get-user", checkSession, UserController.getUser);
userRouter.post(
  "/add-user",
  upload.single("profilePic"),
  UserController.addUser
);
userRouter.put(
  "/update-user/:id",
  upload.single("profilePic"),
  checkSession,
  UserController.updateUser
);
userRouter.delete("/delete-user", checkSession, UserController.deleteUser);
userRouter.post("/validate-session", UserController.validateSession);
userRouter.get("/vendor-stats", UserController.vendorDashboardStats);
userRouter.get("/admin-stats", UserController.adminDashboardStats);

module.exports = userRouter;
