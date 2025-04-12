
import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarTriggerProps {
  onClick: () => void;
  className?: string;
}

export const SidebarTrigger: React.FC<SidebarTriggerProps> = ({ onClick, className }) => {
  return (
    <Button
      id="sidebar-trigger"
      variant="ghost"
      size="icon"
      onClick={onClick}
      className={cn("rounded-full hover:bg-gray-100 transition-colors", className)}
      aria-label="Open navigation menu"
    >
      <Menu className="w-5 h-5" />
    </Button>
  );
};
