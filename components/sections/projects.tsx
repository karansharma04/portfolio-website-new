"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
  featured: boolean;
}

const projects: Project[] = [
  {
    id: "personal-website",
    title: "Personal Website",
    description: "Animated, responsive portfolio site for resume with custom transitions.",
    longDescription: "Built a personal website using React and TailwindCSS to showcase my resume, projects, and achievements. The site features custom transitions and is fully responsive.",
    tags: ["React", "TailwindCSS", "Portfolio", "Web"],
    links: {
      demo: "https://karan-sharma.netlify.app"
    },
    featured: true
  },
  {
    id: "astar-pathfinding",
    title: "A* Pathfinding Visualizer",
    description: "Interactive visualizer for the A* pathfinding algorithm using Python, Pygame, and TKinter.",
    longDescription: "Developed an interactive visualizer where users can select start/end nodes and view A* pathfinding in real-time. Highlights explored nodes and the final path.",
    tags: ["Python", "Pygame", "Tkinter", "Algorithms", "Visualization"],
    links: {
      github: "https://git.io/JlJwz"
    },
    featured: true
  },
  {
    id: "page-migration",
    title: "Page Migration Simulator",
    description: "Simulator for remote/local memory migrations with custom hot page detection and LRU victim page strategy.",
    longDescription: "Simulated remote/local memory migrations with custom hot page detection and LRU victim page strategy. Implemented in C++ as part of BTP at IIT Guwahati.",
    tags: ["C++", "Memory Management", "Algorithms", "Simulation"],
    links: {},
    featured: true
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"all" | "featured">("featured");
  
  const filteredProjects = activeTab === "featured" 
    ? projects.filter(project => project.featured)
    : projects;

  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-screen-lg mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
              Projects
              <span className="absolute bottom-0 left-0 h-1 w-12 bg-gradient-to-r from-cyan-500 to-purple-500"></span>
            </h2>
            
            <div className="flex space-x-2 mt-4 md:mt-0">
              <Button
                variant={activeTab === "featured" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab("featured")}
              >
                Featured
              </Button>
              <Button
                variant={activeTab === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab("all")}
              >
                All Projects
              </Button>
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeIn("up", 0.1 * index)}
                className="h-full"
              >
                <Card className="h-full flex flex-col group border hover:border-cyan-500/50 transition-colors bg-card/60 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <FolderGit2 size={24} className="text-cyan-500 group-hover:text-purple-500 transition-colors" />
                      <div className="flex space-x-2">
                        {project.links.github && (
                          <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                            <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                              <Github size={18} />
                              <span className="sr-only">GitHub</span>
                            </Link>
                          </Button>
                        )}
                        {project.links.demo && (
                          <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                            <Link href={project.links.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={18} />
                              <span className="sr-only">Live Demo</span>
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                    <CardTitle className="mt-3 text-xl group-hover:text-cyan-500 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 h-10">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      {project.longDescription || project.description}
                    </p>
                  </CardContent>
                  
                  <CardFooter className="pt-2 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}