"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background/50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center">
              <span className="font-fira-code text-xl font-bold text-primary">
                Karan Sharma
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Senior Analyst at AlphaGrep (HFT), <br />
              IIT Guwahati CS Graduate
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/karansharma04" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/in/karansharma04" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:karanrajsharma43@gmail.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={20} />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://codeforces.com/profile/_karan" target="_blank" rel="noopener noreferrer">
                  <Code size={20} />
                  <span className="sr-only">Codeforces</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Experience
              </Link>
              <Link href="/#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="/#achievements" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Achievements
              </Link>
            </nav>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold">Competitive Profiles</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="https://codeforces.com/profile/_karan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center"
              >
                <span>Codeforces</span>
                <ExternalLink size={12} className="ml-1" />
              </Link>
              <Link
                href="https://www.codechef.com/users/karan_04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center"
              >
                <span>CodeChef</span>
                <ExternalLink size={12} className="ml-1" />
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t">
          <p className="text-xs text-muted-foreground text-center">
            © {currentYear} Karan Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}