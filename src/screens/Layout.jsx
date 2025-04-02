import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mb-15 mt-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
