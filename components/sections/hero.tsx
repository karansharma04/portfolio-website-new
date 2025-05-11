"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Code, ExternalLink } from "lucide-react";
import Link from "next/link";
import Typewriter from "@/components/ui/typewriter";

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
      </div>

      {/* Animated gradient blob */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 font-fira-code mb-4"
          >
            <Code size={20} className="text-cyan-500" />
            <span className="text-muted-foreground text-sm sm:text-base">software engineer & competitive programmer</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
          >
            <span className="inline">Hi, I&apos;m </span>
            <span className="inline bg-gradient-to-r from-cyan-500 via-purple-500 to-green-500 text-transparent bg-clip-text">
              Karan Sharma
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl font-fira-code text-muted-foreground mb-8 h-14"
          >
            <Typewriter 
              texts={[
                "Senior Analyst at AlphaGrep (HFT)",
                "IIT Guwahati CS Graduate",
                "Candidate Master on Codeforces",
                "5* Coder on CodeChef"
              ]} 
              delay={2000}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                Resume <ExternalLink size={16} />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <Button
              onClick={handleScrollDown}
              variant="ghost"
              size="icon"
              aria-label="Scroll down"
              className="animate-bounce"
            >
              <ChevronDown size={24} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}