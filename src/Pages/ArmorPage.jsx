import React from "react";
import Armhero from "../Components/Armhero";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Our2 from "../Components/Our2";
import Overview from "../Components/Overview";
import Vehicle from "../Components/Vehicle";
import Arm2 from "../Components/Arm2";

const ArmorPage = () => {
  return (
    <div className="">
      <Header />
      <main className="pt-[88px]">
        <Armhero />
        <Our2 />
        <Overview />
        <Vehicle />
        <Arm2 />
        <Footer />
      </main>
    </div>
  );
};

export default ArmorPage;
