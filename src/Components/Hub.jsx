import React, { useState } from "react";
import { Skeleton } from "@mui/material";
import image1 from "../assets/hub.png";
import image2 from "../assets/hub1.png";
import image3 from "../assets/hub2.png";
import image4 from "../assets/hub3.png";
import image5 from "../assets/hub4.png";

const images = [
  { src: image1, alt: "Main Image" },
  { src: image2, alt: "Image 2" },
  { src: image3, alt: "Image 3" },
  { src: image4, alt: "Image 4" },
  { src: image5, alt: "Image 5" },
];

const Hub = () => {
  const [imageLoaded, setImageLoaded] = useState(images.map(() => false));

  return (
    <section className="bg-[#39393D] w-full py-15 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-8">
          Technical Hub
        </h2>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* First Image (1/2 width on large screens) */}
            <div className="w-full lg:w-1/2">
              {!imageLoaded[0] && (
                <Skeleton
                  variant="rectangular"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
                />
              )}
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="w-full h-64 sm:h-80 lg:h-100 object-cover rounded-lg"
                style={{ display: imageLoaded[0] ? "block" : "none" }}
                onLoad={() =>
                  setImageLoaded((prev) =>
                    prev.map((val, i) => (i === 0 ? true : val))
                  )
                }
              />
            </div>
            {/* 2x2 Grid for Remaining 4 Images */}
            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {images.slice(1).map((image, idx) => (
                <div key={idx} className="w-full">
                  {!imageLoaded[idx + 1] && (
                    <Skeleton
                      variant="rectangular"
                      className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-lg"
                    />
                  )}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-lg"
                    style={{ display: imageLoaded[idx + 1] ? "block" : "none" }}
                    onLoad={() =>
                      setImageLoaded((prev) =>
                        prev.map((val, i) => (i === idx + 1 ? true : val))
                      )
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hub;
