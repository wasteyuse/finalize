
import React from 'react';
import { Sidebar } from './Sidebar';
import { SidebarTrigger } from './SidebarTrigger';
import { useSidebar } from '@/contexts/SidebarContext';

export const MainNavigation: React.FC = () => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useSidebar();

  return (
    <>
      <SidebarTrigger onClick={openSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};
