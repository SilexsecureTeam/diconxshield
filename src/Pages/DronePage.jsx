import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Dronehero from "../Components/Dronehero";
import Our4 from "../Components/Our4";
import Overview3 from "../Components/Overview3";
import Equip from "../Components/Equip";
import Arm3 from "../Components/Arm3";

const DronePage = () => {
  return (
    <div className="">
      <Header />
      <main className="pt-[88px]">
        <Dronehero />
        <Our4 />
        <Overview3 />
        <Equip />
        <Arm3 />
        <Footer />
      </main>
    </div>
  );
};

export default DronePage;
