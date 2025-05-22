"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Mail, Phone, Globe, LocateIcon } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: false, amount: 0.2 });

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      ref={footerRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-gray-900 text-gray-100 h-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
          {/* Company Info */}
          <motion.div
            variants={item}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="col-span-1"
          >
            <motion.h3
              className="text-xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Encrypt Brain
            </motion.h3>
            <motion.p className=" text-gray-400 mb-4 ">
              Creating amazing digital experiences with cutting-edge technology.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              {[
                { icon: Mail, href: " mailto:it@encryptbrain.com" },

                {
                  icon: Linkedin,
                  href: " https://www.linkedin.com/company/encryptbrain/",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  variants={item}
                  whileHover={{ scale: 1.2, color: "#60a5fa" }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={item}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="col-span-1"
          >
            <motion.h3
              className="text-xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Services
            </motion.h3>
            <motion.ul
              className="space-y-2"
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              {[
                "Web Development",
                "Mobile Apps",
                "UI/UX Design",
                "Testing",
                "Tech Consulting & Support",
              ].map((service, index) => (
                <motion.li key={index} variants={item}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 5, color: "#60a5fa" }}
                  >
                    {service}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={item}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="col-span-1"
          >
            <motion.h3
              className="text-xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Contact Us
            </motion.h3>
            <motion.div
              className="space-y-2"
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              <motion.div
                variants={item}
                className="flex items-center space-x-3"
              >
                <Mail size={18} className="text-gray-400" />
                <a
                  href="mailto:info@company.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  it@encryptbrain.com
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-2"
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              <motion.div
                variants={item}
                className="flex items-center space-x-3"
              >
                <Globe size={18} className="text-gray-400" />
                <a
                  href="https://encryptbrain.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  https://encryptbrain.com{" "}
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-2"
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              <motion.div
                variants={item}
                className="flex items-center space-x-3"
              >
                <LocateIcon size={18} className="text-gray-400" />
                <a
                  href="https://encryptbrain.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Compound 118 – 1st Floor–Apt 4 – Obour City–Egypt
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-4"
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              <motion.div
                variants={item}
                className="flex items-center space-x-3"
              >
                <Phone size={18} className="text-gray-400" />
                <div className="text-gray-400 c transition-colors">
                  <a
                    className="hover:text-white cursor-pointer"
                    href={"https://api.whatsapp.com/send?phone=201044950655"}
                  >
                    +201097706996{" "}
                  </a>
                  <a
                    href={"https://api.whatsapp.com/send?phone=201044950655"}
                    className="hover:text-white cursor-pointer"
                  >
                    +201044950655
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-4 pt-4 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.p
            className="text-gray-500 text-sm"
            whileHover={{ color: "#60a5fa" }}
          >
            © {currentYear} Company Name. All rights reserved.
          </motion.p>
          {/* <motion.div className="flex space-x-6 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (policy, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-500 text-sm hover:text-white transition-colors"
                  whileHover={{ color: "#60a5fa" }}
                >
                  {policy}
                </motion.a>
              )
            )}
          </motion.div> */}
        </motion.div>
      </div>
    </motion.footer>
  );
}
