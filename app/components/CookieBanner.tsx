'use client';

import { useEffect, useState } from 'react';
import { Cookie } from 'lucide-react';

const CLAVE = 'ion-max-cookies-aceptadas';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(CLAVE)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const aceptar = () => {
    try {
      localStorage.setItem(CLAVE, '1');
    } catch { /* noop */ }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[90] p-4">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 rounded-2xl border border-white/10 bg-[#121416]/95 px-5 py-4 shadow-2xl backdrop-blur-md sm:flex-row sm:justify-between">
        <div className="flex items-start gap-3">
          <Cookie size={18} className="mt-0.5 shrink-0 text-gold-400" />
          <p className="text-xs leading-relaxed text-slate-300">
            Usamos cookies y almacenamiento local para mejorar tu experiencia, mantener tu sesión y medir el uso de la app.
            Consulta nuestra{' '}
            <a href="https://app.ionmaxultimate.com/politicas" className="text-gold-300 underline hover:text-gold-200">política de privacidad</a>.
          </p>
        </div>
        <button
          onClick={aceptar}
          className="shrink-0 rounded-xl bg-gold-500 px-5 py-2 text-xs font-bold text-black transition hover:bg-gold-400"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}
