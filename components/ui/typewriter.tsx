"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  texts: string[];
  delay?: number;
}

export default function Typewriter({ texts, delay = 3000 }: TypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && currentText === texts[currentTextIndex]) {
      // Wait before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delay);
    } else if (isDeleting && currentText === "") {
      // Move to next text
      setIsDeleting(false);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    } else {
      // Either typing or deleting
      timeout = setTimeout(() => {
        const fullText = texts[currentTextIndex];
        
        setCurrentText(prevText => {
          if (isDeleting) {
            return prevText.substring(0, prevText.length - 1);
          } else {
            return fullText.substring(0, prevText.length + 1);
          }
        });
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, delay]);

  return (
    <div className="inline-flex">
      <span>{currentText}</span>
      <span className="ml-1 animate-blink">|</span>
    </div>
  );
}