
import React from 'react';
import { TopBanner } from '@/components/product/TopBanner';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductInfo } from '@/components/product/ProductInfo';
import { ProductVariants } from '@/components/product/ProductVariants';
import { ProductFAQ } from '@/components/product/ProductFAQ';
import { CustomerTestimonials } from '@/components/product/CustomerTestimonials';
import { ProductFeatures } from '@/components/product/ProductFeatures';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  // Updated image URLs with the new digital photo frame images
  const productImages = [
    "/lovable-uploads/382be783-f28d-4d1b-866e-ba24b615f0e1.png",
    "/lovable-uploads/ca028cff-8c40-4cd4-8e85-ff5db5092225.png",
    "/lovable-uploads/430a706e-02c6-41f2-93b7-809ae39ee122.png",
    "/lovable-uploads/26d78a33-1d58-44e9-9db6-367aa3882f93.png",
  ];
  
  const thumbnails = [
    "/lovable-uploads/382be783-f28d-4d1b-866e-ba24b615f0e1.png",
    "/lovable-uploads/ca028cff-8c40-4cd4-8e85-ff5db5092225.png", 
    "/lovable-uploads/430a706e-02c6-41f2-93b7-809ae39ee122.png",
    "/lovable-uploads/26d78a33-1d58-44e9-9db6-367aa3882f93.png",
  ];
  
  const features = [
    "📱 1080P HD Display Resolution", 
    "🔋 1200mAh Long-Lasting Battery", 
    "🔄 Auto-Rotate Function", 
    "🔊 Adjustable Volume Control", 
    "⚡ Type-C Fast Charging", 
    "🎞️ Photo & Video Support"
  ];
  
  const product = {
    id: "1pack",
    title: "Digital Photo Frame 7\"",
    image: "/lovable-uploads/fb5d20d1-828f-4d16-92f1-305f7b24bc45.png",
    price: 89,
    originalPrice: 129
  };
  
  const faqItems = [
    {
      question: "How long does the battery last?",
      answer: "The 1200mAh battery provides up to 4 hours of continuous use on a single charge."
    }, 
    {
      question: "What file formats are supported?",
      answer: "Our digital frame supports JPEG, PNG, MP4, and MOV formats for both photos and videos."
    }, 
    {
      question: "Does it have a built-in speaker?",
      answer: "Yes, it features stereo speakers with 6-level volume adjustment for clear audio playback."
    }, 
    {
      question: "Can it auto-rotate images?",
      answer: "Yes, the frame has an auto-rotate function that supports 360° rotation for both portrait and landscape orientations."
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <TopBanner />
      <div className="container max-w-5xl px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <ProductGallery images={productImages} thumbnails={thumbnails} />
          </div>
          <div>
            <ProductInfo 
              title="Digital Photo Frame 7&quot; HD" 
              subtitle="NEWEST MODEL WITH ACRYLIC DESIGN" 
              rating={4.8} 
              reviews={1237} 
              originalPrice={129} 
              salePrice={89} 
              discount={31} 
              features={features} 
            />
            <ProductVariants 
              product={product} 
              bonusImage="/lovable-uploads/c34cdfc8-bd6c-4148-933c-b52fb94cac87.png" 
              paymentMethodsImage="/lovable-uploads/bf3df539-4f44-4259-b843-84a24c3df34a.png" 
            />
          </div>
        </div>
        
        <CustomerTestimonials rating={4.8} reviewCount={1237} />
        
        <div className="max-w-3xl mx-auto mt-12">
          <h2 className="font-bold mb-4 text-4xl">FAQs</h2>
          <ProductFAQ items={faqItems} />
        </div>
      </div>
      
      <ProductFeatures />
      
      <Footer />
    </div>
  );
};

export default Index;
