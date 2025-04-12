import React, { useState, useEffect } from "react";
import { Check, Package } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";
import { CountdownTimer } from "./CountdownTimer";

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
  const { addToCart } = useCart();

  useEffect(() => {
    // Initialize PayPal cart if the global cartPaypal object exists
    if (window.cartPaypal && typeof window.cartPaypal.AddToCart === 'function') {
      window.cartPaypal.AddToCart({ id: "2YFECDREWTECQ" });
    }
  }, []);

  const handleVariantSelect = (variant: Variant) => {
    setSelectedVariant(variant.id);
    onVariantSelect(variant);
  };

  const handleAddToCart = () => {
    // Find the selected variant
    const variant = variants.find((v) => v.id === selectedVariant);
    if (variant) {
      // Add to cart
      addToCart({
        id: variant.id,
        title: variant.title,
        image: variant.image,
        price: variant.price,
        originalPrice: variant.originalPrice,
      });
    }
  };

  return (
    <div className="mb-6">
      {variants.map((variant) => (
        <div
          key={variant.id}
          className={cn(
            "flex items-center border relative mb-3 p-5 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-md max-sm:p-4",
            selectedVariant === variant.id 
              ? "border-[#7069BC] bg-[#F9F8FF] shadow-sm" 
              : "border-[#EAEAEA] hover:border-[#D0CDF7]"
          )}
          onClick={() => handleVariantSelect(variant)}
        >
          <div className={cn(
            "w-5 h-5 flex items-center justify-center absolute -translate-y-1/2 rounded-full border-2 transition-all duration-200 left-4 top-1/2",
            selectedVariant === variant.id
              ? "border-[#7069BC] bg-[#7069BC]"
              : "border-[#D0D0D0] bg-white"
          )}>
            {selectedVariant === variant.id && (
              <Check className="w-3 h-3 text-white" strokeWidth={3} />
            )}
          </div>

          <img
            src={variant.image}
            alt={variant.title}
            className="w-[50px] h-[50px] rounded-lg object-contain mx-3 ml-8"
          />
          
          <div className="flex-1">
            <div className="flex items-center flex-wrap gap-2">
              <span className="text-base font-bold text-[#4D4D4D] flex items-center">
                {variant.title}
                {variant.title === "2 Pack" && (
                  <Package 
                    className="ml-1.5 text-[#7069BC]" 
                    size={16} 
                    strokeWidth={2.5} 
                  />
                )}
              </span>
              <div className="text-xs font-semibold text-[#7069BC] uppercase bg-[#F0EEFF] px-3 py-1 rounded-full">
                Save ${variant.savings}
              </div>
            </div>
            
            {variant.features && (
              <div className="text-xs text-[#4D4D4D] mt-1 flex gap-1">
                {variant.features.map((feature, index) => (
                  <span 
                    key={index}
                    className={cn(
                      "px-2 py-0.5 rounded",
                      feature === "FREE" ? "bg-[#E9FCF0] text-[#2BAB64] font-medium" : ""
                    )}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            )}
            
            <div className="flex items-center gap-2 mt-1">
              <div className="text-base font-bold text-[#7069BC]">
                ${variant.price}
              </div>
              <div className="text-xs text-[#8A8A8A] line-through">
                ${variant.originalPrice}
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="flex items-center bg-gradient-to-r from-[#7069BC] to-[#8A84D8] p-1.5 rounded-md shadow-sm mt-2 max-sm:flex-col max-sm:text-center overflow-hidden">
        <div className="bg-white/15 rounded-lg p-1 mr-2 flex-shrink-0 max-sm:mx-auto max-sm:mb-1.5">
          <img src={bonusImage} alt="Free Bonus" className="w-8 h-7 object-contain" />
        </div>
        <div className="text-white text-xs max-sm:mx-0 max-sm:my-1 flex items-center">
          <span className="font-bold mr-1">+ FREE</span>
          <span className="opacity-90">Body scrub</span>
        </div>
      </div>
      
      <button 
        className="w-full h-[62px] text-white text-lg font-bold tracking-wide uppercase cursor-pointer mt-5 mb-4 rounded-xl border-none bg-gradient-to-r from-[#7069BC] to-[#8A84D8] hover:brightness-105 transition-all duration-300 shadow-md hover:shadow-lg"
        onClick={handleAddToCart}
      >
        CLAIM OFFER
      </button>
      
      <div className="my-4">
        <paypal-add-to-cart-button data-id="2YFECDREWTECQ"></paypal-add-to-cart-button>
      </div>
      
      <CountdownTimer initialMinutes={16} initialSeconds={59} />
      
      <div className="text-xs text-center text-[#8A8A8A] mb-4">
        Free shipping on orders over $50
      </div>
      
      <div className="flex justify-center">
        <img
          src="/lovable-uploads/bf3df539-4f44-4259-b843-84a24c3df34a.png"
          alt="Payment methods"
          className="h-[26px] object-contain mx-auto opacity-90 hover:opacity-100 transition-opacity"
        />
      </div>
    </div>
  );
};
