import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import Form from "../Components/Form";
import MapWithSkeleton from "../Components/MapWithSkeleton"; // Adjust path as needed

const ContactPage = () => {
  return (
    <div className="">
      <Header />
      <main className="pt-[88px]">
        <Contact />
        <Form />
        <MapWithSkeleton />
        <Footer />
      </main>
    </div>
  );
};

export default ContactPage;
