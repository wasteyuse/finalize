
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarTriggerProps {
  onClick: () => void;
  className?: string;
}

export const SidebarTrigger: React.FC<SidebarTriggerProps> = ({
  onClick,
  className
}) => {
  return (
    <Button 
      id="sidebar-trigger" 
      variant="ghost" 
      size="icon" 
      onClick={onClick} 
      aria-label="Open navigation menu" 
      className={cn(className)}
    >
      <img 
        src="/lovable-uploads/f3568f60-9277-49e3-bdcf-88ef307fed33.png" 
        alt="Menu" 
        className="w-6 h-6" 
      />
    </Button>
  );
};
