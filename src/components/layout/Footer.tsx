import React from 'react';
import { Link } from 'react-router-dom';
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
      href: "/contact"
    }, {
      title: "Shipping & Returns",
      href: "/shipping-policy"
    }, {
      title: "FAQs",
      href: "#"
    }, {
      title: "Track Order",
      href: "#"
    }],
    legal: [{
      title: "Terms of Service",
      href: "/terms-of-use"
    }, {
      title: "Privacy Policy",
      href: "#"
    }, {
      title: "Cookie Policy",
      href: "#"
    }, {
      title: "GDPR",
      href: "#"
    }],
    navigation: [{
      title: "Shipping Policy",
      href: "/shipping-policy"
    }, {
      title: "Refund Policy",
      href: "/refund-policy"
    }, {
      title: "Return & Exchange",
      href: "/return-exchange"
    }, {
      title: "Terms of Use",
      href: "/terms-of-use"
    }, {
      title: "Contact",
      href: "/contact"
    }]
  };
  return <footer className="bg-gradient-to-b from-[#1A1F2C] to-[#121620] text-white py-16 bg-gray-950">
      <div className="container mx-auto px-4 bg-gray-950">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Newsletter Section */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-8">
              <h2 className="font-bold mb-4 text-center text-2xl">Join Our Newsletter</h2>
              <p className="text-gray-300 text-sm mb-4 text-center">
                Sign up for our newsletter to receive updates, exclusive deals, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input type="email" placeholder="Enter your email" className="bg-[#2A2F3C] border-none text-white placeholder:text-gray-400" />
                <Button className="bg-[#cc1653] hover:bg-[#a61244] text-white">
                  Subscribe <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
            
            
          </div>
          
          {/* Navigation Links */}
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link, index) => <li key={index}>
                  <Link to={link.href} className="text-gray-300 hover:text-[#ff6e96] transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1 text-[#cc1653]" />
                    {link.title}
                  </Link>
                </li>)}
            </ul>
          </div>
          
          {/* Customer Care */}
          
          
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
            {footerLinks.legal.map((link, index) => <Link key={index} to={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                {link.title}
              </Link>)}
          </div>
        </div>
      </div>
    </footer>;
};