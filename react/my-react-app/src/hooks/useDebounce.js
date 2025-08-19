import { useEffect, useState } from "react";

export const useDebounce = (fn, delay = 500) => {
  const [debouncedFn, setDebouncedFn] = useState(fn);

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebouncedFn(fn);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [fn, delay]);
  return debouncedFn;
};
