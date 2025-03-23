
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';

const servers = [
  {
    id: 'practice',
    name: 'Practice',
    description: 'Master your PvP skills in 1v1 practice arenas with custom kits and scenarios.',
    players: 145,
    color: 'bg-minecraft-diamond',
    colorHover: 'hover:bg-minecraft-diamond/80',
    borderColor: 'border-minecraft-diamond/30',
    iconColor: 'text-minecraft-diamond',
  },
  {
    id: 'uhc',
    name: 'UHC',
    description: 'Fast-paced UHC games with unique twists and balanced gameplay.',
    players: 104,
    color: 'bg-minecraft-purple',
    colorHover: 'hover:bg-minecraft-purple/80',
    borderColor: 'border-minecraft-purple/30',
    iconColor: 'text-minecraft-purple',
  },
  {
    id: 'boxpvp',
    name: 'BoxPvP',
    description: 'Intense boxing arena with custom enchants and upgrades for epic battles.',
    players: 112,
    color: 'bg-minecraft-blue',
    colorHover: 'hover:bg-minecraft-blue/80',
    borderColor: 'border-minecraft-blue/30',
    iconColor: 'text-minecraft-blue',
  },
];

const serverColors = [
  'text-pink-500', // Pink for Practice
  'text-purple-500', // Purple for UHC
  'text-fuchsia-500', // Fuchsia for BoxPvP
];

const ServersSection = () => {
  const [dynamicServers, setDynamicServers] = useState(servers);
  const [totalPlayers, setTotalPlayers] = useState(0);
  
  // Function to share player count with HeroSection
  useEffect(() => {
    // Create a custom event for updating player count across components
    const updatePlayersEvent = new CustomEvent('updatePlayerCount', {
      detail: { totalPlayers }
    });
    
    // Dispatch the event when totalPlayers changes
    if (totalPlayers > 0) {
      window.dispatchEvent(updatePlayersEvent);
    }
  }, [totalPlayers]);
  
  // Function to randomly update server players
  useEffect(() => {
    const updatePlayers = () => {
      const possibleVariations = [5, 6, 7, 8, 10, 25, 30, 56, 1, 77, 41, 45, 78, 97];
      
      const getRandomVariation = () => {
        const randomIndex = Math.floor(Math.random() * possibleVariations.length);
        return possibleVariations[randomIndex];
      };
      
      // Update players for each server
      const updatedServers = dynamicServers.map(server => {
        // Base between 100 and 200
        const basePlayers = Math.floor(Math.random() * 100) + 100;
        // Add variation
        const variation = getRandomVariation();
        const updatedPlayers = basePlayers + variation;
        
        return {
          ...server,
          players: updatedPlayers
        };
      });
      
      setDynamicServers(updatedServers);
      
      // Calculate the total players
      const total = updatedServers.reduce((sum, server) => sum + server.players, 0);
      setTotalPlayers(total);
    };
    
    // Update initially
    updatePlayers();
    
    // Update every 10 seconds
    const interval = setInterval(updatePlayers, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="servers" className="py-24 bg-minecraft-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
            OUR <span className="text-[#f000ff]">SERVERS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from our variety of competitive game modes and find the perfect match for your playstyle.
          </p>
          <div className="mt-6">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-minecraft-darker/80 border border-[#f000ff]/30">
              <div className="w-3 h-3 rounded-full bg-[#f000ff] animate-pulse mr-3"></div>
              <p className="text-white font-semibold">{totalPlayers} Players Online Across All Servers</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dynamicServers.map((server, index) => (
            <ServerCard 
              key={server.id} 
              server={server} 
              index={index} 
              colorClass={serverColors[index]}
              totalPlayers={totalPlayers}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServerCard = ({ server, index, colorClass, totalPlayers }: { server: any; index: number; colorClass: string; totalPlayers: number }) => {
  return (
    <div 
      className={cn(
        "bg-minecraft-darker rounded-lg overflow-hidden transition-all duration-300",
        "hover:shadow-lg hover:shadow-[#f000ff]/20 hover:translate-y-[-5px]",
        "border border-gray-800 hover:border-opacity-100",
        `hover:border-[#f000ff]/30 group`,
        "animate-fade-in-up"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className={cn("h-2", "bg-[#f000ff]")} />
      <div className="p-6 space-y-4">
        <h3 className={cn("text-2xl font-bold group-hover:text-opacity-100 transition-colors", colorClass)}>
          {server.name}
        </h3>
        
        <p className="text-gray-400 text-sm flex-grow">
          {server.description}
        </p>
        
        <div className="flex items-center space-x-2 text-gray-400">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>{server.players} Online</span>
        </div>
        
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button className={cn(
              "minecraft-button w-full mt-4",
              "bg-[#f000ff]",
              "hover:bg-[#f000ff]/80",
              "text-white border-none"
            )}>
              CONNECT NOW
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-auto p-2 bg-black/80 border border-[#f000ff]/30">
            <p className="text-center text-white text-sm">
              Server IP: <span className="font-bold text-[#f000ff]">MinemenTournaments.club</span>
            </p>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
};

export default ServersSection;
