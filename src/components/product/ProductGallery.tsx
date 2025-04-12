import React, { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  thumbnails: string[];
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  thumbnails,
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="mb-5">
      <div className="relative w-[342px] h-[329px] overflow-hidden rounded-[10px] max-sm:w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-[329px] h-[329px] max-sm:w-full ${
              index === currentImage ? "block" : "hidden"
            }`}
          >
            <img
              src={image}
              alt={`Product view ${index + 1}`}
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
        ))}
        <button
          className="absolute w-9 h-9 border flex items-center justify-center bg-white rounded-[100px] border-solid border-[#E0DFE1] right-4 bottom-4"
          aria-label="Zoom image"
        >
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.50184 10.4818C11.4777 8.50596 11.5133 5.33801 9.58134 3.40603C7.64936 1.47405 4.48141 1.50964 2.50552 3.48553C0.529631 5.46142 0.494036 8.62937 2.42602 10.5613C4.358 12.4933 7.52595 12.4577 9.50184 10.4818ZM9.50184 10.4818L13 13.98"
              stroke="#2E2A39"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
      <div className="flex gap-2.5 overflow-x-auto mt-[18px] max-sm:justify-center">
        {thumbnails.map((thumbnail, index) => (
          <button
            key={index}
            className={`w-[82px] h-[82px] rounded overflow-hidden ${
              index === currentImage ? "ring-2 ring-[#7069BC]" : ""
            }`}
            onClick={() => setCurrentImage(index)}
          >
            <img
              src={thumbnail}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
