import { useState, useEffect } from "react";

export const useLocalStorage = (key: string) => {
  const [value, setValue] = useState("");

  const set = (value: any) => {
    setValue(value);
    localStorage.setItem(key, value);
  };

  useEffect(() => {
    const data = localStorage.getItem(key);
    setValue(data);
  }, []);

  return [value, set] as const;
};
