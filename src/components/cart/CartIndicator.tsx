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
  return;
};