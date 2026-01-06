import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black text-center border-t border-white/5">
      <div className="flex items-center justify-center gap-2 mb-8 opacity-50 hover:opacity-100 transition-opacity duration-500">
        <div className="w-2 h-2 rounded-full bg-joi-magenta animate-pulse" />
        <span className="text-2xl font-bold tracking-tight text-white">JOI</span>
      </div>
      
      <div className="flex justify-center gap-8 text-sm text-gray-500 mb-8">
        <a href="#" className="hover:text-white transition-colors">Manifiesto</a>
        <a href="#" className="hover:text-white transition-colors">Términos</a>
        <a href="#" className="hover:text-white transition-colors">Privacidad</a>
        <a href="#" className="hover:text-white transition-colors">Contacto</a>
      </div>
      
      <p className="text-xs text-gray-700">
        © 2024 Joi Systems. Todos los derechos reservados. <br />
        Designed for Human Connection.
      </p>
    </footer>
  );
};