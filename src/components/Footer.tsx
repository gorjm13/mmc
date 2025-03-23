
import React from 'react';
import { Github, Twitter, Trophy, Server, Users, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-minecraft-dark pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* First Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tighter text-white">
              MINEMEN<span className="text-minecraft-gold">.CLUB</span>
            </h3>
            <p className="text-gray-400 text-sm">
              A premier Minecraft PvP network offering competitive practice, duels, and unique game modes for players of all skill levels.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-minecraft-gold transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-minecraft-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Server Highlights */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Server Highlights</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ServerFeature 
                icon={<Trophy className="h-5 w-5 text-minecraft-gold" />}
                title="Weekly Tournaments"
                description="Compete for prizes and glory every weekend"
              />
              <ServerFeature 
                icon={<Server className="h-5 w-5 text-minecraft-red" />}
                title="Global Servers"
                description="Low-ping gameplay from any location"
              />
              <ServerFeature 
                icon={<Users className="h-5 w-5 text-minecraft-diamond" />}
                title="Active Community"
                description="Make friends and join teams"
              />
              <ServerFeature 
                icon={<Star className="h-5 w-5 text-minecraft-purple" />}
                title="Custom Plugins"
                description="Unique features you won't find elsewhere"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Minemen Club. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-minecraft-gold transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-minecraft-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-minecraft-gold transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ServerFeature = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="flex items-start space-x-3">
    <div className="mt-1">{icon}</div>
    <div>
      <h5 className="text-white font-medium text-sm mb-1">{title}</h5>
      <p className="text-gray-400 text-xs">{description}</p>
    </div>
  </div>
);

export default Footer;
