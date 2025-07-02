import React, { useState } from "react";
import about from "../assets/about.png";
import { Skeleton } from "@mui/material";
import he from "../assets/he.png";

const About = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
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
          About Us
        </h2>
        <p className="text-sm font-normal text-center md:text-lg max-w-[493px] text-white leading-relaxed">
          Forged in partnership with the Defence Industries Corporation of
          Nigeria (DICON), we redefine protection through innovation.
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

export default About;
