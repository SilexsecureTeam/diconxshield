import React, { useState } from "react";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

const TwitterXIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 md:py-14">
      <div className="max-w-[1100px] mx-auto w-full  overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Section */}
          <div className="lg:w-1/2 py-8 lg:py-12 ">
            <div className="max-w-md">
              <h1 className="text-xl lg:text-2xl font-semibold text-[#100E0E] mb-8 leading-tight">
                We're always ready to help you and answer your questions
              </h1>

              {/* Decorative dots */}
              <div className="flex items-center gap-2 mb-12">
                <div className="w-16 h-2 bg-[#100E0E] rounded-full"></div>
                <div className="w-8 h-2 bg-[#780000] rounded-full"></div>
                <div className="w-4 h-2 bg-[#100E0E] rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                {/* Call Center */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#1C3729] mb-2 flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call center
                  </h3>
                  <div className="text-[#1B1B1C] text-base font-normal">
                    <p>+234 703 303 6373</p>
                  </div>
                </div>

                {/* Our Office */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#1C3729] mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Our Office
                  </h3>
                  <div className="text-[#1B1B1C] text-base font-normal">
                    <p>2B, Ketampe Road, Jahi District Abuja-FCT, Nigeria</p>
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#1C3729] mb-2 flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email Address
                  </h3>
                  <p className="text-[#1B1B1C] text-base font-normal">
                    enquiry@diconxshield.com
                  </p>
                </div>
              </div>

              {/* Social Network */}
              <div className="mt-6">
                <h3 className="text-xl md:text-2xl font-semibold text-[#1C3729] mb-4  gap-4">
                  Social Network
                </h3>
                <div className="flex gap-4">
                  <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200">
                    <Facebook className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200">
                    <TwitterXIcon />
                  </button>
                  <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200">
                    <Instagram className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="lg:w-1/2 bg-gray-800 rounded-2xl p-6 lg:p-8">
            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b-2 ${
                    errors.fullName ? "border-red-500" : "border-gray-600"
                  } text-white placeholder-gray-400 py-3 px-0 focus:outline-none focus:border-yellow-500 transition-colors duration-200`}
                />
                {errors.fullName && (
                  <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b-2 ${
                    errors.email ? "border-red-500" : "border-gray-600"
                  } text-white placeholder-gray-400 py-3 px-0 focus:outline-none focus:border-yellow-500 transition-colors duration-200`}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b-2 ${
                    errors.phone ? "border-red-500" : "border-gray-600"
                  } text-white placeholder-gray-400 py-3 px-0 focus:outline-none focus:border-yellow-500 transition-colors duration-200`}
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Your message here..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-[#E5E5E5] border-2 ${
                    errors.message ? "border-red-500" : "border-gray-600"
                  } text-white placeholder-gray-400 p-4 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors duration-200 resize-none`}
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-4 px-6 cursor-pointer rounded-lg font-medium text-white transition-all duration-200 ${
                  isSubmitting
                    ? "bg-[#D4AF37] cursor-not-allowed"
                    : "bg-yellow-500 hover:[#D4AF37] hover:shadow-lg"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="bg-green-600 text-white p-4 rounded-lg text-center">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-600 text-white p-4 rounded-lg text-center">
                  Something went wrong. Please try again.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
