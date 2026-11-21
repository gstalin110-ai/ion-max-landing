'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { RefreshCw, ArrowRight, Shield, Globe, Users, Smartphone, Check, Star, Zap, TrendingUp, ShoppingBag, Heart, Award, ChevronRight, Play, Download, Building, Mail, Phone, MapPin, Share2, X, Globe as World, Code, Rocket, BarChart, Database, ShieldCheck, Cpu, Wifi, Cloud, Bell, Sparkles } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function Home() {
  const [stats, setStats] = useState({ productos: 0, vendedores: 0, usuarios: 0, satisfaccion: 98 });

  useEffect(() => {
    const cliente = supabase;
    if (!cliente) return;

    const cargarEstadisticas = async () => {
      try {
        const { data: catalogoData } = await cliente.rpc('ion_max_catalog');
        const productosActivos = catalogoData?.filter((item: any) => item.activo === true).length || 0;

        const { data: sellersData } = await cliente.rpc('ion_max_public_sellers');
        const vendedoresCount = sellersData?.length || 0;

        setStats({
          productos: productosActivos,
          vendedores: vendedoresCount,
          usuarios: 0,
          satisfaccion: 98,
        });
      } catch (error) {
        console.error('Error cargando estadísticas:', error);
      }
    };
    cargarEstadisticas();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="IÓN MAX" width={40} height={40} className="h-10 w-10 object-contain" />
              <span className="titulo-display texto-dorado-premium text-xl tracking-[0.14em]">IÓN MAX</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#features" className="hidden sm:block text-sm text-slate-300 hover:text-white transition">Características</a>
              <a href="#download-app" className="hidden sm:block text-sm text-slate-300 hover:text-white transition">Descargar App</a>
              <a href="#news" className="hidden sm:block text-sm text-slate-300 hover:text-white transition">Novedades</a>
              <a href="#about" className="hidden sm:block text-sm text-slate-300 hover:text-white transition">Sobre IÓN MAX</a>
              <button
                onClick={() => window.location.href = 'https://app.ionmaxultimate.com'}
                className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-4 py-2 text-sm font-bold text-black transition hover:bg-gold-400"
              >
                Entrar a la App
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 via-purple-500/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-500/10 px-4 py-2">
                <Star size={16} className="text-gold-400" />
                <span className="text-sm font-semibold text-gold-200">Marketplace Premium de Ecuador</span>
              </div>
              <h1 className="titulo-display mb-6 text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
                El futuro del comercio digital en Ecuador
              </h1>
              <p className="mx-auto lg:mx-0 mb-8 max-w-xl text-lg text-slate-300">
                Compra y vende con total confianza. IÓN MAX conecta a vendedores verificados con clientes exigentes en una plataforma segura, rápida y fácil de usar.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <button
                  onClick={() => window.location.href = 'https://app.ionmaxultimate.com'}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-8 py-4 text-base font-bold text-black transition hover:bg-gold-400 shadow-lujo-2 shadow-gold-500/20"
                >
                  <Smartphone size={20} />
                  Abrir la App
                  <ChevronRight size={20} />
                </button>
                <button
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  <Play size={20} />
                  Ver cómo funciona
                </button>
              </div>
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-8 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-emerald-400" />
                  <span>Envíos gratis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-emerald-400" />
                  <span>Pago contra entrega</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-emerald-400" />
                  <span>Garantía segura</span>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative mx-auto aspect-square max-w-lg">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-500/20 to-purple-500/20 blur-3xl" />
                <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 rounded-xl bg-white/[0.04] p-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                        <ShoppingBag size={24} />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{stats.productos.toLocaleString()} productos</p>
                        <p className="text-sm text-slate-400">Disponibles ahora</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-xl bg-white/[0.04] p-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                        <Users size={24} />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{stats.vendedores.toLocaleString()} vendedores</p>
                        <p className="text-sm text-slate-400">Verificados</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-xl bg-white/[0.04] p-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                        <Heart size={24} />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{stats.usuarios.toLocaleString()} clientes</p>
                        <p className="text-sm text-slate-400">Registrados</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-white/10 bg-white/[0.02] py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <p className="mb-2 text-3xl font-bold text-gold-400">{stats.productos.toLocaleString()}</p>
              <p className="text-sm text-slate-400">Productos</p>
            </div>
            <div className="text-center">
              <p className="mb-2 text-3xl font-bold text-emerald-400">{stats.vendedores.toLocaleString()}</p>
              <p className="text-sm text-slate-400">Vendedores</p>
            </div>
            <div className="text-center">
              <p className="mb-2 text-3xl font-bold text-blue-400">{stats.usuarios.toLocaleString()}</p>
              <p className="text-sm text-slate-400">Clientes</p>
            </div>
            <div className="text-center">
              <p className="mb-2 text-3xl font-bold text-purple-400">{stats.satisfaccion}%</p>
              <p className="text-sm text-slate-400">Satisfacción</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="titulo-display mb-4 text-3xl text-white">¿Por qué elegir IÓN MAX?</h2>
            <p className="text-slate-400">Descubre las ventajas que nos diferencian</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-gold-400/30 hover:bg-white/[0.04]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gold-500/20 text-gold-400 transition group-hover:scale-110">
                <Shield size={28} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">Seguridad Garantizada</h3>
              <p className="text-sm text-slate-400">
                Todos los vendedores pasan por un proceso de verificación riguroso. Tus datos y pagos están protegidos con encriptación de nivel bancario.
              </p>
            </div>
            <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-gold-400/30 hover:bg-white/[0.04]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 transition group-hover:scale-110">
                <Globe size={28} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">Marketplace Global</h3>
              <p className="text-sm text-slate-400">
                Accede a productos de todo Ecuador en un solo lugar. Compra desde tu casa con envíos gratis a todo el país.
              </p>
            </div>
            <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-gold-400/30 hover:bg-white/[0.04]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 transition group-hover:scale-110">
                <Smartphone size={28} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">App PWA</h3>
              <p className="text-sm text-slate-400">
                Instala nuestra app en tu celular y accede offline. Una experiencia nativa sin descargar nada desde la tienda.
              </p>
            </div>
            <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-gold-400/30 hover:bg-white/[0.04]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400 transition group-hover:scale-110">
                <Zap size={28} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">Entregas Rápidas</h3>
              <p className="text-sm text-slate-400">
                Recibe tus pedidos en tiempo récord. Trabajamos con los mejores servicios de mensajería del país.
              </p>
            </div>
            <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-gold-400/30 hover:bg-white/[0.04]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-rose-500/20 text-rose-400 transition group-hover:scale-110">
                <Heart size={28} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">Soporte 24/7</h3>
              <p className="text-sm text-slate-400">
                Nuestro equipo está disponible para ayudarte en cualquier momento. Resolvemos tus dudas en minutos.
              </p>
            </div>
            <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-gold-400/30 hover:bg-white/[0.04]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 transition group-hover:scale-110">
                <Award size={28} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">Calidad Premium</h3>
              <p className="text-sm text-slate-400">
                Solo productos de alta calidad. Cada artículo es revisado antes de ser publicado en nuestra plataforma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-y border-white/10 bg-gradient-to-b from-gold-500/5 to-transparent py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="titulo-display mb-4 text-3xl text-white">Cómo funciona</h2>
            <p className="text-slate-400">Comienza en minutos, es muy fácil</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/20 text-gold-400 text-2xl font-bold">
                1
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">Regístrate gratis</h3>
              <p className="text-sm text-slate-400">
                Crea tu cuenta en segundos. Solo necesitas tu correo electrónico y listo.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-2xl font-bold">
                2
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">Explora y compra</h3>
              <p className="text-sm text-slate-400">
                Navega por miles de productos, filtra por categoría y encuentra lo que buscas.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-2xl font-bold">
                3
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">Recibe en casa</h3>
              <p className="text-sm text-slate-400">
                Paga contra entrega y recibe tu pedido en la puerta de tu casa. Sin riesgos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-3xl border border-gold-400/30 bg-gradient-to-br from-gold-500/10 to-purple-500/10 p-8 sm:p-12 text-center">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-500/20 to-purple-500/20 blur-3xl" />
            <div className="relative">
              <h2 className="titulo-display mb-4 text-3xl text-white">¿Listo para empezar?</h2>
              <p className="mb-8 text-slate-300">
                Únete a miles de usuarios que ya confían en IÓN MAX para sus compras y ventas. Es gratis y rápido.
              </p>
              <button
                onClick={() => window.location.href = 'https://app.ionmaxultimate.com'}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-8 py-4 text-base font-bold text-black transition hover:bg-gold-400 shadow-lujo-2 shadow-gold-500/20"
              >
                <Smartphone size={20} />
                Abrir la App ahora
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Descargar App Section */}
      <section id="download-app" className="border-y border-white/10 bg-gradient-to-b from-gold-500/5 to-transparent py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="titulo-display mb-4 text-3xl text-white">Descarga la App</h2>
            <p className="text-slate-400">Lleva IÓN MAX en tu bolsillo, disponible para todos los dispositivos</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gold-500/20 text-gold-400">
                    <Download size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold text-white">Instalación PWA</h3>
                    <p className="text-sm text-slate-400">
                      Instala la app directamente desde tu navegador sin ir a la tienda. Funciona en Android, iOS y PC con una experiencia nativa completa.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                    <Wifi size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold text-white">Acceso Offline</h3>
                    <p className="text-sm text-slate-400">
                      Navega y guarda productos sin conexión. Tu app sincroniza automáticamente cuando vuelves a tener internet.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                    <Bell size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold text-white">Notificaciones Push</h3>
                    <p className="text-sm text-slate-400">
                      Recibe alertas de nuevas ofertas, pedidos y mensajes en tiempo real. Nunca te pierdas una oportunidad.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold text-white">Interfaz Optimizada</h3>
                    <p className="text-sm text-slate-400">
                      Diseño responsive adaptado para celulares, tablets y computadoras. La misma experiencia en cualquier dispositivo.
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => window.location.href = 'https://app.ionmaxultimate.com'}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-8 py-4 text-base font-bold text-black transition hover:bg-gold-400 shadow-lujo-2 shadow-gold-500/20"
              >
                <Download size={20} />
                Instalar la App
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-500/20 to-purple-500/20 blur-3xl" />
              <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl">
                <div className="aspect-[9/16] rounded-2xl bg-gradient-to-br from-gold-500/10 to-purple-500/10 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Image src="/logo.png" alt="IÓN MAX" width={80} height={80} className="mx-auto h-20 w-auto object-contain" />
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-white">IÓN MAX</p>
                      <p className="text-sm text-slate-400">Marketplace Premium</p>
                    </div>
                    <div className="flex justify-center gap-4">
                      <div className="rounded-full bg-gold-500/20 p-3">
                        <Star size={20} className="text-gold-400" />
                      </div>
                      <div className="rounded-full bg-emerald-500/20 p-3">
                        <Shield size={20} className="text-emerald-400" />
                      </div>
                      <div className="rounded-full bg-blue-500/20 p-3">
                        <Heart size={20} className="text-blue-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Novedades Section */}
      <section id="news" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="titulo-display mb-4 text-3xl text-white">Novedades</h2>
            <p className="text-slate-400">Lo último de IÓN MAX y el mundo del e-commerce</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-gold-400/30 hover:bg-white/[0.04]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/20 text-gold-400">
                <Rocket size={24} />
              </div>
              <div className="mb-2 text-xs font-semibold text-gold-400">LANZAMIENTO</div>
              <h3 className="mb-2 text-lg font-bold text-white">Nueva versión 1.1.0 Beta</h3>
              <p className="text-sm text-slate-400">
                Mejoras en rendimiento, nuevas funciones de búsqueda y optimización para dispositivos móviles.
              </p>
            </div>
            <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-gold-400/30 hover:bg-white/[0.04]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                <Users size={24} />
              </div>
              <div className="mb-2 text-xs font-semibold text-emerald-400">COMUNIDAD</div>
              <h3 className="mb-2 text-lg font-bold text-white">+20 productos disponibles</h3>
              <p className="text-sm text-slate-400">
                Nuevas categorías y vendedores verificados se unen a nuestra plataforma cada día.
              </p>
            </div>
            <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-gold-400/30 hover:bg-white/[0.04]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                <ShieldCheck size={24} />
              </div>
              <div className="mb-2 text-xs font-semibold text-blue-400">SEGURIDAD</div>
              <h3 className="mb-2 text-lg font-bold text-white">Verificación mejorada</h3>
              <p className="text-sm text-slate-400">
                Proceso de verificación de vendedores más riguroso para garantizar transacciones seguras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre la Marca Section */}
      <section id="about" className="border-y border-white/10 bg-gradient-to-b from-purple-500/5 to-transparent py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="titulo-display mb-4 text-3xl text-white">Sobre IÓN MAX</h2>
            <p className="text-slate-400">Una marca dedicada a transformar el comercio digital en Ecuador</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gold-500/20 text-gold-400">
                    <Building size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold text-white">Visión Empresarial</h3>
                    <p className="text-sm text-slate-400">
                      IÓN MAX no es solo una tienda online. Es una marca en expansión que busca crear soluciones digitales innovadoras para el mercado ecuatoriano.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold text-white">Expansión Global</h3>
                    <p className="text-sm text-slate-400">
                      Comenzamos en Ecuador con el objetivo de expandirnos a toda Latinoamérica, conectando vendedores y compradores en un ecosistema seguro.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                    <Code size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold text-white">Tecnología de Vanguardia</h3>
                    <p className="text-sm text-slate-400">
                      Desarrollamos con las últimas tecnologías: Next.js, Supabase, PWA y más para ofrecer una experiencia de usuario excepcional.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold text-white">Crecimiento Sostenible</h3>
                    <p className="text-sm text-slate-400">
                      Nuestro modelo de negocio se basa en el crecimiento sostenible, priorizando la calidad sobre la cantidad y la confianza sobre las ventas rápidas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-500/20 to-purple-500/20 blur-3xl" />
              <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl">
                <div className="space-y-6">
                  <div className="text-center">
                    <Image src="/logo.png" alt="IÓN MAX" width={120} height={120} className="mx-auto h-24 w-auto object-contain" />
                    <h3 className="titulo-display mt-4 text-2xl text-white">IÓN MAX</h3>
                    <p className="text-slate-400">Marketplace Premium</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-white/[0.04] p-4 text-center">
                      <p className="text-2xl font-bold text-gold-400">Ecuador</p>
                      <p className="text-xs text-slate-400">Origen</p>
                    </div>
                    <div className="rounded-xl bg-white/[0.04] p-4 text-center">
                      <p className="text-2xl font-bold text-emerald-400">2024</p>
                      <p className="text-xs text-slate-400">Fundación</p>
                    </div>
                    <div className="rounded-xl bg-white/[0.04] p-4 text-center">
                      <p className="text-2xl font-bold text-blue-400">Next.js</p>
                      <p className="text-xs text-slate-400">Stack</p>
                    </div>
                    <div className="rounded-xl bg-white/[0.04] p-4 text-center">
                      <p className="text-2xl font-bold text-purple-400">Beta</p>
                      <p className="text-xs text-slate-400">Versión</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="titulo-display mb-4 text-3xl text-white">Contáctanos</h2>
            <p className="text-slate-400">Estamos aquí para ayudarte</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gold-500/20 text-gold-400">
                <Mail size={28} />
              </div>
              <h3 className="mb-2 font-bold text-white">Email</h3>
              <p className="text-sm text-slate-400">contacto@ionmaxultimate.com</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                <Phone size={28} />
              </div>
              <h3 className="mb-2 font-bold text-white">WhatsApp</h3>
              <p className="text-sm text-slate-400">Próximamente</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                <MapPin size={28} />
              </div>
              <h3 className="mb-2 font-bold text-white">Ubicación</h3>
              <p className="text-sm text-slate-400">Ecuador</p>
            </div>
          </div>
          <div className="mt-12 flex justify-center gap-6">
            <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-slate-400 transition hover:border-gold-400/30 hover:text-gold-400">
              <Share2 size={20} />
            </a>
            <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-slate-400 transition hover:border-gold-400/30 hover:text-gold-400">
              <Share2 size={20} />
            </a>
            <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-slate-400 transition hover:border-gold-400/30 hover:text-gold-400">
              <X size={20} />
            </a>
            <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-slate-400 transition hover:border-gold-400/30 hover:text-gold-400">
              <Globe size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="IÓN MAX" width={40} height={40} className="h-10 w-10 object-contain" />
                <span className="titulo-display texto-dorado-premium text-lg tracking-[0.14em]">IÓN MAX</span>
              </div>
              <p className="text-sm text-slate-400">
                El marketplace premium de Ecuador. Compra y vende con confianza.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-bold text-white">Producto</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="https://app.ionmaxultimate.com/marketplace" className="hover:text-white transition">Marketplace</a></li>
                <li><a href="https://app.ionmaxultimate.com/registro" className="hover:text-white transition">Vender</a></li>
                <li><a href="https://app.ionmaxultimate.com/mensajes" className="hover:text-white transition">Mensajes</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold text-white">Compañía</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#features" className="hover:text-white transition">Características</a></li>
                <li><a href="#download-app" className="hover:text-white transition">Descargar App</a></li>
                <li><a href="#news" className="hover:text-white transition">Novedades</a></li>
                <li><a href="#about" className="hover:text-white transition">Sobre IÓN MAX</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold text-white">Legal</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="https://app.ionmaxultimate.com/politicas" className="hover:text-white transition">Términos</a></li>
                <li><a href="https://app.ionmaxultimate.com/politicas" className="hover:text-white transition">Privacidad</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 text-center">
            <p className="text-sm text-slate-400">
              © 2024 IÓN MAX. Todos los derechos reservados. Hecho con ❤️ en Ecuador.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
