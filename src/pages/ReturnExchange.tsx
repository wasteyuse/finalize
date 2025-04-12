
import React from 'react';
import { Footer } from '@/components/layout/Footer';

const ReturnExchange = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container max-w-3xl px-4 py-8 mx-auto">
        <h1 className="text-3xl font-bold mb-6">Return and Exchange Policy</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="mb-4">
            At Bleame, we want to ensure you're completely satisfied with your purchase. If for any reason you're not happy with your order, 
            we offer easy returns and exchanges as outlined below.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Return Policy</h2>
          <p className="mb-4">
            We accept returns within 30 days of receiving your order. To be eligible for a return, your item must be unused, 
            in the same condition that you received it, and in its original packaging.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Exchange Policy</h2>
          <p className="mb-4">
            If you need to exchange an item for the same product, send us an email at support@bleame.com and we'll guide you through the process.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">How to Return an Item</h2>
          <p className="mb-4">
            To return an item, please follow these steps:
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li className="mb-2">Email our customer service team at support@bleame.com with your order number and reason for return.</li>
            <li className="mb-2">Our team will provide you with a return authorization number and return shipping address.</li>
            <li className="mb-2">Package the item securely with all original packaging and tags.</li>
            <li className="mb-2">Include the return authorization number visibly on the outside of the package.</li>
            <li className="mb-2">Ship the package to the provided address using a trackable shipping method.</li>
          </ol>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Return Shipping</h2>
          <p className="mb-4">
            Customers are responsible for return shipping costs unless the item was received damaged or defective. 
            If you received a damaged or defective item, we will provide a prepaid shipping label for your return.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Processing Time</h2>
          <p className="mb-4">
            Once we receive your return, we'll process it within 3-5 business days. Refunds will be issued to your original payment method, 
            and may take an additional 5-10 business days to appear on your statement, depending on your financial institution.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Exchanges</h2>
          <p className="mb-4">
            If you need to exchange an item for a different size or color, please follow the return process outlined above and place a new order for the desired item. 
            This ensures you receive your new item as quickly as possible without waiting for the exchange process to complete.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Damaged or Defective Items</h2>
          <p className="mb-4">
            If you receive a damaged or defective item, please contact us immediately at support@bleame.com with photos of the damage. 
            We'll replace the item or issue a full refund, including shipping costs.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our return and exchange policy, please contact our customer service team at support@bleame.com 
            or call us at 1-800-123-4567.
          </p>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default ReturnExchange;
