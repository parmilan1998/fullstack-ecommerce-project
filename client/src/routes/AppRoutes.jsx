import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "../components/pages/HomeScreen";
import AboutScreen from "../components/pages/AboutScreen";
import ContactScreen from "../components/pages/ContactScreen";
import LoginScreen from "../components/pages/LoginScreen";
import SignupScreen from "../components/pages/SignupScreen";
import RootLayout from "../layouts/RootLayout";
import ErrorScreen from "../components/pages/ErrorScreen";

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
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
