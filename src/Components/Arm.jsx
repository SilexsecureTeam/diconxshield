import React from "react";

const Arm = () => {
  return (
    <div className="bg-[#1C3729] w-full text-center py-10 px-4 md:px-8 lg:px-12 flex justify-center items-center">
      <div className="">
        <h2 className="font-semibold text-2xl text-white text-center mb-6 md:text-4xl ">
          Let’s Arm the Future, Together.
        </h2>
        <p className="md:text-[16px] text-[14px] max-w-[595px] mb-6 mx-auto font-normal text-[#D7D7D7] text-center">
          Contact our defense liaison team to request custom specs, product
          demos, or strategic consultation.
        </p>
        <button className="bg-[#D4AF37] cursor-pointer px-8 py-4 border text-[#1B1B1C] text-base md:text-lg">
          {" "}
          Speak to Us
        </button>
      </div>
    </div>
  );
};

export default Arm;
