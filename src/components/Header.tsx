import React from 'react';
import { GlassCard } from './ui/glass-card';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <GlassCard className="mx-auto max-w-6xl">
        <nav className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/5b87d07f-51ce-4d87-948d-ffb67dab8826.png" 
              alt="RMK Engineering College Logo"
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <p className="text-sm text-primary font-semibold">R.M.K. Engineering College Chapter</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium px-4 py-2 rounded-lg bg-blue-100 text-blue-800 shadow-md hover:bg-blue-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">About</a>
            <a href="#officers" className="text-sm font-medium px-4 py-2 rounded-lg bg-blue-100 text-blue-800 shadow-md hover:bg-blue-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">Officers</a>
            <a href="#activities" className="text-sm font-medium px-4 py-2 rounded-lg bg-blue-100 text-blue-800 shadow-md hover:bg-blue-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">Activities</a>
          </div>
          
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/ce145c5c-dc7a-413f-ab3f-c166ac571ae8.png" 
              alt="IEEE Biometrics Council Logo"
              className="h-12 w-auto"
            />
          </div>
        </nav>
      </GlassCard>
    </header>
  );
};