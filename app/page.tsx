import Image from 'next/image';
import type { CSSProperties } from 'react';
import Link from 'next/link';
import {
  ArrowRight, Shield, Globe, Truck, Smartphone, Monitor, Tablet, Apple,
  BadgeCheck, Phone, Store, ShoppingBag, CalendarDays, Users, MessageCircle,
  Wallet, Gift, Sparkles, CreditCard, Package,
} from 'lucide-react';
import AnioActual from './AnioActual';
import PopupEncuesta from './components/PopupEncuesta';

const APP_URL = 'https://app.ionmaxultimate.com';

const PARA_COMPRADORES = [
  { icono: ShoppingBag, titulo: 'Marketplace con miles de productos', texto: 'Explora el catálogo de tiendas de todo tipo: moda, tecnología, hogar, belleza y más.' },
  { icono: CalendarDays, titulo: 'Agenda servicios sin llamadas', texto: 'Restaurantes, spas, consultorios y profesionales: confirma con fecha, hora y datos reales — sin llamadas ni esperas.' },
  { icono: Package, titulo: 'Compra completa por tienda', texto: 'Arma tu pedido con varios productos de una misma tienda y envíalo en un solo mensaje.' },
  { icono: MessageCircle, titulo: 'Chat directo con el vendedor', texto: 'Preguntas, negociación y coordinación de entrega en un chat privado e integrado.' },
  { icono: CreditCard, titulo: 'Pago seguro con PayPal', texto: 'Compra planes y servicios con el respaldo de PayPal donde esté disponible.' },
];

const PARA_VENDEDORES = [
  { icono: Store, titulo: 'Tu propia tienda online', texto: 'Catálogo con fotos, precios y descripción. Tu link único para compartir por WhatsApp o redes.' },
  { icono: Sparkles, titulo: 'Modo Profesional con herramientas a la medida', texto: '63 categorías de negocio: reservas con fecha y personas, medidas a medida, cotizaciones de eventos, agenda de citas y más.' },
  { icono: Package, titulo: 'Pedidos agrupados y comprobantes', texto: 'Cada pedido llega organizado a tu panel con ID único, estados y comprobante listo.' },
  { icono: Wallet, titulo: 'Plan Gratuito para empezar', texto: 'Publica y vende sin pagar nada. Mejora a Premium cuando lo necesites.' },
  { icono: Gift, titulo: 'Programa de referidos', texto: 'Comparte tu link: tú y tu invitado reciben 5 días de Premium cada uno, y ambos ganan +17% más alcance en productos, publicaciones y tienda. Se acumulan sin límite.' },
];

