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
            <div className="mb-6 flex justify-center">
              <img 
                src="/lovable-uploads/0ad4fe59-43f9-466c-8696-8a027094ca0e.png" 
                alt="IEEE Biometrics Council Logo"
                className="h-24 w-auto"
              />
            </div>
            <h2 className="text-2xl md:text-4xl font-playfair font-semibold text-white mb-8 leading-tight">
              <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">R.M.K.</span> Engineering College <span className="italic text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]">Chapter</span>
            </h2>
            <p className="text-xl md:text-2xl font-poppins text-white/95 max-w-3xl mx-auto leading-relaxed">
              Advancing the <span className="italic font-medium text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">frontiers</span> of biometric recognition technology through <span className="italic font-medium">research</span>, 
              <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] italic font-medium">innovation</span>, and academic <span className="italic font-medium">excellence</span>.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};