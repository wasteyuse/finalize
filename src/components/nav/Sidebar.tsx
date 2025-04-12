
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, TruckIcon, RefreshCw, ArrowLeftRight, FileCheck, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  // Close sidebar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest('#sidebar') && !target.closest('#sidebar-trigger')) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    
    // Add overflow hidden to body when sidebar is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Menu items
  const navItems = [
    { 
      title: 'Shipping Policy', 
      path: '/shipping-policy', 
      icon: <TruckIcon className="w-5 h-5" /> 
    },
    { 
      title: 'Refund Policy', 
      path: '/refund-policy', 
      icon: <RefreshCw className="w-5 h-5" /> 
    },
    { 
      title: 'Return and Exchange', 
      path: '/return-exchange', 
      icon: <ArrowLeftRight className="w-5 h-5" /> 
    },
    { 
      title: 'Terms of Use', 
      path: '/terms-of-use', 
      icon: <FileCheck className="w-5 h-5" /> 
    },
    { 
      title: 'Contact', 
      path: '/contact', 
      icon: <MessageSquare className="w-5 h-5" /> 
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            id="sidebar"
            className="fixed top-0 left-0 bottom-0 w-[250px] max-w-[70vw] bg-white dark:bg-[#1A1F2C] z-50 shadow-xl flex flex-col rounded-r-xl"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold text-[#7069BC]">Navigation</h2>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={onClose}
                className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <nav className="flex-1 overflow-y-auto py-4">
              <ul className="space-y-1 px-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item.path} 
                      className="flex items-center gap-3 px-4 py-3 rounded-md text-gray-700 dark:text-gray-200 hover:bg-[#F3F2FF] dark:hover:bg-gray-800 hover:text-[#7069BC] dark:hover:text-[#9b87f5] transition-colors group"
                      onClick={onClose}
                    >
                      {item.icon}
                      <span className="group-hover:ml-2 transition-all duration-200">{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="p-4 border-t">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Bleame. All rights reserved.
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
