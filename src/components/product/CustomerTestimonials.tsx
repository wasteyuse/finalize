
import React from 'react';
import { Button } from "@/components/ui/button";
import { Star, Check, Plane, Clock, ZapOff } from "lucide-react";

interface CustomerTestimonialsProps {
  rating: number;
  reviewCount: number;
}

export const CustomerTestimonials: React.FC<CustomerTestimonialsProps> = ({
  rating,
  reviewCount
}) => {
  return <div className="flex flex-col items-center text-center max-w-lg mx-auto my-12">
      <h2 className="font-bold text-[#333] mb-2 text-2xl">Look At How Others Are Loving Their RememberFrame</h2>
      
      <p className="text-[#666] mb-6">
        Real Reviews From Real People
      </p>
      
      <Button className="bg-[#7069BC] hover:bg-[#8A84D8] text-white font-bold text-lg py-6 px-12 rounded-md uppercase tracking-wide shadow-md hover:shadow-lg transition-all w-full max-w-xs">
        CLAIM OFFER
      </Button>
      
      <div className="flex items-center mt-5">
        <div className="flex">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#7069BC] text-[#7069BC]" strokeWidth={0.5} />)}
        </div>
        <span className="ml-2 text-[#333] text-xs">
          Rated {rating}/5 by {reviewCount.toLocaleString()}+ Happy Customers
        </span>
      </div>
      
      {/* Before & After Comparison Section */}
      <div className="mt-20 w-full max-w-4xl">
        <h2 className="text-4xl font-bold text-[#5D5682] mb-3">Hair removal just got waaaaaay easier</h2>
        <p className="text-[#6C6A8A] mb-10 max-w-2xl mx-auto">
          Meet Bleame Crystal Hair Eraser – the easiest, painless hair removal for a smooth skin instantly!
        </p>
        
        <div className="relative rounded-full overflow-hidden w-64 h-64 mx-auto mb-12">
          <img 
            src="/lovable-uploads/9edf90ca-1b26-434b-b5c6-bf91f9824924.png" 
            alt="Before and after using Bleame" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-full p-2 shadow-md">
              <div className="flex text-[#5D5682]">
                <span className="px-1">&lt;</span>
                <span className="px-1">&gt;</span>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-3xl font-bold text-[#5D5682] mb-10">The Bleame Difference</h3>
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center max-w-4xl mx-auto">
          {/* Easy to Use */}
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-[#F3F2FF] p-4 mb-3">
              <Check className="w-8 h-8 text-[#7069BC]" />
            </div>
            <h4 className="text-[#5D5682] font-bold mb-2">Easy to Use</h4>
            <p className="text-[#6C6A8A] text-sm">Simply rub it to your skin in circular motion for a hair-free body!</p>
          </div>
          
          {/* Travel Safe */}
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-[#F3F2FF] p-4 mb-3">
              <Plane className="w-8 h-8 text-[#7069BC]" />
            </div>
            <h4 className="text-[#5D5682] font-bold mb-2">Travel Safe</h4>
            <p className="text-[#6C6A8A] text-sm">Unlike shavers, you can take Bleame with you wherever you go.</p>
          </div>
          
          {/* Long Lasting */}
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-[#F3F2FF] p-4 mb-3">
              <Clock className="w-8 h-8 text-[#7069BC]" />
            </div>
            <h4 className="text-[#5D5682] font-bold mb-2">Long Lasting</h4>
            <p className="text-[#6C6A8A] text-sm">No refills or recharges required and it is reusable up to 1 year.</p>
          </div>
          
          {/* Slows Hair Growth */}
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-[#F3F2FF] p-4 mb-3">
              <ZapOff className="w-8 h-8 text-[#7069BC]" />
            </div>
            <h4 className="text-[#5D5682] font-bold mb-2">Slows Hair Growth</h4>
            <p className="text-[#6C6A8A] text-sm">Designed to slow down hair regrowth in just a couple of sessions.</p>
          </div>
        </div>
      </div>
    </div>;
};
