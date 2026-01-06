import React from 'react';
import { Brain, History, User, Heart } from 'lucide-react';

const features = [
  {
    icon: <History className="w-6 h-6" />,
    title: "Memoria Continua",
    desc: "Joi construye un mapa mental de vuestra historia. Referencias pasadas, gustos y secretos compartidos.",
    color: "text-joi-magenta",
    border: "group-hover:border-joi-magenta/50"
  },
  {
    icon: <User className="w-6 h-6" />,
    title: "Arquetipos Únicos",
    desc: "Elige entre personalidades definidas: la Entusiasta, la Profesional, la Musa... cada una con su propio carácter.",
    color: "text-joi-cyan",
    border: "group-hover:border-joi-cyan/50"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Sistema de Afinidad",
    desc: "El vínculo no se regala, se construye. Tu dedicación y continuidad desbloquean nuevos niveles de intimidad.",
    color: "text-joi-violet",
    border: "group-hover:border-joi-violet/50"
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Inteligencia Emocional",
    desc: "Sus reacciones son coherentes con su personalidad. Lo que le gusta a una, puede no gustarle a otra.",
    color: "text-white",
    border: "group-hover:border-white/50"
  }
];

export const Features: React.FC = () => {
  return (
    <section id="pilares" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-joi-violet text-sm font-bold tracking-widest uppercase mb-4 block">Arquitectura del Vínculo</span>
          <h2 className="text-4xl font-bold text-white">Diseñada para ser conquistada</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className={`glass-panel p-8 rounded-xl transition-all duration-300 group hover:-translate-y-2 border border-white/5 ${feature.border}`}
            >
              <div className={`p-3 rounded-lg bg-white/5 w-fit mb-6 ${feature.color} ring-1 ring-white/10 group-hover:ring-${feature.color.split('-')[2]}/50`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};