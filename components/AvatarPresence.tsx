import React from 'react';
import { motion } from 'framer-motion';

interface AvatarPresenceProps {
  onOpenDemo: () => void;
}

export const AvatarPresence: React.FC<AvatarPresenceProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative py-20 flex justify-center items-center overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[100%] bg-gradient-to-b from-transparent via-joi-violet/5 to-transparent opacity-50" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative z-10 cursor-pointer"
        onClick={onOpenDemo}
      >
        {/* The Avatar Frame */}
        <div className="relative w-[280px] h-[380px] md:w-[350px] md:h-[480px] rounded-[30px] p-2">
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-[30px] bg-gradient-to-b from-joi-cyan/50 via-joi-magenta/50 to-joi-violet/50 blur-[30px] opacity-30 animate-pulse-slow" />
            
            {/* The Glass Container */}
            <div className="relative w-full h-full bg-[#050505] rounded-[24px] overflow-hidden border border-white/10 shadow-2xl flex flex-col group transition-all duration-500 hover:border-joi-magenta/30">
                
                {/* Image Layer with Filters */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop" 
                        alt="Joi Neural Projection" 
                        className="w-full h-full object-cover opacity-70 mix-blend-lighten filter brightness-110 contrast-125 saturate-0 group-hover:saturate-50 transition-all duration-1000 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-joi-violet/20 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                </div>

                {/* Hologram Lines (Scanlines) */}
                <div className="absolute inset-0 z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_3px,3px_100%] pointer-events-none opacity-60" />

                {/* Interactive Breathing Glow */}
                <div className="absolute inset-0 z-20 bg-gradient-to-tr from-joi-magenta/10 to-joi-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-screen" />

                {/* HUD Overlay */}
                <div className="absolute top-6 left-6 right-6 z-30 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                         <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
                         <span className="text-[9px] font-mono text-white/70 tracking-[0.2em]">REC</span>
                    </div>
                    <div className="text-[9px] font-mono text-white/50">SYS.89</div>
                </div>

                {/* Floating Elements (Particles) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-20 pointer-events-none">
                     <div className="absolute top-[20%] right-[20%] w-1 h-1 bg-white rounded-full animate-ping opacity-50 delay-75" />
                     <div className="absolute bottom-[30%] left-[20%] w-1 h-1 bg-joi-cyan rounded-full animate-pulse opacity-50 delay-1000" />
                </div>

                {/* Bottom Status */}
                <div className="mt-auto p-6 z-30 relative">
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent -z-10" />
                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                        <div>
                             <p className="text-white text-sm font-medium tracking-wide group-hover:text-joi-cyan transition-colors group-hover:animate-pulse">Click para conectar...</p>
                             <p className="text-xs text-gray-500 font-mono mt-1">Conexión estable</p>
                        </div>
                        <div className="flex gap-1 items-end h-4">
                            <div className="w-1 bg-joi-cyan/80 h-full animate-[pulse_1s_ease-in-out_infinite]" />
                            <div className="w-1 bg-joi-cyan/60 h-[60%] animate-[pulse_1.2s_ease-in-out_infinite]" />
                            <div className="w-1 bg-joi-cyan/40 h-[80%] animate-[pulse_0.8s_ease-in-out_infinite]" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </motion.div>
    </section>
  );
};