import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Premier from "../Components/Premier";
import Battle from "../Components/Battle";
import Why from "../Components/Why";
import Joint from "../Components/Joint";
import Sector from "../Components/Sector";
import Arm from "../Components/Arm";
import Call from "../Components/Call";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="">
      <Header />
      <main className="pt-[88px]">
        <Hero />
        <Premier />
        <Battle />
        <Why />
        <Joint />
        <Sector />
        <Arm />
        <Call />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
