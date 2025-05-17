"use client";
import { motion } from "framer-motion";

const InformationSection = () => {
  return (
    <motion.div
      className="space-y-4 px-2 md:px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="font-bold text-lg tracking-tight">Plance Engineering</h2>
      <p className=" leading-relaxed dark:text-gray-400 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vero,
        earum reiciendis deserunt totam ipsam magni suscipit at.
      </p>
    </motion.div>
  );
};

export default InformationSection;
