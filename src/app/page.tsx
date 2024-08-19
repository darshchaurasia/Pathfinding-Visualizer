"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuroraBackground } from "../components/aurora-background"; 
import { motion } from "framer-motion";
import Link from 'next/link'; // Import Link from Next.js
import "./globals.css";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* AuroraBackground with content */}
      <AuroraBackground className="bg-gradient-to-b from-indigo-500 via-purple-500 to-blue-500 ">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold text-white text-center">
            Visualize Pathfinding
          </div>
          <div className="font-extralight text-base md:text-4xl text-neutral-200 py-4">
            See Dijkstra, A* in Action.
          </div>
          {/* Update the button to use Link */}
          <Link href="/visualizer">
            <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
              Test it for yourself!
            </button>
          </Link>
        </motion.div>
      </AuroraBackground>

      <Footer />
    </div>
  );
};

export default HomePage;
