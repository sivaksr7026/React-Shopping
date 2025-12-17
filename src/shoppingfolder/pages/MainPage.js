import React from 'react';
import Header from '../components/headersection/Header';
import Footer from '../components/footersection/Footer';
import Products from '../components/productssection/Products';
import Banner from '../components/bannersection/Banner';
import Electronics from '../electronics/Electronics';
import Mobiles from '../components/mobilessection/Mobiles';
import Appliance from '../components/appliancesection/Appliance';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login';
import Register from "../pages/Register"
import Profile from '../pages/Profile';
import Editprofile from '../pages/Editprofile';

const MainPage = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>

        {/* Home Page */}
        <Route 
          path="/" 
          element={
            <>
              <Products />
              <Banner />
              <Mobiles />
              <Appliance />
              <Electronics />
              <Footer />
            </>
          }
        />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />,
          <Route path="/editprofile/:id" element={<Editprofile />} />



      </Routes>
    </BrowserRouter>
  );
};

export default MainPage;
