import React from "react";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/ui/StarRating";
interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}
interface CustomerTestimonialsProps {
  rating: number;
  reviewCount: number;
}
export const CustomerTestimonials: React.FC<CustomerTestimonialsProps> = ({
  rating,
  reviewCount
}) => {
  // Sample customer reviews data
  const reviews: Review[] = [{
    id: 1,
    name: "Jessica M.",
    rating: 5,
    date: "March 15, 2023",
    comment: "I was skeptical at first, but this product is amazing! My skin feels so smooth after using it. No more razor bumps or cuts. Definitely worth the money.",
    verified: true
  }, {
    id: 2,
    name: "Sarah T.",
    rating: 5,
    date: "February 22, 2023",
    comment: "Game changer for sensitive skin! I've tried everything for my sensitive skin and this is the only product that doesn't cause irritation. Love it!",
    verified: true
  }, {
    id: 3,
    name: "Melissa K.",
    rating: 4,
    date: "April 3, 2023",
    comment: "Works great on legs and underarms. Takes a little practice to get the technique right, but once you do, it's so easy to use.",
    verified: true
  }];
  return <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 my-8">
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
      
      {/* Individual Reviews */}
      <div className="space-y-6 mb-8">
        {reviews.map(review => <div key={review.id} className="border-b pb-6 last:border-0">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <div className="bg-[#7069BC] text-white rounded-full w-10 h-10 flex items-center justify-center font-medium">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-medium">{review.name}</p>
                  <div className="flex items-center">
                    <StarRating rating={review.rating} size={14} />
                    
                  </div>
                </div>
              </div>
              {review.verified && <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  Verified Purchase
                </div>}
            </div>
            <p className="text-gray-700 text-sm">{review.comment}</p>
          </div>)}
      </div>
      
      <div className="mt-8 flex flex-col items-center">
        <a href="https://www.paypal.com/ncp/payment/AWQDP2YASKJAY" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs">
          <button className="bg-[#7069BC] hover:bg-[#8A84D8] text-white font-bold rounded-md uppercase tracking-wide shadow-md hover:shadow-lg transition-all w-full max-w-xs text-xl text-center px-[48px] py-[24px]">
            CLAIM OFFER
          </button>
        </a>
        <p className="text-sm text-gray-500 mt-3">
          30-day money-back guarantee
        </p>
      </div>
    </div>;
};