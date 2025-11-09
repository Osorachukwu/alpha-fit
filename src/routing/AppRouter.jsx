import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Transformations from "../pages/Transformations";
import Nav from "../components/nav/Nav";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import FAQS from "../pages/FAQS";
import Contact from "../pages/Contact";
import VipCoaching from "../pages/VipCoaching";
import Aos from "aos";


export default function AppRoutes() {
   useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/transformations" element={<Transformations />} />
            <Route path="/faq" element={<FAQS />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/vip-coaching" element={<VipCoaching />} />
            {/* <Route path="/frontend-web-dev" element={<FrontendDev />} /> */}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}