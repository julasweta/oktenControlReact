import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Footer } from "../components";

const MainLayout:FC = () => {

  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
};

export { MainLayout };