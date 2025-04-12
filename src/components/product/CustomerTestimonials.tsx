
import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/ui/StarRating";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  image?: string;
}

interface CustomerTestimonialsProps {
  rating: number;
  reviewCount: number;
}

export const CustomerTestimonials: React.FC<CustomerTestimonialsProps> = ({
  rating,
  reviewCount
}) => {
  // Sample customer reviews data with added images
  const reviews: Review[] = [
    {
      id: 1,
      name: "Jessica M.",
      rating: 5,
      date: "March 15, 2023",
      comment: "I was skeptical at first, but this product is amazing! My skin feels so smooth after using it. No more razor bumps or cuts. Definitely worth the money.",
      verified: true,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
    },
    {
      id: 2,
      name: "Sarah T.",
      rating: 5,
      date: "February 22, 2023",
      comment: "Game changer for sensitive skin! I've tried everything for my sensitive skin and this is the only product that doesn't cause irritation. Love it!",
      verified: true,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
    },
    {
      id: 3,
      name: "Melissa K.",
      rating: 4,
      date: "April 3, 2023",
      comment: "Works great on legs and underarms. Takes a little practice to get the technique right, but once you do, it's so easy to use.",
      verified: true,
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
    }
  ];

  const [currentReview, setCurrentReview] = useState(0);
  const scrollSpeed = 3; // Fixed at 3 seconds

  const nextReview = useCallback(() => {
    setCurrentReview(prev => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const prevReview = () => {
    setCurrentReview(prev => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, scrollSpeed * 1000); // Convert to milliseconds
    
    return () => {
      clearInterval(interval);
    };
  }, [nextReview, scrollSpeed]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 my-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Look At How Others Are Loving Their Bleame</h2>
        <div className="flex items-center justify-center mb-1 gap-1">
          <StarRating rating={rating} size={20} />
          <span className="text-sm font-medium text-gray-700 ml-2">
            {rating} out of 5
          </span>
        </div>
        <p className="text-gray-500 text-sm">Based on 1,319+ Happy Customers</p>
      </div>
      
      {/* Review Slider */}
      <div className="relative mb-8">
        <div className="overflow-hidden">
          <div className="transition-transform duration-500 ease-in-out" 
               style={{ transform: `translateX(-${currentReview * 100}%)`, width: `${reviews.length * 100}%`, display: 'flex' }}>
            {reviews.map((review, index) => (
              <div key={review.id} className="w-full flex-shrink-0 px-4">
                <Card className="overflow-hidden border-gray-100 h-full">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3 bg-[#7069BC]">
                          {review.image ? <AvatarImage src={review.image} alt={review.name} /> : <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>}
                        </Avatar>
                        <div>
                          <p className="font-medium">{review.name}</p>
                          <div className="flex items-center gap-2">
                            <StarRating rating={review.rating} size={14} />
                          </div>
                        </div>
                      </div>
                      {review.verified && (
                        <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          Verified Purchase
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-700 text-sm mb-4">{review.comment}</p>
                    
                    {/* Review image preview */}
                    {review.image && (
                      <div className="mt-3">
                        <img src={review.image} alt="Product result" className="rounded-lg w-full max-h-48 object-cover" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Controls */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button 
            onClick={prevReview}
            className="w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors transform -translate-x-1/2"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
        </div>
        
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button 
            onClick={nextReview}
            className="w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors transform translate-x-1/2"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
        
        {/* Pagination Indicators */}
        <div className="flex justify-center mt-4 gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentReview ? "bg-[#7069BC] w-4" : "bg-gray-300"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <div className="mt-8 flex flex-col items-center">
        <a href="https://www.paypal.com/ncp/payment/AWQDP2YASKJAY" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs">
          <button className="text-white font-bold rounded-md uppercase tracking-wide shadow-md hover:shadow-lg transition-all w-full max-w-xs text-xl text-center px-[19px] py-[5px] bg-[#cb1552]">
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
