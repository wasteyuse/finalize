import React from "react";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/ui/StarRating";

interface CustomerTestimonialsProps {
  rating: number;
  reviewCount: number;
}

export const CustomerTestimonials: React.FC<CustomerTestimonialsProps> = ({ 
  rating,
  reviewCount
}) => {
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 my-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Customer Testimonials</h2>
        <div className="flex items-center justify-center mb-1 gap-1">
          <StarRating rating={rating} size={20} />
          <span className="text-sm font-medium text-gray-700 ml-2">
            {rating} out of 5
          </span>
        </div>
        <p className="text-gray-500 text-sm">Based on {reviewCount} reviews</p>
      </div>
      
      
      
      <div className="mt-8 flex flex-col items-center">
        <a 
          href="https://www.paypal.com/ncp/payment/AWQDP2YASKJAY" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full max-w-xs"
        >
          <button className="bg-[#7069BC] hover:bg-[#8A84D8] text-white font-bold rounded-md uppercase tracking-wide shadow-md hover:shadow-lg transition-all w-full max-w-xs text-xl text-center px-[48px] py-[24px]">
            CLAIM OFFER
          </button>
        </a>
        <p className="text-sm text-gray-500 mt-3">
          30-day money-back guarantee
        </p>
      </div>
    </div>
  );
};
