import React from "react";
// import icon from "../assets/icon.png";

const content = [
  {
    title: "50+",
    text: "Defense Solution",
  },
  {
    title: "5+",
    text: "Agencies Served",
  },
  {
    title: "99%",
    text: "Success rate",
  },
];

const Mission2 = () => {
  return (
    <div className="bg-[#1C3729] w-full py-10 px-4 md:px-8 lg:px-12 ">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex mb-8 md:mb-14 w-full">
          {/* <img src={icon} alt="icon" className="mr-1 w-8 h-8" /> */}
          <h2 className="font-bold text-center md:text-2xl text-white text-xl w-full">
            Mission Performance Metrics
          </h2>
        </div>
        <div className="flex justify-between gap-6">
          {content.map((item, index) => (
            <div key={index} className="">
              <h2 className="text-3xl md:text-[50px] font-semibold mb-1 max-w-[330px] text-white">
                {item.title}
              </h2>
              <p className="text-white max-w-[325px] font-light text-[16px] md:text-[20px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default Mission2;
