'use client';

import { useEffect } from 'react';

// Observa todos los elementos .reveal y les agrega .is-visible
// cuando entran en pantalla. Se monta una vez en el layout.
export default function AnimacionReveal() {
  useEffect(() => {
    const elementos = document.querySelectorAll('.reveal:not(.is-visible)');
    if (elementos.length === 0) return;

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('is-visible');
            observador.unobserve(entrada.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elementos.forEach((el) => observador.observe(el));
    return () => observador.disconnect();
  }, []);

  return null;
}
