"use client";
import React, { useState } from "react";
import {
  PhoneCall,
  Facebook,
  Mail,
  Linkedin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollDirection } from "@/app/hook/useScrollDirection";

type NavigationLink = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

const NavSticky = () => {
  const { visible, isAtTop } = useScrollDirection(20);
  const [hovering, setHovering] = useState(false);
  
  const links: NavigationLink[] = [
    
    {
      href: "https://api.whatsapp.com/send?phone=201044950655",
      icon: <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      label: "WhatsApp"
    },
    {
      href: "https://www.facebook.com/john.emad.7359",
      icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      label: "Facebook"
    },
    {
      href: "mailto:it@encryptbrain.com",
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      label: "Email"
    },
    {
      href: "https://www.linkedin.com/in/john-abou-al-yamin-0425a02aa/",
      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      label: "LinkedIn"
    },
    
  ];

  // Show the nav when at the top, actively scrolling up, or hovering
  const isVisible = isAtTop || visible || hovering;

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isVisible ? 0 : 20,
          opacity: isVisible ? 1 : 0.5,
          scale: isVisible ? 1 : 0.95,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        onHoverStart={() => setHovering(true)}
        onHoverEnd={() => setHovering(false)}
        onFocus={() => setHovering(true)}
        onBlur={() => setHovering(false)}
        className="fixed  bottom-4 sm:bottom-6 left-6 md:left-12 transform -translate-x-1/2 bg-gray-100  backdrop-blur-md px-1 sm:px-3 py-2 flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-4 rounded-full z-[1000] border border-white/10 shadow-2xl"
        aria-label="Social media navigation"
        role="navigation"
      >
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 md:p-1 sm:p-3 rounded-full flex text-lg transition-colors text-black hover:bg-black/30 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus-visible:ring-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.05,
              type: "spring",
              stiffness: 500,
              damping: 24
            }}
            aria-label={link.label}
          >
            {link.icon}
            <span className="sr-only">{link.label}</span>
          </motion.a>
        ))}
      </motion.nav>
    </AnimatePresence>
  );
};

export default NavSticky;
