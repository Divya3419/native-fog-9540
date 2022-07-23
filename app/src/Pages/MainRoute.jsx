import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../component/Navbar";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Location from "./Location";
import Abel from "./Abel";
import BabyFoot from "./BabyFoot";
import Caudalie from "./Caudalie";
import Brands from "./Brands";
import NewProducts from "./NewProducts";
import ProductDetail from "./ProductDetail";
import Cart from "../component/Cart";
import Footer from "../component/Footer";

const MainRoute = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/location" element={<Location />} />
        <Route path="/abel" element={<Abel />} />
        <Route path="/babyfoot" element={<BabyFoot />} />
        <Route path="/caudalie" element={<Caudalie />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/newproducts" element={<NewProducts />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
        <Route path="/Cart/:id" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRoute;
