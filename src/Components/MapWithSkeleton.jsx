import React, { useState } from "react";
import Skeleton from "@mui/material/Skeleton";

const MapWithSkeleton = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full flex justify-center my-8" style={{ minHeight: 450 }}>
      {!loaded && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          width="100%"
          height={450}
          sx={{ borderRadius: 2 }}
        />
      )}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8067949.2734203795!2d-1.7709226250000107!3d9.115725499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104de01e2243992f%3A0x519c1548dad13c49!2sKatampe%20Estate%20Phase%202!5e0!3m2!1sen!2sng!4v1751555633893!5m2!1sen!2sng"
        width="100%"
        height="450"
        style={{
          border: 0,
          borderRadius: 12,
          display: loaded ? "block" : "none",
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Our Location"
        onLoad={() => setLoaded(true)}
      ></iframe>
    </div>
  );
};

export default MapWithSkeleton;
