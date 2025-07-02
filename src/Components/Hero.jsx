import React, { useState, useEffect, useRef } from "react";
import hero from "../assets/hero.png";
import hero1 from "../assets/hero2.png";
import hero2 from "../assets/hero3.png";
import hero3 from "../assets/hero4.png";
import he from "../assets/he.png";
import { Skeleton } from "@mui/material";

const images = [hero, hero1, hero2, hero3];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(images.map(() => false));

  // Duration of each slide in ms
  const slideDuration = 5000;
  // Duration of the slide animation in ms
  const transitionDuration = 1000;

  useEffect(() => {
    // Clear previous timer
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Set timer for next slide
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, slideDuration);

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image Container with slider */}
      <div className="absolute inset-0 flex h-full w-full">
        {/* We'll create a sliding container with all images side by side */}
        <div
          className="flex h-full w-[400%] transition-transform ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transitionDuration: `${transitionDuration}ms`,
          }}
        >
          {images.map((src, idx) => (
            <div key={idx} className="relative h-full w-full flex-shrink-0">
              {!imageLoaded[idx] && (
                <Skeleton
                  variant="rectangular"
                  className="h-full w-full object-cover object-center"
                />
              )}
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className="h-full w-full object-cover object-center flex-shrink-0"
                loading="eager"
                decoding="async"
                style={{ display: imageLoaded[idx] ? "block" : "none" }}
                onLoad={() =>
                  setImageLoaded((prev) =>
                    prev.map((val, i) => (i === idx ? true : val))
                  )
                }
              />
            </div>
          ))}
        </div>

        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      </div>

      {/* Decorative/Character Image */}
      <div className="absolute bottom-10 md:right-35 right-8 pointer-events-none">
        <img
          src={he}
          alt="Character illustration"
          className="object-contain opacity-90"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default Hero;
