'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const stats = [
{ value: '5', unit: 'ans', label: "D\'expérience terrain" },
{ value: '50+', unit: '', label: 'Projets livrés' },
{ value: '98%', unit: '', label: 'Clients satisfaits' },
{ value: '10+', unit: '', label: 'Experts dédiés' }];


const expertises = [
{ icon: '⚡', label: 'Sites Vitrine & Landing Pages' },
{ icon: '🛒', label: 'E-Commerce & Marketplaces' },
{ icon: '📱', label: 'Applications Web & Mobile' },
{ icon: '🎨', label: 'UI/UX Design Premium' },
{ icon: '🔍', label: 'SEO & Performance' },
{ icon: '🔧', label: 'Maintenance & Support' }];


export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseFloat(el.dataset.delay || '0');
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, delay * 1000);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll('.reveal-about');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-secondary/40 relative overflow-hidden"
      aria-label="À propos de Peniel Agency">
      
      {/* Ambient */}
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,86,10,0.08) 0%, transparent 70%)' }}
        aria-hidden="true" />
      

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className="reveal-about mb-14"
          data-delay="0"
          style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}>
          
          <span className="text-primary font-700 text-xs uppercase tracking-widest mb-3 block">
            À propos
          </span>
          <h2 className="text-4xl lg:text-5xl font-800 text-foreground tracking-ultra leading-tight max-w-2xl">
            Une équipe d&apos;experts<br />
            <span className="text-primary">passionnés par le web</span>
          </h2>
        </div>

        {/* Main grid — 60/40 split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left — text content */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8">
            <div
              className="reveal-about"
              data-delay="0.1"
              style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}>
              
              <p className="text-muted-foreground leading-relaxed text-base mb-6">
                Depuis 2020, Peniel Agency accompagne des entreprises et professionnels en France, Belgique, Luxembourg et Canada francophone dans leur transformation digitale. 
                Notre équipe rassemble des experts en développement, design, SEO et stratégie digitale — chacun maître dans son domaine.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Nous croyons que chaque projet mérite une attention particulière. Pas de templates génériques, 
                pas de solutions copier-coller. Chaque livraison est pensée pour votre contexte spécifique, 
                votre audience, et vos objectifs business.
              </p>
            </div>

            {/* Expertise grid */}
            <div
              className="reveal-about grid grid-cols-2 sm:grid-cols-3 gap-3"
              data-delay="0.2"
              style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}>
              
              {expertises.map((item) =>
              <div
                key={item.label}
                className="flex items-center gap-2.5 bg-card border border-border rounded-xl px-3 py-2.5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 group">
                
                  <span className="text-base">{item.icon}</span>
                  <span className="text-xs font-600 text-foreground/80 group-hover:text-foreground leading-tight">{item.label}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right — stats card + image */}
          <div className="lg:col-span-5 flex flex-col gap-4 h-full justify-between">
            {/* Stats */}
            <div
              className="reveal-about bg-foreground rounded-2xl p-6 grid grid-cols-2 gap-6"
              data-delay="0.15"
              style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}>
              
              {stats.map((stat) =>
              <div key={stat.label} className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-800 text-primary leading-none">{stat.value}</span>
                    {stat.unit && <span className="text-primary/70 font-600 text-sm">{stat.unit}</span>}
                  </div>
                  <p className="text-primary-foreground/50 text-xs font-500 leading-tight">{stat.label}</p>
                </div>
              )}
            </div>

            {/* Team image */}
            <div
              className="reveal-about rounded-2xl overflow-hidden border border-border aspect-[4/3] relative"
              data-delay="0.25"
              style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}>
              
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_171170bd3-1764687877901.png"
                alt="Collaborative team meeting in bright modern office, diverse professionals working together around table with laptops, energetic and focused atmosphere"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw" />
              
            </div>
          </div>
        </div>
      </div>
    </section>);

}