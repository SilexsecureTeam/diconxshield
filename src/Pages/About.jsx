import React from "react";
import Header from "../Components/Header";
import About from "../Components/About";
import Footer from "../Components/Footer";
import Our from "../Components/Our";
import Who from "../Components/Who";
import Commitment from "../Components/Commitment";
import Stragetic from "../Components/Stragetic";

const AboutPage = () => {
  return (
    <div className="max-w-[1700px] mx-auto">
      <Header />
      <main className="pt-[88px]">
        <About />
        <Our />
        <Who />
        <Commitment />
        <Stragetic />
        <Footer />
      </main>
    </div>
  );
};

export default AboutPage;
