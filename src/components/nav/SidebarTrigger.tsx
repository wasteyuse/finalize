import React from 'react';
import { Menu } from 'lucide-react';
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
  return <Button id="sidebar-trigger" variant="ghost" size="icon" onClick={onClick} aria-label="Open navigation menu" className="text-base">
      <Menu className="w-6 h-6" />
    </Button>;
};