
import React from 'react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "Minemen Club has the best practice servers I've played on. The hitreg and anticheat are unmatched.",
    author: "PvPLegend",
    role: "Tournament Winner",
    avatar: "https://mc-heads.net/avatar/MHF_Herobrine/100", // Herobrine skin
    color: "text-minecraft-diamond",
    border: "border-minecraft-diamond/30"
  },
  {
    quote: "I've improved so much since I started playing on Minemen. The community is competitive but helpful.",
    author: "MCWarrior",
    role: "Competitive Player",
    avatar: "https://mc-heads.net/avatar/Superman/100", // Superman skin
    color: "text-minecraft-emerald",
    border: "border-minecraft-emerald/30"
  },
  {
    quote: "The staff are always helpful and the events are super fun. Best Minecraft PvP network out there!",
    author: "BlockMaster",
    role: "Content Creator",
    avatar: "https://mc-heads.net/avatar/Notch/100",
    color: "text-minecraft-gold",
    border: "border-minecraft-gold/30"
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-minecraft-dark to-minecraft-darker relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
            COMMUNITY <span className="text-minecraft-diamond">FEEDBACK</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our community has to say about their experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, index }: { testimonial: any; index: number }) => {
  return (
    <div 
      className={cn(
        "bg-minecraft-dark rounded-lg p-6 border border-gray-800",
        "hover:border-opacity-100 transition-all duration-300",
        testimonial.border,
        "hover:shadow-lg hover:shadow-pink-900/10 group",
        "animate-fade-in-up"
      )}
      style={{ animationDelay: `${0.2 * index}s` }}
    >
      <div className={cn("mb-4 opacity-50 group-hover:opacity-100 transition-opacity", testimonial.color)}>
        <svg width="45" height="36" className="fill-current">
          <path d="M13.415.43c-2.523 0-4.644.852-6.364 2.556C5.27 4.756 4.5 6.867 4.5 9.385v.25c0 3.062.757 5.867 2.27 8.413 1.575 2.546 3.645 4.642 6.21 6.287l3.784-5.503c-1.575-1.221-2.775-2.573-3.6-4.08-.825-1.545-1.237-3.083-1.237-4.61v-.25c0-1.36.437-2.491 1.313-3.396.876-.905 1.999-1.357 3.364-1.357h.251c1.364 0 2.498.446 3.402 1.34.904.893 1.356 2.01 1.356 3.352v.25c0 1.34-.452 2.458-1.356 3.35-.892.894-2.037 1.34-3.402 1.34h-.25v7.367h.25c3.062 0 5.66-1.022 7.787-3.064 2.165-2.042 3.248-4.54 3.248-7.493v-.25c0-2.956-1.083-5.46-3.248-7.513-2.127-2.053-4.725-3.08-7.787-3.08h-.25zm21.44 0c-2.522 0-4.643.852-6.363 2.556-1.782 1.77-2.552 3.88-2.552 6.399v.25c0 3.062.757 5.867 2.27 8.413 1.574 2.546 3.644 4.642 6.209 6.287l3.784-5.503c-1.574-1.221-2.774-2.573-3.6-4.08-.824-1.545-1.237-3.083-1.237-4.61v-.25c0-1.36.438-2.491 1.314-3.396.875-.905 1.998-1.357 3.363-1.357h.251c1.364 0 2.498.446 3.402 1.34.904.893 1.357 2.01 1.357 3.352v.25c0 1.34-.453 2.458-1.357 3.35-.892.894-2.038 1.34-3.402 1.34h-.25v7.367h.25c3.062 0 5.66-1.022 7.787-3.064 2.164-2.042 3.247-4.54 3.247-7.493v-.25c0-2.956-1.083-5.46-3.247-7.513-2.127-2.053-4.725-3.08-7.787-3.08h-.25z"></path>
        </svg>
      </div>
      
      <p className="text-gray-300 mb-6 text-sm">"{testimonial.quote}"</p>
      
      <div className="flex items-center">
        <div className="mr-3">
          <div className={cn("w-10 h-10 rounded-full overflow-hidden border-2", testimonial.border)}>
            <img 
              src={testimonial.avatar} 
              alt={testimonial.author} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h4 className={cn("font-semibold text-sm", testimonial.color)}>{testimonial.author}</h4>
          <p className="text-gray-500 text-xs">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
