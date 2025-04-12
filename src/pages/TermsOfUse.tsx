
import React from 'react';
import { Footer } from '@/components/layout/Footer';

const TermsOfUse = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container max-w-3xl px-4 py-8 mx-auto">
        <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="mb-4">
            Welcome to Bleame. These Terms of Use govern your use of our website and services. 
            By accessing or using our website, you agree to be bound by these Terms.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using the Bleame website, you agree to comply with and be bound by these Terms of Use. 
            If you do not agree to these Terms, please do not use our website.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">2. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these Terms at any time. We will provide notice of any material changes by updating the "Last Updated" date at the top of this page. 
            Your continued use of the website after such modifications will constitute your acknowledgment and acceptance of the modified Terms.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">3. Account Registration</h2>
          <p className="mb-4">
            To access certain features of our website, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">4. User Conduct</h2>
          <p className="mb-4">
            You agree not to use the website to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Violate any applicable laws or regulations</li>
            <li className="mb-2">Infringe upon the rights of others</li>
            <li className="mb-2">Distribute harmful or malicious content</li>
            <li className="mb-2">Interfere with the operation of the website</li>
            <li className="mb-2">Collect personal information without consent</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">5. Intellectual Property</h2>
          <p className="mb-4">
            All content, features, and functionality of the website, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are owned by Bleame and are protected by copyright, trademark, and other intellectual property laws.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">6. Limitation of Liability</h2>
          <p className="mb-4">
            In no event shall Bleame, its officers, directors, employees, or agents, be liable to you for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever resulting from any (i) errors, mistakes, or inaccuracies of content; (ii) personal injury or property damage, of any nature whatsoever, resulting from your access to and use of our website; (iii) any unauthorized access to or use of our secure servers and/or any and all personal information and/or financial information stored therein; (iv) any interruption or cessation of transmission to or from our website; (v) any bugs, viruses, trojan horses, or the like, which may be transmitted to or through our website by any third party; and/or (vi) any errors or omissions in any content or for any loss or damage of any kind incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available via the website, whether based on warranty, contract, tort, or any other legal theory, and whether or not the company is advised of the possibility of such damages.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">7. Governing Law</h2>
          <p className="mb-4">
            These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">8. Contact Information</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at legal@bleame.com.
          </p>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default TermsOfUse;
