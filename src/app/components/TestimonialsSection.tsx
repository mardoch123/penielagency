'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';

interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
  color: string;
  rating: number;
}

const reviews: Review[] = [
{
  id: 1,
  name: 'FranckKeita',
  role: 'Client vérifié',
  company: 'Comeup.com',
  quote: 'Encore une fois, un très bon travail ! Toutes mes demandes ont été respectées à la perfection ! Merci beaucoup. Un service vraiment 10/10.',
  initials: 'FK',
  color: '#E8560A',
  rating: 5
},
{
  id: 2,
  name: 'BorisHochman',
  role: 'Client vérifié',
  company: 'Comeup.com',
  quote: 'Peniel Agency a été très réactif, efficace et a bien finalisé sa mission malgré des défis techniques importants. Ça a été un plaisir de travailler avec eux. Je les remercie vivement et n\'hésiterai pas à refaire appel à eux.',
  initials: 'BH',
  color: '#1a1a1a',
  rating: 5
},
{
  id: 3,
  name: 'INDUSTREETSASU',
  role: 'Client vérifié',
  company: 'Comeup.com',
  quote: 'C\'est toujours du bon boulot avec Peniel Agency. Une équipe vraiment pro ! Très bon boulot, je recommande sans hésitation.',
  initials: 'IN',
  color: '#E8560A',
  rating: 5
},
{
  id: 4,
  name: 'joeegallele',
  role: 'Client vérifié',
  company: 'Comeup.com',
  quote: 'Très professionnel, énergie positive, communication très fluide. Un vrai plaisir de collaborer avec Peniel Agency. Je recommande à 100%.',
  initials: 'JG',
  color: '#1a1a1a',
  rating: 5
},
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'right' | 'left'>('right');
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const navigate = useCallback(
    (dir: 'right' | 'left') => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection(dir);

      setTimeout(() => {
        setActiveIndex((prev) => {
          if (dir === 'right') return (prev + 1) % reviews.length;
          return (prev - 1 + reviews.length) % reviews.length;
        });
        setIsAnimating(false);
      }, 350);
    },
    [isAnimating]
  );

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating || index === activeIndex) return;
      navigate(index > activeIndex ? 'right' : 'left');
    },
    [isAnimating, activeIndex, navigate]
  );

  const current = reviews[activeIndex];
  const stars = Array.from({ length: 5 });

  return (
    <section
      id="temoignages"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-secondary/40 relative overflow-hidden"
      aria-label="Témoignages clients">
      
      <div
        className="absolute -bottom-40 left-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,86,10,0.07) 0%, transparent 70%)' }}
        aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className="mb-14"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)'
          }}>
          
          <span className="text-primary font-700 text-xs uppercase tracking-widest mb-3 block">
            Témoignages
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-800 text-foreground tracking-ultra leading-tight">
                Ce que disent<br />
                <span className="text-primary">nos clients</span>
              </h2>
              <p className="text-muted-foreground text-sm mt-3 font-500">
                Rejoignez les 50+ entreprises qui nous ont fait confiance.<br />
                <span className="text-white font-600">Devis gratuit, réponse sous 24h.</span>
              </p>
            </div>
            {/* Nav buttons */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground font-500 mr-2">
                {String(activeIndex + 1).padStart(2, '0')} / {String(reviews.length).padStart(2, '0')}
              </span>
              <button
                onClick={() => navigate('left')}
                aria-label="Témoignage précédent"
                className="w-12 h-12 rounded-2xl border border-border bg-card flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-200 hover:scale-105 active:scale-95">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => navigate('right')}
                aria-label="Témoignage suivant"
                className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-accent transition-all duration-200 hover:scale-105 active:scale-95">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial card */}
        <div
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.7s ease 0.2s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s'
          }}>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-card border border-border rounded-3xl p-6 md:p-10 lg:p-12 shadow-lg relative overflow-hidden">
            {/* Decorative quote mark */}
            <div className="absolute top-6 right-8 text-8xl font-800 text-primary/6 leading-none pointer-events-none select-none" aria-hidden="true">
              &ldquo;
            </div>

            {/* Avatar column */}
            <div className="lg:col-span-4 flex items-start justify-center lg:justify-start">
              <div
                className="flex flex-col items-center gap-4"
                style={{
                  opacity: isAnimating ? 0 : 1,
                  transition: 'opacity 0.35s ease'
                }}>
                {/* Large avatar circle */}
                <div
                  className="w-32 h-32 rounded-3xl flex items-center justify-center text-4xl font-800 text-white shadow-xl"
                  style={{ backgroundColor: current.color }}>
                  {current.initials}
                </div>
                {/* Comeup badge */}
                <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-3 py-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-xs font-700 text-green-700">Avis vérifié Comeup</span>
                </div>
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {stars.map((_, i) =>
                    <svg key={i} className="w-4 h-4 text-primary fill-primary" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            {/* Content column */}
            <div className="lg:col-span-8 flex flex-col justify-between gap-8">
              <div
                style={{
                  opacity: isAnimating ? 0 : 1,
                  transform: isAnimating ?
                    `translateX(${direction === 'right' ? '30px' : '-30px'})` :
                    'translateX(0)',
                  transition: 'opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1)'
                }}>

                <blockquote className="text-xl md:text-2xl font-600 text-foreground leading-relaxed mb-8">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                <div>
                  <p className="font-700 text-foreground text-base">{current.name}</p>
                  <p className="text-muted-foreground text-sm font-500 mt-0.5">
                    {current.role} — {current.company}
                  </p>
                </div>
              </div>

              {/* Thumbnail nav */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                {reviews.map((review, i) =>
                  <button
                    key={review.id}
                    onClick={() => goTo(i)}
                    aria-label={`Voir le témoignage de ${review.name}`}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-800 text-white border-2 transition-all duration-200 ${
                      i === activeIndex ? 'border-primary scale-110' : 'border-transparent opacity-50 hover:opacity-80'
                    }`}
                    style={{ backgroundColor: review.color }}>
                    {review.initials}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
