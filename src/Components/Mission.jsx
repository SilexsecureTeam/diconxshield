import React from "react";
import armor from "../assets/armor.png";
import cap from "../assets/cap.png";
import mission3 from "../assets/mission3.png";
import mission4 from "../assets/mission4.png";
import mission5 from "../assets/mission5.png";
import mission6 from "../assets/mission6.png";
import { Link } from "react-router-dom";

const missionData = [
  {
    id: 1,
    image: armor,
    title: "Armoured Vehicles",
    text: "Combat-proven tactical SUVs and APCs. Terrain-ready. Mine-resistant. Built to secure force movement.",
    subTitles: ["Mine Resistant", "All-Terrain", "Ballistic Protection"],
    path: "/arm",
  },
  {
    id: 2,
    image: cap,
    title: "Tactical Gear & PPE",
    text: "Mission-ready helmets, vests, flame-resistant gear and boots. Designed for high-risk operators.",
    subTitles: ["Flame Resistant", "Lightweight", "Modular System"],
    path: "/gear",
  },
  {
    id: 3,
    image: mission3,
    title: "Surveillance & Drones",
    text: "AI-enhanced UAVs and sensor towers providing real-time threat visibility and battlefield intelligence.",
    subTitles: ["AI Enhanced", "Real-time Intel", "Long range"],
  },
  {
    id: 4,
    image: mission4,
    title: "Ballistic Booths & Shields",
    text: "Deployable BEACON surveillance units, ballistic riot shields, and armored observation towers.",
    subTitles: ["Mine Resistant", "All-Terrain", "Ballistic Protection"],
  },
  {
    id: 5,
    image: mission5,
    title: "Defense Software & Comms",
    text: "Encrypted mission coordination systems with GPS tracking, alert networks, and secure comms.",
    subTitles: ["End-to-End Encryption", "GPS Tracking", "Mesh Network"],
  },
  {
    id: 6,
    image: mission6,
    title: "Architectural Armouring",
    text: "Ballistic glass, reinforced doors, wall panels, and panic rooms for critical infrastructure protection.",
    subTitles: ["Ballistic Rated", "Blast Resistant", "Custom Install"],
  },
];

const MissionSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12  bg-[#1E1E1E]">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="text-xl md:text-2xl font-semibold text-white text-center mb-10">
          Mission-Critical Arsenal
        </h2>
        <div className="grid gap-8 md:grid-cols-2 pb-15 grid-cols-1">
          {missionData.map(({ id, image, title, text, subTitles, path }) => (
            <Link to={path}>
              {" "}
              <div
                key={id}
                className="bg-[#2A2928] cursor-pointer hover:scale-105 rounded-lg overflow-hidden p-6 md:p-8"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 md:h-70 object-cover rounded-md mb-6"
                />
                <h3 className="text-xl md:text-2xl text-[#D4AF37] font-semibold mb-4">
                  {title}
                </h3>
                <p className="text-white text-base font-semibold md:text-base mb-6">
                  {text}
                </p>
                <ul className="flex justify-between flex-col gap-3 md:flex-row text-sm text-white ">
                  {subTitles.map((sub, index) => (
                    <li
                      className="bg-[#6B6B6B] px-3 py-3 border  w-fit border-[#D4AF37] rounded-full"
                      key={index}
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
                <hr className="w-full h-[1px] border-0 bg-white mt-8" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
