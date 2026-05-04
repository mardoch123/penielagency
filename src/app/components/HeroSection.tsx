'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const charsRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    // Vertical cut reveal for headline
    const container = document.getElementById('hero-headline');
    if (!container) return;

    const text = container.textContent?.trim() || '';
    const words = text.split(' ');
    container.innerHTML = '';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.gap = '0 0.25em';

    words.forEach((word) => {
      const wordSpan = document.createElement('span');
      wordSpan.className = 'vcr-word';
      Array.from(word).forEach((char) => {
        const wrapper = document.createElement('span');
        wrapper.className = 'vcr-char-wrapper';
        const inner = document.createElement('span');
        inner.className = 'vcr-char';
        inner.textContent = char;
        wrapper.appendChild(inner);
        wordSpan.appendChild(wrapper);
      });
      container.appendChild(wordSpan);
    });

    const chars = container.querySelectorAll('.vcr-char');
    charsRef.current = chars;

    // Stagger animation
    let delay = 0;
    chars.forEach((char) => {
      const el = char as HTMLElement;
      el.style.transition = `transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`;
      delay += 0.025;
    });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        chars.forEach((char) => {
          (char as HTMLElement).style.transform = 'translateY(0%)';
        });
      });
    });

    // Fade in subtitle and CTA
    const sub = document.getElementById('hero-sub');
    const cta = document.getElementById('hero-cta');
    const badge = document.getElementById('hero-badge');

    [badge, sub, cta].forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 0.7s ease ${0.8 + i * 0.15}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${0.8 + i * 0.15}s`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
      });
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-background pt-20"
      aria-label="Peniel Agency — Agence web premium">
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern mask-fade-bottom pointer-events-none" aria-hidden="true" />

      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232,86,10,0.12) 0%, transparent 70%)'
        }}
        aria-hidden="true" />
      

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-12 lg:pt-24">
        {/* Badge */}
        <div
          id="hero-badge"
          className="flex justify-center mb-8"
          style={{ opacity: 0 }}>
          
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 text-xs font-700 uppercase tracking-widest px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-glow" />
            Agence web — 5 ans d&apos;expertise
          </span>
        </div>

        {/* Massive headline */}
        <div className="text-center mb-6 overflow-hidden">
          <h1
            id="hero-headline"
            className="font-display font-800 text-foreground tracking-tightest leading-none"
            style={{
              fontSize: 'clamp(3.5rem, 13vw, 11rem)',
              letterSpacing: '-0.05em'
            }}
            aria-label="Peniel Agency">
            
            PENIEL AGENCY
          </h1>
        </div>

        {/* Subtitle */}
        <p
          id="hero-sub"
          className="text-center text-muted-foreground text-base md:text-lg font-500 max-w-xl mx-auto leading-relaxed mb-10"
          style={{ opacity: 0 }}>
          
          Nous concevons des sites web & applications qui transforment votre présence digitale.
          Résultats mesurables. Délais tenus. Qualité garantie.
        </p>

        {/* CTAs */}
        <div
          id="hero-cta"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ opacity: 0 }}>
          
          <a
            href="https://comeup.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-700 text-sm px-8 py-4 rounded-full hover:bg-accent transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-primary/30">
            
            Commander sur Comeup
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#realisations"
            className="inline-flex items-center gap-2 text-foreground font-600 text-sm px-6 py-4 rounded-full border border-border hover:border-primary/40 hover:bg-secondary transition-all duration-200">
            
            Voir nos réalisations
          </a>
        </div>

        {/* Floating stat cards */}
        <div className="relative mt-16 lg:mt-20">
          {/* Central image / mockup area */}
          <div className="relative mx-auto max-w-4xl">
            <div className="rounded-2xl overflow-hidden border border-border shadow-2xl shadow-foreground/10 aspect-[16/9] relative">
              <AppImage
                src="https://images.unsplash.com/photo-1688703696041-0e6c14fa9174"
                alt="Bright modern office workspace with large monitors showing web design projects, clean desk setup, warm natural light"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 900px" />
              
              {/* Scrim for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />

              {/* Floating badge bottom left */}
              <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-md rounded-xl px-4 py-3 border border-border shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-700 text-foreground">Paiement 100% sécurisé</span>
                </div>
                <p className="text-[10px] text-muted-foreground mt-0.5">via Comeup.com</p>
              </div>
            </div>

            {/* Floating stat cards */}
            <div
              className="absolute -top-6 -right-4 lg:-right-12 bg-background border border-border rounded-2xl px-5 py-4 shadow-xl shadow-foreground/8 animate-float"
              style={{ animationDelay: '1s' }}>
              
              <p className="text-3xl font-800 text-primary leading-none">50+</p>
              <p className="text-xs text-muted-foreground font-500 mt-1">Projets livrés</p>
            </div>

            <div
              className="absolute -bottom-6 -left-4 lg:-left-12 bg-foreground text-primary-foreground rounded-2xl px-5 py-4 shadow-xl animate-float"
              style={{ animationDelay: '2s' }}>
              
              <p className="text-3xl font-800 text-primary leading-none">5</p>
              <p className="text-xs text-primary-foreground/70 font-500 mt-1">Ans d&apos;expérience</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}