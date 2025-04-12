import React, { useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { CountdownTimer } from "./CountdownTimer";
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
  const {
    addToCart
  } = useCart();
  useEffect(() => {
    // Initialize PayPal cart if the global cartPaypal object exists
    if (window.cartPaypal && typeof window.cartPaypal.AddToCart === 'function') {
      window.cartPaypal.AddToCart({
        id: "2YFECDREWTECQ"
      });
    }
  }, []);
  const handleAddToCart = () => {
    // Add to cart
    addToCart({
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      originalPrice: product.originalPrice
    });
  };
  return <div className="mb-6">
      <div className="flex items-center border relative mb-3 p-5 rounded-xl border-[#7069BC] bg-[#F9F8FF] shadow-sm">
        <img src={product.image} alt={product.title} className="w-[50px] h-[50px] rounded-lg object-contain mx-3" />
        
        <div className="flex-1">
          <div className="flex items-center flex-wrap gap-2">
            <span className="text-base font-bold text-[#4D4D4D]">
              {product.title}
            </span>
          </div>
          
          <div className="flex items-center gap-2 mt-1">
            <div className="text-base font-bold text-[#7069BC]">
              ${product.price}
            </div>
            <div className="text-xs text-[#8A8A8A] line-through">
              ${product.originalPrice}
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center bg-gradient-to-r from-[#7069BC] to-[#8A84D8] p-1.5 rounded-md shadow-sm mt-2 max-sm:flex-col max-sm:text-center overflow-hidden py-[5px]">
        <div className="bg-white/15 rounded-lg p-1 mr-2 flex-shrink-0 max-sm:mx-auto max-sm:mb-1.5">
          <img src={bonusImage} alt="Free Bonus" className="w-8 h-7 object-contain" />
        </div>
        <div className="text-white text-xs max-sm:mx-0 max-sm:my-1 flex items-center">
          <span className="font-bold mr-1">+ FREE</span>
          <span className="opacity-90">Body scrub</span>
        </div>
      </div>
      
      
      
      <div className="my-4">
        <paypal-add-to-cart-button data-id="2YFECDREWTECQ"></paypal-add-to-cart-button>
      </div>
      
      <CountdownTimer initialMinutes={16} initialSeconds={59} />
      
      <div className="text-xs text-center text-[#8A8A8A] mb-4">
        Free shipping on orders over $50
      </div>
      
      <div className="flex justify-center">
        <img src="/lovable-uploads/bf3df539-4f44-4259-b843-84a24c3df34a.png" alt="Payment methods" className="h-[26px] object-contain mx-auto opacity-90 hover:opacity-100 transition-opacity" />
      </div>
    </div>;
};