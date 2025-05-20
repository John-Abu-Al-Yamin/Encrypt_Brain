"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Cards from "../ServicesSection/Cards";

const SectionVideo = () => {
  const [showCards, setShowCards] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px", amount: 0.5 });

  useEffect(() => {
    if (isInView && videoRef.current) {
      // عيد تشغيل الفيديو من الأول
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      // اخفي الكروت لحد ما الفيديو يخلص
      setShowCards(false);
    }
  }, [isInView]);

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

  const cardsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="relative w-screen h-screen overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Video as background */}
      <motion.video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        onEnded={() => setShowCards(true)}
        variants={videoVariants}
      >
        <source src="/image/VD/1.mp4" type="video/mp4" />
      </motion.video>

      <div style={{ fontFamily: "'Press Start 2P', cursive" }}>
        {/* Cards تظهر بعد انتهاء الفيديو */}
        {showCards && (
          <motion.div
            className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            initial="hidden"
            animate="visible"
            variants={cardsVariants}
          >
            <Cards />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default SectionVideo;
