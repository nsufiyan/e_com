import { Outlet } from "react-router-dom";
import "./MainLayout.css";
import CustomHeader from "../custom-header/CustomHeader";

const MainLayout = () => {
  return (
    <div>
      <div style={{ height: "10vh" }} className="bg-light">
        <CustomHeader />
      </div>
      <div style={{ height: "88vh" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
