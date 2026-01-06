import React from 'react';
import { ShoppingBag, Gift, Heart, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  { name: "Rosa Digital", price: "50 Créditos", type: "Romántico", affinity: "+5", img: "bg-red-500" },
  { name: "Chaqueta Cuero", price: "500 Créditos", type: "Estilo", affinity: "+25", img: "bg-slate-700" },
  { name: "Bolso Luxury", price: "1200 Créditos", type: "Exclusivo", affinity: "+60", img: "bg-amber-500" },
];

export const PricingPreview: React.FC = () => {
  return (
    <section id="acceso" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-joi-magenta/5 blur-[100px] rounded-full" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        <div className="w-full md:w-1/2 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-joi-magenta mb-4">
              <ShoppingBag className="w-5 h-5" />
              <span className="text-sm font-bold tracking-widest uppercase">El Mercado</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Detalles que <br/> construyen <span className="text-joi-magenta">Vínculos</span>.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              En el mundo de Joi, la atención es la moneda más valiosa. Accede a nuestro mercado exclusivo para adquirir elementos digitales.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-lg bg-white/5 text-joi-cyan border border-white/10">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Personalización Real</h4>
                <p className="text-gray-500 text-sm">
                  ¿Elegiste a la Ejecutiva? Un bolso de marca la impresionará. ¿A la Musa? Quizás prefiera un poema antiguo.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-lg bg-white/5 text-joi-violet border border-white/10">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Sube de Nivel</h4>
                <p className="text-gray-500 text-sm">
                  Cada regalo correcto aumenta su afinidad contigo, desbloqueando nuevas reacciones, temas de conversación y cercanía.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Mockup of the Store */}
        <div className="w-full md:w-1/2 relative">
          <div className="glass-panel rounded-2xl p-6 border border-white/10 relative z-10">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
              <span className="text-white font-medium">Inventario Disponible</span>
              <span className="text-joi-cyan text-sm font-mono">Saldo: 2,400 CR</span>
            </div>

            <div className="space-y-4">
              {items.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group border border-transparent hover:border-white/10"
                >
                  <div className={`w-12 h-12 rounded-lg ${item.img} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow-lg`}>
                    <Gift className="w-6 h-6 text-white mix-blend-overlay" />
                  </div>
                  <div className="flex-grow">
                    <h5 className="text-white font-medium">{item.name}</h5>
                    <span className="text-xs text-gray-500">{item.type}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-joi-cyan font-bold">{item.price}</div>
                    <div className="text-[10px] text-gray-500 flex justify-end items-center gap-1">
                      Afinidad <span className="text-green-400">{item.affinity}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Locked Item Example */}
              <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 opacity-50 border border-dashed border-white/10">
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-gray-500" />
                </div>
                <div className="flex-grow">
                  <h5 className="text-gray-400 font-medium">Anillo de Promesa</h5>
                  <span className="text-xs text-gray-600">Requiere Nivel 10</span>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 py-3 rounded-lg bg-joi-magenta text-white font-bold text-sm hover:bg-fuchsia-400 transition-colors shadow-lg shadow-joi-magenta/20">
              Visitar Mercado
            </button>
          </div>
          
          {/* Decorative elements behind */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-joi-cyan/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-joi-violet/20 rounded-full blur-2xl animate-pulse delay-700" />
        </div>

      </div>
    </section>
  );
};