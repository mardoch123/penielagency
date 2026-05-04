'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface FormData {
  name: string;
  email: string;
  phone: string;
  siteType: string;
  budget: string;
  message: string;
}

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

const budgets = [
  'Moins de 100 $',
  '100 $ – 300 $',
  '300 $ – 600 $',
  '600 $ – 1 000 $',
  'Plus de 1 000 $',
  'À définir ensemble',
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    siteType: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(232,86,10,0.10) 0%, transparent 70%)' }}
            aria-hidden="true" />
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="max-w-2xl">
              <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground text-sm font-500 hover:text-foreground transition-colors mb-8 group">
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Retour à l&apos;accueil
              </Link>
              <span className="text-primary font-700 text-xs uppercase tracking-widest mb-3 block">
                Contact
              </span>
              <h1 className="text-4xl lg:text-6xl font-800 text-foreground tracking-tightest leading-none mb-6">
                Parlons de<br />
                <span className="text-primary">votre projet</span>
              </h1>
              <p className="text-muted-foreground text-base leading-relaxed">
                Décrivez-nous votre projet et nous vous répondrons sous 24h avec une proposition adaptée à vos besoins et votre budget.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-20 lg:pb-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Left — Contact info */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                {/* Comeup card */}
                <div className="bg-foreground rounded-2xl p-6 relative overflow-hidden">
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(232,86,10,0.25) 0%, transparent 70%)' }}
                    aria-hidden="true" />
                  <div className="relative z-10">
                    <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="font-700 text-primary-foreground text-base mb-2">Commander sur Comeup</h3>
                    <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">
                      Pour une commande directe avec paiement 100% sécurisé et remboursement garanti.
                    </p>
                    <a
                      href="https://comeup.com/fr/@mardochedev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-700 px-5 py-2.5 rounded-full hover:bg-accent transition-all duration-200 hover:scale-105">
                      Voir nos services →
                    </a>
                  </div>
                </div>

                {/* Info cards */}
                <div className="bg-card border border-border rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-base">⏱️</span>
                    </div>
                    <div>
                      <p className="font-700 text-foreground text-sm">Réponse rapide</p>
                      <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">Nous répondons à toutes les demandes sous 24h ouvrées.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-base">💬</span>
                    </div>
                    <div>
                      <p className="font-700 text-foreground text-sm">Devis gratuit</p>
                      <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">Estimation personnalisée sans engagement, adaptée à votre budget.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-base">🌍</span>
                    </div>
                    <div>
                      <p className="font-700 text-foreground text-sm">Clients internationaux</p>
                      <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">Nous travaillons avec des clients en France, Afrique et partout dans le monde.</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-card border border-border rounded-xl p-4 text-center">
                    <p className="text-2xl font-800 text-primary">75+</p>
                    <p className="text-xs text-muted-foreground font-500 mt-0.5">Projets livrés</p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-4 text-center">
                    <p className="text-2xl font-800 text-primary">5.0★</p>
                    <p className="text-xs text-muted-foreground font-500 mt-0.5">Note moyenne</p>
                  </div>
                </div>
              </div>

              {/* Right — Form */}
              <div className="lg:col-span-8">
                {submitted ? (
                  <div className="bg-card border border-border rounded-3xl p-10 lg:p-14 text-center flex flex-col items-center gap-6">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-800 text-foreground mb-2">Message envoyé !</h2>
                      <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                        Merci pour votre message. Nous vous répondrons dans les 24h avec une proposition adaptée à votre projet.
                      </p>
                    </div>
                    <a
                      href="https://comeup.com/fr/@mardochedev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-700 text-sm px-6 py-3 rounded-full hover:bg-accent transition-all duration-200">
                      Commander directement sur Comeup →
                    </a>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-card border border-border rounded-3xl p-6 md:p-10 flex flex-col gap-6">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-700 text-foreground">
                          Nom complet <span className="text-primary">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jean Dupont"
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all duration-200" />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-700 text-foreground">
                          Email <span className="text-primary">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jean@exemple.com"
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all duration-200" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-sm font-700 text-foreground">
                          Téléphone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+33 6 00 00 00 00"
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all duration-200" />
                      </div>

                      {/* Budget */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="budget" className="text-sm font-700 text-foreground">
                          Budget estimé
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all duration-200 appearance-none cursor-pointer">
                          <option value="">Sélectionner un budget</option>
                          {budgets.map(b => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Site type */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="siteType" className="text-sm font-700 text-foreground">
                        Type de site souhaité <span className="text-primary">*</span>
                      </label>
                      <select
                        id="siteType"
                        name="siteType"
                        required
                        value={formData.siteType}
                        onChange={handleChange}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all duration-200 appearance-none cursor-pointer">
                        <option value="">Choisissez le type de site</option>
                        {siteTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-sm font-700 text-foreground">
                        Décrivez votre projet <span className="text-primary">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre projet, vos objectifs, votre cible, les fonctionnalités souhaitées..."
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all duration-200 resize-none" />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground font-700 text-sm px-8 py-4 rounded-full hover:bg-accent transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-primary/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100">
                      {loading ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          Envoyer ma demande
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-xs text-muted-foreground text-center">
                      Ou commandez directement sur{' '}
                      <a href="https://comeup.com/fr/@mardochedev" target="_blank" rel="noopener noreferrer" className="text-primary font-600 hover:underline">
                        Comeup.com
                      </a>{' '}
                      pour un paiement 100% sécurisé.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
