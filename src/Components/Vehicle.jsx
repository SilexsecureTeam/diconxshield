import React from "react";
import vector from "../assets/vector.png";

const vehicleData = [
  {
    icon: vector,
    title: "Ballistic Protection",
    text: "B6 & B7 rated armor plating with multi-layer composite protection against high-velocity threats",
    points: [
      "Multi-hit capability",
      "Blast resistant",
      "Lightweight composite",
      "NIJ Level IIIA+",
    ],
  },
  {
    icon: vector,
    title: "Tactical Configuration",
    text: "Modular interior systems optimized for crew transport and mission-critical equipment deployment",
    points: [
      "Modular seating",
      "Equipment mounts",
      "Communication ready",
      "8-person capacity",
    ],
  },
  {
    icon: vector,
    title: "Surveillance Systems",
    text: "360-degree camera arrays with night vision, thermal imaging, and AI-powered threat detection",
    points: [
      "Night vision",
      "Thermal imaging",
      "360° coverage",
      "AI threat detection",
    ],
  },

  {
    icon: vector,
    title: "Enhanced Mobility",
    text: "Upgraded suspension and braking systems engineered for all-terrain performance under load",
    points: [
      "All-terrain capable",
      "Enhanced braking",
      "Heavy-duty suspension",
      "Run-flat tires",
    ],
  },

  {
    icon: vector,
    title: "Communication Hub",
    text: "Integrated radio systems with satellite communication and encrypted mesh networking",
    points: [
      "Encrypted comms",
      "Satellite ready",
      "Multi-band radio",
      "Mesh networking",
    ],
  },
  {
    icon: vector,
    title: "Tactical Accessories",
    text: "Compatible with weapon mounts, emergency lighting, and specialized mission equipment",
    points: [
      "Weapon mounts",
      "Emergency lights",
      "Siren systems",
      "Smoke deployment",
    ],
  },
];

const Vehicle = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 bg-[#1E1E1E]">
      <div className="max-w-[1100px] mx-auto">
        <div className=" bg-[#6B6B6B47] rounded-lg overflow-hidden p-6 md:p-8 py-10 md:py-16 transition-transform cursor-pointer">
          <h2 className="text-xl md:text-2xl font-semibold  text-white mb-12">
            Vehicle Components
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicleData.map(({ icon, title, text, points }, index) => (
              <div
                key={index}
                className="bg-[#1E1E1E] rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={icon}
                  alt={title}
                  className="w-12 h-12 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {title}
                </h3>
                <p className="text-[#A5A5A5] text-base mb-4">{text}</p>
                <ul className="grid grid-cols-1  gap-x-4 gap-y-2 list-disc list-inside text-sm text-[#A5A5A5]">
                  {points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vehicle;
