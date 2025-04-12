
import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { cn } from '@/lib/utils';

interface CartIndicatorProps {
  className?: string;
}

export const CartIndicator: React.FC<CartIndicatorProps> = ({
  className
}) => {
  const {
    totalItems,
    openCart
  } = useCart();

  return (
    <button 
      onClick={openCart}
      className={cn(
        "relative p-2 rounded-full hover:bg-gray-100 transition-colors",
        className
      )}
      aria-label="Open cart"
    >
      <ShoppingBag className="w-5 h-5" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-[#cc1653] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </button>
  );
};
