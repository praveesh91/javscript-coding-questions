import { useRef } from "react";

const getCurrentTimestamp = () => Math.floor(Date.now() / 1000);

const useCache = (key, expiration) => {
  const cache = useRef(JSON.parse(localStorage.getItem(key)) || {});

  const setCache = (query, data) => {
    const timeStamp = getCurrentTimestamp();
    cache.current[query] = { data, timeStamp };
    localStorage.setItem(key, JSON.stringify(cache.current));
  };

  const getCache = (query) => {
    const cachedData = cache.current[query];
    console.log(cache.current);

    if (cachedData) {
      const { data, timeStamp } = cachedData;
      if (getCurrentTimestamp() - timeStamp < expiration) {
        return data;
      } else {
        delete cache.current[query];
        localStorage.setItem(key, JSON.stringify(cache.current));
      }
    }
    return null;
  };

  return { getCache, setCache };
};
export default useCache;
