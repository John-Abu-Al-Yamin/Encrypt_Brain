"use client";
import { motion } from "framer-motion";
import Image from 'next/image';

const OurTeam = () => {
  return (
    <div className="py-4 lg:py-10 px-2 ">
      <div className="text-center mb-10">
        <motion.p
          className="text-xs sm:text-sm font-bold mb-6 dark:text-white text-black"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          Hallow to Encrypt Brain
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 dark:text-white text-black font-mono uppercase tracking-tighter drop-shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          Our Team
        </motion.h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 lg:p-4">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <TeamCard />
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <TeamCard />
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <TeamCard />
        </motion.div>

        {/* Card 4 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <TeamCard />
        </motion.div>
      </div>
    </div>
  );
};

const TeamCard = () => (
  <div
    className="block rounded-md border  border-gray-300 p-4 shadow-sm sm:p-6"
  >
    <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
      <div className="sm:order-last sm:shrink-0">
        <Image
          alt="card"
          src="https://placehold.co/600x400/EEE/31343C.png"
          className="size-16 rounded-full object-cover sm:size-[72px]"
          width={72}
          height={72}
        />
      </div>

      <div className="mt-4 sm:mt-0">
        <h3 className="text-lg font-medium text-pretty dark:text-gray-300 text-gray-900">
          John Doe
        </h3>
        <p className="mt-1 text-sm dark:text-gray-300 text-gray-700">Front End Developer</p>
        
      </div>
    </div>

    <dl className="mt-6 flex gap-4 lg:gap-6">
      <div>
        <dt className="text-sm font-medium dark:text-gray-300 text-gray-700">Started on</dt>
        <dd className="text-xs dark:text-gray-300 text-gray-700">31/06/2025</dd>
      </div>
    </dl>
  </div>
);

export default OurTeam;
