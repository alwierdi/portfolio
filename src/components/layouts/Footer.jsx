import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 100
      ) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.footer
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="flex justify-center text-center py-72"
    >
      <h1 className="text-white text-2xl">
        <span className="text-7xl font-bold bg-gradient-to-r from-purple-700 to-orange-500 bg-clip-text text-transparent">
          Yeaayy!! You're done,
        </span>
        <div className="mt-4">
          want to contact me?{" "}
          <span
            className="cursor-pointer hover:underline"
            onClick={handleClick}
          >
            click me
          </span>
        </div>
      </h1>

      {showScrollTop && (
        <button
          className="fixed bottom-5 bg-neutral-950 hover:bg-red-600 border border-red-600 text-white p-2 rounded-full"
          onClick={handleScrollToTop}
          aria-label="Scroll to top"
        >
          <AiOutlineArrowUp size={42} />
        </button>
      )}

      {/* Popup */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 w-auto flex items-center justify-center bg-black bg-opacity-75"
        >
          <div className="bg-neutral-950 p-6 rounded-xl shadow-xl text-white max-w-lg mx-auto">
            <h2 className="text-xl font-bold mb-6">Contact</h2>
            <p className="mb-1 text-start">
              Email:
              <a
                href="mailto:alwi.erdi4@gmail.com"
                className="text-blue-400 hover:underline ml-1"
              >
                alwi.erdi4@gmail.com
              </a>
            </p>
            <p className="mb-1 text-start">
              Github:
              <a
                href="https://github.com/alwierdi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline ml-1"
              >
                github.com/alwierdi
              </a>
            </p>
            <p className="mb-1 text-start">
              Linkedin:
              <a
                href="https://www.linkedin.com/in/alwierdi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline ml-1"
              >
                linkedin.com/in/alwierdi
              </a>
            </p>
            <p className="mb-4 text-start">
              Instagram:
              <a
                href="https://www.instagram.com/alwierdi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline ml-1"
              >
                instagram.com/alwierdi
              </a>
            </p>
            <button
              className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </motion.footer>
  );
};

export default Footer;
