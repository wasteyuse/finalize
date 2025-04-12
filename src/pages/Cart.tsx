
import React from 'react';
import { TopBanner } from '@/components/product/TopBanner';
import { Footer } from '@/components/layout/Footer';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, subtotal } = useCart();

  return (
    <div className="flex flex-col min-h-screen">
      <TopBanner />
      <div className="container max-w-5xl px-4 py-8 mx-auto">
        <div className="flex items-center mb-6">
          <Link to="/" className="flex items-center gap-2 text-sm text-[#7069BC] hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Back to Shopping
          </Link>
        </div>

        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <ShoppingBag className="w-6 h-6" />
          Your Cart
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-400" strokeWidth={1.5} />
            <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Button asChild>
              <Link to="/">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 py-4 border-b">
                  <div className="w-20 h-20 rounded-md overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{item.title}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id)} 
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <span className="sr-only">Remove</span>
                        &times;
                      </button>
                    </div>
                    
                    <div className="mt-1">
                      <span className="font-medium">${item.price}</span>
                      <span className="ml-2 text-sm text-gray-400 line-through">${item.originalPrice}</span>
                    </div>
                    
                    <div className="mt-2 flex items-center">
                      <button 
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="w-8 h-8 flex items-center justify-center border rounded-l-md"
                      >
                        -
                      </button>
                      <span className="w-10 h-8 flex items-center justify-center border-t border-b">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center border rounded-r-md"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Order Summary</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between font-medium text-lg mb-4">
                    <span>Total</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <Button className="w-full bg-[#7069BC] hover:bg-[#5d58a3] h-12">
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
