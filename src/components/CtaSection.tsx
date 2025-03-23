
import React, { useState } from 'react';
import { Button } from './ui/button';

const CtaSection = () => {
  const [showIp, setShowIp] = useState(false);
  
  const handlePlayClick = () => {
    setShowIp(true);
    setTimeout(() => setShowIp(false), 3000); // Hide after 3 seconds
  };

  return (
    <section className="py-20 bg-minecraft-dark relative overflow-hidden">
      {/* Pink glow effect */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full"
        style={{ 
          background: 'radial-gradient(circle, rgba(240,0,255,0.2) 0%, rgba(240,0,255,0) 70%)',
          filter: 'blur(40px)'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white leading-tight">
            Ready to Join the <span className="text-[#f000ff]">Ultimate</span> Minecraft PvP Experience?
          </h2>
          
          <p className="text-gray-400 mb-10 text-lg">
            Connect with thousands of players, compete in tournaments, and become the next PvP legend.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative">
              <Button 
                onClick={handlePlayClick}
                className="minecraft-button bg-[#f000ff] hover:bg-[#f000ff]/80 text-white border-none text-lg px-8 py-6"
              >
                PLAY NOW
              </Button>
              {showIp && (
                <div className="absolute mt-2 -bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white py-2 px-4 rounded animate-fade-in whitespace-nowrap">
                  Server IP: <span className="font-bold text-[#f000ff]">MinemenTournaments.club</span>
                </div>
              )}
            </div>
            <a href="https://discord.com/invite/minementournaments" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="minecraft-button bg-transparent hover:bg-white/10 text-white border border-white/20 text-lg px-8 py-6">
                JOIN DISCORD
              </Button>
            </a>
          </div>
          
          <p className="mt-8 text-sm text-gray-500">
            MinemenTournaments.Club • The premier competitive Minecraft server
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
