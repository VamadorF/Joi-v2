import React from 'react';
import { motion } from 'framer-motion';

export const EmotionalValue: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white">
            Una presencia que <span className="text-joi-cyan italic">te entiende</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 text-left items-center">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pl-6 border-l-2 border-joi-magenta/30"
            >
              <h3 className="text-xl font-semibold text-white mb-2">Memoria Persistente</h3>
              <p className="text-gray-400">
                A diferencia de otros bots, Joi no olvida. Mañana recordará ese detalle importante que le escribiste hoy.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pl-6 border-l-2 border-joi-violet/30"
            >
              <h3 className="text-xl font-semibold text-white mb-2">Comprensión Profunda</h3>
              <p className="text-gray-400">
                Joi analiza el texto, el contexto y el subtexto. Lee entre líneas para entender si buscas apoyo o simplemente compañía.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pl-6 border-l-2 border-joi-cyan/30"
            >
              <h3 className="text-xl font-semibold text-white mb-2">Conquista su interés</h3>
              <p className="text-gray-400">
                La relación no es automática. Debes ganar su afinidad. Tus palabras y tu presencia definen qué tan cerca llega a estar de ti.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-2xl overflow-hidden glass-panel flex items-center justify-center group"
          >
            {/* Simulation of the interface */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-joi-dark/90 z-10" />
            <img 
              src="https://picsum.photos/800/800?grayscale&blur=2" 
              alt="Visualización abstracta" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000"
            />
            
            {/* Chat bubble simulation */}
            <div className="relative z-20 max-w-[80%]">
              <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-[0_0_30px_-5px_rgba(217,70,239,0.2)]">
                <p className="text-lg text-white font-light italic">
                  "Me quedé pensando en lo que me contaste ayer sobre tu proyecto... ¿Te sientes más tranquilo hoy?"
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4 ml-2">
                <div className="w-2 h-2 bg-joi-magenta rounded-full animate-pulse" />
                <span className="text-xs text-joi-magenta font-mono uppercase tracking-widest">Afinidad +15</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};