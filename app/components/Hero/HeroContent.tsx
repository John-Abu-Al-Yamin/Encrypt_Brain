"use client";
import { motion } from "framer-motion";

const HeroContent = () => {
  return (
    <div className="z-10 text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 dark:text-white text-black font-mono uppercase tracking-tighter drop-shadow-xl"
      >
        Encrypt Brain 
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6"
      >
        <span className="dark:text-gray-500 text-gray-300 text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-light italic">
          Encrypted Ideas{" "}
        </span>{" "}
        Intelligent Execution{" "}
      </motion.p>
    </div>
  );
};

export default HeroContent;
