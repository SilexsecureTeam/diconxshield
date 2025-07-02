import React, { useState } from "react";
import { Skeleton } from "@mui/material";
import teamMember1 from "../assets/team1.png"; // Placeholder image imports
import teamMember2 from "../assets/team2.png";
import teamMember3 from "../assets/team.png";

const teamMembers = [
  {
    img: teamMember1,
    name: "David A.",
    position: "Head of Tactical Systems",
  },
  {
    img: teamMember2,
    name: "David A.",
    position: "Head of Tactical Systems",
  },
  {
    img: teamMember3,
    name: "David A.",
    position: "Head of Tactical Systems",
  },
];

const Team = () => {
  const [imageLoaded, setImageLoaded] = useState(teamMembers.map(() => false));

  return (
    <section className="text-[#2A2928]bg-white w-full py-10 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8">
          Meet Our Team
        </h2>
        <div className="container w-full">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, idx) => (
              <div key={idx} className=" flex flex-col items-start ">
                {!imageLoaded[idx] && (
                  <Skeleton variant="rectangle" className="w-32 h-32 mb-4" />
                )}
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-72  object-cover mb-2"
                  style={{ display: imageLoaded[idx] ? "block" : "none" }}
                  onLoad={() =>
                    setImageLoaded((prev) =>
                      prev.map((val, i) => (i === idx ? true : val))
                    )
                  }
                />
                <h3 className="text-lg  font-bold text-[#000000]">
                  {member.name}
                </h3>
                <p className="text-lg  font-normal text-[#000000]">
                  {member.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
