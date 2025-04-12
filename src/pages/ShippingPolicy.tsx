
import React from 'react';
import { Footer } from '@/components/layout/Footer';

const ShippingPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container max-w-3xl px-4 py-8 mx-auto">
        <h1 className="text-3xl font-bold mb-6">Shipping Policy</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="mb-4">
            At Bleame, we strive to provide fast, reliable, and affordable shipping options for all our customers. 
            Please review our shipping policy below for detailed information on shipping methods, timeframes, and costs.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Processing Time</h2>
          <p className="mb-4">
            All orders are processed within 1-3 business days (excluding weekends and holidays) after receiving your order confirmation email.
            You will receive a shipping confirmation email with tracking information once your order has been shipped.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Shipping Methods and Timeframes</h2>
          <p className="mb-4">
            We offer the following shipping methods:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Standard Shipping: 5-7 business days</li>
            <li className="mb-2">Express Shipping: 2-3 business days</li>
            <li className="mb-2">Overnight Shipping: Next business day (orders must be placed before 12 PM EST)</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Shipping Costs</h2>
          <p className="mb-4">
            Shipping costs are calculated based on the weight of your order and your location. You can view the shipping cost at checkout before completing your purchase.
          </p>
          <p className="mb-4">
            <strong>Free Shipping:</strong> Orders over $50 qualify for free standard shipping within the United States.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">International Shipping</h2>
          <p className="mb-4">
            We ship internationally to select countries. International shipping times vary depending on the destination country and may take 7-21 business days.
            Please note that international orders may be subject to customs duties and taxes, which are the responsibility of the customer.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Tracking Information</h2>
          <p className="mb-4">
            Once your order ships, you will receive a shipping confirmation email with a tracking number. 
            You can track your order by clicking the tracking link in the email or entering the tracking number on the carrier's website.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Shipping Delays</h2>
          <p className="mb-4">
            While we strive to deliver your order within the estimated timeframe, occasional delays may occur due to weather conditions, 
            carrier delays, or other unforeseen circumstances. If your order is significantly delayed, please contact our customer service team.
          </p>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default ShippingPolicy;
