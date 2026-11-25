'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

const PREGUNTAS: { id: string; texto: string; opciones: string[] }[] = [
  { id: 'q1', texto: '¿Qué tipo de negocio tienes o te interesa abrir?', opciones: ['Tienda física', 'Venta por redes sociales', 'Servicios profesionales', 'Restaurante/Comida', 'Aún no tengo negocio'] },
  { id: 'q2', texto: '¿Cómo vendes hoy principalmente?', opciones: ['WhatsApp', 'Redes sociales', 'Local físico', 'Otra app', 'No vendo aún'] },
  { id: 'q3', texto: '¿Cuántos productos o servicios publicas?', opciones: ['1-5', '6-20', '21-50', '50+'] },
  { id: 'q4', texto: '¿Qué te motiva a vender online?', opciones: ['Más clientes', 'Ordenar pedidos', 'Profesionalizar imagen', 'Ingreso extra'] },
  { id: 'q5', texto: '¿Cuál es el mayor dolor de vender por WhatsApp?', opciones: ['Mensajes perdidos', 'Sin catálogo ordenado', 'No sé el total', 'Poca imagen profesional'] },
  { id: 'q6', texto: '¿Compras online en Ecuador?', opciones: ['Sí, seguido', 'A veces', 'Rara vez', 'Nunca'] },
  { id: 'q7', texto: '¿Qué te hace confiar en una tienda online?', opciones: ['Fotos reales', 'Reseñas', 'Chat directo', 'Comprobante claro', 'Todos'] },
  { id: 'q8', texto: '¿Prefieres pagar?', opciones: ['Contra entrega', 'Transferencia', 'PayPal', 'Tarjeta'] },
  { id: 'q9', texto: '¿Qué categoría te interesa más?', opciones: ['Moda', 'Tecnología', 'Hogar', 'Belleza', 'Comida', 'Servicios'] },
  { id: 'q10', texto: '¿Usarías una app para comprar?', opciones: ['Sí, ya uso apps', 'Sí si es fácil', 'Tal vez', 'Prefiero web'] },
  { id: 'q11', texto: '¿Qué precio tendría una tienda online para ti?', opciones: ['Gratis', 'Hasta $5/mes', 'Hasta $10/mes', 'No pagaría'] },
  { id: 'q12', texto: '¿Qué feature te gustaría ver primero?', opciones: ['Catálogo con fotos HD', 'Reservas', 'Pedidos agrupados', 'Chat con vendedor', 'Cupones'] },
  { id: 'q13', texto: '¿Cómo conociste IÓN MAX?', opciones: ['Redes sociales', 'Amigo', 'Google', 'Publicidad', 'Otro'] },
  { id: 'q14', texto: '¿Qué tan probable recomiendas IÓN MAX? (1-10)', opciones: ['1-3', '4-6', '7-8', '9-10'] },
  { id: 'q15', texto: '¿Qué mejorarías de la app?', opciones: ['Más productos', 'Mejor buscador', 'Más tiendas cerca', 'Más ofertas', 'Más categorías'] },
  { id: 'q16', texto: '¿Te gustaría que los vendedores paguen por destacar?', opciones: ['Sí, si vendo más', 'No, debe ser gratis', 'Depende del precio'] },
  { id: 'q17', texto: '¿Qué horario usas más la app?', opciones: ['Mañana', 'Tarde', 'Noche', 'Madrugada'] },
  { id: 'q18', texto: '¿Qué dispositivo usas más?', opciones: ['Celular', 'Tablet', 'Laptop', 'PC de escritorio'] },
  { id: 'q19', texto: '¿Te interesa el programa de referidos (+5 días Pro)?', opciones: ['Sí mucho', 'Tal vez', 'No me interesa'] },
  { id: 'q20', texto: '¿Qué te haría comprar más seguido?', opciones: ['Envío gratis', 'Cupones', 'Más variedad', 'Mejor fotos', 'Reseñas'] },
  { id: 'q21', texto: '¿Tienes un negocio físico?', opciones: ['Sí, propio', 'Sí, alquilado', 'No tengo'] },
  { id: 'q22', texto: '¿Cuántos empleados tienes?', opciones: ['Solo yo', '2-5', '6-10', '10+'] },
  { id: 'q23', texto: '¿Qué te motiva a invitar amigos a IÓN MAX?', opciones: ['Ganar días Pro', 'Ayudar a otros negocios', 'Descuento', 'Comisión'] },
  { id: 'q24', texto: '¿Qué tipo de contenido te gustaría ver en el feed?', opciones: ['Productos nuevos', 'Ofertas', 'Historias de tiendas', 'Tips de negocio'] },
  { id: 'q25', texto: '¿Algo más que quieras decirnos?', opciones: ['Todo perfecto', 'Necesito mejoras', 'Falta algo importante'] },
];

