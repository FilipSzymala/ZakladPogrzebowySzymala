import { TopBar, Footer } from "./components";
import "./MainLayout.css";
import { Outlet } from "react-router-dom";
import { React } from "react";

const MainLayout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
