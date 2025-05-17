"use client";
import { motion } from "framer-motion";
import Cards from "./Cards";
import HeaderSection from "../HeaderSection";

const ServicesSection = () => {
  return (
    <motion.div
      id="services"
      className="py-4 lg:py-10 px-2 lg:px-20 "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <HeaderSection companey=" Encrypt Brain " title="Our Services" />
      <motion.div>
        <Cards />
      </motion.div>
    </motion.div>
  );
};

export default ServicesSection;
