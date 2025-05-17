"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const CursorAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointing, setIsPointing] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsPointing(true)
    const handleMouseUp = () => setIsPointing(false)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    // Hide the default cursor
    document.body.style.cursor = "none"

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.body.style.cursor = "auto"
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      animate={{
        x: mousePosition.x - 50, // Half of image width for centering
        y: mousePosition.y - 50, // Half of image height for centering
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 300,
        mass: 0.5,
      }}
      style={{
        width: "100px",
        height: "100px",
        pointerEvents: "none",
      }}
    >
      <motion.div
        animate={{
          scale: isPointing ? 0.9 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src="/image/hum-hands/Encrypt Brain Logo.svg"
          alt="cursor"
          width={100}
          height={100}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  )
}

export default CursorAnimation