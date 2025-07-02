import React, { useState } from "react";
import img from "../assets/tank.png";
import { Skeleton } from "@mui/material";

const Call = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <section className="relative min-h-screen w-full overflow-hidden md:px-8 lg:px-12 px-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: isImageLoaded ? `url(${img})` : "none" }}
      >
        {!isImageLoaded && (
          <Skeleton variant="rectangular" className="absolute inset-0" />
        )}
        {/* Optional overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
        <img
          src={img}
          alt="Background"
          style={{ display: "none" }}
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>

      <div className="absolute w-full bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl font-bold w-full text-white mb-8">
          Mission-Ready. Field-Tested. Available Now.
        </h2>
        <button className="bg-[#D4AF37] cursor-pointer px-8 py-4 border text-[#1B1B1C] text-base md:text-lg">
          Request a Call
        </button>
      </div>
    </section>
  );
};

export default Call;
