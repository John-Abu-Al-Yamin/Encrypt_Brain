"use client";
import { motion } from "framer-motion";
import ParallaxText from "./ParallaxText";
import Image from "next/image";

export default function ParallaxSection() {
  return (
    <div className="px-2 md:px-4">
      <section className="relative py-2 lg:py-10">
        <ParallaxText baseVelocity={-5}>Encrypt Brain </ParallaxText>
        <ParallaxText baseVelocity={5}>software development</ParallaxText>
      </section>
      {/* <div className="container mx-auto  mt-4">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-bold text-lg tracking-tight">Why Us</h2>
          <p className="dark:text-gray-400 leading-relaxed text-gray-600 w-full lg:w-1/2  font-bold">
            <span className="dark:text-gray-100 text-gray-300">
              At Encrypt Brain 
            </span>{" "}
            we specialize in delivering innovative, high-quality digital
            solutions with a focus on user experience and fast development. We
            work with clients across the Gulf and Europe, ensuring
            professionalism in execution, attention to detail, and reliable
            technical support.
          </p>
        </motion.div>
      </div> */}

    </div>
  );
}
