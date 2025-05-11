"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";
import { Laptop, Server, Database, Code, Layers, Cpu } from "lucide-react";

const skills = [
  { name: "C++", category: "languages", icon: <Code size={14} /> },
  { name: "Python", category: "languages", icon: <Code size={14} /> },
  { name: "Go", category: "languages", icon: <Code size={14} /> },
  { name: "JavaScript", category: "languages", icon: <Code size={14} /> },
  { name: "TypeScript", category: "languages", icon: <Code size={14} /> },
  { name: "React", category: "frontend", icon: <Laptop size={14} /> },
  { name: "Node.js", category: "backend", icon: <Server size={14} /> },
  { name: "Tailwind CSS", category: "frontend", icon: <Laptop size={14} /> },
  { name: "HTML", category: "frontend", icon: <Laptop size={14} /> },
  { name: "CSS", category: "frontend", icon: <Laptop size={14} /> },
  { name: "Cypress", category: "testing", icon: <Laptop size={14} /> },
  { name: "MySQL", category: "database", icon: <Database size={14} /> },
  { name: "MongoDB", category: "database", icon: <Database size={14} /> },
  { name: "DSA", category: "cs", icon: <Layers size={14} /> },
  { name: "Operating Systems", category: "cs", icon: <Cpu size={14} /> },
  { name: "Computer Networks", category: "cs", icon: <Cpu size={14} /> },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-screen-lg mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 inline-block relative">
            About Me
            <span className="absolute bottom-0 left-0 h-1 w-12 bg-gradient-to-r from-cyan-500 to-purple-500"></span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <motion.p
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-lg mb-6 leading-relaxed"
              >
                Hi! I'm Karan Raj Sharma, currently working as a Senior Analyst, Trading Systems at AlphaGrep (HFT). I graduated with a B.Tech in Computer Science and Engineering from IIT Guwahati (2019–2023, CPI: 8.51).
              </motion.p>
              
              <motion.p
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mb-6 leading-relaxed"
              >
                I'm passionate about building high-performance systems, backend architectures, and solving algorithmic challenges. My experience spans C++, Go, Python, and modern web technologies. I love competitive programming and have achieved Candidate Master on Codeforces and 5* on CodeChef.
              </motion.p>
              
              <motion.p
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mb-6 leading-relaxed"
              >
                At AlphaGrep, I work on low-latency trading systems and portfolio risk computation. Previously, at DevRev, I built scalable AI recommendation frameworks and optimized backend/chatbot systems. I also enjoy building interactive visualizations and personal projects.
              </motion.p>
              
              <motion.p
                variants={fadeIn("right", 0.7)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="leading-relaxed"
              >
                Outside of work, I enjoy F1, exploring new tech, and participating in global coding contests.
              </motion.p>
            </div>

            <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold mb-4 font-fira-code">Education</h3>
                <div className="p-5 rounded-lg border bg-card/40 backdrop-blur-sm">
                  <div className="font-medium">IIT Guwahati</div>
                  <div className="text-sm text-muted-foreground mb-2">B.Tech in Computer Science and Engineering (2019 – 2023)</div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-muted-foreground">CPI</span>
                    <span className="font-medium">8.51/10</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 font-fira-code">Key Courses</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-card/40">Data Structures and Algorithms</Badge>
                  <Badge variant="outline" className="bg-card/40">Operating Systems</Badge>
                  <Badge variant="outline" className="bg-card/40">Computer Networks</Badge>
                  <Badge variant="outline" className="bg-card/40">DBMS</Badge>
                  <Badge variant="outline" className="bg-card/40">Machine Learning</Badge>
                  <Badge variant="outline" className="bg-card/40">Deep Learning</Badge>
                  <Badge variant="outline" className="bg-card/40">Probability and Random Processes</Badge>
                  <Badge variant="outline" className="bg-card/40">Linear Algebra</Badge>
                  <Badge variant="outline" className="bg-card/40">Engineering Mathematics</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 font-fira-code">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill.name} variant="secondary" className="flex items-center gap-1">
                      {skill.icon}
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}