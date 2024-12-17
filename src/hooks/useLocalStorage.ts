import { useEffect, useState } from "react";

export function useLocalStorage(key: string) {
  const [value, setValue] = useState(() => {
    const stringValue: string | null = localStorage.getItem(key);
    return stringValue && JSON.parse(stringValue);
  });

  const updateLocalStorage = (newValue: any) => {
    setValue(newValue);
  };

  const deleteFromLocalStorage = () => {
    setValue(null);
  };

  useEffect(() => {
    if (value !== null) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.removeItem(key);
    }
  }, [value]);

  return { value, updateLocalStorage, deleteFromLocalStorage };
}
