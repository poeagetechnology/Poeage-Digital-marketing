import { useRef } from "react";

export default function useThrottle(callback, delay = 200) {
  const lastRun = useRef(Date.now());

  return (...args) => {
    if (Date.now() - lastRun.current >= delay) {
      callback(...args);
      lastRun.current = Date.now();
    }
  };
}
