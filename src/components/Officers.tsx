import React, { useState, useEffect } from 'react';
import { GlassCard } from './ui/glass-card';
import { removeBackground, loadImageFromUrl } from '../utils/backgroundRemoval';

export const Officers = () => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string>('/lovable-uploads/8cbedd4d-fa4e-4fe1-b5bf-765c42d50741.png');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processImage = async () => {
      try {
        setIsProcessing(true);
        const img = await loadImageFromUrl('/lovable-uploads/8cbedd4d-fa4e-4fe1-b5bf-765c42d50741.png');
        const processedBlob = await removeBackground(img);
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(processedUrl);
      } catch (error) {
        console.error('Failed to process image:', error);
        // Keep original image on error
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();
  }, []);

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
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-medium bg-gradient-primary p-2">
                    <div className="w-full h-full rounded-full overflow-hidden bg-background">
                      <img 
                        src={processedImageUrl}
                        alt="Kishore B - Chapter Chairperson"
                        className={`w-full h-full object-cover ${isProcessing ? 'opacity-50' : ''}`}
                      />
                      {isProcessing && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}
                    </div>
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