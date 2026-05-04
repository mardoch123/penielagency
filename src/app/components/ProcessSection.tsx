'use client';

import React, { useEffect, useRef } from 'react';

const steps = [
  {
    number: '01',
    icon: '💬',
    title: 'Briefing & Devis',
    description:
      'Vous décrivez votre projet sur Comeup.com. Nous analysons vos besoins, proposons une solution et établissons un devis transparent sous 24h.',
    detail: 'Gratuit & sans engagement',
  },
  {
    number: '02',
    icon: '🔒',
    title: 'Commande Sécurisée',
    description:
      'Vous passez commande directement sur Comeup.com. Votre paiement est sécurisé et bloqué en escrow jusqu\'à votre validation finale du projet.',
    detail: 'Paiement 100% protégé',
  },
  {
    number: '03',
    icon: '🎨',
    title: 'Conception & Développement',
    description:
      'Notre équipe d\'experts travaille sur votre projet. Vous suivez l\'avancement en temps réel et validez chaque étape clé.',
    detail: 'Livrables à chaque étape',
  },
  {
    number: '04',
    icon: '✅',
    title: 'Livraison & Validation',
    description:
      'Vous testez, validez et libérez le paiement uniquement si vous êtes 100% satisfait. Sinon, nous corrigeons jusqu\'à votre approbation.',
    detail: 'Satisfaction garantie',
  },
];

export default function ProcessSection() {
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

    const items = sectionRef.current?.querySelectorAll('.reveal-process');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="processus"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-background relative overflow-hidden"
      aria-label="Notre processus de commande sécurisé"
    >
      {/* BG grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className="reveal-process mb-16 text-center"
          data-delay="0"
          style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}
        >
          <span className="text-primary font-700 text-xs uppercase tracking-widest mb-3 block">
            Processus
          </span>
          <h2 className="text-4xl lg:text-5xl font-800 text-foreground tracking-ultra leading-tight mb-4">
            Comment ça marche
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            Un processus simple, transparent et 100% sécurisé via Comeup.com — la plateforme de référence pour les services digitaux.
          </p>
        </div>

        {/* Comeup badge */}
        <div
          className="reveal-process flex justify-center mb-14"
          data-delay="0.1"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}
        >
          <div className="inline-flex items-center gap-4 bg-card border border-border rounded-2xl px-6 py-4 shadow-lg">
            <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-700 text-foreground">Partenaire officiel Comeup.com</p>
              <p className="text-xs text-muted-foreground">Paiement sécurisé · Remboursement garanti · Litige protégé</p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 text-xs font-700 px-3 py-1.5 rounded-full">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              Certifié
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="reveal-process process-step relative group"
              data-delay={0.15 + index * 0.1}
              style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}
            >
              {/* Ghost number */}
              <span className="step-number" aria-hidden="true">{step.number}</span>

              <div className="relative z-10 pt-10 pb-4">
                {/* Icon */}
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  {step.icon}
                </div>

                <h3 className="text-base font-700 text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {step.description}
                </p>
                <span className="inline-block text-xs font-700 text-primary bg-primary/8 px-2.5 py-1 rounded-full">
                  {step.detail}
                </span>
              </div>

              {/* Hover bar */}
              <div className="process-step-bar rounded-full" />

              {/* Connector arrow (hidden on last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 -right-4 z-20 text-border">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="reveal-process mt-16 bg-foreground rounded-2xl p-8 md:p-10 text-center relative overflow-hidden"
          data-delay="0.6"
          style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}
        >
          {/* BG decoration */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(232,86,10,0.2) 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-800 text-primary-foreground mb-3 tracking-ultra">
              Prêt à lancer votre projet ?
            </h3>
            <p className="text-primary-foreground/50 text-sm mb-8 max-w-md mx-auto">
              Rejoignez les 50+ entreprises qui nous ont fait confiance. Devis gratuit, réponse sous 24h.
            </p>
            <a
              href="https://comeup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-700 text-sm px-8 py-4 rounded-full hover:bg-accent transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-primary/30"
            >
              Commander maintenant sur Comeup
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}