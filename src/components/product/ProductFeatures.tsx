
import React from 'react';
import { Button } from "@/components/ui/button";

export const ProductFeatures: React.FC = () => {
  return (
    <div className="w-full py-16 px-4 bg-[#F1F0FB]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight text-[#1A1F2C]">
              Smooth skin with no ingrown hair
            </h2>
            <p className="text-lg text-gray-700">
              The Bleame Crystal Hair Eraser™ uses nano-crystalline technology to gently remove hair without chemicals, blades, or pain. Enjoy weeks of smooth skin without the discomfort of traditional hair removal methods.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-[#7069BC] rounded-full p-2 mt-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Pain-Free Hair Removal</h3>
                  <p className="text-gray-600">No more painful waxing or razor burns - just gentle exfoliation.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#7069BC] rounded-full p-2 mt-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Long-Lasting Results</h3>
                  <p className="text-gray-600">Enjoy smooth skin for weeks, not just days like with traditional razors.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#7069BC] rounded-full p-2 mt-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Works Anywhere</h3>
                  <p className="text-gray-600">Safely use on any part of your body - legs, arms, bikini area, and more.</p>
                </div>
              </div>
            </div>
            <div>
              <a href="https://www.paypal.com/ncp/payment/AWQDP2YASKJAY" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button className="bg-[#7069BC] hover:bg-[#8A84D8] text-white px-6 py-3 font-bold text-lg rounded-md">
                  CLAIM YOUR OFFER NOW
                </Button>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/63c0f7c1-724f-4a38-948e-c6a49299c025.png"
              alt="Premium Structure for Better Protection" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

