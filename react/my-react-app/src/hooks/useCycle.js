import { useState } from "react";

export default function useCycle(...args) {
  const [mode, setMode] = useState([...args]);
  const cycle = () => {
    let index = 0;
    return function () {
      setMode(mode[index]);
      index = index + (1 % mode.length);
      return mode;
    };
  };
  console.log(mode, cycle);
  return [mode, cycle];
}
