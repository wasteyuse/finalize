import React from 'react';
import { TopBanner } from '@/components/product/TopBanner';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductInfo } from '@/components/product/ProductInfo';
import { ProductVariants } from '@/components/product/ProductVariants';
import { ProductFAQ } from '@/components/product/ProductFAQ';

const Index = () => {
  const productImages = ["https://cdn.builder.io/api/v1/image/assets/TEMP/0aa3456abb54e3568a18456b3918e59e808841fb", "https://cdn.builder.io/api/v1/image/assets/TEMP/29a2dd783416b0f665be147ee7f8e2df6f89eef4"];
  const thumbnails = ["https://cdn.builder.io/api/v1/image/assets/TEMP/51c503e198b45a12e3c6ac83022875f5478738eb", "https://cdn.builder.io/api/v1/image/assets/TEMP/d47311012732f4926ecce2b566bacbc0545414d8", "https://cdn.builder.io/api/v1/image/assets/TEMP/bf14fa63ed7fb4d857526546dc23a47b3c245996", "https://cdn.builder.io/api/v1/image/assets/TEMP/f9b33f543c5b78a05e66642f71847ec64d1bb1ff"];
  
  const features = [
    "👙 Perfect for the bikini area",
    "🍑 Enjoy silky smooth skin",
    "🌸 Eliminate ingrown hairs",
    "🍓 No more strawberry legs",
    "✨ Pain-free, safe & gentle",
    "😌 Gently exfoliates dead skin cell"
  ];

  const variants = [
    {
      id: "1pack",
      title: "1 Pack",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b6644ee7da92f25de0ae4058653690db479a8d98",
      price: 29,
      originalPrice: 47,
      savings: 18
    },
    {
      id: "2pack",
      title: "2 Pack",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/58590e72c6a1dad437688ff5c999b007201c810c",
      price: 49,
      originalPrice: 94,
      savings: 45,
      features: ["Includes", "FREE", "shipping"]
    }
  ];

  const faqItems = [
    {
      question: "Where can I use Bleame?",
      answer: "You can use Bleame on any body part where you want to remove unwanted hair."
    },
    {
      question: "How does it work?",
      answer: "Bleame uses advanced crystal technology to gently remove hair while exfoliating