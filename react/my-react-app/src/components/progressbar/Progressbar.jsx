import { useEffect, useState } from "react";
import "./Progressbar.css";

const Progressbar = ({ maxValue = 100, duration = 300 }) => {
  const [value, setValue] = useState(0);
  let timer;

  useEffect(() => {
    if (value < maxValue) {
      const interval = duration / maxValue;
      timer = setInterval(() => {
        setValue((prev) => prev + 1);
      }, interval);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [value, maxValue, duration]);

  return (
    <div className="progressbar">
      <div
        className="progressActive"
        style={{ width: `${(value / maxValue) * 100}%` }}
      ></div>
      <span className="progressText">
        {Math.round((value / maxValue) * 100)}%
      </span>
    </div>
  );
};

export default Progressbar;
