import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <Header />
      <main className="min-h-screen container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
