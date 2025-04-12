
import React from "react";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: number;
  color?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
  size = 18,
  color = "#cc1653", // Updated from previous color
}) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(maxStars)].map((_, index) => (
        <svg
          key={index}
          width={size}
          height={size}
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="star-icon"
        >
          <path
            d="M9 13.6866L4.35938 16.4991L5.58984 11.2257L1.51172 7.67493L6.89062 7.2179L9 2.26086L11.1094 7.2179L16.4883 7.67493L12.4102 11.2257L13.6406 16.4991L9 13.6866Z"
            fill={color}
          />
        </svg>
      ))}
    </div>
  );
};
