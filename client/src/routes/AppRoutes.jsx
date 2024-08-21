import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "../components/pages/HomeScreen";
import AboutScreen from "../components/pages/AboutScreen";
import ContactScreen from "../components/pages/ContactScreen";
import LoginScreen from "../components/pages/LoginScreen";
import SignupScreen from "../components/pages/SignupScreen";
import RootLayout from "../layouts/RootLayout";
import ErrorScreen from "../components/pages/ErrorScreen";
import WishListScreen from "../components/pages/WishListScreen";
import CartScreen from "../components/pages/CartScreen";
import AccountScreen from "../components/pages/AccountScreen";
import Product from "../components/pages/Product";
import ProductDetailsScreen from "../components/pages/ProductDetailsScreen";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="*" element={<ErrorScreen />} />
            <Route path="/wishlist" element={<WishListScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/:id" element={<ProductDetailsScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/account" element={<AccountScreen />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
