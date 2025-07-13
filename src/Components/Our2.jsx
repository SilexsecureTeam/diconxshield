import React from "react";

const Our2 = () => {
  return (
    <div className="bg-[#1E1E1E] text-white w-full py-15 px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row flex-wrap justify-center items-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 w-full sm:w-fit mx-auto">
        <div className="bg-[#585555] px-6 py-6 w-full sm:w-auto">
          <h1 className="text-sm sm:text-lg font-normal text-center">
            Protection Level{" "}
            <span className="font-bold block">B6/B7 Ballistic</span>
          </h1>
        </div>
        <div className="bg-[#585555] px-6 py-6  w-full sm:w-auto">
          <h1 className="text-sm sm:text-lg font-normal text-center">
            {" "}
            Crew Capacity <span className="font-bold block">2+6 Personnel</span>
          </h1>
        </div>
        <div className="bg-[#585555] px-6 py-6  w-full sm:w-auto">
          <h1 className="text-sm sm:text-lg font-normal text-center">
            Payload Capacity <span className="font-bold block">2,500 kg</span>
          </h1>
        </div>
        <div className="bg-[#585555] px-6 py-6  w-full sm:w-auto">
          <h1 className="text-sm sm:text-lg font-normal text-center">
            Engine Type <span className="font-bold block">V8 Turbo Diesel</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Our2;
