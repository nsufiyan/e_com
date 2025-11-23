require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
let session = require("express-session");
let MongoDBStore = require("connect-mongodb-session")(session);
const path = require("path");
const {
  CartRouter,
  CategoryRouter,
  CountryRouter,
  CouponRouter,
  DistrictRouter,
  OrderRouter,
  PaymentModesRouter,
  ProductRouter,
  ReviewRouter,
  StateRouter,
  StockRouter,
  TransactionRouter,
  UserRouter,
  WishlistRouter,
} = require("./router");
const app = express();
app.use(express.json());

var store = new MongoDBStore({
  uri: process.env.DB_URL,
  collection: "mySessions",
});
store.on("error", function (error) {
  console.log(error);
});
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.static(path.join(__dirname, "/media")));

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("MongoDb connected successfully on port 27017");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(
  require("express-session")({
    secret: process.env.SESSION_KEY,
    cookie: {
      // maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      maxAge: 1000 * 60 * 60 * 2, // 2 Hours
      secure: false,
      httpOnly: true,
    },
    store: store,
    resave: false,
    saveUninitialized: false,
  })
);

app.use((req, res, next) => {
  console.log(`${new Date()} :: ${req.method} :: ${req.path} :: ${JSON.stringify(req.body)}`);
  next();
});

app.use("/cart", CartRouter);
app.use("/category", CategoryRouter);
app.use("/country", CountryRouter);
app.use("/coupon", CouponRouter);
app.use("/district", DistrictRouter);
app.use("/order", OrderRouter);
app.use("/paymentModes", PaymentModesRouter);
app.use("/product", ProductRouter);
app.use("/review", ReviewRouter);
app.use("/state", StateRouter);
app.use("/stock", StockRouter);
app.use("/transaction", TransactionRouter);
app.use("/user", UserRouter);
app.use("/wishlist", WishlistRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`);
});
