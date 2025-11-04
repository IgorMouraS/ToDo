import { Outlet } from "react-router";

import Header from "../components/core-components/Header";

import MainContent from "../components/core-components/MainContent";
import Footer from "../components/core-components/Footer";

export default function LayoutMain() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <MainContent className="flex-1">
        <Outlet />
      </MainContent>
      <Footer />
    </div>
  )
}