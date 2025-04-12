import React from 'react';
import { TopBanner } from '@/components/product/TopBanner';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductInfo } from '@/components/product/ProductInfo';
import { ProductVariants } from '@/components/product/ProductVariants';
import { ProductFAQ } from '@/components/product/ProductFAQ';
import { CustomerTestimonials } from '@/components/product/CustomerTestimonials';
import { Footer } from '@/components/layout/Footer';
const Index = () => {
  const productImages = ["https://cdn.builder.io/api/v1/image/assets/TEMP/0aa3456abb54e3568a18456b3918e59e808841fb", "https://cdn.builder.io/api/v1/image/assets/TEMP/29a2dd783416b0f665be147ee7f8e2df6f89eef4"];
  const thumbnails = ["https://cdn.builder.io/api/v1/image/assets/TEMP/51c503e198b45a12e3c6ac83022875f5478738eb", "https://cdn.builder.io/api/v1/image/assets/TEMP/d47311012732f4926ecce2b566bacbc0545414d8", "https://cdn.builder.io/api/v1/image/assets/TEMP/bf14fa63ed7fb4d857526546dc23a47b3c245996", "https://cdn.builder.io/api/v1/image/assets/TEMP/f9b33f543c5b78a05e66642f71847ec64d1bb1ff"];
  const features = ["👙 Perfect for the bikini area", "🍑 Enjoy silky smooth skin", "🌸 Eliminate ingrown hairs", "🍓 No more strawberry legs", "✨ Pain-free, safe & gentle", "😌 Gently exfoliates dead skin cell"];
  const product = {
    id: "1pack",
    title: "Bleame Crystal Hair Eraser",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b6644ee7da92f25de0ae4058653690db479a8d98",
    price: 29,
    originalPrice: 47
  };
  const faqItems = [{
    question: "Where can I use Bleame?",
    answer: "You can use Bleame on any body part where you want to remove unwanted hair."
  }, {
    question: "How does it work?",
    answer: "Bleame uses advanced crystal technology to gently remove hair while exfoliating the skin surface."
  }, {
    question: "Is it safe to use?",
    answer: "Yes, Bleame is designed to be safe for all skin types. It's pain-free and gentle on skin."
  }, {
    question: "How long does it last?",
    answer: "Each Bleame crystal can last for months with proper care and regular use."
  }];
  return <div className="flex flex-col min-h-screen">
      <TopBanner />
      <div className="container max-w-5xl px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="py-0">
            <ProductGallery images={productImages} thumbnails={thumbnails} />
          </div>
          <div>
            <ProductInfo title="Bleame Crystal Hair Eraser™" subtitle="BRAND NEW STOCK ARRIVED" rating={4.8} reviews={2415} originalPrice={47} salePrice={29} discount={38} features={features} />
            <ProductVariants product={product} bonusImage="https://cdn.builder.io/api/v1/image/assets/TEMP/b6644ee7da92f25de0ae4058653690db479a8d98" paymentMethodsImage="/lovable-uploads/bf3df539-4f44-4259-b843-84a24c3df34a.png" />
          </div>
        </div>
        
        <CustomerTestimonials rating={4.8} reviewCount={1319} />
        
        <div className="max-w-3xl mx-auto mt-12">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <ProductFAQ items={faqItems} />
        </div>
      </div>
      <Footer />
    </div>;
};
export default Index;