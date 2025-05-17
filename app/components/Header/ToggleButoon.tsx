"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const ToggleButoon = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);
  return (
    <button
      onClick={toggleSwitch}
      className={`w-[120px] h-[50px] rounded-full flex items-center px-2 ${
        isOn ? "justify-start" : "justify-end"
      }  cursor-pointer bg-black`}
    >
      <motion.div
        className="w-[40px] h-[40px] bg-gray-100 rounded-full flex items-center justify-center"
        layout
        transition={{
          type: "spring",
          duration: 0.3,
          bounce: 0.3,
        }}
      >
        <div className="w-[5px] h-[5px] bg-black rounded-full" />
      </motion.div>
    </button>
  );
};

export default ToggleButoon;
