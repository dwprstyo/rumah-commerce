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
        <div className="mx-5 mt-0 mb-0">
          <AppRouter />
        </div>
        <Footer />
      </Router>
    </>
  );
};
