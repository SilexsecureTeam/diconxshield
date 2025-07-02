import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center max-w-md">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
          Page Not Found
        </h2>

        <p className="mb-8 text-gray-600 text-center leading-relaxed">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={goBack}
            className="px-6 py-3 bg-[#1C3729] text-white rounded-lg hover:bg-[#1C3729]/80 transition-all duration-300 font-medium focus:outline-none focus:ring-4 focus:ring-[#1C3729]/30 transform hover:scale-105"
          >
            ← Go Back
          </button>

          <Link
            to="/"
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 font-medium text-center focus:outline-none focus:ring-4 focus:ring-gray-300 transform hover:scale-105"
          >
            🏠 Go Home
          </Link>
        </div>

        {/* Additional Help Text */}
        <p className="mt-8 text-sm text-gray-500">
          If this problem persists, please contact our support team.
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
