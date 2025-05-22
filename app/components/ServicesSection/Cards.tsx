"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

import { TabletSmartphone, Globe, PenTool, Bug, LifeBuoy, Chrome } from "lucide-react";

interface Card {
  id: number;
  title: string;
  icon: React.ElementType;
  description: string;
}

const cardData: Card[] = [
  {
    id: 1,
    title: "Mobile App Development",
    icon: TabletSmartphone,
    description:
      "We bring more than just strong coding skills to the table. Our experience sets us apart in creating impactful apps that transform how people work and live, using Swift and Kotlin for native development, and React Native, Flutter for cross-platform solutions",
  },
  {
    id: 2,
    title: "Modern Web Applications",
    icon: Globe,
    description:
      "We specialize in both frontend and backend web development, crafting seamless, scalable web solutions. On the frontend, we use React.js, Angular, Vue.js, HTML5, CSS3, JavaScript, TypeScript, Next.js, and Tailwind CSS. For the backend, we leverage Node.js, .NET, PHP, Laravel, Django, and Spring Boot to build robust, high-performance applications",
  },
  {
    id: 3,
    title: "UI/UX Design",
    icon: PenTool,
    description:
      "Deliver the product you need on time with an experienced team that follows a clear, efficient design process",
  },
  {
    id: 4,
    title: "Testing",
    icon: Bug,
    description:
      "Turn to our experts for comprehensive, multi-stage testing and auditing of your software, covering manual and automated testing, performance, and security to ensure quality and reliability at every stage.",
  },
  {
    id: 5,
    title: "Tech Consulting & Support",
    icon: LifeBuoy,
    description:
      "Rely on our experts to eliminate workflow inefficiencies, integrate cutting-edge technologies, and streamline your app portfolio",
  },
  {
    id: 6,
    title: "SEO",
    icon:Chrome 
,
    description:
      "Compete on Google and other common search engines and gain more traffic to your site.",
  },
];

const cardVariants: Variants = {
  hidden: (custom: number) => ({
    opacity: 0,
    scale: 0.8,
    rotate: custom % 2 === 0 ? -15 : 15,
  }),
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      delay: custom * 0.15,
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  }),
  hover: {
    scale: 1.05,
    y: -10,
    boxShadow: "0px 15px 25px rgba(0, 185, 255, 0.8)",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: {
    scale: 0.95,
  },
};

const Cards: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-6 p-2 lg:p-6">
      {cardData.map(({ id, title, description, icon: Icon }) => (
        <motion.div
          key={id}
          custom={id}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          whileTap="hover" 
          viewport={{ once: false, amount: 0.4 }}
          className="relative bg-gray-700 text-white rounded-xl p-4 cursor-pointer select-none"
        >
          <div className="flex flex-col items-center justify-center gap-1 lg:gap-2">
            <Icon className="text-cyan-400 w-6 h-6 lg:w-10 lg:h-10" />
            <h3 className="text-sm font-medium lg:font-semibold lg:text-lg text-center">
              {title}
            </h3>
          </div>
          <div className="relative max-h-[6rem] overflow-y-auto scrollbar-none mt-1 lg:mt-2">
            <p className="text-sm text-zinc-400 leading-relaxed">
              {description}
            </p>
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-700"></div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Cards;
