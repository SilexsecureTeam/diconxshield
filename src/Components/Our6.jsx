import React from "react";

const Our6 = () => {
  return (
    <div className="bg-[#1E1E1E] text-white w-full py-15 px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row flex-wrap justify-center items-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 w-full sm:w-fit mx-auto">
        <div className="bg-[#585555] px-6 py-6 w-full sm:w-auto">
          <h1 className="text-sm sm:text-lg font-normal text-center">
            Encryption Level
            <span className="font-bold block">AES-256</span>
          </h1>
        </div>
        <div className="bg-[#585555] px-6 py-6  w-full sm:w-auto">
          <h1 className="text-sm sm:text-lg font-normal text-center">
            System Uptime
            <span className="font-bold block">99.9%</span>
          </h1>
        </div>
        <div className="bg-[#585555] px-6 py-6  w-full sm:w-auto">
          <h1 className="text-sm sm:text-lg font-normal text-center">
            Data Processing
            <span className="font-bold block">Real-time</span>
          </h1>
        </div>
        <div className="bg-[#585555] px-6 py-6  w-full sm:w-auto">
          <h1 className="text-sm sm:text-lg font-normal text-center">
            Security Rating
            <span className="font-bold block">Top Secret</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Our6;