export default function EncuestaPage() {
  const [paso, setPaso] = useState<'login' | 'encuesta' | 'gracias'>('login');
  const [email, setEmail] = useState('');
  const [clave, setClave] = useState('');
  const [nombre, setNombre] = useState('');
  const [esRegistro, setEsRegistro] = useState(false);
  const [respuestas, setRespuestas] = useState<Record<string, string>>({});
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState('');
  const [premio, setPremio] = useState(false);

  const entrar = async () => {
    setError('');
    if (esRegistro) {
      const { error: e } = await supabase.auth.signUp({
        email, password: clave,
        options: { data: { full_name: nombre, store_name: nombre } },
      });
      if (e) { setError(e.message); return; }
    } else {
      const { error: e } = await supabase.auth.signInWithPassword({ email, password: clave });
      if (e) { setError(e.message); return; }
    }
    setPaso('encuesta');
  };

  const enviar = async () => {
    setEnviando(true);
    setError('');
    const { data, error: e } = await supabase.rpc('ion_max_guardar_encuesta', { p_respuestas: respuestas });
    if (e) { setError(e.message); setEnviando(false); return; }
    setPremio(data?.premio === true);
    setPaso('gracias');
    setEnviando(false);
  };

  if (paso === 'login') return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#121416] p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-black tracking-tight">Encuesta IÓN MAX</h1>
          <p className="text-slate-400 text-sm mt-2">25 preguntas · Gana 5 días Pro gratis</p>
        </div>
        {esRegistro && <input value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Tu nombre" className="w-full rounded-xl bg-black/50 border border-white/10 px-4 py-3 text-sm" />}
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Tu correo" className="w-full rounded-xl bg-black/50 border border-white/10 px-4 py-3 text-sm" />
        <input value={clave} onChange={e => setClave(e.target.value)} type="password" placeholder="Contraseña" className="w-full rounded-xl bg-black/50 border border-white/10 px-4 py-3 text-sm" />
        {error && <p className="text-rose-400 text-sm">{error}</p>}
        <button onClick={entrar} className="w-full rounded-xl bg-gradient-to-r from-[#c4cbd3] to-amber-400 py-3 font-bold text-black">{esRegistro ? 'Crear cuenta y empezar' : 'Entrar y empezar'}</button>
        <button onClick={() => setEsRegistro(!esRegistro)} className="w-full text-center text-xs text-slate-400 hover:text-white">{esRegistro ? '¿Ya tienes cuenta? Entra' : '¿No tienes cuenta? Regístrate'}</button>
      </div>
    </main>
  );

  if (paso === 'gracias') return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-md text-center space-y-4">
        <div className="text-6xl">🎉</div>
        <h1 className="text-3xl font-black">¡Gracias por tu opinión!</h1>
        {premio && <p className="text-[#c4cbd3] font-bold">🎁 Ganaste 5 días Pro — actívalos desde tu perfil en la app</p>}
        <p className="text-slate-400 text-sm">Tus respuestas nos ayudan a mejorar IÓN MAX y a traer más usuarios y vendedores.</p>
        <a href="https://app.ionmaxultimate.com" className="inline-block mt-4 rounded-xl bg-[#c4cbd3] px-6 py-3 font-bold text-black">Abrir IÓN MAX</a>
      </div>
    </main>
  );

  return (
    <main className="min-h-screen bg-black text-white p-4 pb-32">
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="text-center py-4">
          <h1 className="text-2xl font-black">Encuesta IÓN MAX</h1>
          <p className="text-slate-400 text-sm">Pregunta {Object.keys(respuestas).length + 1} de {PREGUNTAS.length}</p>
          <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full bg-[#c4cbd3] transition-all" style={{ width: `${(Object.keys(respuestas).length / PREGUNTAS.length) * 100}%` }} />
          </div>
        </div>
        {PREGUNTAS.map((p, i) => (
          <div key={p.id} className={`rounded-2xl border p-5 space-y-3 transition ${respuestas[p.id] ? 'border-[#c4cbd3]/40 bg-[#c4cbd3]/5' : 'border-white/10 bg-[#121416]'}`}>
            <p className="font-bold text-sm">{i + 1}. {p.texto}</p>
            <div className="flex flex-wrap gap-2">
              {p.opciones.map(op => (
                <button key={op} onClick={() => setRespuestas(r => ({ ...r, [p.id]: op }))}
                  className={`rounded-full px-4 py-2 text-xs font-bold border transition ${respuestas[p.id] === op ? 'bg-[#c4cbd3] text-black border-[#c4cbd3]' : 'border-white/15 text-slate-300 hover:border-[#c4cbd3]/50'}`}>{op}</button>
              ))}
            </div>
          </div>
        ))}
        {error && <p className="text-rose-400 text-sm text-center">{error}</p>}
      </div>
      <div className="fixed bottom-0 inset-x-0 p-4 bg-black/80 backdrop-blur border-t border-white/10">
        <div className="mx-auto max-w-2xl">
          <button onClick={enviar} disabled={enviando || Object.keys(respuestas).length < PREGUNTAS.length}
            className="w-full rounded-xl bg-gradient-to-r from-[#c4cbd3] to-amber-400 py-4 font-black text-black disabled:opacity-40">
            {enviando ? 'Enviando...' : `Enviar y ganar 5 días Pro (${Object.keys(respuestas).length}/${PREGUNTAS.length})`}
          </button>
        </div>
      </div>
    </main>
  );
}
