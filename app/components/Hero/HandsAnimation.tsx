"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function HandsAnimation() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const leftInitial = isMobile ? -100 : -500;
  const leftTarget = isMobile ? -10 : -280;

  const rightInitial = isMobile ? 100 : 500;
  const rightTarget = isMobile ? 10 : 280;

  const topPosition = isMobile ? "top-1/4" : "top-1/3"; // رفع للأيدين فوق شوية

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div ref={ref} className="relative w-screen h-screen overflow-hidden">
      {/* اليد اليسرى */}
      <motion.div
        key={isInView ? "left-in" : "left-out"}
        initial={{ x: leftInitial }}
        animate={{ x: isInView ? leftTarget : leftInitial }}
        transition={{
          duration: 3,
          delay: 0.2,
          ease: "easeInOut",
        }}
        className={`absolute left-1/2 transform -translate-x-full ${topPosition} -translate-y-1/2`}
      >
        <Image
          src="/image/cyborg.png"
          alt="Cyborg Hand"
          width={300}
          height={300}
          className="w-[250px] md:w-[250px] lg:w-[450px] object-cover"
        />
      </motion.div>

      {/* اليد اليمنى */}
      <motion.div
        key={isInView ? "right-in" : "right-out"}
        initial={{ x: rightInitial }}
        animate={{ x: isInView ? rightTarget : rightInitial }}
        transition={{
          duration: 3,
          delay: 0.2,
          ease: "easeInOut",
        }}
        className={`absolute left-1/2 transform ${topPosition} -translate-y-1/2`}
      >
        <Image
          src="/image/technology-human.png"
          alt="Human Hand"
          width={300}
          height={300}
          className="w-[250px] md:w-[250px] lg:w-[450px] object-cover"
        />
      </motion.div>
    </div>
  );
}
