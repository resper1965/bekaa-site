import type { Metadata } from "next";
import { getDictionary, type Locale } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.locale)
  
  const baseUrl = 'https://bekaa.eu'
  const localeUrls = {
    en: `${baseUrl}/en`,
    pt: `${baseUrl}/pt`,
  }

  const titles = {
    en: "Bekaa | Strategic Cybersecurity & Corporate Intelligence Advisors",
    pt: "Bekaa | Consultores Estratégicos em Cibersegurança e Inteligência Corporativa",
  }

  const descriptions = {
    en: "Independent strategic advisory for boards and C-suite executives. Expert guidance on cyber crisis management, reputation protection, fraud investigation, and AI governance. 35+ years of experience across Portugal and Brazil.",
    pt: "Consultoria estratégica independente para conselhos e executivos C-level. Orientação especializada em gestão de crises cibernéticas, proteção de reputação, investigação de fraudes e governança de IA. 35+ anos de experiência em Portugal e Brasil.",
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
        'x-default': localeUrls.en,
      },
    },
    openGraph: {
      type: "website",
      locale: params.locale === 'en' ? 'en_US' : 'pt_BR',
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

