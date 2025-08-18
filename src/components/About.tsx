import React from 'react';
import { GlassCard } from './ui/glass-card';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <GlassCard className="p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                About Our Chapter
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  The IEEE Biometrics Council R.M.K. Engineering College Chapter is dedicated to 
                  advancing biometric recognition technologies through cutting-edge research and 
                  practical applications.
                </p>
                
                <p className="text-foreground mb-6 leading-relaxed">
                  Our chapter focuses on the theoretical foundations, sensor development, and 
                  algorithmic innovations in biometric systems, fostering a multidisciplinary 
                  approach to biometric characterization.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-foreground">Research & Development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-foreground">Academic Excellence</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-foreground">Industry Collaboration</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <GlassCard className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🔬</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Innovation Hub</h3>
                  <p className="text-muted-foreground">
                    Pioneering research in biometric technologies and applications
                  </p>
                </GlassCard>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};