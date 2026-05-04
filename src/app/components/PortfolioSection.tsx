'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  tag: string;
  url: string;
}

const projects: Project[] = [
{
  id: 1,
  title: 'Platinium Center',
  category: 'Site Vitrine',
  description: 'Site vitrine moderne pour salle de sport avec design dynamique, réservation en ligne et présentation des offres d\'abonnement.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_19024ca85-1772279117972.png",
  alt: 'Modern gym interior with fitness equipment, bright lighting and professional sports facility atmosphere',
  tag: 'Sport & Fitness',
  url: 'https://platinium-center.fr/'
},
{
  id: 2,
  title: 'LPM Beach Club',
  category: 'Restaurant & Loisirs',
  description: 'Expérience digitale premium pour restaurant & espace détente avec galerie visuelle immersive et système de réservation.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_19874a5c8-1775649229902.png",
  alt: 'Elegant upscale restaurant with warm ambient lighting, beautifully set tables and sophisticated dining atmosphere',
  tag: 'Restauration',
  url: 'https://lpm-beach-club.com/'
},
{
  id: 3,
  title: 'Cafés Royer',
  category: 'E-Commerce',
  description: 'Boutique en ligne pour torréfacteur artisanal avec catalogue produits, abonnements café et expérience d\'achat premium.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_125c0c718-1772635548277.png",
  alt: 'Artisan coffee shop with freshly roasted coffee beans, professional barista equipment and warm cozy atmosphere',
  tag: 'E-Commerce',
  url: 'https://cafesroyer.fr/'
},
{
  id: 4,
  title: 'Alec Coaching',
  category: 'Site Professionnel',
  description: 'Plateforme de coaching professionnel avec prise de rendez-vous intégrée, témoignages clients et présentation des programmes.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_17fedaac0-1772835029098.png",
  alt: 'Professional business coaching session with mentor and client in modern bright office environment',
  tag: 'Coaching',
  url: 'https://alec-coaching.fr/'
},
{
  id: 5,
  title: 'Washr.be',
  category: 'Service en Ligne',
  description: 'Site vitrine pour service de nettoyage professionnel avec devis en ligne, zones d\'intervention et galerie avant/après.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_10762befd-1772485074630.png",
  alt: 'Professional cleaning service team in uniform working in bright modern home environment',
  tag: 'Services',
  url: 'https://washr.be/'
},
{
  id: 6,
  title: 'Détails Pilates',
  category: 'Studio Bien-être',
  description: 'Site élégant pour studio de pilates avec planning des cours, abonnements en ligne et ambiance zen et minimaliste.',
  image: "https://images.unsplash.com/photo-1717500252297-b09508db7ceb",
  alt: 'Serene pilates studio with natural light, yoga mats and minimalist wellness atmosphere',
  tag: 'Bien-être',
  url: 'https://details-pilates.fr/'
}];


