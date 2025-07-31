import React, { useState } from "react";

const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

const Virtualisation = ({ itemHeight = 50, windowHeight = 400 }) => {
  const [scrollTop, setScrollTop] = useState(0);

  // Calculate visible items
  const visibleCount = Math.ceil(windowHeight / itemHeight);
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(startIndex + visibleCount + 2, items.length); // +2 buffer

  // Visible items
  const visibleItems = items.slice(startIndex, endIndex);

  // Offset for positioning
  const offsetY = startIndex * itemHeight;

  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop);
  };

  return (
    <div
      onScroll={handleScroll}
      style={{
        height: windowHeight,
        overflow: "auto",
        border: "1px solid #ccc",
      }}
    >
      <div style={{ height: items.length * itemHeight, position: "relative" }}>
        <div
          style={{
            transform: `translateY(${offsetY}px)`,
            position: "absolute",
            width: "100%",
          }}
        >
          {visibleItems.map((item, index) => (
            <div
              key={startIndex + index}
              style={{
                height: itemHeight,
                borderBottom: "1px solid #eee",
                padding: "10px",
                boxSizing: "border-box",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Virtualisation;
