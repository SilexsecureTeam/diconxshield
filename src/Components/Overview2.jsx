import React from "react";
import gear from "../assets/gear.png";

const Overview2 = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 bg-[#1E1E1E]">
      <div className="mx-auto max-w-[1100px]">
        <div className=" bg-[#6B6B6B47] rounded-lg overflow-hidden p-6 md:p-8 transition-transform cursor-pointer">
          <div className="flex flex-col md:flex-row gap-20 items-start">
            <img
              src={gear}
              alt="{title}"
              className="w-full md:w-[45%] h-48 md:h-auto object-center object-cover rounded-md"
            />

            <div className="flex-1">
              <h3 className="text-xl md:text-2xl text-white font-semibold mb-4">
                Overview
              </h3>
              <p className="text-white text-base font-normal mb-6">
                Our Tactical Gear and PPE range delivers maximum protection
                without sacrificing mobility. Engineered for elite operatives,
                our equipment includes ballistic helmets, flame-resistant combat
                uniforms, tactical vests, gloves, boots, and gear bags—all
                field-tested and ready for extreme operations.
              </p>
              <p className="text-white text-base font-normal mb-6">
                Whether in urban warfare, border security, or rapid intervention
                units, DICON-X-SHIELD gear provides reliable defense, ergonomic
                comfort, and tactical superiority in any environment.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2  gap-4 w-full mx-auto">
                {[
                  "NIJ Certified",
                  "Flame Resistant",
                  "Mission Flexible",
                  "Mission Flexible",
                ].map((text, index) => (
                  <div
                    key={index}
                    className="bg-[#D9D9D9] px-6 py-6  transition-transform duration-200 hover:scale-105"
                  >
                    <h1 className="text-base sm:text-lg font-medium text-center text-[#111]">
                      {text}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview2;
