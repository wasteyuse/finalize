
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, User } from 'lucide-react';
import { CartIndicator } from '@/components/cart/CartIndicator';
import { cn } from '@/lib/utils';

export const Header: React.FC = () => {
  useEffect(() => {
    // Initialize PayPal cart if the global cartPaypal object exists
    if (window.cartPaypal && typeof window.cartPaypal.Cart === 'function') {
      window.cartPaypal.Cart({ id: "pp-view-cart" });
    }
  }, []);

  return <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Left Section - Navigation Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Home">
              <Home className="w-5 h-5" />
            </Link>
            
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Profile">
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Center Section - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="block font-bold text-xl text-[#7069BC]">
              Bleame
            </Link>
          </div>

          {/* Right Section - Shopping Cart */}
          <div className="flex items-center space-x-2">
            <div className="mr-2">
              <paypal-cart-button data-id="pp-view-cart"></paypal-cart-button>
            </div>
            <CartIndicator />
          </div>
        </div>
      </div>
    </header>;
};
