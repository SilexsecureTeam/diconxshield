import React from "react";
import Gearhero from "../Components/Gearhero";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Our3 from "../Components/Our3";
import Overview2 from "../Components/Overview2";
import Arm2 from "../Components/Arm2";
import Equipment from "../Components/Equipment";

const GearrPage = () => {
  return (
    <div className="">
      <Header />
      <main className="pt-[88px]">
        <Gearhero />
        <Our3 />
        <Overview2 />
        <Equipment />
        <Arm2 />
        <Footer />
      </main>
    </div>
  );
};

export default GearrPage;
