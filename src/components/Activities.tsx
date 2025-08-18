import React from 'react';
import { GlassCard } from './ui/glass-card';

export const Activities = () => {
  const activities = [
    {
      icon: '📚',
      title: 'Research Seminars',
      description: 'Regular seminars on latest advancements in biometric technologies'
    },
    {
      icon: '🔬',
      title: 'Laboratory Sessions',
      description: 'Hands-on experience with biometric systems and algorithms'
    },
    {
      icon: '🏆',
      title: 'Technical Competitions',
      description: 'Inter-collegiate competitions in biometric system design'
    },
    {
      icon: '🤝',
      title: 'Industry Partnerships',
      description: 'Collaborative projects with leading biometrics companies'
    }
  ];

  return (
    <section id="activities" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Activities
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Engaging students and professionals in cutting-edge biometric research and development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <GlassCard 
                key={index} 
                className="p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {activity.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};