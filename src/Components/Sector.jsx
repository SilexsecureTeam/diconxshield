import React, { useState } from "react";
import drone from "../assets/drone.png";
import file from "../assets/file.png";
import shield from "../assets/shield.png";
import motor from "../assets/motor.png";
import folder from "../assets/folder.png";
import speak from "../assets/speak.png";
import { Skeleton } from "@mui/material";

const cards = [
  {
    img: motor,
    title: "Armoured Vehicles",
    text: "Built for combat and VIP protection with top-tier ballistic resistance.",
  },
  {
    img: shield,
    title: "Tactical Gear & PPE",
    text: "Helmets, vests, boots, gloves and more—engineered for frontline use.",
  },
  {
    img: drone,
    title: "Surveillance & Drones",
    text: "AI-powered towers and unmanned aerial, land, and water units.",
  },
  {
    img: folder,
    title: "Ballistic Booths & Shields",
    text: "Beacon booths, mobile ballistic shields, and rapid-response tech.",
  },
  {
    img: speak,
    title: "Software & Comms",
    text: "Secure communication, battlefield tracking and defense technologies.",
  },
  {
    img: file,
    title: "Architectural Armouring",
    text: "Ballistic doors, windows and reinforcement for infrastructure protection..",
  },
];

const Sector = () => {
  const [imageLoaded, setImageLoaded] = useState(cards.map(() => false));

  return (
    <section className=" w-full py-10 px-4 md:px-8 lg:px-12">
      <h2 className="text-[#4D413B] md:text-4xl text-2xl font-bold mb-8">
        Sectors We Serve
      </h2>
      <div className="container mx-full">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#1B1B1C] hover:scale-105 rounded-lg shadow hover:shadow-lg transition-shadow duration-700 flex flex-col  p-6"
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
                className="w-fit h-20 object-cover mb-4"
                style={{ display: imageLoaded[idx] ? "block" : "none" }}
                onLoad={() =>
                  setImageLoaded((prev) =>
                    prev.map((val, i) => (i === idx ? true : val))
                  )
                }
              />
              <h3 className="text-xl md:text-2xl text-[#888888] font-bold mb-2">
                {card.title}
              </h3>
              <p className="text-[#CECECE] text-base md:text-lg font-normal">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sector;
