import React from "react";

const Our4 = () => {
  return (
    <div className="bg-[#1E1E1E] text-white w-full py-15 px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row flex-wrap justify-center items-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 w-full sm:w-fit mx-auto">
        <div className="bg-[#585555] px-6 py-6 w-full sm:w-auto">
          <h1 className="text-sm sm:text-lg font-normal text-center">
            Max Flight Time
            <span className="font-bold block">120 min</span>
          </h1>
        </div>
        <div className="bg-[#585555] px-6 py-6  w-full sm:w-auto">
          <h1 className="text-sm sm:text-lg font-normal text-center">
            Operational Range
            <span className="font-bold block">50+ km</span>
          </h1>
        </div>
        <div className="bg-[#585555] px-6 py-6  w-full sm:w-auto">
          <h1 className="text-sm sm:text-lg font-normal text-center">
            Camera Resolution
            <span className="font-bold block">8K Ultra HD</span>
          </h1>
        </div>
        <div className="bg-[#585555] px-6 py-6  w-full sm:w-auto">
          <h1 className="text-sm sm:text-lg font-normal text-center">
            Thermal Range
            <span className="font-bold block">-40°C to +150°C</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Our4;
