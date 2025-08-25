import React from 'react';
import { GlassCard } from './ui/glass-card';

export const Officers = () => {
  const officers = [
    {
      name: "Mr. Kishore B",
      position: "Student Branch Chair",
      year: "ECE Final Year",
      image: "/lovable-uploads/d926ac34-9439-465e-bf47-37eea936b0ed.png",
      isChair: true
    },
    {
      name: "Mr. Vishal RJ",
      position: "Student Branch Vice-Chair", 
      year: "ECE Pre Final Year",
      image: "/lovable-uploads/e0c34c70-9e31-4bb1-a212-d503c6340e1c.png"
    },
    {
      name: "Mr. Alwin A",
      position: "Secretary",
      year: "ECE Final Year", 
      image: "/lovable-uploads/8720ec46-84c1-422c-b954-23ae0e516d54.png"
    },
    {
      name: "Mr. Maclin Toni",
      position: "Honorary Treasurer",
      year: "ECE Final Year",
      image: "/lovable-uploads/f4369252-73e1-4980-b071-e5fd4c92a416.png"
    },
    {
      name: "Ms. Shruthi SP",
      position: "Joint Secretary",
      year: "ECE Pre Final Year",
      image: "/lovable-uploads/93c8150c-38b2-43fd-b79e-3b42caa30f7d.png"
    },
    {
      name: "Mr. Siddharth P",
      position: "Public Relation Officer",
      year: "ECE Pre Final Year",
      image: "/lovable-uploads/5d5d47f0-97cd-4820-8e56-8b799fd4c815.png"
    },
    {
      name: "Mr. MR Naveen",
      position: "Web Master",
      year: "ECE Pre Final Year",
      image: "/lovable-uploads/603b1b76-a1f3-4713-9b5c-48878a1108ba.png"
    },
    {
      name: "Ms. Shree Madhumitha N",
      position: "Coordinator",
      year: "ECE Pre Final Year",
      image: "/lovable-uploads/6b3120ad-f5c0-451b-a57c-cd4ed1ea522a.png"
    },
    {
      name: "Mr. Muthukumaran",
      position: "Event Manager",
      year: "ECE Pre Final Year",
      image: "/lovable-uploads/993420dd-1662-4060-bf92-9ecd0fd5bcef.png"
    },
    {
      name: "Mr. Kaliff",
      position: "Tech Coordinator",
      year: "ECE Pre Final Year",
      image: "/lovable-uploads/8e09d3c2-331b-4cdd-947b-02f67c653550.png"
    }
  ];

  const chairperson = officers.find(officer => officer.isChair);
  const otherOfficers = officers.filter(officer => !officer.isChair);

  return (
    <section id="officers" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4 drop-shadow-[0_0_10px_rgba(var(--primary),0.3)]">
              Chapter <span className="italic">Leadership</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          {/* Chairperson */}
          <div className="flex justify-center mb-16">
            <GlassCard className="p-6 max-w-sm w-full">
              <div className="text-center">
                <div className="relative mb-4">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-medium bg-gradient-primary p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-background">
                      <img 
                        src={chairperson?.image}
                        alt={`${chairperson?.name} - ${chairperson?.position}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-soft">
                    <span className="text-white font-bold text-xs">👑</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-2">{chairperson?.name}</h3>
                
                <div className="space-y-2">
                  <GlassCard className="p-2">
                    <p className="text-xs font-semibold text-accent-foreground">{chairperson?.position}</p>
                  </GlassCard>
                  
                  <div className="text-muted-foreground">
                    <p className="font-medium text-sm">R.M.K. Engineering College</p>
                    <p className="text-xs">{chairperson?.year}</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherOfficers.map((officer, index) => (
              <GlassCard key={index} className="p-4">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-medium bg-gradient-primary p-1 mb-4">
                    <div className="w-full h-full rounded-full overflow-hidden bg-background">
                      <img 
                        src={officer.image}
                        alt={`${officer.name} - ${officer.position}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-primary mb-2">{officer.name}</h4>
                  
                  <div className="space-y-2">
                    <GlassCard className="p-2">
                      <p className="text-xs font-semibold text-accent-foreground">{officer.position}</p>
                    </GlassCard>
                    
                    <div className="text-muted-foreground">
                      <p className="font-medium text-sm">R.M.K. Engineering College</p>
                      <p className="text-xs">{officer.year}</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};