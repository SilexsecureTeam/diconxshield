import React, { useState, useEffect } from "react";

const MapWithSkeleton = () => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [loadingTimeout, setLoadingTimeout] = useState(false);

  // Set a timeout to show error if map doesn't load within 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!loaded) {
        setLoadingTimeout(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [loaded]);

  const handleLoad = () => {
    console.log("Map loaded successfully");
    setLoaded(true);
    setError(false);
  };

  const handleError = () => {
    console.error("Map failed to load");
    setError(true);
    setLoaded(false);
  };

  const retryLoad = () => {
    setError(false);
    setLoaded(false);
    setLoadingTimeout(false);
    // Force reload by changing the key
    window.location.reload();
  };

  return (
    <div
      className="w-full flex justify-center relative"
      style={{ minHeight: 450 }}
    >
      {/* Skeleton Loader */}
      {!loaded && !error && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
          style={{ height: 450 }}
        >
          <div className="text-gray-500">Loading map...</div>
        </div>
      )}

      {/* Error State */}
      {(error || loadingTimeout) && (
        <div
          className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center text-center p-4"
          style={{ height: 450 }}
        >
          <div className="text-red-500 mb-4">
            <svg
              className="w-16 h-16 mx-auto mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-lg font-semibold">Map failed to load</p>
          </div>
          <p className="text-gray-600 mb-4">
            This could be due to network issues, iframe restrictions, or Google
            Maps API limitations.
          </p>
          <button
            onClick={retryLoad}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Retry
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Location: Katampe Estate Phase 2, Abuja, Nigeria
          </p>
        </div>
      )}

      {/* Google Maps Embed */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8067949.2734203795!2d-1.7709226250000107!3d9.115725499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104de01e2243992f%3A0x519c1548dad13c49!2sKatampe%20Estate%20Phase%202!5e0!3m2!1sen!2sng!4v1751555633893!5m2!1sen!2sng"
        width="100%"
        height="450"
        style={{
          border: 0,
          display: loaded ? "block" : "none",
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Our Location - Katampe Estate Phase 2, Abuja"
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

// Alternative component using a different approach
const AlternativeMapComponent = () => {
  const [mapError, setMapError] = useState(false);

  return (
    <div className="w-full" style={{ minHeight: 450 }}>
      {!mapError ? (
        <div className="relative w-full h-full">
          <iframe
            src="https://maps.google.com/maps?q=Katampe%20Estate%20Phase%202,%20Abuja,%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Katampe Estate Phase 2, Abuja"
            onError={() => setMapError(true)}
          />
        </div>
      ) : (
        <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center p-8 text-center">
          <div className="text-gray-600 mb-4">
            <svg
              className="w-16 h-16 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Unable to load map</h3>
            <p className="text-gray-500 mb-4">You can find us at:</p>
            <div className="text-left bg-white p-4 rounded-lg shadow-sm">
              <p className="font-medium">Katampe Estate Phase 2</p>
              <p>Jahi District, Abuja-FCT</p>
              <p>Nigeria</p>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/search/Katampe+Estate+Phase+2,+Abuja,+Nigeria"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Open in Google Maps
          </a>
        </div>
      )}
    </div>
  );
};

// Main component that tries both approaches
const MapComponent = () => {
  const [useAlternative, setUseAlternative] = useState(false);

  if (useAlternative) {
    return <AlternativeMapComponent />;
  }

  return (
    <div className="w-full">
      <MapWithSkeleton />
      <div className="mt-4 text-center">
        <button
          onClick={() => setUseAlternative(true)}
          className="text-blue-500 hover:text-blue-600 text-sm underline"
        >
          Try alternative map loading
        </button>
      </div>
    </div>
  );
};

export default MapComponent;
