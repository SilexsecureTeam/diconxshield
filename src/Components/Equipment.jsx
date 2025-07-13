import React from "react";
import img1 from "../assets/gear1.png";
import img2 from "../assets/gear4.png";
import img3 from "../assets/gear2.png";
import img4 from "../assets/gear3.png";
import img5 from "../assets/gear1.png";
import img6 from "../assets/gear1.png";

const tabs = ["All Gears", "Potection", "Drones", "Shields", "Comms"];

const featureData = [
  {
    image: img1,
    title: "Tactical Combat Boots",
    subtitle: "TCB-Stealth",
    details: ["Weight: 1.2kg", "Price: Contact for pricing"],
    list: [
      "Mine Resistance",
      "All-terrain Capability",
      "Ballistic Grade Steel",
    ],
    button: "View Details",
  },
  {
    image: img2,
    title: "Tactical Combat Boots",
    subtitle: "TCB-Stealth",
    details: ["Weight: 1.2kg", "Price: Contact for pricing"],
    list: [
      "Mine Resistance",
      "All-terrain Capability",
      "Ballistic Grade Steel",
    ],
    button: "View Details",
  },
  {
    image: img3,
    title: "Tactical Combat Boots",
    subtitle: "TCB-Stealth",
    details: ["Weight: 1.2kg", "Price: Contact for pricing"],
    list: [
      "Mine Resistance",
      "All-terrain Capability",
      "Ballistic Grade Steel",
    ],
    button: "View Details",
  },
  {
    image: img4,
    title: "Tactical Combat Boots",
    subtitle: "TCB-Stealth",
    details: ["Weight: 1.2kg", "Price: Contact for pricing"],
    list: [
      "Mine Resistance",
      "All-terrain Capability",
      "Ballistic Grade Steel",
    ],
    button: "View Details",
  },
  {
    image: img5,
    title: "Tactical Combat Boots",
    subtitle: "TCB-Stealth",
    details: ["Weight: 1.2kg", "Price: Contact for pricing"],
    list: [
      "Mine Resistance",
      "All-terrain Capability",
      "Ballistic Grade Steel",
    ],
    button: "View Details",
  },
  {
    image: img6,
    title: "Tactical Combat Boots",
    subtitle: "TCB-Stealth",
    details: ["Weight: 1.2kg", "Price: Contact for pricing"],
    list: [
      "Mine Resistance",
      "All-terrain Capability",
      "Ballistic Grade Steel",
    ],
    button: "View Details",
  },
];

const Equipment = () => {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-12 bg-[#1E1E1E]">
      <div className="max-w-[1100px] mx-auto">
        <div className="bg-[#6B6B6B47] rounded-lg overflow-hidden p-6 md:p-8">
          <h2 className="text-lg md:text-xl font-bold text-center text-white mb-10">
            Tactical Equipment
          </h2>

          {/* Tabs Section */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className="px-5 py-2 font-bold text-sm sm:text-base bg-[#2A2928] text-white border border-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition-colors"
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid of Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureData.map(
              ({ image, title, subtitle, list, button, details }, index) => (
                <div
                  key={index}
                  className="bg-[#1E1E1E] text-white rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 flex flex-col h-full shadow-md"
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-52 object-cover rounded-t-xl mb-4"
                  />
                  <div className="px-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold mb-1">{title}</h3>
                    <p className="text-sm text-[#CECECE] mb-2">{subtitle}</p>

                    {/* Details Section */}
                    <ul className="text-sm text-[#CECECE] mb-4 list-disc list-inside space-y-1">
                      {details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>

                    {/* Features List */}
                    <ul className="text-sm text-[#CECECE] mb-6 list-disc list-inside grid grid-cols-1 gap-1">
                      {list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  {/* CTA Button */}
                  <button className="mt-auto bg-[#D4AF37] text-black px-4 py-2 rounded-b-xl font-semibold hover:bg-[#b9962f] transition-colors duration-200">
                    {button}
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
