"use client"
import { motion } from "framer-motion"

const BackgroundCircle = () => {
  return (
    <motion.div
      className="absolute w-[400px] h-[400px] rounded-full opacity-50 blur-3xl"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 0.5,
        rotate: [0, 360],
        background: [
          "linear-gradient(to right, #93c5fd, #c4b5fd)", // blue-300 to purple-300
          "linear-gradient(to right, #f9a8d4, #93c5fd)", // pink-300 to blue-300
          "linear-gradient(to right, #fcd34d, #f9a8d4)", // amber-300 to pink-300
          "linear-gradient(to right, #6ee7b7, #fcd34d)", // emerald-300 to amber-300
          "linear-gradient(to right, #93c5fd, #c4b5fd)", // back to original
        ],
      }}
      transition={{
        duration: 3,
        rotate: {
          duration: 6,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        },
        background: {
          duration: 3,
          times: [0, 0.25, 0.5, 0.75, 1],
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        },
        scale: {
          duration: 1,
          ease: "easeOut",
        },
        opacity: {
          duration: 1,
          ease: "easeOut",
        },
      }}
    />
  )
}

export default BackgroundCircle
