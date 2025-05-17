"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "@/app/ThemBtn";
import Image from "next/image";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="dark:bg-black bg-white shadow-sm relative z-50"
    >
      <div className="flex justify-between items-center py-4 px-4 h-20 container mx-auto">
        <motion.div
          className="flex items-center gap-2 sm:gap-4"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className=""
            >
              <Image
                src="/image/hum-hands/Encrypt Brain Logo.svg"
                alt="logo"
                width={100}
                height={100}
                className=" mt-4 text-center "
              />
            </motion.div>
            <span className="block dark:text-white text-black font-bold text-xl ">
              Encrypt Brain 
            </span>
          </div>

          {/* Toggle button visible on all screens */}
          <div className="">
            <ModeToggle />
          </div>
        </motion.div>

        {/* Social Media box - hidden on mobile, visible on lg and up */}
        <motion.div
          className="hidden lg:block"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.div
            className="w-72 h-12 dark:bg-white bg-gray-300 rounded-full px-4 relative flex items-center"
            whileHover={{ scale: 1.02 }}
          >
            <ul className="flex items-center justify-center gap-x-4 w-full h-full text-black">
              <li className="font-bold cursor-pointer text-sm hover:text-gray-500 hover:scale-105 transition-all duration-200 ">
                <a
                  href="#about"
                  className="font-bold cursor-pointer text-sm hover:text-gray-500 hover:scale-105 transition-all duration-200"
                >
                  About
                </a>
              </li>
              <li className="font-bold cursor-pointer text-sm hover:text-gray-500 hover:scale-105 transition-all duration-200 ">
                <a
                  href="#services"
                  className="font-bold cursor-pointer text-sm hover:text-gray-500 hover:scale-105 transition-all duration-200"
                >
                  Services
                </a>
              </li>
              <li className="font-bold cursor-pointer text-sm hover:text-gray-500 hover:scale-105 transition-all duration-200 ">
                <a
                  href="#partners"
                  className="font-bold cursor-pointer text-sm hover:text-gray-500 hover:scale-105 transition-all duration-200"
                >
                  Partners
                </a>
              </li>
              <li className="font-bold cursor-pointer text-sm hover:text-gray-500 hover:scale-105 transition-all duration-200 ">
                <a
                  href="#projects"
                  className="font-bold cursor-pointer text-sm hover:text-gray-500 hover:scale-105 transition-all duration-200"
                >
                  Projects
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Mobile menu button - only visible on smaller screens */}
        <motion.button
          className="block sm:hidden"
          whileTap={{ scale: 0.95 }}
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile menu - slides in from the top */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-white shadow-md overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-6">
              <motion.div
                className="w-full h-12 dark:bg-white bg-gray-300 rounded-full px-4 relative flex items-center"
                whileHover={{ scale: 1.02 }}
              >
                <ul className="flex items-center justify-center gap-x-4 w-full h-full text-black">
                  <li
                    id="#about"
                    className="font-bold text-sm hover:text-gray-500 hover:scale-105 transition-all duration-200 "
                  >
                    About
                  </li>
                  <li
                    id="#services"
                    className="font-bold text-sm hover:text-gray-500 hover:scale-105 transition-all duration-200 "
                  >
                    Service
                  </li>
                  <li
                    id="#partners"
                    className="font-bold text-sm hover:text-gray-500 hover:scale-105 transition-all duration-200 "
                  >
                    Partners
                  </li>
                  <li
                    id="#projects"
                    className="font-bold text-sm hover:text-gray-500 hover:scale-105 transition-all duration-200 "
                  >
                    Projects
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
