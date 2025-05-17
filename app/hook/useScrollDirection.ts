"use client";
import { useState, useEffect } from "react";

type ScrollDirection = "up" | "down" | null;

export function useScrollDirection(threshold = 10) {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - prevScrollY);
      
      // Only update if we've scrolled more than the threshold
      if (scrollDifference < threshold) {
        return;
      }

      // Determine scroll direction
      const newScrollDirection = currentScrollY > prevScrollY ? "down" : "up";
      
      // Update visibility based on scroll direction
      setVisible(newScrollDirection === "up" || currentScrollY < 10);
      setScrollDirection(newScrollDirection);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY, threshold]);

  return { scrollDirection, visible, isAtTop: prevScrollY < 10 };
}
