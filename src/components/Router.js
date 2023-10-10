import React from "react";
import { Routes, Route } from "react-router-dom";

import ErrorPage from "../pages/ErrorPage";
import PostProduct from "../userAdmin/PostProduct";
import PutProduct from "../userAdmin/PutProduct";
import DeleteProduct from "../userAdmin/DeleteProduct";
import InfoSection from "../pages/InfoSection";
import LandingPage from "../pages/LandingPage";
import Store from "../pages/Store";
import CartPage from "../pages/CartPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/store" element={<Store />} />
      <Route path="/infosection" element={<InfoSection />} />
      <Route path="/post" element={<PostProduct />} />
      <Route path="/put" element={<PutProduct />} />
      <Route path="/delete" element={<DeleteProduct />} />
      <Route path="/cartpage" element={<CartPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
