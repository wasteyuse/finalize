
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./contexts/CartContext";
import { SidebarProvider } from "./contexts/SidebarContext";
import { Cart as CartSlide } from "./components/cart/Cart";
import { Header } from "./components/layout/Header";
import { TopBanner } from "@/components/product/TopBanner";

// Add policy pages
import ShippingPolicy from "./pages/ShippingPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ReturnExchange from "./pages/ReturnExchange";
import TermsOfUse from "./pages/TermsOfUse";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <CartProvider>
          <SidebarProvider>
            <Toaster />
            <Sonner />
            <CartSlide />
            <TopBanner />
            <Header />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/shipping-policy" element={<ShippingPolicy />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/return-exchange" element={<ReturnExchange />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </SidebarProvider>
        </CartProvider>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
