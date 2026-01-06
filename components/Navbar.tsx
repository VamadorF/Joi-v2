import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? 'bg-joi-dark/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="relative">
            <Sparkles className="w-6 h-6 text-joi-magenta group-hover:animate-pulse" />
            <div className="absolute inset-0 bg-joi-magenta blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">
            JOI
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#pilares" className="hover:text-joi-cyan transition-colors">Esencia</a>
          <a href="#personalidad" className="hover:text-joi-magenta transition-colors">Vínculo</a>
          {/* <a href="#acceso" className="hover:text-white transition-colors">Acceso</a> */}
        </div>

        <button 
          onClick={onOpenDemo}
          className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-white/5 hover:border-joi-magenta/50 hover:shadow-[0_0_15px_-3px_rgba(217,70,239,0.3)] backdrop-blur-sm"
        >
          Iniciar Demo
        </button>
      </div>
    </nav>
  );
};