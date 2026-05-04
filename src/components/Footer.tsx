import React from 'react';

import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Pattern 7 — Arc Browser Split */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          {/* Left: Logo + tagline */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <AppLogo size={32} />
              <span className="font-display font-800 text-lg tracking-tight text-foreground">
                Peniel<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Agence web premium — sites & apps sur mesure pour entreprises ambitieuses.
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <a href="/#realisations" className="text-sm font-500 text-muted-foreground hover:text-foreground transition-colors duration-200">
              Réalisations
            </a>
            <a href="/#services" className="text-sm font-500 text-muted-foreground hover:text-foreground transition-colors duration-200">
              Services
            </a>
            <a href="/#about" className="text-sm font-500 text-muted-foreground hover:text-foreground transition-colors duration-200">
              À propos
            </a>
            <a href="/#processus" className="text-sm font-500 text-muted-foreground hover:text-foreground transition-colors duration-200">
              Processus
            </a>
            <a href="/contact" className="text-sm font-500 text-muted-foreground hover:text-foreground transition-colors duration-200">
              Contact
            </a>
            <a
              href="https://comeup.com/fr/@mardochedev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-600 text-primary hover:text-accent transition-colors duration-200"
            >
              Commander →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Peniel Agency. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200">
              Confidentialité
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200">
              Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}