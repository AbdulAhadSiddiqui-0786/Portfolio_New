import React, { useEffect, useState } from "react";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  // Show scroll-to-top button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-transparent pt-8">
      {/* Horizontal line with margin */}
      <hr className="mx-6 sm:mx-12 md:mx-20 border-t border-pink-300 dark:border-pink-700" />

      <div className="py-4 container mx-auto flex flex-col sm:flex-row justify-center items-center text-black dark:text-white">
        <div className="sm:mb-0">&copy; 2024 All rights Reserved!</div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          {/* Footer links can go here */}
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showButton && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-pink-600 text-white hover:bg-pink-700 shadow-lg transition-all duration-300 dark:bg-pink-500 dark:hover:bg-pink-600"
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
