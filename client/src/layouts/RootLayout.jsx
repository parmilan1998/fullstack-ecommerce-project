import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/organisms/Header";
import Footer from "../components/templates/Footer";
import TopHeader from "../components/organisms/TopHeader";
import Breadcrumbs from "../components/organisms/Breadcrumbs";

const RootLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div>
      <TopHeader />
      <Header />
      <div className="py-12 max-w-screen-xl mx-auto lg:px-16">
        {!isHomePage && <Breadcrumbs />}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
