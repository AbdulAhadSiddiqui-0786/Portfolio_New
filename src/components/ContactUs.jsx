import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";


const ContactUs= () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Check localStorage on component mount
  useEffect(() => {
    const submitted = localStorage.getItem("formSubmitted");
    if (submitted) {
      setHasSubmitted(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if already submitted
    if (hasSubmitted) {
      setSubmissionStatus("already_submitted");
      return;
    }

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmissionStatus("validation_failed");
      return;
    }

  




emailjs
  .send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      budget: formData.budget,
      message: formData.message,
    },
    import.meta.env.VITE_EMAILJS_USER_ID // This is your Public Key, not user ID anymore
  )

  .then((response) => {
    console.log("SUCCESS!", response.status, response.text);
    setSubmissionStatus("success");
    localStorage.setItem("formSubmitted", "true");
    setHasSubmitted(true);

    // Clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      budget: "",
      message: "",
    });
  })
  .catch((err) => {
    console.error("FAILED...", err);
    setSubmissionStatus("failed");
  });
  };

  return (
    <section id="Contact" className="py-16 md:py-24 lg:py-32 bg-gradient-to-br">
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 right-20 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full opacity-10 blur-3xl"
          style={{ transform: "scale(1.17931) rotate(107.586deg)" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full opacity-10 blur-3xl"
          style={{ transform: "scale(1.08345) rotate(-230.069deg)" }}
        ></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 md:w-8 md:h-8 text-white-600 dark:text-pink-400"
            >
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
              <path d="m21.854 2.147-10.94 10.939"></path>
            </svg>
            <span className="text-lg md:text-xl lg:text-2xl font-medium text-black dark:text-pink-500">
              Freelance Web Developer
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 md:mb-6 text-shimmer">
            Let's Build Something Amazing
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Need a portfolio, business site, e-commerce, or something custom?
            I'm ready to help bring your vision to life.
          </p>
        </div>

        {/* CONTACT INFO + MESSAGE FORM */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Left Column */}
            <div className="lg:col-span-1 space-y-6 md:space-y-8">
              {/* Contact Info Card */}
              <div className="card-modern glass-effect p-6 sm:p-8 rounded-2xl lg:rounded-3xl border-2 border-pink-200 dark:border-pink-700">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4 md:space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-3 md:gap-4 p-0 md:p-3 lg:p-4 rounded-xl md:rounded-2xl hover:bg-violet-100 dark:hover:bg-violet-900/20 transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-pink-600 to-pink-600 rounded-lg md:rounded-xl flex items-center justify-center">
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm md:text-base text-gray-800 dark:text-gray-200">
                        Email
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                        abdulahadsiddiqui23@gmail.com
                      </p>
                    </div>
                  </div>
                  {/* Location */}
                  <div className="flex items-center gap-3 md:gap-4 p-0 md:p-3 lg:p-4 rounded-xl md:rounded-2xl hover:bg-violet-100 dark:hover:bg-violet-900/20 transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg md:rounded-xl flex items-center justify-center">
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm md:text-base text-gray-800 dark:text-gray-200">
                        Location
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                        Prayagraj, UP, India
                      </p>
                    </div>
                  </div>
                  {/* Response Time */}
                  <div className="flex items-center gap-3 md:gap-4 p-0 md:p-3 lg:p-4 rounded-xl md:rounded-2xl hover:bg-violet-100 dark:hover:bg-violet-900/20 transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg md:rounded-xl flex items-center justify-center">
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm md:text-base text-gray-800 dark:text-gray-200">
                        Response Time
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                        Within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Me */}
              <div className="card-modern bg-gradient-to-r from-pink-500 to-pink-600 p-6 sm:p-8 rounded-2xl lg:rounded-3xl dark:text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                  Why Choose Me?
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {[
                    "Enthusastic and Passionate Fresher",
                    "Fast Response Time",
                    "Quality Guaranteed",
                    "Ongoing Support",
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"></div>
                      <span className="text-sm md:text-base lg:text-lg">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Message Form */}
            <div className="lg:col-span-2">
              <div className="card-modern glass-effect p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl lg:rounded-3xl border-2 border-pink-200 dark:border-pink-700">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6 md:mb-8">
                  Send me a message
                </h3>

                {/* Submission Status Messages */}
                {submissionStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 md:mb-6 p-3 md:p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-sm md:text-base"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submissionStatus === "failed" && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 md:mb-6 p-3 md:p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg text-sm md:text-base"
                  >
                    Failed to send message. Please try again later.
                  </motion.div>
                )}

                {submissionStatus === "validation_failed" && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 md:mb-6 p-3 md:p-4 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-lg text-sm md:text-base"
                  >
                    Please fill in all required fields (Name, Email, Message).
                  </motion.div>
                )}

                {submissionStatus === "already_submitted" && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 md:mb-6 p-3 md:p-4 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg text-sm md:text-base"
                  >
                    You've already submitted a message. I'll get back to you
                    soon!
                  </motion.div>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 md:space-y-8"
                >
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                    <div>
                      <label className="block text-xs md:text-sm font-medium text-pink-600 dark:text-pink-400 mb-1 md:mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-3 py-3 md:px-4 md:py-4 rounded-xl md:rounded-2xl border-2 text-base md:text-lg bg-pink-200 dark:bg-pink-950 from-pink-500 to-pink-600 focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 text-gray-800 dark:text-gray-200"
                        disabled={hasSubmitted}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs md:text-sm font-medium text-pink-600 dark:text-pink-400 mb-1 md:mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full px-3 py-3 md:px-4 md:py-4 rounded-xl md:rounded-2xl border-2 text-base md:text-lg bg-pink-200 dark:bg-pink-950 dark:border-pink-700 focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 text-gray-800 dark:text-gray-200"
                        disabled={hasSubmitted}
                        required
                      />
                    </div>
                  </div>
                  {/* Phone */}
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-pink-600 dark:text-pink-400 mb-1 md:mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 9876543210"
                      className="w-full px-3 py-3 md:px-4 md:py-4 rounded-xl md:rounded-2xl border-2 text-base md:text-lg bg-pink-200 dark:bg-pink-950 dark:border-pink-700 focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 text-gray-800 dark:text-gray-200"
                      disabled={hasSubmitted}
                    />
                  </div>
                  {/* Budget */}
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-pink-600 dark:text-pink-400 mb-1 md:mb-2">
                      Estimated Budget
                    </label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="e.g. 20,000"
                      className="w-full px-3 py-3 md:px-4 md:py-4 rounded-xl md:rounded-2xl border-2 text-base md:text-lg bg-pink-200 dark:bg-pink-950 dark:border-pink-700 focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 text-gray-800 dark:text-gray-200"
                      disabled={hasSubmitted}
                    />
                  </div>
                  {/* Message */}
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-pink-600 dark:text-pink-400 mb-1 md:mb-2">
                      Your Message *
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, ideas, or just say hello..."
                      className="w-full px-3 py-3 md:px-4 md:py-4 rounded-xl md:rounded-2xl border-2 text-base md:text-lg bg-pink-200 dark:bg-pink-950 dark:border-pink-700 focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 resize-none text-gray-800 dark:text-gray-200"
                      disabled={hasSubmitted}
                      required
                    />
                  </div>
                  {/* Submit Button */}
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className={`btn-modern bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-700 hover:to-pink-700 dark:text-white text-base md:text-lg lg:text-xl px-8 py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl min-w-[160px] md:min-w-[200px] font-semibold ${
                        hasSubmitted ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={hasSubmitted}
                    >
                      {hasSubmitted ? "Message Sent!" : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
