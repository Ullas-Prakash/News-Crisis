import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Catch all unknown routes */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}