import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/tailwind.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Peniel Agency — Agence Web Premium | Création Site Internet France, Belgique, Luxembourg, Canada',
  description: 'Peniel Agency, agence web avec 5 ans d\'expertise. Création de sites internet professionnels, sites vitrine WordPress, tunnels de vente et applications web sur mesure. Nous accompagnons les entreprises en France, Belgique, Luxembourg et Canada francophone. Paiement 100% sécurisé via Comeup.com. Devis gratuit sous 24h.',
  keywords: [
    'agence web', 'création site internet', 'site vitrine', 'site web professionnel',
    'développement web', 'WordPress', 'site web sur mesure', 'agence digitale',
    'création site web France', 'agence web Belgique', 'création site Luxembourg',
    'agence web Canada', 'site web Montréal', 'développeur web freelance',
    'tunnel de vente', 'landing page', 'site e-commerce', 'refonte site web',
    'SEO référencement naturel', 'optimisation Google', 'site responsive mobile',
    'Peniel Agency', 'comeup agence web', 'devis site internet gratuit'
  ],
  openGraph: {
    title: 'Peniel Agency — Agence Web Premium | France, Belgique, Luxembourg, Canada',
    description: 'Création de sites internet professionnels avec 5 ans d\'expertise. Sites vitrine, e-commerce, tunnels de vente. Devis gratuit, réponse sous 24h.',
    type: 'website',
    locale: 'fr_FR',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://penielagen8506.builtwithrocket.new',
    siteName: 'Peniel Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peniel Agency — Agence Web Premium',
    description: 'Création de sites internet professionnels. 5 ans d\'expertise. Devis gratuit sous 24h.',
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://penielagen8506.builtwithrocket.new',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={plusJakartaSans.variable}>
      <body className={plusJakartaSans.className}>{children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fpenielagen8506back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.18" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}