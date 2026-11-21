'use client';

import { useEffect, useState } from 'react';

export default function AnioActual() {
  const [anio, setAnio] = useState<number | null>(null);
  useEffect(() => {
    setAnio(new Date().getFullYear());
  }, []);
  return <>{anio ?? '2026'}</>;
}
