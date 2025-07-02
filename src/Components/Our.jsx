import React from "react";

const Our = () => {
  return (
    <div className="bg-[#2A2928] text-white w-full py-15 px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row flex-wrap justify-center items-center">
      <div className="grid grid-cols-2 md:grid-cols-4 border border-gray-200 w-full sm:w-fit mx-auto">
        <div className="bg-[#1B1B1C] px-6 py-6 w-full sm:w-auto">
          <h1 className="text-xl sm:text-2xl font-normal text-center">
            Our Story
          </h1>
        </div>
        <div className="bg-[#1B1B1C] px-6 py-6 border-t sm:border-t-0  border-l border-gray-200 w-full sm:w-auto">
          <h1 className="text-xl sm:text-2xl font-normal text-center">
            Overview
          </h1>
        </div>
        <div className="bg-[#1B1B1C] px-6 py-6 border-t sm:border-t-0 sm:border-l border-gray-200 w-full sm:w-auto">
          <h1 className="text-xl sm:text-2xl font-normal text-center">
            Partnership
          </h1>
        </div>
        <div className="bg-[#1B1B1C] px-6 py-6 border-t sm:border-t-0 border-l border-gray-200 w-full sm:w-auto">
          <h1 className="text-xl sm:text-2xl font-normal text-center">
            Our Team
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Our;
