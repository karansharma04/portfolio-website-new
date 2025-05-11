"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Award, Medal, Star, Code, ChevronUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface Achievement {
  id: string;
  title: string;
  icon: JSX.Element;
  description: string;
  highlight?: string;
}

const achievements: Achievement[] = [
  {
    id: "codeforces",
    title: "Codeforces",
    icon: <Code className="text-purple-500" />,
    description: "Candidate Master (Rating 1956), among top 0.3% Coders in India",
    highlight: "Global rank 50 in Round 892, 58 in Educational Round 151"
  },
  {
    id: "codechef",
    title: "CodeChef",
    icon: <Code className="text-yellow-500" />,
    description: "Rating 2132, 5* Coder",
    highlight: "Global rank 70 in CodeChef Lunchtime"
  },
  {
    id: "cf-rank",
    title: "Codeforces Competition",
    icon: <Trophy className="text-amber-500" />,
    description: "Got a global rank of 50 out of 17763 participants in Codeforces Round 892"
  },
  {
    id: "codechef-lunchtime",
    title: "CodeChef Lunchtime",
    icon: <Award className="text-green-500" />,
    description: "Got a global rank of 70 in CodeChef Lunchtime"
  },
  {
    id: "kickstart",
    title: "Google Kickstart 2022",
    icon: <Star className="text-blue-500" />,
    description: "Got a global rank of 352 in Round G among ~13000 participants"
  },
  {
    id: "codejam",
    title: "Google Code Jam 2022",
    icon: <Star className="text-red-500" />,
    description: "Global rank 381 out of 15,000 in Round 1"
  },
  {
    id: "devrev-ppo",
    title: "DevRev PPO",
    icon: <Award className="text-green-500" />,
    description: "Received pre-placement offer for internship performance"
  },
  {
    id: "hackerrank",
    title: "HackerRank",
    icon: <Star className="text-blue-500" />,
    description: "5 star in C++ and Problem Solving"
  },
  {
    id: "jee",
    title: "JEE Advanced 2019",
    icon: <Medal className="text-yellow-500" />,
    description: "All India Rank 510 out of 0.16 million candidates",
    highlight: "One of the most prestigious competitive exams of India"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-screen-lg mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 inline-block relative">
            Achievements
            <span className="absolute bottom-0 left-0 h-1 w-12 bg-gradient-to-r from-cyan-500 to-purple-500"></span>
          </h2>

          <div className="relative mt-20">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500 top-0"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  variants={fadeIn(index % 2 === 0 ? "left" : "right", 0.3 + index * 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Timeline content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="overflow-hidden bg-card/60 backdrop-blur-sm border hover:border-cyan-500/50 transition-all">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2 mb-2">
                          {achievement.icon}
                          <CardTitle className="text-lg">{achievement.title}</CardTitle>
                        </div>
                        <CardDescription>{achievement.description}</CardDescription>
                      </CardHeader>
                      {achievement.highlight && (
                        <CardContent className="pt-0">
                          <p className="text-xs font-medium text-cyan-500">
                            {achievement.highlight}
                          </p>
                        </CardContent>
                      )}
                    </Card>
                  </div>

                  {/* Timeline point */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center z-10 transform hover:scale-110 transition-transform">
                      <ChevronUp size={12} className="text-white" />
                    </div>
                  </div>

                  {/* Empty space for opposite side */}
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="p-6 bg-card/60 backdrop-blur-sm rounded-lg border">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Code size={20} className="text-purple-500" />
                Competitive Programming
              </h3>
              <p className="mb-6 text-muted-foreground">
                I actively participate in competitive programming contests in my free time. I&apos;m a Candidate Master on Codeforces and 5-star rated coder on CodeChef. I have achieved top global ranks in several contests and have a strong foundation in algorithms and problem solving.
              </p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Codeforces (1956)</span>
                    <span className="text-xs text-purple-500 font-medium">Candidate Master</span>
                  </div>
                  <div className="flex w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500" style={{ width: "78%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">CodeChef (2132)</span>
                    <span className="text-xs text-yellow-500 font-medium">5-Star</span>
                  </div>
                  <div className="flex w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-yellow-500 to-amber-500" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-card/60 backdrop-blur-sm rounded-lg border">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Medal size={20} className="text-yellow-500" />
                Academic Excellence
              </h3>
              <p className="mb-6 text-muted-foreground">
                Consistent academic performance with strong foundation in computer science fundamentals and advanced topics.
              </p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Current CPI</span>
                    <span className="text-xs text-cyan-500 font-medium">8.51/10</span>
                  </div>
                  <div className="flex w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500" style={{ width: "85.1%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">JEE Advanced Rank</span>
                    <span className="text-xs text-green-500 font-medium">AIR 510</span>
                  </div>
                  <div className="flex w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500" style={{ width: "96.8%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}