export default function PortfolioSection() {
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

    const items = sectionRef.current?.querySelectorAll('.reveal-portfolio');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="realisations"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-background"
      aria-label="Nos réalisations">
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className="reveal-portfolio mb-14"
          data-delay="0"
          style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-primary font-700 text-xs uppercase tracking-widest mb-3 block">
                Nos réalisations
              </span>
              <h2 className="text-4xl lg:text-5xl font-800 text-foreground tracking-ultra leading-tight">
                Des projets qui<br />
                <span className="text-primary">font la différence</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs md:text-right">
              Chaque projet est unique. Nous concevons des expériences digitales sur mesure qui reflètent l&apos;ADN de votre marque.
            </p>
          </div>
        </div>

        {/* Bento Grid — 12 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
          {/* Card 1 — lg:col-span-6 */}
          <div
            className="reveal-portfolio portfolio-card lg:col-span-6 rounded-2xl overflow-hidden bg-secondary border border-border h-64 sm:h-72 lg:h-80"
            data-delay="0.1"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}>
            
            <a href={projects[0].url} target="_blank" rel="noopener noreferrer" className="block relative w-full h-full">
              <AppImage
                src={projects[0].image}
                alt={projects[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw" />
              
              <div className="overlay" />
              <div className="card-info">
                <span className="inline-block bg-primary text-primary-foreground text-[10px] font-700 uppercase tracking-wider px-2.5 py-1 rounded-full mb-2">
                  {projects[0].tag}
                </span>
                <h3 className="text-white font-700 text-lg leading-tight">{projects[0].title}</h3>
                <p className="text-white/70 text-xs mt-1">{projects[0].description}</p>
              </div>
            </a>
          </div>

          {/* Card 2 — lg:col-span-6 */}
          <div
            className="reveal-portfolio portfolio-card lg:col-span-6 rounded-2xl overflow-hidden bg-secondary border border-border h-64 sm:h-72 lg:h-80"
            data-delay="0.15"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}>
            
            <a href={projects[1].url} target="_blank" rel="noopener noreferrer" className="block relative w-full h-full">
              <AppImage
                src={projects[1].image}
                alt={projects[1].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw" />
              
              <div className="overlay" />
              <div className="card-info">
                <span className="inline-block bg-primary text-primary-foreground text-[10px] font-700 uppercase tracking-wider px-2.5 py-1 rounded-full mb-2">
                  {projects[1].tag}
                </span>
                <h3 className="text-white font-700 text-lg leading-tight">{projects[1].title}</h3>
                <p className="text-white/70 text-xs mt-1">{projects[1].description}</p>
              </div>
            </a>
          </div>

          {/* Card 3 — lg:col-span-4 */}
          <div
            className="reveal-portfolio portfolio-card lg:col-span-4 rounded-2xl overflow-hidden bg-secondary border border-border h-56 sm:h-64"
            data-delay="0.2"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}>
            
            <a href={projects[2].url} target="_blank" rel="noopener noreferrer" className="block relative w-full h-full">
              <AppImage
                src={projects[2].image}
                alt={projects[2].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw" />
              
              <div className="overlay" />
              <div className="card-info">
                <span className="inline-block bg-primary text-primary-foreground text-[10px] font-700 uppercase tracking-wider px-2.5 py-1 rounded-full mb-2">
                  {projects[2].tag}
                </span>
                <h3 className="text-white font-700 text-base leading-tight">{projects[2].title}</h3>
              </div>
            </a>
          </div>

          {/* Card 4 — lg:col-span-4 */}
          <div
            className="reveal-portfolio portfolio-card lg:col-span-4 rounded-2xl overflow-hidden bg-secondary border border-border h-56 sm:h-64"
            data-delay="0.25"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}>
            
            <a href={projects[3].url} target="_blank" rel="noopener noreferrer" className="block relative w-full h-full">
              <AppImage
                src={projects[3].image}
                alt={projects[3].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw" />
              
              <div className="overlay" />
              <div className="card-info">
                <span className="inline-block bg-primary text-primary-foreground text-[10px] font-700 uppercase tracking-wider px-2.5 py-1 rounded-full mb-2">
                  {projects[3].tag}
                </span>
                <h3 className="text-white font-700 text-base leading-tight">{projects[3].title}</h3>
              </div>
            </a>
          </div>

          {/* Card 5 — lg:col-span-4 */}
          <div
            className="reveal-portfolio portfolio-card lg:col-span-4 rounded-2xl overflow-hidden bg-secondary border border-border h-56 sm:h-64"
            data-delay="0.3"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}>
            
            <a href={projects[4].url} target="_blank" rel="noopener noreferrer" className="block relative w-full h-full">
              <AppImage
                src={projects[4].image}
                alt={projects[4].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw" />
              
              <div className="overlay" />
              <div className="card-info">
                <span className="inline-block bg-primary text-primary-foreground text-[10px] font-700 uppercase tracking-wider px-2.5 py-1 rounded-full mb-2">
                  {projects[4].tag}
                </span>
                <h3 className="text-white font-700 text-base leading-tight">{projects[4].title}</h3>
              </div>
            </a>
          </div>

          {/* Card 6 — lg:col-span-12 */}
          <div
            className="reveal-portfolio portfolio-card sm:col-span-2 lg:col-span-12 rounded-2xl overflow-hidden bg-secondary border border-border h-48 sm:h-56"
            data-delay="0.35"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}>
            
            <a href={projects[5].url} target="_blank" rel="noopener noreferrer" className="block relative w-full h-full">
              <AppImage
                src={projects[5].image}
                alt={projects[5].alt}
                fill
                className="object-cover"
                sizes="100vw" />
              
              <div className="overlay" />
              <div className="card-info">
                <span className="inline-block bg-primary text-primary-foreground text-[10px] font-700 uppercase tracking-wider px-2.5 py-1 rounded-full mb-2">
                  {projects[5].tag}
                </span>
                <h3 className="text-white font-700 text-xl leading-tight">{projects[5].title}</h3>
                <p className="text-white/70 text-xs mt-1">{projects[5].description}</p>
              </div>
            </a>
          </div>
        </div>

        {/* CTA */}
        <div
          className="reveal-portfolio mt-10 text-center"
          data-delay="0.4"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}>
          
          <a
            href="https://comeup.com/fr/@mardochedev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-600 text-primary border border-primary/30 px-6 py-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            
            Démarrer votre projet
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>);

}