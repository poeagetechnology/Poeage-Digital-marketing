import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
  const getStoredValue = () => {
    try {
      const stored = localStorage.getItem(key);

      // nothing stored
      if (stored === null) return initialValue;

      // invalid values that crash JSON.parse
      if (stored === "undefined" || stored === "null" || stored === "") {
        return initialValue;
      }

      return JSON.parse(stored);
    } catch (error) {
      console.warn(`Invalid localStorage for "${key}", resetting.`);
      return initialValue;
    }
  };

  const [value, setValue] = useState(getStoredValue);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(`Failed to save "${key}"`);
    }
  }, [key, value]);

  return [value, setValue];
}
