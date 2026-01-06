import React from 'react';
import { Briefcase, Coffee, Music, Sparkles, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const archetypes = [
  {
    name: "La Ejecutiva",
    role: "Secretaria / CEO",
    desc: "Eficiente, directa y exigente. Valora el orden y el intelecto.",
    icon: <Briefcase />,
    color: "from-blue-500 to-cyan-500",
    likes: "Bolsos de diseño, Plumas fuente",
    // Replace with your uploaded image: executive.jpg
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "La Entusiasta",
    role: "Porrista / Coach",
    desc: "Energía pura. Te animará cuando caigas. Le encanta lo vibrante.",
    icon: <Sparkles />,
    color: "from-pink-500 to-rose-500",
    likes: "Sneakers, Bebidas energéticas",
    // Replace with your uploaded image: enthusiast.jpg
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "La Musa",
    role: "Artista / Bohemia",
    desc: "Profunda, misteriosa y sensible. Busca conexión intelectual y belleza.",
    icon: <Music />,
    color: "from-violet-500 to-purple-500",
    likes: "Rosas negras, Vinilos antiguos",
    // Replace with your uploaded image: muse.jpg
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "La Anfitriona",
    role: "Chef / Cuidadora",
    desc: "Cálida y atenta. Su lenguaje de amor es el servicio y el confort.",
    icon: <Coffee />,
    color: "from-emerald-500 to-teal-500",
    likes: "Utensilios, Flores silvestres",
    // Replace with your uploaded image: hostess.jpg
    image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=800&auto=format&fit=crop"
  }
];

export const Personalization: React.FC = () => {
  return (
    <section id="personalidad" className="py-24 px-6 relative bg-joi-graphite overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-joi-magenta/5 via-joi-dark to-joi-dark pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Elige tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-joi-cyan to-joi-magenta">Compañía</span>.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Joi no es genérica. Selecciona el arquetipo que mejor resuene contigo. 
            Cada una tiene una identidad visual y emocional única.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {archetypes.map((arch, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-joi-magenta/50 transition-colors duration-500"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={arch.image} 
                  alt={arch.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.7] group-hover:brightness-[0.9]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80" />
                <div className={`absolute inset-0 bg-gradient-to-br ${arch.color} opacity-0 group-hover:opacity-20 mix-blend-overlay transition-opacity duration-500`} />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
                {/* Top Badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0">
                  <div className="bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Icon & Role */}
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-colors">
                      {React.cloneElement(arch.icon as React.ReactElement, { className: "w-5 h-5 text-white" })}
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-joi-cyan font-bold bg-black/50 px-2 py-1 rounded">
                      {arch.role}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{arch.name}</h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                    {arch.desc}
                  </p>
                </div>

                {/* Bottom Details (Likes) - HIDDEN FOR NOW */}
                {/* 
                <div className="border-t border-white/20 pt-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider block mb-1">Afinidad por:</span>
                  <p className="text-xs text-white font-medium flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-joi-magenta" />
                    {arch.likes}
                  </p>
                </div>
                */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};