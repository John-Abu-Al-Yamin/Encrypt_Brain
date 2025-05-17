"use client";
import { motion } from "framer-motion";

const ButtonsSection = () => {
  return (
    <motion.div
      className="flex flex-wrap gap-3 justify-start md:justify-end"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {["Placeat", "Ai", "Lorem"].map((text, index) => (
        <motion.button
          key={text}
          className={`border dark:border-gray-700 border-gray-300 py-2 px-6 rounded-full text-sm font-medium dark:hover:bg-gray-800 hover:bg-gray-50 transition-colors ${
            text === "Ai" ? "dark:bg-gray-800 bg-gray-50 hover:bg-gray-100" : ""
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          {text}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default ButtonsSection;
