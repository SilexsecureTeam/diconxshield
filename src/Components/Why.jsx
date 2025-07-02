import React from "react";
import icon from "../assets/icon.png";

const content = [
  {
    title: "Backed by DICON",
    text: "Built in partnership with Nigeria's top defense institution for unmatched credibility.",
  },
  {
    title: "Mission-Ready Engineering",
    text: "Our armoured vehicles and tactical systems are field-tested and frontline-proven.",
  },
  {
    title: "Innovation Standard",
    text: "From AI-powered surveillance to secure battlefield comms, we push tactical boundaries.",
  },
];

const Why = () => {
  return (
    <div className="bg-[#1C3729] w-full py-10 px-4 md:px-8 lg:px-12 ">
      <div className="flex mb-8 md:mb-14">
        <img src={icon} alt="icon" />
        <h2 className="font-bold md:text-4xl text-white text-2xl">
          Why Choose Us
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {content.map((item, index) => (
          <div key={index} className="">
            <h2 className="text-base md:text-xl font-bold mb-1 max-w-[330px] text-white">
              {item.title}
            </h2>
            <p className="text-white max-w-[325px] font-light text-[14px] md:text-[18px]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
