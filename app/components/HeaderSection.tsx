"use client";
import { motion } from "framer-motion";
const HeaderSection = ({
  companey,
  title,
  description,
}: {
  companey: string;
  title: string;
  description?: string;
}) => {
  return (
    <div className="text-center mb-4 lg:mb-10">
      <motion.p className="text-xs sm:text-sm font-bold mb-6">
        {companey}
      </motion.p>
      <motion.h1 className="text-4xl md:text-6xl lg:text-7xl mb-4 dark:text-white text-black font-mono uppercase tracking-tighter drop-shadow-xl">
        {title}
      </motion.h1>
      <motion.p className="text-xs sm:text-sm font-bold mb-6">
        {description}
      </motion.p>
    </div>
  );
};

export default HeaderSection;
