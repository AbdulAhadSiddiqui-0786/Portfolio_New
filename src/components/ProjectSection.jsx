import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import projects from "../lib/data";

const ProjectSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full py-10 px-4 sm:px-6 relative transition-colors duration-300">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 dark:text-white">
        Projects
      </h1>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={-40}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        }}
        className="relative overflow-visible"
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={project.id}
            className="max-w-[95%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] transition-all duration-300 ease-in-out"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0.3,
                scale: activeIndex === index ? 1 : 0.92,
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative bg-black rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Project Image */}
              <img
                src={project.imageUrl || "/fallback-image.jpg"}
                alt={project.title || "Project"}
                className="w-full h-[220px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover object-center rounded-2xl"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent rounded-2xl" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 p-4 sm:p-6 z-10 text-white w-full">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-white dark:bg-gray-200 text-black text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row sm:gap-4 gap-2">
                  <a
                    href={project.detailsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-4 py-2 rounded-full text-sm text-center hover:bg-gray-200 transition"
                  >
                    View Details
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white text-white px-4 py-2 rounded-full text-sm text-center hover:bg-white hover:text-black transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="swiper-button-prev !text-white !w-10 !h-10 !left-2 md:!-left-4 z-30 opacity-70 hover:opacity-100 transition-opacity ml-4" />
        <div className="swiper-button-next !text-white !w-10 !h-10 !right-2 md:!-right-4 z-30 opacity-70 hover:opacity-100 transition-opacity mr-4" />

        {/* Pagination Bullets */}
        <div className="swiper-pagination !relative !bottom-0 mt-6" />
      </Swiper>
    </div>
  );
};

export default ProjectSection;
