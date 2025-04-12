
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
    navigation: [
      {
        title: "Shipping Policy",
        href: "/shipping-policy"
      },
      {
        title: "Refund Policy",
        href: "/refund-policy"
      },
      {
        title: "Return & Exchange",
        href: "/return-exchange"
      },
      {
        title: "Terms of Use",
        href: "/terms-of-use"
      },
      {
        title: "Contact",
        href: "/contact"
      }
    ]
  };
  
  return (
    <footer className="bg-gradient-to-b from-[#1A1F2C] to-[#121620] text-white py-16">
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
            
            <div className="mt-6">
              <h2 className="text-xl font-bold mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="bg-[#2A2F3C] p-2 rounded-full hover:bg-[#7069BC] transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" aria-label="Twitter" className="bg-[#2A2F3C] p-2 rounded-full hover:bg-[#7069BC] transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" aria-label="Instagram" className="bg-[#2A2F3C] p-2 rounded-full hover:bg-[#7069BC] transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" aria-label="Youtube" className="bg-[#2A2F3C] p-2 rounded-full hover:bg-[#7069BC] transition-colors">
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-gray-300 hover:text-[#9b87f5] transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1 text-[#7069BC]" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Customer Care */}
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">Customer Care</h2>
            <ul className="space-y-2">
              {footerLinks.customerCare.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-gray-300 hover:text-[#9b87f5] transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1 text-[#7069BC]" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mt-1 mr-3 text-[#7069BC]" />
                <span className="text-gray-300">support@bleame.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mt-1 mr-3 text-[#7069BC]" />
                <span className="text-gray-300">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-3 text-[#7069BC]" />
                <span className="text-gray-300">123 Commerce St.<br />Suite 100<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Bleame. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5">
            {footerLinks.legal.map((link, index) => (
              <Link key={index} to={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
