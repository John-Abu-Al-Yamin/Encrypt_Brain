"use client";
import { motion } from "framer-motion";

const BtnWathsApp = () => {
  return (
    <motion.a
      href="https://api.whatsapp.com/send?phone=201286976691"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, y: 2 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed  md:flex  bottom-4 right-4 md:right-8 md:bottom-8 
                 bg-green-600 text-white px-3 py-3 rounded-full shadow-xl 
                 hover:bg-green-700 hover:shadow-2xl transition duration-300 
                 items-center gap-2 animate-bounce z-[1000]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 fill-white"
        viewBox="0 0 32 32"
      >
        <path d="M16.01 3C9.38 3 3.99 8.38 3.99 15c0 2.64.89 5.08 2.38 7.03L3 29l7.2-2.33A12.94 12.94 0 0016.01 27c6.63 0 12.01-5.38 12.01-12S22.64 3 16.01 3zm0 22c-1.9 0-3.66-.49-5.22-1.34l-.37-.21-4.26 1.37 1.4-4.15-.24-.38A10.93 10.93 0 015.99 15c0-5.52 4.49-10 10.01-10 5.52 0 10 4.48 10 10s-4.48 10-10 10zm5.24-7.93c-.29-.14-1.71-.84-1.98-.94-.27-.1-.47-.14-.67.14-.2.29-.77.94-.94 1.13-.17.2-.35.22-.64.08-.29-.14-1.22-.45-2.33-1.42-.86-.76-1.44-1.7-1.6-1.99-.17-.29-.02-.45.13-.59.14-.14.29-.35.44-.53.15-.18.2-.29.3-.49.1-.2.05-.37-.02-.53-.07-.14-.67-1.61-.92-2.2-.24-.57-.49-.49-.67-.5-.17 0-.37-.01-.57-.01-.2 0-.53.08-.81.37-.27.29-1.06 1.04-1.06 2.53 0 1.48 1.09 2.91 1.24 3.11.15.2 2.15 3.3 5.21 4.63.73.32 1.3.5 1.74.64.73.23 1.39.2 1.91.12.58-.09 1.71-.7 1.95-1.38.24-.69.24-1.28.17-1.38-.07-.1-.26-.17-.54-.31z" />
      </svg>
      
    </motion.a>
  );
};

export default BtnWathsApp;
