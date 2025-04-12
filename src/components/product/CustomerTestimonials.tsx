
import React from 'react';
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface CustomerTestimonialsProps {
  rating: number;
  reviewCount: number;
}

export const CustomerTestimonials: React.FC<CustomerTestimonialsProps> = ({
  rating,
  reviewCount
}) => {
  return (
    <div className="flex flex-col items-center text-center max-w-lg mx-auto my-12">
      <h2 className="text-3xl font-bold text-[#333] mb-2">
        Look At How Others Are Loving Their Bleame
      </h2>
      
      <p className="text-[#666] mb-6">
        Real Reviews From Real People
      </p>
      
      <Button 
        className="bg-[#7069BC] hover:bg-[#8A84D8] text-white font-bold text-lg py-6 px-12 rounded-md uppercase tracking-wide shadow-md hover:shadow-lg transition-all w-full max-w-xs"
      >
        CLAIM OFFER
      </Button>
      
      <div className="flex items-center mt-5">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i}
              className="w-5 h-5 fill-[#7069BC] text-[#7069BC]" 
              strokeWidth={0.5}
            />
          ))}
        </div>
        <span className="ml-2 text-sm text-[#333]">
          Rated {rating}/5 by {reviewCount.toLocaleString()}+ Happy Customers
        </span>
      </div>
    </div>
  );
};
