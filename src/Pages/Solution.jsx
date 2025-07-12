import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Solhero from "../Components/Solhero";
import Soldixcon from "../Components/Soldixcon";
import MissionSection from "../Components/Mission";
import Mission2 from "../Components/Mission2";
import Arm2 from "../Components/Arm2";

const Solution = () => {
  return (
    <div>
      <Header />
      <main className="pt-[88px]">
        <Solhero />
        <Soldixcon />
        <MissionSection />
        <Mission2 />
        <Arm2 />
        <Footer />
      </main>
    </div>
  );
};

export default Solution;
