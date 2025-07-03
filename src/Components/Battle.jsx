import React, { useState } from "react";
import car from "../assets/car.png";
import { Skeleton } from "@mui/material";

const Battle = () => {
  const [isCarLoaded, setIsCarLoaded] = useState(false);

  return (
    <div className="px-4 md:px-8 lg:px-12 pt-4 md:pt-6 lg:pt-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="lg:w-1/2 sm:w-2/3 w-full mb-10">
          <h2 className="font-bold text-[14px] text-[#1C3729] mb-4 md:text-[20px] ">
            Battle-Tested. Nation-Trusted. Innovation-Led.
          </h2>
          <p className="md:text-[15px] text-[14px] font-normal text-[#4D413B] ">
            At DICON-X-SHIELD, we don’t just manufacture equipment we engineer
            confidence. Every product we deliver is a result of strategic
            collaboration, advanced technology, and a deep commitment to those
            on the frontlines of national security.
          </p>{" "}
        </div>
        <div className="w-full flex justify-between md:gap-15 flex-col md:flex-row">
          <div className="bg-[#1C3729] p-6 h-fit w-full md:w-1/3">
            <h1 className="text-[#6C6C81] text-[80px] mb-4">01</h1>
            <h2 className="text-[#D4AF37] font-bold md:text-[20px] text-[18px] mb-4">
              Nigeria’s No. 1 Military Equipment Manufacturer
            </h2>
            <p className="text-[#EBEBEB] md:text-[20px] text-[18px] font-normal">
              Trusted by government forces, law enforcement, and security
              experts nationwide.
            </p>
          </div>
          <div className="w-full md:w-2/3">
            {!isCarLoaded && (
              <Skeleton variant="rectangular" className="w-full h-auto" />
            )}
            <img
              src={car}
              alt="Car"
              className="w-full h-auto"
              style={{ display: isCarLoaded ? "block" : "none" }}
              onLoad={() => setIsCarLoaded(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Battle;
