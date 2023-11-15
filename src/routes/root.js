import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

function root() {
  return (
    <div className="app">
      <SideBar />
      <div className="page-footer">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default root;
