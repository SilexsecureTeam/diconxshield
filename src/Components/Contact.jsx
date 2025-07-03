import React, { useState } from "react";
import about from "../assets/contact.png";
import { Skeleton } from "@mui/material";
import he from "../assets/he.png";

const Contact = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover  bg-top bg-no-repeat"
        style={{ backgroundImage: isImageLoaded ? `url(${about})` : "none" }}
      >
        {!isImageLoaded && (
          <Skeleton variant="rectangular" className="absolute inset-0" />
        )}
        <img
          src={about}
          alt="About"
          style={{ display: "none" }}
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-4">
          Contact Us
        </h2>
        <p className="text-sm font-normal text-center w-[250px] md:w-full md:text-lg md:max-w-[773px] text-white leading-relaxed">
          Have a question or specialized defense request? <br /> Whether you're
          looking for mission-specific equipment, armored solutions for
          high-risk environments, or tailored systems for unique operational
          needs, our team is here to support you.
        </p>
      </div>
      {/* Decorative/Character Image */}
      <div className="absolute bottom-10 md:left-32 left-5 pointer-events-none">
        <img
          src={he}
          alt="Character illustration"
          className="object-contain opacity-90"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
};

export default Contact;
