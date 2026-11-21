import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Shield, Globe, Truck, Smartphone, Monitor, Tablet, Apple, BadgeCheck, Phone, Store } from 'lucide-react';
import AnioActual from './AnioActual';

const APP_URL = 'https://app.ionmaxultimate.com';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="IÓN MAX" width={40} height={40} className="h-10 w-10 object-contain" />
            <span className="titulo-display texto-dorado-premium text-xl tracking-[0.14em]">IÓN MAX</span>
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
      <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,215,0,0.12),transparent_55%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-500/10 px-4 py-1.5">
            <BadgeCheck size={14} className="text-gold-400" />
            <span className="text-xs font-semibold tracking-wide text-gold-200">Marca ecuatoriana de comercio digital</span>
          </div>
          <h1 className="titulo-display mb-5 text-4xl leading-tight sm:text-5xl lg:text-6xl">
            IÓN MAX
          </h1>
          <p className="mx-auto mb-9 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Creamos productos digitales que conectan vendedores y compradores en Ecuador.
            Nuestro primer producto ya está disponible.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={APP_URL}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-8 py-3.5 text-sm font-bold text-black transition hover:bg-gold-400 sm:w-auto"
            >
              <Globe size={18} />
              Abrir la App Web
              <ArrowRight size={18} />
            </Link>
            <Link
              href={`${APP_URL}/registro`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              <Store size={18} />
              Quiero vender
            </Link>
          </div>
        </div>
      </section>

      {/* Nuestro primer producto: la app */}
      <section className="border-y border-white/10 bg-white/[0.02] px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="etiqueta-lujo mb-2 text-gold-300">Nuestro primer producto</p>
            <h2 className="titulo-display text-3xl text-white">La App IÓN MAX</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-slate-400">
              Marketplace y centro de gestión para compradores y vendedores. Compra, vende, chatea y gestiona tu tienda.
            </p>
          </div>

          {/* Plataformas */}
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

      {/* Confianza — solo beneficios reales de la app */}
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
          <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <Truck size={24} className="mt-0.5 shrink-0 text-gold-400" />
            <div>
              <h3 className="text-sm font-bold text-white">Envíos a todo Ecuador</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">Compras con envío a domicilio desde cualquier parte del país.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <Shield size={24} className="mt-0.5 shrink-0 text-emerald-400" />
            <div>
              <h3 className="text-sm font-bold text-white">Vendedores verificados</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">Cada tienda pasa por un proceso de verificación antes de publicar.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <Smartphone size={24} className="mt-0.5 shrink-0 text-blue-400" />
            <div>
              <h3 className="text-sm font-bold text-white">Chat y pedidos integrados</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">Habla directo con el vendedor y gestiona tus pedidos desde la app.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-3xl border border-gold-400/20 bg-gradient-to-br from-gold-500/[0.08] to-transparent p-8 text-center sm:p-12">
          <h2 className="titulo-display mb-3 text-2xl text-white sm:text-3xl">Empieza hoy</h2>
          <p className="mb-7 text-sm text-slate-400">Abre la app web en tu navegador — no necesitas instalar nada para empezar.</p>
          <Link
            href={APP_URL}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-8 py-3.5 text-sm font-bold text-black transition hover:bg-gold-400"
          >
            Abrir IÓN MAX
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
          <p className="text-xs text-slate-500">© <AnioActual /> IÓN MAX — Ecuador. Todos los derechos reservados.</p>
          <div className="flex gap-5 text-xs text-slate-400">
            <Link href={`${APP_URL}/politicas`} className="transition hover:text-white">Términos</Link>
            <a href={`${APP_URL}/marketplace`} className="transition hover:text-white">Marketplace</a>
            <a href={`${APP_URL}/registro`} className="transition hover:text-white">Vender</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
