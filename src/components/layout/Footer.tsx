
import React from "react";
import { Separator } from "../ui/separator";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Remember Frame</h3>
            <p className="text-gray-300 text-sm">Perfect for showcasing your cherished moments wherever you go. With its stunning acrylic design and long-lasting battery.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-white">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping-policy" className="text-gray-300 hover:text-white">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/return-exchange" className="text-gray-300 hover:text-white">
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/refund-policy" className="text-gray-300 hover:text-white">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="text-gray-300 hover:text-white">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8 bg-gray-800" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Remember Frame. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 text-sm hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-white">
              Sitemap
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>;
};

export { Footer };
export default Footer;
