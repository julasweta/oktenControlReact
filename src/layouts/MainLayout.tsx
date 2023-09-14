import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components";
import Header from "../components/Header";

const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export { MainLayout };
