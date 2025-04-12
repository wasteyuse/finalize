
import React from 'react';
import { Footer } from '@/components/layout/Footer';

const RefundPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container max-w-3xl px-4 py-8 mx-auto">
        <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="mb-4">
            At Bleame, we want you to be completely satisfied with your purchase. If you're not entirely happy with your order, 
            we're here to help. Please review our refund policy below.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Refund Eligibility</h2>
          <p className="mb-4">
            We offer a 30-day satisfaction guarantee on all our products. If you're not satisfied with your purchase for any reason, 
            you can return it within 30 days of receiving the item for a full refund of the purchase price (excluding shipping costs).
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Refund Process</h2>
          <p className="mb-4">
            To initiate a refund, please follow these steps:
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li className="mb-2">Contact our customer service team at support@bleame.com to request a return authorization.</li>
            <li className="mb-2">Package the item securely in its original packaging if possible.</li>
            <li className="mb-2">Include your order number and return reason with the return package.</li>
            <li className="mb-2">Ship the item back to the address provided by our customer service team.</li>
          </ol>
          
          <p className="mb-4">
            Once we receive your return, our team will inspect the item to ensure it meets our return conditions. 
            We will process your refund within 5-7 business days after receiving and inspecting the returned item.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Refund Conditions</h2>
          <p className="mb-4">
            To qualify for a refund, items must be:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">In their original condition</li>
            <li className="mb-2">Unused and unwashed</li>
            <li className="mb-2">With all original tags and packaging</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Non-Refundable Items</h2>
          <p className="mb-4">
            The following items are non-refundable:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Gift cards</li>
            <li className="mb-2">Downloadable products</li>
            <li className="mb-2">Items marked as final sale</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Refund Methods</h2>
          <p className="mb-4">
            Refunds will be issued to the original payment method used for the purchase. 
            Please allow 5-10 business days for the refund to appear on your account statement, depending on your financial institution.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our refund policy, please contact our customer service team at support@bleame.com or call us at 1-800-123-4567.
          </p>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default RefundPolicy;
