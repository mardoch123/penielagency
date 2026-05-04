'use client';

import React, { useEffect, useRef } from 'react';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  price: string;
  rating: string;
  reviews: number;
  tag: string;
  url: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: '🌐',
    title: 'Site Vitrine WordPress Responsive',
    description: 'Création de votre site vitrine WordPress professionnel, responsive et optimisé SEO pour convertir vos visiteurs en clients. Idéal pour les entreprises en France, Belgique, Luxembourg et Canada.',
    price: 'À partir de 117 $',
    rating: '5.0',
    reviews: 44,
    tag: 'Best-seller',
    url: 'https://comeup.com/fr/service/250760/cree-votre-site-web-sur-mesure'
  },
  {
    id: 2,
    icon: '🚀',
    title: 'Site Web Sur-Mesure',
    description: 'Développement web personnalisé avec des technologies modernes (React, Laravel, Next.js) pour des projets uniques et ambitieux. Solutions sur mesure pour PME et startups.',
    price: 'À partir de 127 $',
    rating: '5.0',
    reviews: 5,
    tag: 'Sur-mesure',
    url: 'https://comeup.com/fr/service/250760/cree-votre-site-web-sur-mesure'
  },
  {
    id: 3,
    icon: '🎯',
    title: 'Tunnel de Vente Convertisseur',
    description: 'Création de tunnels de vente hautement optimisés sur Systeme.io pour maximiser vos conversions et automatiser vos ventes 24h/24.',
    price: 'À partir de 59 $',
    rating: '5.0',
    reviews: 12,
    tag: 'Marketing',
    url: 'https://comeup.com/fr/@mardochedev'
  },
  {
    id: 4,
    icon: '⚡',
    title: 'Modernisation WordPress',
    description: 'Optimisation du design, du SEO et des performances de votre site WordPress existant pour une expérience premium et un meilleur référencement Google.',
    price: 'À partir de 63 $',
    rating: '5.0',
    reviews: 2,
    tag: 'Optimisation',
    url: 'https://comeup.com/fr/service/250760/cree-votre-site-web-sur-mesure'
  },
  {
    id: 5,
    icon: '📱',
    title: 'Site Web Responsive',
    description: 'Rendre votre site web parfaitement responsive sur tous les appareils : mobile, tablette et desktop. Expérience utilisateur optimale garantie.',
    price: 'À partir de 25 $',
    rating: '5.0',
    reviews: 8,
    tag: 'Mobile',
    url: 'https://comeup.com/fr/service/250760/cree-votre-site-web-sur-mesure'
  },
  {
    id: 6,
    icon: '🔧',
    title: 'Correction de Bugs WordPress',
    description: 'Diagnostic et correction rapide de tous vos bugs WordPress. Résolution garantie ou remboursé. Intervention rapide pour ne pas perdre de clients.',
    price: 'À partir de 25 $',
    rating: '5.0',
    reviews: 1,
    tag: 'Support',
    url: 'https://comeup.com/fr/service/250760/cree-votre-site-web-sur-mesure'
  },
];

export default function ServicesSection() {
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

    const items = sectionRef.current?.querySelectorAll('.reveal-service');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-background relative overflow-hidden"
      aria-label="Nos services">

      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,86,10,0.06) 0%, transparent 70%)' }}
        aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className="reveal-service mb-14"
          data-delay="0"
          style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-primary font-700 text-xs uppercase tracking-widest mb-3 block">
                Nos services
              </span>
              <h2 className="text-4xl lg:text-5xl font-800 text-foreground tracking-ultra leading-tight">
                Ce que nous<br />
                <span className="text-primary">faisons pour vous</span>
              </h2>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2">
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs md:text-right">
                Tous nos services sont disponibles sur Comeup.com avec paiement 100% sécurisé.
              </p>
              <a
                href="https://comeup.com/fr/@mardochedev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary text-xs font-700 hover:underline">
                Voir tous nos services →
              </a>
            </div>
          </div>
        </div>

        {/* Services grid — bento style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`reveal-service group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 ${index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              data-delay={0.1 + index * 0.08}
              style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}>

              {/* Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block bg-primary/10 text-primary text-[10px] font-700 uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {service.tag}
                </span>
                {/* Rating */}
                <div className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-primary fill-primary" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-xs font-700 text-foreground">{service.rating}</span>
                  <span className="text-xs text-muted-foreground">({service.reviews})</span>
                </div>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-700 text-foreground text-base mb-2 group-hover:text-primary transition-colors duration-200 leading-snug">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm font-700 text-primary">{service.price}</span>
                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-600 bg-primary text-primary-foreground px-3 py-1.5 rounded-full hover:bg-accent transition-colors duration-200">
                  Commander
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
