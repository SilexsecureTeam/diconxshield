import React, { useState, useRef, useLayoutEffect } from "react";
import { Skeleton } from "@mui/material";
import who from "../assets/who.png";

const Who = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const rightRef = useRef(null);
  const [rightHeight, setRightHeight] = useState(0);

  // Update the height of the right div on mount and resize
  useLayoutEffect(() => {
    function updateHeight() {
      if (rightRef.current) {
        setRightHeight(rightRef.current.offsetHeight);
      }
    }
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-15 flex flex-col md:flex-row justify-between items-center md:space-x-14 space-y-8 md:space-y-0">
      {/* Left (Image) */}
      <div
        className="w-full md:w-1/2 flex items-center justify-center"
        style={
          rightHeight && window.innerWidth >= 1024 // lg breakpoint
            ? { height: rightHeight }
            : {}
        }
      >
        {!imgLoaded && !imgError && (
          <Skeleton
            variant="rectangular"
            width="100%"
            height={rightHeight || 320}
            animation="wave"
            sx={{
              borderRadius: 8,
              minHeight: 200,
              maxHeight: 600,
              width: "100%",
            }}
          />
        )}
        <img
          src={who}
          alt="who"
          className={`w-full h-auto ${
            imgLoaded ? "block" : "hidden"
          } object-cover rounded-lg`}
          style={
            rightHeight && window.innerWidth >= 1024 // lg breakpoint
              ? { height: rightHeight }
              : {}
          }
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
        />
      </div>

      {/* Right (Text) */}
      <div className="w-full md:w-1/2" ref={rightRef}>
        <h2 className="text-base md:text-lg font-bold mb-5">Who are we</h2>
        <p className="text-base text-justify md:text-lg font-normal mb-5">
          DICON-X-SHIELD is a Military Equipment Manufacturing Company with
          expertise in designing, developing, and producing armoured vehicles
          and cutting-edge defence and security solutions tailored to meet the
          defence needs of military forces, government agencies, and
          security-conscious private individuals and organizations.
          DICON-X-SHIELD is a premiere Joint Venture Company (JVC) of the
          Defence Industries Corporation of Nigeria (DICON).{" "}
        </p>
        <p className="text-base text-justify md:text-lg font-normal">
          With a mission to strengthening national security, DICON-X-SHIELD
          leverages its deep expertise, strategic partnerships, and
          stateof-the-art technology to deliver innovative, reliable, and
          mission-ready solutions that safeguard Nigeria’s security interests
          both locally and across the African continent. DICON-X-SHIELD stands
          as a trusted partner for military and security agencies, manufacturing
          and supplying an extensive portfolio that includes armoured vehicles,
          ballistic protection systems, tactical gear, defence software and
          technologies, and surveillance equipment.
        </p>
      </div>
    </div>
  );
};

export default Who;
