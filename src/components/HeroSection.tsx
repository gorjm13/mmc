
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [playerCount, setPlayerCount] = useState(156);
  const [showIp, setShowIp] = useState(false);
  
  useEffect(() => {
    // Listen for player count updates from ServersSection
    const handlePlayerCountUpdate = (event: CustomEvent) => {
      setPlayerCount(event.detail.totalPlayers);
    };
    
    window.addEventListener('updatePlayerCount', handlePlayerCountUpdate as EventListener);
    
    // Cleanup
    return () => {
      window.removeEventListener('updatePlayerCount', handlePlayerCountUpdate as EventListener);
    };
  }, []);

  const handlePlayClick = () => {
    setShowIp(true);
    setTimeout(() => setShowIp(false), 3000); // Hide after 3 seconds
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            WELCOME TO <span className="text-[#f000ff]">MINEMEN.CLUB</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            The premier competitive Minecraft PvP network. Join thousands of players in intense battles, practice your skills, and climb the leaderboards.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
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
            <Button 
              variant="outline" 
              className="minecraft-button bg-transparent hover:bg-white/10 text-white border border-white/20 text-lg px-8 py-6"
            >
              LEARN MORE
            </Button>
          </div>
          
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-gray-400 mb-4">ONLINE PLAYERS</p>
            <div className="flex justify-center items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#f000ff] animate-pulse"></div>
              <p className="text-white text-xl font-semibold">{playerCount} Players</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
