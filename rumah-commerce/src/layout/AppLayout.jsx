import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HeaderSecondary } from "./HeaderSecondary";
import { HeaderPrimary } from "./HeaderPrimary";
import { Footer } from "./Footer";
import { AppRouter } from "../router/AppRouter";

export const AppLayout = () => {
  return (
    <>
      <Router>
        <HeaderSecondary />
        <HeaderPrimary />
        <AppRouter />
        <Footer />
      </Router>
    </>
  );
};
