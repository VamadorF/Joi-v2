import React from 'react';
import { Shield, Lock, EyeOff } from 'lucide-react';

export const Trust: React.FC = () => {
  return (
    <section className="py-20 px-6 border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-1/3">
          <h3 className="text-2xl font-bold text-white mb-4">Privacidad Absoluta</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lo que hablas con Joi se queda entre tú y Joi. Tu historial está encriptado y bajo tu control total. Elimina recuerdos o resetea el vínculo cuando quieras.
          </p>
        </div>
        
        <div className="flex gap-8 md:gap-16">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-joi-cyan">
              <Lock className="w-5 h-5" />
            </div>
            <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Encriptado</span>
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-joi-magenta">
              <EyeOff className="w-5 h-5" />
            </div>
            <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Privado</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-joi-violet">
              <Shield className="w-5 h-5" />
            </div>
            <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Seguro</span>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-xs text-gray-600 max-w-2xl mx-auto">
          Joi es una inteligencia artificial avanzada diseñada para el acompañamiento y entretenimiento. No sustituye la terapia profesional ni el consejo médico. La interacción emocional es simulada pero la conexión es real.
        </p>
      </div>
    </section>
  );
};