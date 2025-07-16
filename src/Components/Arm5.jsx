import React from "react";

const Arm5 = () => {
  return (
    <div className="bg-white w-full text-center py-10 px-4 md:px-8 lg:px-12 flex justify-center items-center">
      <div className="max-w-[570px] mx-auto">
        <h2 className="font-normal text-2xl text-[#000000]  text-center mb-6 md:text-4xl ">
          Empower Mission Control
        </h2>
        <p className="text-[14px]  max-w-[400px] mb-6 mx-auto font-normal text-[#000000] text-center">
          Schedule a briefing to explore customized software and communications
          tailored to your security objectives.
        </p>
        <button className="bg-[#D4AF37] cursor-pointer px-8 py-4 rounded-full text-[#1B1B1C] text-base md:text-lg">
          {" "}
          Engage Command Liaison
        </button>
      </div>
    </div>
  );
};

export default Arm5;
