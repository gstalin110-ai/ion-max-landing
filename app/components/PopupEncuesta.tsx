'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Gift, X } from 'lucide-react';

const CLAVE_VISTO = 'ion-max-popup-encuesta-visto';

export default function PopupEncuesta() {
  const [visible, setVisible] = useState(false);
  const [saliendo, setSaliendo] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem(CLAVE_VISTO)) return;
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
    };
    resize();
    window.addEventListener('resize', resize);

    const particulas = Array.from({ length: 40 }, () => ({
      x: Math.random(), y: Math.random(),
      r: Math.random() * 2 + 0.5,
      vy: Math.random() * 0.0006 + 0.0002,
      vx: (Math.random() - 0.5) * 0.0003,
      o: Math.random() * 0.5 + 0.15,
      fase: Math.random() * Math.PI * 2,
    }));

    const dibujar = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particulas) {
        p.y -= p.vy;
        p.x += p.vx + Math.sin(t / 2000 + p.fase) * 0.0001;
        if (p.y < -0.02) { p.y = 1.02; p.x = Math.random(); }
        if (p.x < -0.02) p.x = 1.02;
        if (p.x > 1.02) p.x = -0.02;
        const destello = 0.6 + 0.4 * Math.sin(t / 900 + p.fase);
        ctx.beginPath();
        ctx.arc(p.x * canvas.width, p.y * canvas.height, p.r * devicePixelRatio, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.o * destello})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(dibujar);
    };
    raf = requestAnimationFrame(dibujar);

    // Auto-cierre suave a los 6 segundos
    const cierre = setTimeout(cerrar, 6000);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(cierre);
      window.removeEventListener('resize', resize);
    };
  }, [visible]);

  const cerrar = () => {
    if (saliendo) return;
    setSaliendo(true);
    setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem(CLAVE_VISTO, '1');
    }, 400);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-400 ${saliendo ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
      onClick={cerrar}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-3xl border border-gold-500/30 bg-gradient-to-b from-[#1a1d21] to-black p-8 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" />

        <button
          onClick={cerrar}
          aria-label="Cerrar"
          className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-slate-400 transition hover:bg-white/20 hover:text-white"
        >
          <X size={16} />
        </button>

        <div className="relative">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/15">
            <Gift size={28} className="text-gold-400" />
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-400">Notificación</p>
          <h2 className="mt-2 text-2xl font-black text-white">Ayúdanos a mejorar IÓN MAX</h2>
          <p className="mt-3 text-sm text-slate-300">
            Responde <strong className="text-gold-300">25 preguntas rápidas</strong> y gana
            <strong className="text-gold-300"> 5 días Pro gratis</strong>.
          </p>
          <p className="mt-1 text-xs text-slate-500">Tu opinión define las próximas funciones y campañas.</p>

          <Link
            href="/encuesta"
            onClick={() => sessionStorage.setItem(CLAVE_VISTO, '1')}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 to-amber-400 px-8 py-3.5 text-sm font-black text-black transition hover:brightness-110"
          >
            Responder ahora
            <ArrowRight size={16} />
          </Link>
          <p className="mt-3 text-[10px] text-slate-600">Esta ventana se cierra sola en unos segundos</p>
        </div>
      </div>
    </div>
  );
}
