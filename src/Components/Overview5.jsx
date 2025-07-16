import React from "react";
import gear from "../assets/defenses.png";

const Overview5 = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 bg-[#1E1E1E]">
      <div className="mx-auto max-w-[1100px]">
        <div className=" bg-[#6B6B6B47] rounded-lg overflow-hidden p-6 md:p-8 transition-transform cursor-pointer">
          <div className="flex flex-col md:flex-row gap-20 items-start">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl text-white font-semibold mb-4">
                Digital Command Overview
              </h3>
              <p className="text-white text-base font-normal mb-6">
                DICON-X-SHIELD's integrated defense software suite powers
                mission execution, communication, and operational awareness.
                From field-level encrypted communications to high-level mission
                control interfaces, our digital tools provide unmatched agility.
              </p>
              <p className="text-white text-base font-normal mb-6">
                Every component functions seamlessly in harsh conditions,
                offline environments, and critical moments. We don't just
                protect your perimeter—we connect and empower your entire
                mission ecosystem.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2  gap-4 w-full mx-auto">
                {[
                  "Real-Time Intel",
                  "Secure Comms",
                  "AI Enhanced",
                  "Mission Ready",
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
            <img
              src={gear}
              alt="{title}"
              className="w-full md:w-[45%] h-48 md:h-auto object-center object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview5;
