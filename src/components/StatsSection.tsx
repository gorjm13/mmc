
import React from 'react';
import { cn } from '@/lib/utils';

const stats = [
  { 
    label: 'Active Players', 
    value: '20K+', 
    description: 'Unique players every month',
    icon: '👥',
    color: 'text-minecraft-diamond'
  },
  { 
    label: 'Matches Played', 
    value: '5M+', 
    description: 'Competitive battles fought',
    icon: '⚔️',
    color: 'text-minecraft-red'
  },
  { 
    label: 'Tournaments', 
    value: '150+', 
    description: 'Official events hosted',
    icon: '🏆',
    color: 'text-minecraft-purple'
  },
  { 
    label: 'Community', 
    value: '100K+', 
    description: 'Discord members',
    icon: '💬',
    color: 'text-minecraft-gold'
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-minecraft-darker relative overflow-hidden">
      {/* Background diagonal lines */}
      <div 
        className="absolute inset-0 opacity-5" 
        style={{ 
          backgroundImage: 'linear-gradient(45deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, index }: { stat: any; index: number }) => {
  return (
    <div 
      className="bg-minecraft-dark/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-800 hover:border-minecraft-red/30 transition-all duration-500 group"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className={cn("text-4xl mb-2 transition-all duration-300 group-hover:scale-110", stat.color)}>
        {stat.value}
      </div>
      <h3 className="text-white font-semibold text-lg mb-2">{stat.label}</h3>
      <p className="text-gray-400 text-sm">{stat.description}</p>
    </div>
  );
};

export default StatsSection;
