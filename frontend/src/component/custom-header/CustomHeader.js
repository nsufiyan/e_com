import { Link, useNavigate } from "react-router-dom";
import "./CustomHeader.css";
import { useState } from "react";

const CustomHeader = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData") ?? "{}")
  );
  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center">
          <img height={40} src={"/images/ecom-icon.png"} />
          <a className="h1" href="#" style={{ textDecoration: "none" }}>
            Ecom App
          </a>
        </div>
        <div className="d-flex align-items-center">
          {userData?.profilePic ? (
            <img
              height={"40px"}
              width={"40px"}
              className="img-fluid me-4 border"
              src={userData?.profilePic}
              style={{ borderRadius: "50%" }}
            />
          ) : (
            <i
              class="bi bi-person-circle me-4"
              style={{ fontSize: "22px" }}
            ></i>
          )}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{ fontSize: "12px" }}
            ></span>
          </button>
        </div>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={{ width: "200px" }}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Welcome
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 list-group">
              {userData?.userType == "root" ? (
                <li className="nav-item list-group-item h4 text-center">
                  <Link
                    to={"/dashboard/admin-home"}
                    style={{ textDecoration: "none" }}
                  >
                    Admin Home
                  </Link>
                </li>
              ) : (
                ""
              )}
              {userData?.userType == "vendor" ? (
                <li className="nav-item list-group-item h4 text-center">
                  <Link
                    to={"/dashboard/vendor-home"}
                    style={{ textDecoration: "none" }}
                  >
                    Vandor Home
                  </Link>
                </li>
              ) : (
                ""
              )}
              {userData?.userType == "customer" ? (
                <li className="nav-item list-group-item h4 text-center">
                  <Link
                    to={"/dashboard/home"}
                    style={{ textDecoration: "none" }}
                  >
                    Home
                  </Link>
                </li>
              ) : (
                ""
              )}
              <li className="nav-item list-group-item h4 text-center">
                <Link
                  to={"/dashboard/profile"}
                  style={{ textDecoration: "none" }}
                >
                  Profile
                </Link>
              </li>
              {userData?.userType == "root" ? (
                <li className="nav-item list-group-item h4 text-center">
                  <Link
                    to={"/dashboard/country"}
                    style={{ textDecoration: "none" }}
                  >
                    Country
                  </Link>
                </li>
              ) : (
                ""
              )}
              {userData?.userType == "root" ? (
                <li className="nav-item list-group-item h4 text-center">
                  <Link
                    to={"/dashboard/state"}
                    style={{ textDecoration: "none" }}
                  >
                    State
                  </Link>
                </li>
              ) : (
                ""
              )}
              {userData?.userType == "root" ? (
                <li className="nav-item list-group-item h4 text-center">
                  <Link
                    to={"/dashboard/district"}
                    style={{ textDecoration: "none" }}
                  >
                    District
                  </Link>
                </li>
              ) : (
                ""
              )}
              {userData?.userType == "customer" ? (
                <li className="nav-item list-group-item h4 text-center">
                  <Link
                    to={"/dashboard/cart"}
                    style={{ textDecoration: "none" }}
                  >
                    Cart
                  </Link>
                </li>
              ) : (
                ""
              )}
              {userData?.userType == "vendor" ? (
                <li className="nav-item list-group-item h4 text-center">
                  <Link
                    to={"/dashboard/category"}
                    style={{ textDecoration: "none" }}
                  >
                    Categroy
                  </Link>
                </li>
              ) : (
                ""
              )}
              {userData?.userType == "vendor" ? (
                <li className="nav-item list-group-item h4 text-center">
                  <Link
                    to={"/dashboard/coupon"}
                    style={{ textDecoration: "none" }}
                  >
                    Coupon
                  </Link>
                </li>
              ) : (
                ""
              )}
              {userData?.userType == "customer" ? (
                <li className="nav-item list-group-item h4 text-center">
                  <Link
                    to={"/dashboard/order"}
                    style={{ textDecoration: "none" }}
                  >
                    Order
                  </Link>
                </li>
              ) : (
                ""
              )}
              {userData?.userType == "vendor" ? (
                <li className="nav-item list-group-item h4 text-center">
                  <Link
                    to={"/dashboard/vendor-order"}
                    style={{ textDecoration: "none" }}
                  >
                    Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
              {userData?.userType == "customer" ? (
                <li className="nav-item list-group-item h4 text-center">
                  <Link
                    to={"/dashboard/payment-modes"}
                    style={{ textDecoration: "none" }}
                  >
                    Payment Modes
                  </Link>
                </li>
              ) : (
                ""
              )}
              {userData?.userType == "vendor" ? (
                <li className="nav-item list-group-item h4 text-center">
                  <Link
                    to={"/dashboard/product"}
                    style={{ textDecoration: "none" }}
                  >
                    Product
                  </Link>
                </li>
              ) : (
                ""
              )}
              {/* {userData?.userType != "root" ? (
                <li className="nav-item list-group-item h4 text-center">
                  <Link
                    to={"/dashboard/review"}
                    style={{ textDecoration: "none" }}
                  >
                    Review
                  </Link>
                </li>
              ) : (
                ""
              )} */}
              {userData?.userType == "vendor" ? (
                <li className="nav-item list-group-item h4 text-center">
                  <Link
                    to={"/dashboard/stock"}
                    style={{ textDecoration: "none" }}
                  >
                    Stock
                  </Link>
                </li>
              ) : (
                ""
              )}
              {userData?.userType == "vendor" ? (
                <li className="nav-item list-group-item h4 text-center">
                  <Link
                    to={"/dashboard/transaction"}
                    style={{ textDecoration: "none" }}
                  >
                    Transaction
                  </Link>
                </li>
              ) : (
                ""
              )}
              {userData?.userType == "customer" ? (
                <li className="nav-item list-group-item h4 text-center">
                  <Link
                    to={"/dashboard/wishlist"}
                    style={{ textDecoration: "none" }}
                  >
                    Wishlist
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            <button
              className="mt-4 w-100 btn btn-danger"
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CustomHeader;
