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
                src="/lovable-uploads/ce145c5c-dc7a-413f-ab3f-c166ac571ae8.png" 
                alt="IEEE Biometrics Council Logo"
                className="h-24 w-auto"
              />
            </div>
            <div className="relative">
              {/* Decorative graphics */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/20 rounded-full blur-sm"></div>
              <div className="absolute -bottom-2 -right-6 w-8 h-8 bg-primary/30 rounded-full blur-sm"></div>
              
              <h2 className="text-2xl md:text-4xl font-playfair font-semibold text-primary mb-8 leading-tight relative z-10">
                <span className="text-primary drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">R.M.K.</span> Engineering College <span className="italic text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]">Chapter</span>
              </h2>
            </div>
            
            <div className="relative">
              {/* More decorative elements */}
              <div className="absolute top-2 left-0 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 right-8 w-3 h-3 bg-primary/60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              
              <p className="text-xl md:text-2xl font-poppins text-foreground max-w-3xl mx-auto leading-relaxed relative z-10">
                Advancing the <span className="italic font-medium text-primary drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">frontiers</span> of biometric recognition technology through <span className="italic font-medium text-primary">research</span>, 
                <span className="text-primary drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] italic font-medium">innovation</span>, and academic <span className="italic font-medium text-primary">excellence</span>.
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};