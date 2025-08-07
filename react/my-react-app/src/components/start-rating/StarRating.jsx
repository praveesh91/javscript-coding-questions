import { useState } from "react";
import "./StarRating.css";
import { CiStar } from "react-icons/ci";

const StarRating = ({ size = 5 }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [rating, setRating] = useState(0);

  const handleStarHover = (hoverRating) => setHoverRating(hoverRating);

  return (
    <div className="flex">
      {Array.from({ length: size }, (_, i) => i).map((_, index) => {
        let starValue = index + 1;
        let starClass = "cursor-pointer text-3xl";
        if (hoverRating >= starValue) {
          starClass += " fill-yellow-300";
        } else if (rating >= starValue) {
          starClass += " fill-yellow-600";
        }

        return (
          <CiStar
            key={index}
            className={starClass}
            onMouseEnter={() => handleStarHover(starValue)}
            onMouseLeave={() => handleStarHover(0)}
            onClick={() => setRating(starValue)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
