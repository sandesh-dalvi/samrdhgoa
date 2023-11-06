import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import { HelmetProvider } from "react-helmet-async";

const Layout = () => {
  const [openContact, setOpenContact] = useState(false);
  return (
    <div>
      <Header openContact={openContact} setOpenContact={setOpenContact} />

      {/* <Preloader  /> */}
      <HelmetProvider>
        <Outlet />
      </HelmetProvider>

      <Footer openContact={openContact} setOpenContact={setOpenContact} />
    </div>
  );
};

export default Layout;
