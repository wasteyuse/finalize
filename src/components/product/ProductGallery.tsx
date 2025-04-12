
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface ProductGalleryProps {
  images: string[];
  thumbnails: string[];
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  thumbnails
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  
  const handleThumbnailClick = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="mb-0">
      {/* Main Image Display */}
      <div className="relative w-full h-[329px] mb-4 overflow-hidden rounded-xl shadow-md">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Product view ${index + 1}`}
              className={`w-full h-full object-cover rounded-xl ${
                isZoomed ? "scale-125 cursor-zoom-out" : "cursor-zoom-in"
              } transition-transform duration-300`}
              onClick={() => setIsZoomed(!isZoomed)}
            />
          </div>
        ))}
        
        {/* Image Navigation Controls */}
        <div className="absolute inset-0 flex items-center justify-between opacity-0 hover:opacity-100 transition-opacity duration-200 px-[16px]">
          <button
            className="w-9 h-9 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors"
            onClick={() => setCurrentImage(prev => (prev > 0 ? prev - 1 : images.length - 1))}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            className="w-9 h-9 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors"
            onClick={() => setCurrentImage(prev => (prev < images.length - 1 ? prev + 1 : 0))}
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
        
        {/* Zoom button */}
        <button
          className="absolute w-9 h-9 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors right-3 bottom-3"
          aria-label="Zoom image"
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <ZoomIn className="w-4 h-4 text-gray-700" />
        </button>
      </div>

      {/* Thumbnail Carousel */}
      <Carousel className="w-full max-w-[342px] mx-auto">
        <CarouselContent className="gap-2 px-[24px] py-[5px]">
          {thumbnails.map((thumbnail, index) => (
            <CarouselItem key={index} className="basis-1/4 pl-1 px-[2px]">
              <button
                className={`relative w-full aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentImage
                    ? "ring-2 ring-[#7069BC] scale-105"
                    : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img
                  src={thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {index === currentImage && (
                  <div className="absolute inset-0 bg-[#7069BC]/10" />
                )}
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      {/* Image Indicator Dots */}
      <div className="flex justify-center mt-4 gap-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImage ? "bg-[#7069BC] w-4" : "bg-gray-300"
            }`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
