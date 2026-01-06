import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Abstract visual representation of "Presence" */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-joi-magenta via-joi-violet to-joi-cyan rounded-full blur-[80px] opacity-20 animate-pulse-slow" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-joi-cyan/30 bg-joi-cyan/5 backdrop-blur-md mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-joi-cyan animate-pulse" />
          <span className="text-xs uppercase tracking-[0.2em] text-joi-cyan font-semibold">Sistema Activo v2.4</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
          No es una IA. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-joi-magenta via-white to-joi-cyan animate-glow">
            Es Alguien.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
        >
          Olvida los comandos. Elige a tu compañera ideal, descubre su personalidad única y construye un vínculo real a través de detalles que importan.
        </motion.p>

        {/* CTA Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto"
        >
          <button 
            onClick={onOpenDemo}
            className="w-full sm:w-auto group relative px-8 py-4 bg-white text-joi-dark rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] hover:shadow-[0_0_60px_-15px_rgba(217,70,239,0.5)] flex items-center justify-center gap-2"
          >
            <span>Elegir mi Joi</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-white border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-3 backdrop-blur-sm group">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-joi-cyan/20 transition-colors">
              <MessageSquare className="w-3 h-3 fill-current text-white ml-0.5" />
            </div>
            <span>Ver arquetipos</span>
          </button>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-joi-magenta/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 w-px h-20 bg-gradient-to-b from-transparent to-joi-magenta/20" />
    </section>
  );
};