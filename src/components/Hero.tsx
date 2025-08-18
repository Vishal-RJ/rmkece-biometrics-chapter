import React from 'react';
import { GlassCard } from './ui/glass-card';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center animate-fade-in">
          <GlassCard className="inline-block p-8 mb-8">
            <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">IEEE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
              Biometrics Council
            </h1>
            <h2 className="text-xl md:text-2xl text-primary-foreground/80 mb-6">
              R.M.K. Engineering College Chapter
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Advancing the frontiers of biometric recognition technology through research, 
              innovation, and academic excellence.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};