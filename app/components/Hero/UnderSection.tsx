"use client";
import { motion } from "framer-motion";
import InformationSection from "./InformationSection";
import ButtonsSection from "./ButtonsSection";

const UnderSection = () => {
  return (
    <div className="flex items-center h-full">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 container mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        <InformationSection />
        {/* Vertical divider */}
        <motion.div
          className="hidden md:flex justify-center"
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="h-24 w-px dark:bg-gray-100 bg-gray-800"></div>
        </motion.div>

        <ButtonsSection />
      </motion.div>
    </div>
  );
};

export default UnderSection;
