import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import axiosInstance from "../../util/axiosInstance";
import routeMap from "../../util/routeUtil"

const ProtectedRoute = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const validateSession = async () => {
    try {
      let sessionData = await axiosInstance.post(
        "http://localhost:4000/user/validate-session",
        {}
      );
      if (sessionData?.data) {
        switch (sessionData?.data?.userType) {
          case "root":
            if (!routeMap?.root.includes(location?.pathname)) {
              // alert("Not authorised for the page!");
              navigate("/dashboard/admin-home");
            }
            break;
          case "customer":
            if (!routeMap?.customer.includes(location?.pathname)) {
              // alert("Not authorised for the page!");
              navigate("/dashboard/home");
            }
            break;
          case "vendor":
            if (!routeMap?.vendor.includes(location?.pathname)) {
              // alert("Not authorised for the page!");
              navigate("/dashboard/vendor-home");
            }
            break;
        }
      } else {
        localStorage.clear();
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    validateSession();
  }, [location?.pathname]);

  return <Outlet />;
};

export default ProtectedRoute;
