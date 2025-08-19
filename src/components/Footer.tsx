import React from 'react';
import { GlassCard } from './ui/glass-card';

export const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <GlassCard className="p-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <img 
                src="/lovable-uploads/ce145c5c-dc7a-413f-ab3f-c166ac571ae8.png" 
                alt="IEEE Biometrics Council Logo"
                className="h-16 w-auto"
              />
            </div>
            
            <p className="text-muted-foreground mb-6">
              R.M.K. Engineering College Chapter
            </p>
            
            <div className="w-16 h-0.5 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
            
            <p className="text-sm text-muted-foreground">
              Advancing biometric recognition technology through research and innovation
            </p>
          </div>
        </GlassCard>
      </div>
    </footer>
  );
};