const PASOS = [
  { numero: '1', titulo: 'Crea tu cuenta', texto: 'Registro gratis con Google o correo. Verificación de edad incluida.' },
  { numero: '2', titulo: 'Publica o explora', texto: 'Vendedores: sube tus productos y activa tu tienda. Compradores: explora y reserva.' },
  { numero: '3', titulo: 'Vende y crece', texto: 'Recibe pedidos y solicitudes en tu panel, compártelos por WhatsApp y gana con referidos.' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PopupEncuesta />
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="IÓN MAX" width={40} height={40} className="h-10 w-10 object-contain" />
            <span className="titulo-display texto-dorado-premium text-xl tracking-[0.14em]">IÓN MAX ULTIMATE</span>
          </div>
          <Link
            href={APP_URL}
            className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-4 py-2 text-sm font-bold text-black transition hover:bg-gold-400"
          >
            Entrar a la App
            <ArrowRight size={16} />
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pb-24 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,215,0,0.12),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(255,215,0,0.06),transparent_50%)]" />
        <Image src="/logo.png" alt="" width={640} height={640} className="marca-fondo" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="hero-entrada mb-6 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-500/10 px-4 py-1.5" style={{ '--hero-delay': '0ms' } as CSSProperties}>
            <BadgeCheck size={14} className="text-gold-400" />
            <span className="text-xs font-semibold tracking-wide text-gold-200">Marketplace — compra, vende y reserva</span>
          </div>
          <h1 className="hero-entrada titulo-display texto-brillo-dorado mb-5 text-4xl leading-tight sm:text-5xl lg:text-6xl" style={{ '--hero-delay': '120ms' } as CSSProperties}>
            Todo tu comercio,<br />en una sola app
          </h1>
          <p className="hero-entrada mx-auto mb-9 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg" style={{ '--hero-delay': '240ms' } as CSSProperties}>
            IÓN MAX conecta compradores con negocios de todo tipo.
            Explora productos, encuentra servicios y vende con tu propia tienda online — gratis.
          </p>
          <div className="hero-entrada flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ '--hero-delay': '360ms' } as CSSProperties}>
            <Link
              href={APP_URL}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-8 py-3.5 text-sm font-bold text-black transition hover:bg-gold-400 sm:w-auto"
            >
              <Globe size={18} />
              Explorar la App
              <ArrowRight size={18} />
            </Link>
            <Link
              href={`${APP_URL}/registro`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              <Store size={18} />
              Abrir mi tienda gratis
            </Link>
          </div>
          <p className="hero-entrada mt-5 text-[11px] text-slate-500" style={{ '--hero-delay': '480ms' } as CSSProperties}>
            Sin costo para empezar · Funciona en cualquier navegador · Instalable como app
          </p>
        </div>
      </section>

      {/* Para compradores */}
      <section className="border-y border-white/10 bg-white/[0.02] px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="reveal mb-10 text-center">
            <p className="etiqueta-lujo mb-2 text-gold-300">Para compradores</p>
            <h2 className="titulo-display text-3xl text-white">Encuentra todo en un solo lugar</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-slate-400">
              Desde productos hasta servicios profesionales — todo en un solo lugar.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PARA_COMPRADORES.map((item) => (
              <div key={item.titulo} className="reveal flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-gold-400/30 hover:-translate-y-0.5">
                <item.icono size={22} className="mt-0.5 shrink-0 text-gold-400" />
                <div>
                  <h3 className="text-sm font-bold text-white">{item.titulo}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">{item.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para vendedores */}
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="reveal mb-10 text-center">
            <p className="etiqueta-lujo mb-2 text-gold-300">Para vendedores</p>
            <h2 className="titulo-display text-3xl text-white">Tu negocio digital, en serio</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-slate-400">
              Convierte tu catálogo de WhatsApp en una tienda profesional con herramientas pensadas para tu rubro.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PARA_VENDEDORES.map((item) => (
              <div key={item.titulo} className="reveal flex items-start gap-4 rounded-2xl border border-gold-400/15 bg-gold-500/[0.04] p-5 transition hover:border-gold-400/40 hover:-translate-y-0.5">
                <item.icono size={22} className="mt-0.5 shrink-0 text-gold-300" />
                <div>
                  <h3 className="text-sm font-bold text-white">{item.titulo}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">{item.texto}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href={`${APP_URL}/registro`}
              className="inline-flex items-center gap-2 rounded-xl bg-gold-500 px-7 py-3 text-sm font-bold text-black transition hover:bg-gold-400"
            >
              <Store size={17} />
              Crear mi tienda ahora
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Plataformas */}
      <section className="border-y border-white/10 bg-white/[0.02] px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="reveal mb-10 text-center">
            <p className="etiqueta-lujo mb-2 text-gold-300">Disponible en</p>
            <h2 className="titulo-display text-3xl text-white">La App IÓN MAX</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-slate-400">
              Marketplace, tienda y panel de gestión — todo en una app web instalable.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            <a
              href={APP_URL}
              className="group relative flex flex-col items-center gap-3 rounded-2xl border border-gold-400/30 bg-gold-500/[0.08] p-5 text-center transition hover:border-gold-400/60 hover:bg-gold-500/[0.14]"
            >
              <span className="absolute right-3 top-3 rounded-full bg-gold-400 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-black">Ahora</span>
              <Globe size={28} className="text-gold-300" />
              <div>
                <p className="text-sm font-bold text-white">Web App</p>
                <p className="text-[11px] text-slate-400">Cualquier navegador</p>
              </div>
            </a>
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center">
              <Smartphone size={28} className="text-slate-400" />
              <div>
                <p className="text-sm font-bold text-white">Android</p>
                <p className="text-[11px] text-slate-500">Próximamente</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center">
              <Apple size={28} className="text-slate-400" />
              <div>
                <p className="text-sm font-bold text-white">iOS</p>
                <p className="text-[11px] text-slate-500">Próximamente</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center">
              <Monitor size={28} className="text-slate-400" />
              <div>
                <p className="text-sm font-bold text-white">Windows</p>
                <p className="text-[11px] text-slate-500">Próximamente</p>
              </div>
            </div>
            <div className="col-span-2 flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center sm:col-span-1">
              <Tablet size={28} className="text-slate-400" />
              <div>
                <p className="text-sm font-bold text-white">Tablets</p>
                <p className="text-[11px] text-slate-500">Vía app web</p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-slate-500">
            La app web funciona en todos los dispositivos y se puede instalar en la pantalla de inicio como app.
          </p>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="reveal mb-10 text-center">
            <p className="etiqueta-lujo mb-2 text-gold-300">Cómo funciona</p>
            <h2 className="titulo-display text-3xl text-white">Tres pasos y estás dentro</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {PASOS.map((paso) => (
              <div key={paso.numero} className="reveal rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center">
                <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/30 bg-gold-500/10 text-sm font-extrabold text-gold-300">
                  {paso.numero}
                </span>
                <h3 className="text-sm font-bold text-white">{paso.titulo}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{paso.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-gold-400/20 bg-gradient-to-br from-gold-500/[0.08] to-transparent p-8 text-center sm:p-12">
          <Image src="/logo.png" alt="" width={400} height={400} className="marca-fondo" style={{ opacity: 0.05 }} aria-hidden="true" />
          <h2 className="titulo-display mb-3 text-2xl text-white sm:text-3xl">Tu tienda empieza hoy</h2>
          <p className="mb-7 text-sm text-slate-400">Crea tu cuenta gratis, publica tus productos y comparte tu link. Sin instalar nada.</p>
          <div className="hero-entrada flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ '--hero-delay': '360ms' } as CSSProperties}>
            <Link
              href={APP_URL}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-8 py-3.5 text-sm font-bold text-black transition hover:bg-gold-400"
            >
              Abrir IÓN MAX
              <ArrowRight size={18} />
            </Link>
            <Link
              href={`${APP_URL}/registro`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Quiero vender
            </Link>
          </div>
        </div>
      </section>

      {/* Encuesta */}
      <section className="border-t border-white/10 px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Ayúdanos a mejorar IÓN MAX · Tienda Online</h2>
          <p className="mt-3 text-slate-400">Responde 25 preguntas rápidas y gana 5 días Pro gratis.</p>
          <Link
            href="/encuesta"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-8 py-3.5 text-sm font-bold text-black transition hover:bg-gold-400"
          >
            Responder encuesta
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Contacto */}
      <section className="border-t border-white/10 px-4 py-12 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
          <Phone size={22} className="text-gold-400" />
          <div>
            <h3 className="text-sm font-bold text-white">Contacto</h3>
            <a
              href="https://wa.me/593980887170"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-sm text-slate-400 transition hover:text-gold-300"
            >
              WhatsApp: 098 088 7170
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="IÓN MAX" width={28} height={28} className="h-7 w-7 object-contain" />
            <span className="text-sm font-bold tracking-wide text-white">IÓN MAX</span>
          </div>
          <p className="text-xs text-slate-500">© <AnioActual /> IÓN MAX — Dedicados a Ecuador, próximamente más países. Todos los derechos reservados.</p>
          <div className="flex gap-5 text-xs text-slate-400">
            <Link href={`${APP_URL}/politicas`} className="transition hover:text-white">Políticas</Link>
            <a href={`${APP_URL}/marketplace`} className="transition hover:text-white">Marketplace</a>
            <a href={`${APP_URL}/registro`} className="transition hover:text-white">Vender</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
