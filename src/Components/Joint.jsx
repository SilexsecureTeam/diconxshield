import React, { useState } from "react";
import img from "../assets/soilder.png";
import { Skeleton } from "@mui/material";

const Joint = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: isImageLoaded ? `url(${img})` : "none" }}
      >
        {!isImageLoaded && (
          <Skeleton variant="rectangular" className="absolute inset-0" />
        )}
        {/* Optional overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30"></div>
        <img
          src={img}
          alt="Background"
          style={{ display: "none" }}
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>

      <div className="absolute top-10 md:left-22 md:px-8 lg:px-12 px-4">
        <h2 className="text-lg md:text-xl font-bold max-w-[424px] text-[#9FCCAB] mb-4">
          Joint Venture with the Defence Industries Corporation of Nigeria
          (DICON)
        </h2>
        <p className="text-sm font-normal md:text-[15px] max-w-[583px] text-[#D9D9D9] leading-relaxed">
          DICON-X-SHIELD is Nigeria’s premier manufacturer of military-grade
          armoured vehicles and tactical defense equipment—driven by innovation,
          committed to excellence.
        </p>
      </div>
    </section>
  );
};

export default Joint;
