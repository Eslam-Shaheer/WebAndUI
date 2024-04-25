import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div className="d-flex flex-column  min-vh-100">
      <Toaster />
      <Navbar />
      <div className="bg-light flex-fill">
        <div className=" w-50 mx-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
