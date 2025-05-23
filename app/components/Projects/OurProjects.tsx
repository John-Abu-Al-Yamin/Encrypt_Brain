"use client";
import { motion } from "framer-motion";
import HeaderSection from "../HeaderSection";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const OurProjects = () => {
  return (
    <motion.div
      id="projects"
      className="py-2 px-2 lg:py-6 lg:px-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <HeaderSection companey="Encrypt Brain" title="Our Projects" />

      <div className="w-full grid grid-cols-2 gap-x-4 md:gap-x-6">
        {/* Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-xl shadow-sm dark:shadow-none bg-white dark:bg-zinc-900 transition hover:shadow-md"
        >
          <div className="relative h-44 w-full">
            <Image
              src="/image/EncryptBrain/Pretty/pretty logo.png"
              alt="Pretty Project"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="p-3 sm:p-4">
            <div className="flex items-center flex-col lg:flex-row lg:justify-between mb-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Pretty
              </h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="cursor-pointer text-sm px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    Visit Pretty
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Pretty</DialogTitle>
                    <DialogDescription>
                      Pretty is a web app to create & share beautiful
                      presentations. It provides customizable templates and
                      interactive features for fast, stunning results.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <p className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                      Coming Soon
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-5">
              Pretty is a web app to create & share beautiful presentations. It
              provides customizable templates and interactive features for fast,
              stunning results.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-xl shadow-sm dark:shadow-none bg-white dark:bg-zinc-900 transition hover:shadow-md"
        >
          <div className="relative h-44 w-full">
            <Image
              src="/image/EncryptBrain/Pretty/mhwerflowers.png"
              alt="MhwerFlowers Project"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="p-3 sm:p-4">
            <div className="flex items-center flex-col lg:flex-row lg:justify-between mb-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                MhwerFlowers
              </h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="cursor-pointer text-sm px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    Visit MhwerFlowers
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>MhwerFlowers</DialogTitle>
                    <DialogDescription>
                      MhwerFlowers – Send Love, Send Flowers Across Saudi
                      Arabia. Looking to brighten someone&apos;s day or mark a
                      special occasion? MhwerFlowers is your trusted flower
                      delivery service across Saudi Arabia. From romantic roses
                      to elegant bouquets and thoughtful arrangements, we make
                      it easy to order and send fresh flowers with just a few
                      clicks. Whether you&apos;re in Riyadh, Jeddah, Dammam, or
                      anywhere in the Kingdom, we deliver beauty to every
                      doorstep—quickly, reliably, and with love.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <Link
                      href="https://mhwerflowers.com"
                      target="_blank"
                      className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      Visit MhwerFlowers
                    </Link>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-5">
              MhwerFlowers – Send Love, Send Flowers Across Saudi Arabia.
              Looking to brighten someone&apos;s day or mark a special occasion?
              MhwerFlowers is your trusted flower delivery service across Saudi
              Arabia. From romantic roses to elegant bouquets and thoughtful
              arrangements, we make it easy to order and send fresh flowers with
              just a few clicks. Whether you&apos;re in Riyadh, Jeddah, Dammam,
              or anywhere in the Kingdom, we deliver beauty to every
              doorstep—quickly, reliably, and with love.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OurProjects;
