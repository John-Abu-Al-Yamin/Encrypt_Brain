"use client";
import { motion } from "framer-motion";
import { Atom, Brain, CreativeCommons, Maximize, Timer } from "lucide-react";
import HeaderSection from "../HeaderSection";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotate: -3 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
  hover: {
    scale: 1.05,
    y: -5,
    rotate: 1,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
    transition: { type: "spring", stiffness: 300 },
  },
  tap: {
    scale: 0.98,
    rotate: -1,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.1)",
  },
};

const About = () => {
  return (
    <motion.div
      id="about"
      className="py-4 lg:py-10 px-2 lg:px-20 h-dvh dark:bg-black bg-white dark:text-white text-black"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
     
      <HeaderSection
        companey="Hallow to Encrypt Brain"
        title="Who Are We?"
        description="
          Encrypt Brain  is a tech startup founded in January 2025 and
          headquartered in Egypt. We specialize in delivering cutting-edge
          digital solutions for clients across the Gulf and Europe with a focus
          on mobile and web app development UI/UX and software quality services."
      />

      <motion.div
        className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
      >
        <motion.div
          className="h-32 dark:bg-black dark:text-white dark:shadow-md dark:border dark:border-white bg-gray-100  shadow-md   text-lg font-semibold"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover="hover"
          whileTap="tap"
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          variants={cardVariants}
        >
          <div className=" p-1 md:p-3">
            <div className="flex items-center justify-center gap-2  ">
              <Atom className="w-6 h-6 md:w-10 md:h-10  " />
              <p className="text-sm md:text-lg dark:text-white text-black">
                Quality
              </p>
            </div>
            <p className="text-xs font-bold dark:text-gray-400   text-black line-clamp-4">
              We believe quality should never be compromised. If a task
              can&apos;t be delivered at the highest standard it is better left
              untouched than completed below expectations
            </p>
          </div>
        </motion.div>

 <motion.div
          className="h-32 dark:bg-black dark:text-white dark:shadow-md dark:border dark:border-white bg-gray-100  shadow-md   text-lg font-semibold"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover="hover"
          whileTap="tap"
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          variants={cardVariants}
        >
          <div className="p-3">
            <div className="flex items-center justify-center gap-2  ">
              <CreativeCommons className="6 h-6 md:w-10 md:h-10  " />
              <p className="text-sm md:text-lg dark:text-white text-black">
                Experience
              </p>
            </div>
            <p className="text-xs font-bold dark:text-gray-400   text-black line-clamp-4">
              Backed by engineers with over 10 years of industry experience we
              bring seasoned expertise and insight to every project we undertake
            </p>
          </div>{" "}
        </motion.div>

        <motion.div
          className="h-32 dark:bg-black dark:text-white dark:shadow-md dark:border dark:border-white bg-gray-100  shadow-md   text-lg font-semibold"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover="hover"
          whileTap="tap"
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          variants={cardVariants}
        >
          <div className="p-3">
            <div className="flex items-center justify-center gap-2  ">
              <Brain className="w-6 h-6 md:w-10 md:h-10  " />
              <p className="text-sm md:text-lg dark:text-white text-black">
                Creativity
              </p>
            </div>
            <p className="text-xs font-bold dark:text-gray-400   text-black line-clamp-4">
              Bring us your vision Our talented team will craft a creative
              intelligent solution tailored just for you
            </p>
          </div>{" "}
        </motion.div>
       
        <motion.div
          className="h-32 dark:bg-black dark:text-white dark:shadow-md dark:border dark:border-white bg-gray-100  shadow-md   text-lg font-semibold"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover="hover"
          whileTap="tap"
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          variants={cardVariants}
        >
          <div className="p-3">
            <div className="flex items-center justify-center gap-2  ">
              <Maximize className="6 h-6 md:w-10 md:h-10  " />
              <p className="text-sm md:text-lg dark:text-white text-black">
                Cost
              </p>
            </div>
            <p className="text-xs font-bold dark:text-gray-400   text-black line-clamp-4">
              Our pricing is designed to be competitive and transparent ensuring
              you receive exceptional value and high-quality results every time
            </p>
          </div>{" "}
        </motion.div>

        <motion.div
          className="h-32 dark:bg-black dark:text-white dark:shadow-md dark:border dark:border-white bg-gray-100  shadow-md   text-lg font-semibold"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover="hover"
          whileTap="tap"
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          variants={cardVariants}
        >
          <div className="p-3">
            <div className="flex items-center justify-center gap-2  ">
              <Timer className="6 h-6 md:w-10 md:h-10  " />
              <p className="text-sm md:text-lg dark:text-white text-black">
                On Time
              </p>
            </div>
            <p className="text-xs font-bold dark:text-gray-400   text-black line-clamp-4">
              We approach every project with a strong focus on timely delivery
              aiming to stay within deadlines while maintaining the highest
              standards of quality
            </p>
          </div>{" "}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
