"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Cards from "../ServicesSection/Cards";

const SectionVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "0px", amount: 0.3 });

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.currentTime = 0; // ارجع الفيديو لبدايته
      videoRef.current.play().catch((e) => {
        // عشان نتعامل مع الخطأ لو الموبايل منع التشغيل التلقائي
        console.log("Video play prevented:", e);
      });
    } else if (!isInView && videoRef.current) {
      videoRef.current.pause(); // وقف الفيديو لما يخرج من الشاشة
    }
  }, [isInView]);

  const cardsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 2.4,
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="relative w-screen h-screen overflow-hidden"
      initial="hidden"
    >
      <motion.video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        muted
        playsInline
        preload="auto"
      >
        <source src="/image/VD/1.mp4" type="video/mp4" />
      </motion.video>

      <div>
        {/* لو عايزة تتأكد إن الكروت بتظهر جربي تشيلي الشرط مؤقتاً */}
        {isInView && (
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
