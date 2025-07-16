import React, { useState } from "react";
import about from "../assets/sul.png";
import { Skeleton } from "@mui/material";
// import he from "../assets/he.png";

const Dronehero = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <div className="relative h-[80vh] px-4 sm:px-6 md:px-8 lg:px-12 w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover  bg-top bg-no-repeat"
        style={{ backgroundImage: isImageLoaded ? `url(${about})` : "none" }}
      >
        {!isImageLoaded && (
          <Skeleton
            variant="rectangular"
            className="absolute inset-0  h-[80vh] w-full"
          />
        )}
        <img
          src={about}
          alt="About"
          style={{ display: "none" }}
          onLoad={() => setIsImageLoaded(true)}
        />
        <div className="absolute bg-black/60 opacity-50 inset-0 w-full h-full"></div>
      </div>
      <div className="mx-auto max-w-[1100px]">
        <div className="max-w-[720px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-2xl md:text-5xl font-bold text-center  mb-4 text-[#D4AF37]">
            Surveillance & Drones
          </h2>
          <p className="text-sm font-normal text-center max-w-[300px] md:w-full md:text-lg md:max-w-[663px] text-white leading-relaxed">
            Eyes in the sky. Awareness on the ground. Real-time intelligence
            where it matters most.
          </p>
          <div className="flex mt-5 justify-center sm:flex-row flex-col gap-5 ">
            <button className="bg-[#D4AF37] cursor-pointer px-8 py-3 rounded-full  text-[#1B1B1C] text-base md:text-lg">
              {" "}
              View System
            </button>
            <button className="bg-white cursor-pointer px-8 py-3 rounded-full  text-[#1B1B1C] text-base md:text-lg">
              {" "}
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dronehero;
