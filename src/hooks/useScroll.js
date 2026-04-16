import { useState, useEffect } from "react";

export default function useScroll() {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [direction, setDirection] = useState("up");

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);
      setDirection(currentY > lastY ? "down" : "up");
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollY, direction };
}
