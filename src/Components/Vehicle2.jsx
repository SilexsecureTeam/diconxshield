import React from "react";
import vector from "../assets/vector.png";

const vehicleData = [
  {
    icon: vector,
    title: "Mission Command Suite",
    text: "Comprehensive command and control platform with real-time tactical coordination and mission planning",
    points: [
      "Real-time coordination",
      "3D terrain mapping",
      "Multi-unit sync",
      "Mission analytics",
    ],
  },

  {
    icon: vector,
    title: "Encrypted Communications",
    text: "Military-grade encryption protocols ensuring secure voice, data, and video transmission",
    points: [
      "AES-256 encryption",
      "Multi-band support",
      "Mesh networking",
      "Offline capability",
    ],
  },

  {
    icon: vector,
    title: "Intelligence Dashboard",
    text: "AI-powered situational awareness platform aggregating multi-source intelligence feeds",
    points: [
      "Multi-source feeds",
      "Threat detection",
      "Pattern analysis",
      "Custom alerts",
    ],
  },

  {
    icon: vector,
    title: "Tactical Networks",
    text: "Resilient mesh networking solutions for field operations and remote deployments",
    points: [
      "Mesh topology",
      "Self-healing network",
      "Low latency",
      "Scalable nodes",
    ],
  },

  {
    icon: vector,
    title: "Data Analytics",
    text: "Advanced analytics engine for operational intelligence and predictive threat assessment",
    points: [
      "Predictive analytics",
      "Threat modeling",
      "Performance metrics",
      "Custom reports",
    ],
  },
  {
    icon: vector,
    title: "System Integration",
    text: "Seamless integration with existing defense systems and third-party platforms",
    points: [
      "API integration",
      "Legacy support",
      "Custom connectors",
      "Cloud hybrid",
    ],
  },
];

const Vehicle2 = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 bg-[#1E1E1E]">
      <div className="max-w-[1100px] mx-auto">
        <div className=" bg-[#6B6B6B47] rounded-lg overflow-hidden p-6 md:p-8 py-10 md:py-16 transition-transform cursor-pointer">
          <h2 className="text-xl md:text-2xl text-center font-semibold  text-white mb-12">
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

export default Vehicle2;
