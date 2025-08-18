import React from 'react';
import { GlassCard } from './ui/glass-card';

export const Officers = () => {
  return (
    <section id="officers" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Chapter Leadership
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="flex justify-center">
            <GlassCard className="p-8 max-w-md w-full">
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-medium">
                    <img 
                      src="/lovable-uploads/8cbedd4d-fa4e-4fe1-b5bf-765c42d50741.png" 
                      alt="Kishore B - Chapter Chairperson"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center shadow-soft">
                    <span className="text-white font-bold text-sm">👑</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-2">Kishore B</h3>
                
                <div className="space-y-2 mb-6">
                  <GlassCard className="p-3">
                    <p className="text-sm font-semibold text-accent-foreground">Chairperson</p>
                  </GlassCard>
                  
                  <div className="text-muted-foreground">
                    <p className="font-medium">R.M.K. Engineering College</p>
                    <p className="text-sm">ECE Final Year</p>
                  </div>
                </div>
                
                <GlassCard className="p-4 bg-gradient-accent">
                  <p className="text-sm text-accent-foreground font-medium">
                    Leading the chapter's initiatives in biometric research and 
                    fostering academic-industry collaboration.
                  </p>
                </GlassCard>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};