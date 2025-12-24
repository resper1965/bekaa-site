import type { Metadata } from "next";
import { getDictionary, type Locale } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.locale)
  
  const baseUrl = 'https://bekaa.eu'
  const localeUrls: Record<Locale, string> = {
    en: `${baseUrl}/en`,
    pt: `${baseUrl}/pt`,
    es: `${baseUrl}/es`,
    fr: `${baseUrl}/fr`,
  }

  const titles: Record<Locale, string> = {
    en: "Bekaa | Strategic Cybersecurity & Corporate Intelligence Advisors",
    pt: "Bekaa | Consultores Estratégicos em Cibersegurança e Inteligência Corporativa",
    es: "Bekaa | Asesores Estratégicos en Ciberseguridad e Inteligencia Corporativa",
    fr: "Bekaa | Conseillers Stratégiques en Cybersécurité et Intelligence d'Entreprise",
  }

  const descriptions: Record<Locale, string> = {
    en: "Independent strategic advisory for boards and C-suite executives. Expert guidance on cyber crisis management, reputation protection, fraud investigation, and AI governance. 35+ years of experience across Portugal and Brazil.",
    pt: "Consultoria estratégica independente para conselhos e executivos C-level. Orientação especializada em gestão de crises cibernéticas, proteção de reputação, investigação de fraudes e governança de IA. 35+ anos de experiência em Portugal e Brasil.",
    es: "Asesoría estratégica independiente para consejos y ejecutivos C-level. Orientación experta en gestión de crisis cibernéticas, protección de reputación, investigación de fraudes y gobernanza de IA. 35+ años de experiencia en Portugal y Brasil.",
    fr: "Conseil stratégique indépendant pour conseils d'administration et dirigeants. Expertise en gestion de crise cyber, protection de réputation, enquêtes de fraude et gouvernance IA. 35+ ans d'expérience au Portugal et au Brésil.",
  }

  const ogLocales: Record<Locale, string> = {
    en: 'en_US',
    pt: 'pt_BR',
    es: 'es_ES',
    fr: 'fr_FR',
  }

  return {
    metadataBase: new URL(baseUrl),
    title: titles[params.locale],
    description: descriptions[params.locale],
    keywords: params.locale === 'en' 
      ? ["cybersecurity advisors", "crisis management", "fraud investigation", "AI governance", "board advisory", "cyber security consultants", "reputation management", "corporate intelligence"]
      : ["consultores cibersegurança", "gestão de crises", "investigação de fraudes", "governança IA", "consultoria conselho", "consultores segurança cibernética", "gestão reputação", "inteligência corporativa"],
    authors: [{ name: "Bekaa" }],
    creator: "Bekaa",
    publisher: "Bekaa",
    alternates: {
      canonical: localeUrls[params.locale],
      languages: {
        'en': localeUrls.en,
        'pt': localeUrls.pt,
        'es': localeUrls.es,
        'fr': localeUrls.fr,
        'x-default': localeUrls.en,
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocales[params.locale],
      url: localeUrls[params.locale],
      title: titles[params.locale],
      description: descriptions[params.locale],
      siteName: "Bekaa",
      images: [
        {
          url: `${baseUrl}/favicon-512.png`,
          width: 512,
          height: 512,
          alt: "Bekaa Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[params.locale],
      description: descriptions[params.locale],
      images: [`${baseUrl}/favicon-512.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // Add Google Search Console verification if available
      // google: 'verification-code',
    },
  }
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  return children
}

