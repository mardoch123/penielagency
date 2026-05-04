'use client';

import React, { useState, useEffect, useCallback } from 'react';

const siteTypes = [
  'Site Vitrine',
  'Site E-Commerce',
  'Application Web',
  'Landing Page / Tunnel de vente',
  'Blog / Magazine',
  'Portfolio',
  'Site Institutionnel',
  'Refonte de site existant',
  'Autre',
];

export default function ScrollPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [siteType, setSiteType] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const dismiss = useCallback(() => {
    setVisible(false);
    setDismissed(true);
    // Don't show again for this session
    try {
      sessionStorage.setItem('popup_dismissed', '1');
    } catch (_) {}
  }, []);

  useEffect(() => {
    // Check if already dismissed in this session
    try {
      if (sessionStorage.getItem('popup_dismissed') === '1') {
        setDismissed(true);
        return;
      }
    } catch (_) {}

    let scrolled = false;
    let timer: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      if (dismissed || scrolled) return;
      const scrollY = window.scrollY;
      if (scrollY > 200) {
        scrolled = true;
        // Show after 3 seconds of scrolling
        timer = setTimeout(() => {
          setVisible(true);
        }, 3000);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timer) clearTimeout(timer);
    };
  }, [dismissed]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        dismiss();
      }, 2500);
    }, 1000);
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] bg-foreground/40 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true" />

      {/* Popup */}
      <div
        className="fixed z-[101] bottom-0 left-0 right-0 sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:max-w-md w-full"
        role="dialog"
        aria-modal="true"
        aria-label="Demande de devis rapide"
        style={{
          animation: 'popupSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}>
        
        <div className="bg-background border border-border rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="relative bg-foreground px-6 pt-6 pb-5">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(232,86,10,0.3) 0%, transparent 70%)' }}
              aria-hidden="true" />
            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-primary text-xs font-700 uppercase tracking-widest">Devis gratuit</span>
                </div>
                <h2 className="text-xl font-800 text-primary-foreground leading-tight">
                  Quel site voulez-vous<br />créer ?
                </h2>
                <p className="text-primary-foreground/60 text-xs mt-1.5">
                  Réponse sous 24h · Sans engagement
                </p>
              </div>
              <button
                onClick={dismiss}
                aria-label="Fermer"
                className="w-8 h-8 rounded-xl bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-primary-foreground/20 hover:text-primary-foreground transition-all duration-200 flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="px-6 py-5">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-4 text-center">
                <div className="w-14 h-14 bg-green-500/10 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-700 text-foreground text-base">Demande envoyée !</p>
                  <p className="text-muted-foreground text-sm mt-1">Nous vous contactons dans les 24h.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Site type */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="popup-site-type" className="text-xs font-700 text-foreground">
                    Type de site <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="popup-site-type"
                      required
                      value={siteType}
                      onChange={e => setSiteType(e.target.value)}
                      className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all duration-200 appearance-none cursor-pointer pr-10">
                      <option value="">Choisissez le type de site</option>
                      {siteTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="popup-email" className="text-xs font-700 text-foreground">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="popup-email"
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all duration-200" />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="popup-phone" className="text-xs font-700 text-foreground">
                    Numéro de téléphone
                  </label>
                  <input
                    id="popup-phone"
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="+33 6 00 00 00 00"
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all duration-200" />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-700 text-sm px-6 py-3.5 rounded-full hover:bg-accent transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-primary/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 mt-1">
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Envoi...
                    </>
                  ) : (
                    <>
                      Obtenir mon devis gratuit
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-[10px] text-muted-foreground text-center">
                  Ou commandez directement sur{' '}
                  <a href="https://comeup.com/fr/@mardochedev" target="_blank" rel="noopener noreferrer" className="text-primary font-600 hover:underline">
                    Comeup.com
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes popupSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (min-width: 640px) {
          @keyframes popupSlideIn {
            from {
              opacity: 0;
              transform: translate(-50%, calc(-50% + 20px));
            }
            to {
              opacity: 1;
              transform: translate(-50%, -50%);
            }
          }
        }
      `}</style>
    </>
  );
}
