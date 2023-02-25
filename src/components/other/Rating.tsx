import React from "react";
import { ImStarFull, ImStarEmpty, ImStarHalf } from "react-icons/im";

const Rating = ({ rating }: { rating: number }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const maxStars = 5;
  return (
    <div className="flex justify-center space-x-1">
      {[...Array(maxStars)].map((_, i) => (
        <span key={i} className="text-yellow" style={{ cursor: "default" }}>
          {i < filledStars ? (
            <ImStarFull />
          ) : i === filledStars && hasHalfStar ? (
            <ImStarHalf />
          ) : (
            <ImStarEmpty />
          )}
        </span>
      ))}
    </div>
  );
};

export default Rating;
