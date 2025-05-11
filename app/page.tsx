import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Achievements from "@/components/sections/achievements";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Main content sections */}
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}