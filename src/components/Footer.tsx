import React from 'react';
import { GlassCard } from './ui/glass-card';

export const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <GlassCard className="p-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">IEEE</span>
              </div>
              <h3 className="text-xl font-bold text-primary">
                IEEE Biometrics Council
              </h3>
            </div>
            
            <p className="text-muted-foreground mb-6">
              R.M.K. Engineering College Chapter
            </p>
            
            <div className="w-16 h-0.5 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
            
            <p className="text-sm text-muted-foreground">
              Advancing biometric recognition technology through research and innovation
            </p>
            
            <div className="mt-6 text-xs text-muted-foreground">
              © 2024 IEEE Biometrics Council - R.M.K. Engineering College Chapter
            </div>
          </div>
        </GlassCard>
      </div>
    </footer>
  );
};