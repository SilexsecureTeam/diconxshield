import React from "react";
import img1 from "../assets/df1.png";
import img2 from "../assets/df2.png";
import img3 from "../assets/df3.png";

const featureData = [
  {
    image: img1,
    title: "NEXUS Command Center",
    details: [
      "Platform\nCross-platform",
      "Users\nUnlimited",
      "Latency\n<50ms",
      "Uptime\n99.9%",
    ],

    list: [
      "Real-time Command",
      "Multi-screen Support",
      "Voice Integration",
      "Mobile Access",
    ],
    button: "View Details",
  },
  {
    image: img2,
    title: "CIPHER Secure Comms-7 Surveillance",
    details: [
      "Flight Time\n120 minutes",
      "Range\n50+ km/h",
      "Channels\n1000+",
      "Protocols\nMulti-band",
    ],

    list: [
      "End-to-End Encryption",
      "Voice & Data",
      "Emergency Channels",
      "Mesh Networking",
    ],
    button: "View Details",
  },
  {
    image: img3,
    title: "ORACLE Intelligence",
    details: [
      "Processing\nReal-time",
      "Sources\nMulti-feed",
      "AI Models\n50+",
      "Response\n<1 second",
    ],

    list: [
      "Threat Detection",
      "Pattern Analysis",
      "Predictive Models",
      "Custom Dashboards",
    ],
    button: "View Details",
  },
];

const Defense = () => {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-12 bg-[#1E1E1E]">
      <div className="max-w-[1100px] mx-auto">
        <div className="bg-[#6B6B6B47] rounded-lg overflow-hidden p-6 md:p-8">
          <h2 className="text-lg md:text-xl font-bold text-center text-white mb-10">
            Tactical Equipment
          </h2>

          {/* Grid of Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureData.map(
              ({ image, title, list, button, details }, index) => (
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

                    {/* Details Section */}
                    <ul className="text-sm text-[#CECECE]  my-4 grid grid-cols-2 gap-2.5 ">
                      {details.map((detail, i) => (
                        <li
                          key={i}
                          className="whitespace-pre-line bg-[#6B6B6B] p-2 w-full text-[#FFFFFF]"
                        >
                          {detail}
                        </li>
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

export default Defense;
