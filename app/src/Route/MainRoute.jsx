import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AddressDetails from "../component/AddressDetails";
import Cart from "../component/Cart";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import PaymentPage from "../component/PaymentPage";
import Success from "../component/Success";
import Abel from "../Pages/Abel";
import BabyFoot from "../Pages/BabyFoot";
import Brands from "../Pages/Brands";
import Caudalie from "../Pages/Caudalie";
import Home from "../Pages/Home";

import NewProducts from "../Pages/NewProducts";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ProductDetail from "../Pages/ProductDetail";
import ReqAuth from "../hoc/ReqAuth";

const MainRoute = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/Success" ? null : <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/abel" element={<Abel />} />
        <Route path="/babyfoot" element={<BabyFoot />} />
        <Route path="/caudalie" element={<Caudalie />} />
        <Route path="/brands" element={<Brands />} />

        <Route path="/Success" element={<Success />} />
        <Route path="/newproducts" element={<NewProducts />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
        <Route
          path="/Cart/:id"
          element={
            <ReqAuth>
              <Cart />
             </ReqAuth>
          }
        />
        <Route path="/AddressDetails" element={<AddressDetails />} />
        <Route path="/PaymentPage" element={<PaymentPage />} />
      </Routes>

      {location.pathname === "/PaymentPage" ||
      location.pathname === "/Success" ? null : (
        <>
          <Footer />
        </>
      )}
    </>
  );
};

export default MainRoute;
