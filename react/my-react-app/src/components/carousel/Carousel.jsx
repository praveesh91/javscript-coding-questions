import { useEffect, useRef, useState } from "react";
import "./Carousel.css";

const Carousel = ({ imagePerSlide = 1 }) => {
  const [data, setData] = useState([]);
  const [width, setWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgRef = useRef(null);

  const getData = async () => {
    try {
      const res = await fetch(
        "https://5f91498b563c230016178a82.mockapi.io/carousels"
      );
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (imgRef.current) {
      setWidth(imgRef.current.offsetWidth);
    }
  }, [data]);

  const gotoPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const gotoNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="carousel-container"
      style={{ overflow: "hidden", width: width * imagePerSlide }}
    >
      <div>
        <div
          className="carousel"
          style={{
            transform: `translateX(-${currentIndex * width}px)`,
          }}
        >
          {data.map((image, index) => (
            <img
              key={image.name}
              ref={index === 0 ? imgRef : null}
              src={image.avatar}
              alt={image.name}
              style={{ width: "100%", flexShrink: 0 }}
            />
          ))}
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={gotoPrev}>Prev</button>
        <button onClick={gotoNext}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
