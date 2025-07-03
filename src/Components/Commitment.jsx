import React, { useState } from "react";
import { Skeleton } from "@mui/material";
import vec from "../assets/vec.png";
import vec1 from "../assets/vec1.png";
import vec2 from "../assets/vec2.png";

const cards = [
  {
    img: vec,
    title: "Our Vission",
    text: "To strengthen national defence by offering innovative, reliable, and effective security and defence technologies that ensure safety and security.",
  },
  {
    img: vec1,
    title: "Our Misson",
    text: "To lead Africa’s defense landscape with world-class armoured systems that define the future of protection, operational efficiency, and tactical superiority.",
  },
  {
    img: vec2,
    title: "Our Values",
    text: "Integrity. Innovation. Excellence. These are the cornerstones of every decision, design, and deployment we undertake.",
  },
];
const Commitment = () => {
  const [imageLoaded, setImageLoaded] = useState(cards.map(() => false));
  return (
    <div className="bg-[#2A2928] w-full py-18 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-xl md:text-2xl text-center text-white font-bold mb-5">
          Our Commitment
        </h2>
        <p className="text-sm text-center md:text-[15px] max-w-[945px] mx-auto text-white  font-normal">
          We are committed to strengthening national defence through innovation,
          partnership, and a dedication to excellence and delivery of products
          that save lives, protect assets, and ensure national security.
        </p>
        <div className="container mt-10 mx-full">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white hover:scale-105 rounded-lg shadow hover:shadow-lg transition-shadow duration-700 flex flex-col items-center justify-center  p-10"
              >
                {!imageLoaded[idx] && (
                  <Skeleton
                    variant="rectangular"
                    className="w-fit h-20 object-cover mb-4"
                  />
                )}
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-fit h-20 object-cover mb-6"
                  style={{ display: imageLoaded[idx] ? "block" : "none" }}
                  onLoad={() =>
                    setImageLoaded((prev) =>
                      prev.map((val, i) => (i === idx ? true : val))
                    )
                  }
                />
                <h3 className="text-lg md:text-xl text-[#000000] font-bold mb-6">
                  {card.title}
                </h3>
                <p className="text-[#000000] text-center text-sm md:text-[15px] font-normal">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commitment;
