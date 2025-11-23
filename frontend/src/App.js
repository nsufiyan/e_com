import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./container/login/Login";
import Error from "./container/error/Error";
import Signup from "./container/signup/Signup";
import Home from "./container/home/Home";
import MainLayout from "./component/main-layout/MainLayout";
import Profile from "./container/profile/Profile";
import Country from "./container/country/Country";
import State from "./container/state/State";
import District from "./container/district/District";
import Cart from "./container/cart/Cart";
import Category from "./container/category/Category";
import Coupon from "./container/coupon/Coupon";
import Order from "./container/order/Order";
import PaymentModes from "./container/payment-modes/PaymentModes";
import Product from "./container/product/Product";
import Review from "./container/review/Review";
import Stock from "./container/stock/Stock";
import Transaction from "./container/transaction/Transaction";
import Wishlist from "./container/wishlist/Wishlist";
import VendorHome from "./container/vendor-home/VendorHome";
import AdminHome from "./container/admin-home/AdminHome";
import VendorOrder from "./container/vendor-order/VendorOrder";
import ProtectedRoute from "./component/protected-route/ProtectedRoute";
import "./App.css";

function App() {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData") ?? "{}")
  );

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData") ?? "{}"));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route
              path="/dashboard/home"
              element={<Home userData={userData} />}
            />
            <Route
              path="/dashboard/vendor-home"
              element={<VendorHome userData={userData} />}
            />
            <Route
              path="/dashboard/admin-home"
              element={<AdminHome userData={userData} />}
            />
            <Route path="/dashboard/profile" element={<Profile userData={userData} />} />
            <Route path="/dashboard/country" element={<Country userData={userData} />} />
            <Route path="/dashboard/state" element={<State userData={userData} />} />
            <Route
              path="/dashboard/district"
              element={<District userData={userData} />}
            />
            <Route path="/dashboard/cart" element={<Cart userData={userData} />} />
            <Route
              path="/dashboard/category"
              element={<Category userData={userData} />}
            />
            <Route path="/dashboard/coupon" element={<Coupon userData={userData} />} />
            <Route path="/dashboard/order" element={<Order userData={userData} />} />
            <Route
              path="/dashboard/vendor-order"
              element={<VendorOrder userData={userData} />}
            />
            <Route
              path="/dashboard/payment-modes"
              element={<PaymentModes userData={userData} />}
            />
            <Route path="/dashboard/product" element={<Product userData={userData} />} />
            <Route path="/dashboard/review" element={<Review userData={userData} />} />
            <Route path="/dashboard/stock" element={<Stock userData={userData} />} />
            <Route
              path="/dashboard/transaction"
              element={<Transaction userData={userData} />}
            />
            <Route
              path="/dashboard/wishlist"
              element={<Wishlist userData={userData} />}
            />
          </Route>
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
