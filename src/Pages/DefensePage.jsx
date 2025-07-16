import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Defhero from "../Components/Defhero";

const DefensePage = () => {
  return (
    <div className="">
      <Header />
      <main className="pt-[88px]">
        <Defhero />
        <Footer />
      </main>
    </div>
  );
};

export default DefensePage;
