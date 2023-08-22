import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { LookForAgent } from "../pages/LookForAgent";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/look-for-agent" element={<LookForAgent />} />
    </Routes>
  );
};
