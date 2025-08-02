import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react"; // or use any icon lib
import "./SnowBackground.css";

function CertificateCard({ title, imageUrl, viewLink, downloadLink }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <motion.div
        whileHover={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-sm mx-auto shadow-lg rounded-2xl overflow-hidden p-4 flex flex-col justify-between cursor-pointer"
  style={{
    background: "linear-gradient(90deg, rgb(36, 0, 0) 0%, rgb(121, 9, 58) 35%, rgb(8, 32, 190) 100%)"
  }}
  data-dark-bg="linear-gradient(5deg, rgb(36,0,0) 0%, rgb(165,45,115) 35%, rgba(106,15,102,0.395) 100%)"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Title */}
        <h3 className="text-lg font-semibold text-center dark:text-white mb-3 whitespace-pre-line">
          {title}
        </h3>

        {/* Certificate Image */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="rounded-xl object-cover h-52 w-full mb-4"
          />
        )}

        {/* Action Buttons */}
        <div className="flex justify-center mt-2  items-center">
          {viewLink && (
            <a
              href={viewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-pink-200 underline "
              onClick={(e) => e.stopPropagation()}
            >
              View Certificate
            </a>
          )}
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 bg-opacity-30 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-5 right-5 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition duration-200"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Enlarged Certificate Image */}
          <img
            src={imageUrl}
            alt={title}
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </>
  );
}

export default CertificateCard;
