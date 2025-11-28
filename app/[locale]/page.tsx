import { getDictionary, type Locale } from '@/lib/i18n'
import { Navigation } from '@/components/common/Navigation'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }]
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dict = await getDictionary(locale)
  const baseUrl = 'https://bekaa.eu'

  // Structured Data (JSON-LD)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bekaa',
    url: baseUrl,
    logo: `${baseUrl}/bekaa.svg`,
    description: locale === 'en' 
      ? 'Strategic cybersecurity and corporate intelligence advisors for boards and C-suite executives'
      : 'Consultores estratégicos em cibersegurança e inteligência corporativa para conselhos e executivos C-level',
    address: {
      '@type': 'PostalAddress',
      addressCountry: ['PT', 'BR'],
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@bekaa.eu',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Portuguese'],
    },
    sameAs: [
      'https://www.linkedin.com/company/bekaa-trusted-advisors/',
    ],
  }

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Bekaa',
    description: locale === 'en'
      ? 'Strategic advisory services for cybersecurity, crisis management, fraud investigation, and AI governance'
      : 'Serviços de consultoria estratégica em cibersegurança, gestão de crises, investigação de fraudes e governança de IA',
    provider: {
      '@type': 'Organization',
      name: 'Bekaa',
    },
    areaServed: ['PT', 'BR'],
    serviceType: [
      'Cybersecurity Advisory',
      'Crisis Management',
      'Fraud Investigation',
      'AI Governance',
      'Reputation Management',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <Navigation dict={dict} locale={locale} />
      <main className="min-h-screen">
        <Hero dict={dict} />
        <Services dict={dict} />
        <Contact dict={dict} />
        <Footer dict={dict} />
      </main>
    </>
  )
}
