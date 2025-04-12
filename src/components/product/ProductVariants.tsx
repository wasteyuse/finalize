import React, { useState } from "react";

interface Variant {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice: number;
  savings: number;
  features?: string[];
}

interface ProductVariantsProps {
  variants: Variant[];
  bonusImage: string;
  paymentMethodsImage: string;
  onVariantSelect: (variant: Variant) => void;
}

export const ProductVariants: React.FC<ProductVariantsProps> = ({
  variants,
  bonusImage,
  paymentMethodsImage,
  onVariantSelect,
}) => {
  const [selectedVariant, setSelectedVariant] = useState<string>(
    variants[0].id,
  );

  const handleVariantSelect = (variant: Variant) => {
    setSelectedVariant(variant.id);
    onVariantSelect(variant);
  };

  return (
    <div className="mb-5">
      {variants.map((variant) => (
        <div
          key={variant.id}
          className="flex items-center border relative mb-2.5 p-5 rounded-[10px] border-solid border-[#DBDBDB] max-sm:p-[15px]"
          onClick={() => handleVariantSelect(variant)}
        >
          <img
            src={variant.image}
            alt={variant.title}
            className="w-[35px] h-[35px] mr-5"
          />
          <div className="flex-1">
            <div className="text-[15px] font-bold text-[#4D4D4D]">
              {variant.title}
            </div>
            <div className="text-[11px] font-bold text-[#2E2A3A] uppercase bg-[#D6D2FF] ml-2.5 px-[7px] py-1 rounded-[50px]">
              save ${variant.savings}
            </div>
            {variant.features && (
              <div className="text-xs text-[#4D4D4D]">
                {variant.features.map((feature, index) => (
                  <span key={index}>{feature}</span>
                ))}
              </div>
            )}
            <div className="text-[13px] font-bold text-[#7069BC]">
              ${variant.price}
            </div>
            <div className="text-xs text-[#4D4D4D] line-through">
              ${variant.originalPrice}
            </div>
          </div>
          <div
            className={`w-3.5 h-3.5 border absolute -translate-y-2/4 rounded-[50px] border-solid border-[#7069BC] left-[11px] top-2/4 ${
              selectedVariant === variant.id ? "bg-[#7069BC]" : ""
            }`}
          />
        </div>
      ))}
      <div className="flex items-center bg-[#7069BC] p-2.5 rounded-[0_0_8px_8px] max-sm:flex-col max-sm:text-center">
        <img src={bonusImage} alt="Body Scrub" className="w-[50px] h-11" />
        <div className="text-white text-[13px] ml-2.5 max-sm:mx-0 max-sm:my-2.5">
          <span>+ FREE</span>
          <span>Body scrub for silky & shiny skin</span>
        </div>
      </div>
      <button className="w-full h-[62px] text-white text-[17px] font-bold tracking-[1px] uppercase cursor-pointer mx-0 my-5 rounded-[10px] border-[none] bg-[#7069BC] hover:bg-[#5d56a3] transition-colors">
        CLAIM OFFER
      </button>
      <img
        src={paymentMethodsImage}
        alt="Payment methods"
        className="w-full h-[26px] object-contain mx-0 my-5"
      />
    </div>
  );
};
