
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
      isScrolled ? "bg-minecraft-darker bg-opacity-95 py-3 shadow-md backdrop-blur-sm" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/lovable-uploads/c47bd2e5-a990-4a7b-9dfd-61bc7dd021c7.png" alt="Minemen Logo" className="h-10 w-10 mr-2" />
            <h1 className="text-2xl font-bold tracking-tighter text-white">
              <span className="text-[#f000ff]">MINEMEN</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">HOME</NavLink>
            <NavLink href="#servers">SERVERS</NavLink>
            <NavLink href="#leaderboard">LEADERBOARD</NavLink>
            <Button variant="outline" className="minecraft-button bg-[#f000ff] hover:bg-[#f000ff]/80 text-white border-none">
              PLAY NOW
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:bg-minecraft-dark hover:text-white"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-minecraft-darker bg-opacity-95 backdrop-blur-sm shadow-lg animate-fade-in">
            <div className="flex flex-col py-4 px-4 space-y-3">
              <MobileNavLink href="#home" onClick={() => setIsMobileMenuOpen(false)}>HOME</MobileNavLink>
              <MobileNavLink href="#servers" onClick={() => setIsMobileMenuOpen(false)}>SERVERS</MobileNavLink>
              <MobileNavLink href="#leaderboard" onClick={() => setIsMobileMenuOpen(false)}>LEADERBOARD</MobileNavLink>
              <Button variant="outline" className="minecraft-button bg-[#f000ff] hover:bg-[#f000ff]/80 text-white border-none w-full mt-2">
                PLAY NOW
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Desktop navigation link
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-sm font-semibold text-white opacity-80 hover:opacity-100 transition-opacity hover-underline"
  >
    {children}
  </a>
);

// Mobile navigation link
const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => (
  <a 
    href={href} 
    className="text-sm font-semibold text-white py-2 border-b border-minecraft-dark hover:bg-minecraft-dark/40 transition-colors px-2 block"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Header;
