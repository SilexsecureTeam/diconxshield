import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Shieldhero from "../Components/Shieldhero";
import Our5 from "../Components/Our5";
import Overview4 from "../Components/Overview4";
import Vehicle1 from "../Components/Vehicle1";
import Arm3 from "../Components/Arm3";

const ShieldPage = () => {
  return (
    <div className="">
      <Header />
      <main className="pt-[88px]">
        <Shieldhero />
        <Our5 />
        <Overview4 />
        <Vehicle1 />
        <Arm3 />
        <Footer />
      </main>
    </div>
  );
};

export default ShieldPage;
