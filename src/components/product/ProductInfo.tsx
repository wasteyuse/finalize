
import React from "react";
import { StarRating } from "../ui/StarRating";

interface ProductInfoProps {
  title: string;
  subtitle: string;
  rating: number;
  reviews: number;
  originalPrice: number;
  salePrice: number;
  discount: number;
  features: string[];
}

export const ProductInfo: React.FC<ProductInfoProps> = ({
  title,
  subtitle,
  rating,
  reviews,
  originalPrice,
  salePrice,
  discount,
  features,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2.5 mb-2.5">
        <StarRating rating={rating} />
        <div className="text-[15px] text-[#2E2A39]">
          Excellent {rating} | {reviews} reviews
        </div>
      </div>
      <h1 className="text-2xl font-bold text-[#2E2A39] tracking-[-0.4px] mb-2.5">
        {title}
      </h1>
      <div className="text-sm font-bold text-[#2E2A39] mb-[15px]">
        {subtitle}
      </div>
      <div className="flex items-center gap-2.5 mb-5">
        <div className="text-lg text-[#2E2A39] line-through opacity-70">
          ${originalPrice}
        </div>
        <div className="text-[17px] font-bold text-[#cc1653]">${salePrice}</div>
        <div className="text-[13px] font-bold text-[#2E2A3A] uppercase bg-[#FFEBF0] px-[9px] py-[5px] rounded-[50px]">
          save {discount}%
        </div>
      </div>
      <div className="w-full h-px bg-[#D9D9D9] mx-0 my-5" />
      <div className="text-sm font-semibold text-[#2E2A39] leading-6 mb-5">
        Shave armpits, legs, face and bikini area - without painful waxing or
        razor cuts ever again!
      </div>
      <div className="flex flex-col gap-2.5 mb-5">
        {features.map((feature, index) => (
          <div key={index} className="text-sm text-[#2E2A39]">
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
};
