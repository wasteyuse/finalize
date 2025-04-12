import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    company: [{
      title: "About Us",
      href: "#"
    }, {
      title: "Careers",
      href: "#"
    }, {
      title: "Blog",
      href: "#"
    }, {
      title: "Press",
      href: "#"
    }],
    customerCare: [{
      title: "Contact Us",
      href: "#"
    }, {
      title: "Shipping & Returns",
      href: "#"
    }, {
      title: "FAQs",
      href: "#"
    }, {
      title: "Track Order",
      href: "#"
    }],
    legal: [{
      title: "Terms of Service",
      href: "#"
    }, {
      title: "Privacy Policy",
      href: "#"
    }, {
      title: "Cookie Policy",
      href: "#"
    }, {
      title: "GDPR",
      href: "#"
    }]
  };
  return <footer className="bg-[#1A1F2C] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Newsletter Section */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Join Our Newsletter</h2>
              <p className="text-gray-300 text-sm mb-4">
                Sign up for our newsletter to receive updates, exclusive deals, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input type="email" placeholder="Enter your email" className="bg-[#2A2F3C] border-none text-white placeholder:text-gray-400" />
                <Button className="bg-[#7069BC] hover:bg-[#8A84D8] text-white">
                  Subscribe <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
            
            
          </div>
          
          {/* Company Links */}
          
          
          {/* Customer Care */}
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">Customer Care</h2>
            <ul className="space-y-2">
              {footerLinks.customerCare.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.title}
                  </a>
                </li>)}
            </ul>
          </div>
          
          {/* Contact Info */}
          
        </div>
        
        <Separator className="my-8 bg-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Bleame. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5">
            {footerLinks.legal.map((link, index) => <a key={index} href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                {link.title}
              </a>)}
          </div>
        </div>
      </div>
    </footer>;
};