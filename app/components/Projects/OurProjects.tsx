"use client";
import { motion } from "framer-motion";
import HeaderSection from "../HeaderSection";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock } from "lucide-react";

const OurProjects = () => {
  return (
    <motion.div
      id="projects"
      className="py-8 px-4 lg:py-16 lg:px-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <HeaderSection companey="Encrypt Brain" title="Our Projects" />

      <div className="w-full grid grid-cols-1 ">
        {/* Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-xl shadow-md bg-white dark:bg-zinc-900 transition hover:shadow-xl"
        >
          <div className="relative h-56 w-full">
            <Image
              src="/image/EncryptBrain/Pretty/pretty logo.png"
              alt="Pretty Project"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Pretty
              </h3>
              <Link href="/projects/pertty">
                <Button className="cursor-pointer text-sm px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  <Clock size={16} />
                  Coming Soon
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
              Pretty is a web app to create & share beautiful presentations. It
              provides customizable templates and interactive features for fast,
              stunning results.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OurProjects;
