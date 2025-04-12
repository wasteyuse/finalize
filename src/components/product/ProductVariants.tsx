
import React, { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { CountdownTimer } from "./CountdownTimer";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check, Circle } from "lucide-react";

interface ProductVariantsProps {
  product: {
    id: string;
    title: string;
    image: string;
    price: number;
    originalPrice: number;
  };
  bonusImage: string;
  paymentMethodsImage: string;
}

export const ProductVariants: React.FC<ProductVariantsProps> = ({
  product,
  bonusImage,
  paymentMethodsImage
}) => {
  const [selectedVariant, setSelectedVariant] = useState("1pack");
  const { addToCart } = useCart();
  
  const variants = [
    {
      id: "1pack",
      title: "1 Pack",
      image: product.image,
      price: 89,
      originalPrice: 129,
      saveAmount: 40,
      shipping: ""
    },
    {
      id: "2pack",
      title: "2 Pack",
      image: product.image,
      price: 149,
      originalPrice: 219,
      saveAmount: 70,
      shipping: "Includes FREE shipping"
    }
  ];

  const selectedProduct = variants.find(v => v.id === selectedVariant) || variants[0];
  
  const handleAddToCart = () => {
    // Add to cart
    addToCart({
      id: selectedProduct.id,
      title: selectedProduct.title,
      image: selectedProduct.image,
      price: selectedProduct.price,
      originalPrice: selectedProduct.originalPrice
    });
  };

  return (
    <div className="mb-6">
      <RadioGroup 
        defaultValue={selectedVariant} 
        value={selectedVariant}
        onValueChange={setSelectedVariant}
        className="space-y-3"
      >
        {variants.map((variant) => (
          <div 
            key={variant.id}
            className={`flex items-center border relative p-5 rounded-xl shadow-sm py-[14px] ${
              selectedVariant === variant.id
                ? "border-[#7069BC] bg-[#F9F8FF]"
                : "border-gray-200 bg-white"
            }`}
          >
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <RadioGroupItem 
                value={variant.id} 
                id={variant.id}
                className="sr-only"
              />
              <label 
                htmlFor={variant.id}
                className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                  selectedVariant === variant.id
                    ? "border-[#7069BC]"
                    : "border-gray-300"
                }`}
              >
                {selectedVariant === variant.id ? (
                  <Circle className="h-3 w-3 fill-[#7069BC] text-[#7069BC]" />
                ) : null}
              </label>
            </div>
            
            <img src={variant.image} alt={variant.title} className="w-[50px] h-[50px] rounded-lg object-contain mx-3 ml-8" />
            
            <div className="flex-1">
              <div className="flex items-center flex-wrap gap-2">
                <span className="text-base font-bold text-[#4D4D4D]">
                  {variant.title}
                </span>
                <span className="text-xs font-bold bg-[#E5DEFF] px-2 py-0.5 rounded-full">
                  SAVE ${variant.saveAmount}
                </span>
              </div>
              
              {variant.shipping && (
                <div className="text-xs text-[#7069BC] font-medium mt-0.5">
                  {variant.shipping}
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
            
            <div className="text-xl font-bold text-[#7069BC] ml-2">
              ${variant.price}
            </div>
          </div>
        ))}
      </RadioGroup>
      
      <div className="flex items-center bg-gradient-to-r from-[#7069BC] to-[#8A84D8] p-1.5 rounded-md shadow-sm mt-2 max-sm:flex-col max-sm:text-center overflow-hidden py-[5px]">
        <div className="bg-white/15 rounded-lg p-1 mr-2 flex-shrink-0 max-sm:mx-auto max-sm:mb-1.5">
          <img src={bonusImage} alt="Free Bonus" className="w-8 h-7 object-contain" />
        </div>
        <div className="text-white text-xs max-sm:mx-0 max-sm:my-1 flex items-center">
          <span className="font-bold mr-1">+ FREE SHIPPING</span>
          <span className="opacity-90">Body scrub</span>
        </div>
      </div>
      
      <div className="my-4">
        <a 
          href="https://www.paypal.com/ncp/payment/AWQDP2YASKJAY" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block"
        >
          <Button 
            onClick={handleAddToCart} 
            className="w-full bg-[#7069BC] hover:bg-[#5d58a3] text-white px-4 rounded text-xl py-[22px] font-bold"
          >
            CLAIM OFFER
          </Button>
        </a>
      </div>
      
      <CountdownTimer initialMinutes={16} initialSeconds={59} />
      
      <div className="text-xs text-center text-[#8A8A8A] mb-4">
        Free shipping on orders over $50
      </div>
      
      <div className="flex justify-center">
        <img src="/lovable-uploads/bf3df539-4f44-4259-b843-84a24c3df34a.png" alt="Payment methods" className="h-[26px] object-contain mx-auto opacity-90 hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
};
