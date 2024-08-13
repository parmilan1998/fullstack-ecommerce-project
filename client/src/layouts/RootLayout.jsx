import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import TopHeader from "../components/organisms/TopHeader";

const RootLayout = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <div className="py-12 max-w-screen-xl mx-auto lg:px-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
