import React from "react";
import vector from "../assets/vector.png";

const vehicleData = [
  {
    icon: vector,
    title: "Ballistic Protection",
    text: "NIJ Level III/IV rated armor plating with multi-layer composite construction for maximum threat resistance",
    points: [
      "NIJ Level III/IV rating",
      "Multi-layer composite",
      "Blast resistant design",
      "Spall-proof coating",
    ],
  },

  {
    icon: vector,
    title: "Rapid Deployment",
    text: "Modular construction enabling field assembly in under 4 hours with minimal equipment and personnel",
    points: [
      "4-hour assembly",
      "Minimal tools required",
      "Pre-fabricated modules",
      "Quick-connect systems",
    ],
  },

  {
    icon: vector,
    title: "Environmental Control",
    text: "Climate-controlled interior with HVAC systems, power management, and weather-resistant sealing",
    points: [
      "HVAC climate control",
      "Weather sealing IP67",
      "Power management",
      "Insulation systems",
    ],
  },

  {
    icon: vector,
    title: "Surveillance Integration",
    text: "Built-in camera mounts, communication arrays, and sensor integration for complete situational awareness",
    points: [
      "360° camera mounts",
      "Communication arrays",
      "Sensor integration",
      "Real-time monitoring",
    ],
  },

  {
    icon: vector,
    title: "Power Systems",
    text: "Hybrid solar and generator power with battery backup ensuring continuous operation in remote locations",
    points: [
      "Solar panel arrays",
      "Generator backup",
      "Battery systems",
      "Power monitoring",
    ],
  },
  {
    icon: vector,
    title: "Tactical Communications",
    text: "Encrypted radio systems with satellite uplink capabilities for secure command and control operations",
    points: [
      "Encrypted communications",
      "Satellite uplink",
      "Multi-band radio",
      "Command integration",
    ],
  },
];

const Vehicle1 = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 bg-[#1E1E1E]">
      <div className="max-w-[1100px] mx-auto">
        <div className=" bg-[#6B6B6B47] rounded-lg overflow-hidden p-6 md:p-8 py-10 md:py-16 transition-transform cursor-pointer">
          <h2 className="text-xl md:text-2xl font-semibold  text-white mb-12">
            Surveillance Systems
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

export default Vehicle1;
