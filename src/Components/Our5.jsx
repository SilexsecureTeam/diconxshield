import React from "react";

const Our5 = () => {
  return (
    <div className="bg-[#1E1E1E] text-white w-full py-15 px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row flex-wrap justify-center items-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 w-full sm:w-fit mx-auto">
        <div className="bg-[#585555] px-6 py-6 w-full sm:w-auto">
          <h1 className="text-sm sm:text-lg font-normal text-center">
            Armor Rating
            <span className="font-bold block">NIJ Level IV</span>
          </h1>
        </div>
        <div className="bg-[#585555] px-6 py-6  w-full sm:w-auto">
          <h1 className="text-sm sm:text-lg font-normal text-center">
            Assembly Time
            <span className="font-bold block">4 Hours</span>
          </h1>
        </div>
        <div className="bg-[#585555] px-6 py-6  w-full sm:w-auto">
          <h1 className="text-sm sm:text-lg font-normal text-center">
            Operating Temp
            <span className="font-bold block">-40°C to +60°C</span>
          </h1>
        </div>
        <div className="bg-[#585555] px-6 py-6  w-full sm:w-auto">
          <h1 className="text-sm sm:text-lg font-normal text-center">
            Weather Rating
            <span className="font-bold block">IP67</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Our5;
