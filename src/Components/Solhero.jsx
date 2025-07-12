import React, { useState } from "react";
import about from "../assets/contact.png";
import { Skeleton } from "@mui/material";
// import he from "../assets/he.png";

const Solhero = () => {
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
      </div>
      <div className="mx-auto max-w-[1100px]">
        <div className="max-w-[470px] absolute  top-[50%] md:top-[40%]">
          <h2 className="text-2xl md:text-5xl font-bold  mb-4 text-[#D4AF37]">
            [ Tactical Solutions ]
          </h2>
          <p className="text-sm font-normal  w-[250px] md:w-full md:text-lg md:max-w-[773px] text-white leading-relaxed">
            Zero compromise. Battlefield-proven. Engineered to give you the
            upper hand.
          </p>
          <div className="flex mt-5 sm:flex-row flex-col gap-5 ">
            <button className="bg-white cursor-pointer px-8 py-3 rounded-full  text-[#1B1B1C] text-base md:text-lg">
              {" "}
              Explore Systems
            </button>
            <button className="bg-white cursor-pointer px-8 py-3 rounded-full  text-[#1B1B1C] text-base md:text-lg">
              {" "}
              Request Brief
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solhero;
