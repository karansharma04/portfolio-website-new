"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  tech: string[];
}

const experiences: Experience[] = [
  {
    id: "alphagrep",
    title: "Senior Analyst, Trading Systems",
    company: "AlphaGrep (HFT)",
    period: "March 2023 – Present",
    description: [
      "Developing and optimizing the central risk service to compute portfolio risk across all levels in a low-latency environment.",
      "Implementing high-performance, low-latency components for trading systems using C++."
    ],
    tech: ["C++", "Low-Latency", "Trading Systems"]
  },
  {
    id: "devrev",
    title: "Member of Technical Staff",
    company: "DevRev",
    period: "July 2023 – March 2023",
    description: [
      "Created an algorithm-agnostic AI recommendation system with modular pipeline execution. Deployed a model that improved accuracy from 32.3% to 74.8%.",
      "Architected directory/article schemas and APIs. Designed lexicographic average rank algorithm for consistent ordering.",
      "Migrated chatbot from CDC to SQS queues, reducing p99 latency from 8m 37s to 144ms."
    ],
    tech: ["Go", "TypeScript", "React", "Backend", "AI"]
  }
];

export default function Experience() {
  const [typedLines, setTypedLines] = useState<string[]>([
    "Karan@Portfolio:~$ ls experience",
    "AlphaGrep.txt DevRev.txt",
    "Karan@Portfolio:~$ cat AlphaGrep.txt"
  ]);
  const [activeExp, setActiveExp] = useState<string>("alphagrep");
  const [isTyping, setIsTyping] = useState(false);

  const handleExpChange = (expId: string) => {
    if (isTyping || activeExp === expId) return;
    
    setIsTyping(true);
    
    const newCommand = `Karan@Portfolio:~$ cat ${expId === "alphagrep" ? "AlphaGrep.txt" : "DevRev.txt"}`;
    setTypedLines(prev => [...prev.slice(0, 2), newCommand]);
    
    setActiveExp(expId);
    setIsTyping(false);
  };

  const activeExperience = experiences.find(exp => exp.id === activeExp);

  return (
    <section id="experience" className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-screen-lg mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 inline-block relative">
            Work Experience
            <span className="absolute bottom-0 left-0 h-1 w-12 bg-gradient-to-r from-cyan-500 to-purple-500"></span>
          </h2>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-12 rounded-lg border overflow-hidden shadow-md bg-card"
          >
            {/* Terminal header */}
            <div className="flex items-center px-4 py-2 bg-muted">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center text-sm font-medium">Terminal - Experience.sh</div>
            </div>

            {/* Terminal content */}
            <div className="bg-card p-4 font-fira-code text-sm md:text-base overflow-hidden">
              <div className="space-y-1 mb-4">
                {typedLines.map((line, i) => (
                  <div key={i} className="flex">
                    <span className={`text-green-500 ${i === 2 ? "font-bold" : ""}`}>{line}</span>
                  </div>
                ))}
              </div>

              {activeExperience && (
                <div className="mt-4 pl-4 border-l-2 border-cyan-500 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-primary">{activeExperience.title}</h3>
                      <p className="text-sm text-muted-foreground">{activeExperience.company}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{activeExperience.period}</p>
                  </div>

                  <ul className="space-y-2 list-disc ml-4">
                    {activeExperience.description.map((item, i) => (
                      <li key={i} className="text-sm md:text-base">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {activeExperience.tech.map((item) => (
                      <Badge key={item} variant="outline">{item}</Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex space-x-2 mt-8 text-sm">
                <button
                  onClick={() => handleExpChange("alphagrep")}
                  className={`px-3 py-1 rounded transition-colors ${activeExp === "alphagrep" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}
                >
                  AlphaGrep
                </button>
                <button
                  onClick={() => handleExpChange("devrev")}
                  className={`px-3 py-1 rounded transition-colors ${activeExp === "devrev" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}
                >
                  DevRev
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}