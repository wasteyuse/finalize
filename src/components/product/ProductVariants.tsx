import React, { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { CountdownTimer } from "./CountdownTimer";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Circle } from "lucide-react";

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
  paymentMethodsImage
}) => {
  const [selectedVariant, setSelectedVariant] = useState("1pack");
  const { addToCart } = useCart();
  
  const variants = [
    {
      id: "1pack",
      title: "1 Pack",
      image: "/lovable-uploads/fb5d20d1-828f-4d16-92f1-305f7b24bc45.png",
      price: 69, // Updated price
      originalPrice: 129,
      saveAmount: 60, // Updated save amount
      shipping: ""
    },
    {
      id: "2pack",
      title: "2 Pack",
      image: "/lovable-uploads/4874238e-a2a5-4740-85d4-6a42ea1bff52.png",
      price: 99, // Updated price
      originalPrice: 219,
      saveAmount: 120, // Updated save amount
      shipping: "Includes FREE shipping"
    }
  ];

  const selectedProduct = variants.find(v => v.id === selectedVariant) || variants[0];
  
  const handleAddToCart = () => {
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
                ? "border-[#cc1653] bg-[#FFF5F8]"
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
                    ? "border-[#cc1653]"
                    : "border-gray-300"
                }`}
              >
                {selectedVariant === variant.id ? (
                  <Circle className="h-3 w-3 fill-[#cc1653] text-[#cc1653]" />
                ) : null}
              </label>
            </div>
            
            <img src={variant.image} alt={variant.title} className="w-[50px] h-[50px] rounded-lg object-contain mx-3 ml-8" />
            
            <div className="flex-1">
              <div className="flex items-center flex-wrap gap-2">
                <span className="text-base font-bold text-[#4D4D4D]">
                  {variant.title}
                </span>
                <span className="text-xs font-bold bg-[#FFEBF0] px-2 py-0.5 rounded-full">
                  SAVE ${variant.saveAmount}
                </span>
              </div>
              
              {variant.shipping && (
                <div className="text-xs text-[#cc1653] font-medium mt-0.5">
                  {variant.shipping}
                </div>
              )}
              
              <div className="flex items-center gap-2 mt-1">
                <div className="text-base font-bold text-[#cc1653]">
                  ${variant.price}
                </div>
                <div className="text-xs text-[#8A8A8A] line-through">
                  ${variant.originalPrice}
                </div>
              </div>
            </div>
            
            <div className="text-xl font-bold text-[#cc1653] ml-2">
              ${variant.price}
            </div>
          </div>
        ))}
      </RadioGroup>
      
      <div className="my-4">
        <a 
          href="https://www.paypal.com/ncp/payment/AWQDP2YASKJAY" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block"
        >
          <Button 
            onClick={handleAddToCart} 
            className="w-full bg-[#cc1653] hover:bg-[#a61244] text-white px-4 rounded text-xl py-[22px] font-bold"
          >
            CLAIM OFFER
          </Button>
        </a>
      </div>
      
      <CountdownTimer initialMinutes={16} initialSeconds={59} />
      
      <div className="text-xs text-center text-[#8A8A8A] mb-4">
        Secure & Fast Checkout
      </div>
      
      <div className="flex justify-center">
        <img src="/lovable-uploads/bf3df539-4f44-4259-b843-84a24c3df34a.png" alt="Payment methods" className="h-[26px] object-contain mx-auto opacity-90 hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
};
