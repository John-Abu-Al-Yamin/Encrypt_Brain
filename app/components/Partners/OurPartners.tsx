"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import HeaderSection from "../HeaderSection";

const OurPartners = () => {
  const partners = [
    {
      id: 1,
      name: "Vodafone",
      logo: "/image/vodafone-icon.svg",
    },
    {
      id: 2,
      name: "Pretty",
      logo: "/image/EncryptBrain/Pretty/pretty logo.png",
    },
  ];

  return (
    <motion.div
      id="partners"
      className="py-4 lg:py-10 px-2 lg:px-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <HeaderSection companey="Encrypt Brain" title="Our Partners" />

      <div className="w-full grid grid-cols-2 place-items-center gap-2 md:gap-2">
        {partners.map((partner) => (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            key={partner.id}
            className="flex flex-col items-center justify-center bg-transparent rounded-3xl cursor-pointer "
          >
            <Image
              src={partner.logo}
              alt="placeholder"
              width={120}
              height={120}
              className="bg-transparent rounded-3xl object-cover"
            />
            <p
              className="text-2xl lg:text-5xl font-bold italic mt-4 dark:text-white text-black"
              style={{ fontFamily: "'Press Start 2P', cursive" }}
            >
              {partner.name}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurPartners;
