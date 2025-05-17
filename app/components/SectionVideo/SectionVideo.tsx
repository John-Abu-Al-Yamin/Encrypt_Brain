"use client";
import { motion } from "framer-motion";
import Cards from "../ServicesSection/Cards";

const SectionVideo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const videoVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="relative w-screen h-screen overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Video as background */}
      <motion.video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        variants={videoVariants}
      >
        <source src="/image/VD/1.mp4" type="video/mp4" />
      </motion.video>
      <div className="" style={{ fontFamily: "'Press Start 2P', cursive" }}>
        
        {/* Centered text */}
        <motion.div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
         <Cards/>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default SectionVideo;
