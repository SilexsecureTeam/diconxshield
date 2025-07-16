import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Defhero from "../Components/Defhero";
import Our6 from "../Components/Our6";
import Overview5 from "../Components/Overview5";
import Defense from "../Components/Defense";
import Vehicle2 from "../Components/Vehicle2";
import Arm5 from "../Components/Arm5";

const DefensePage = () => {
  return (
    <div className="">
      <Header />
      <main className="pt-[88px]">
        <Defhero />
        <Our6 />
        <Overview5 />
        <Defense />
        <Vehicle2 />
        <Arm5 />
        <Footer />
      </main>
    </div>
  );
};

export default DefensePage;
