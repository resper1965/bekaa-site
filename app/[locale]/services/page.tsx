import { getDictionary, type Locale } from '@/lib/i18n'
import { Navigation } from '@/components/common/Navigation'
import { Footer } from '@/components/sections/Footer'
import { services } from '@/lib/services'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CalendlyButton } from '@/components/ui/CalendlyButton'
import { AlertCircle, Shield, Search, Brain, FileCheck, Users, ClipboardCheck, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

const iconMap: Record<string, any> = {
  AlertCircle,
  Shield,
  Search,
  Brain,
  FileCheck,
  Users,
  ClipboardCheck,
}

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const baseUrl = 'https://bekaa.eu'
  
  const titles: Record<Locale, string> = {
    en: "Services | Bekaa Strategic Advisory",
    pt: "Serviços | Bekaa Consultoria Estratégica",
    es: "Servicios | Bekaa Asesoría Estratégica",
    fr: "Services | Bekaa Conseil Stratégique",
  }
  
  const descriptions: Record<Locale, string> = {
    en: "Strategic advisory services in cybersecurity, crisis management, fraud investigation, AI governance, and more. Expert guidance for boards and C-suite executives.",
    pt: "Serviços de consultoria estratégica em cibersegurança, gestão de crises, investigação de fraudes, governança de IA e mais. Orientação especializada para conselhos e executivos C-level.",
    es: "Servicios de asesoría estratégica en ciberseguridad, gestión de crisis, investigación de fraudes, gobernanza de IA y más. Orientación experta para consejos y ejecutivos C-level.",
    fr: "Services de conseil stratégique en cybersécurité, gestion de crise, enquêtes de fraude, gouvernance IA et plus. Conseils experts pour conseils d'administration et dirigeants.",
  }

  return {
    title: titles[params.locale],
    description: descriptions[params.locale],
    alternates: {
      canonical: `${baseUrl}/${params.locale}/services`,
      languages: {
        'en': `${baseUrl}/en/services`,
        'pt': `${baseUrl}/pt/services`,
        'es': `${baseUrl}/es/services`,
        'fr': `${baseUrl}/fr/services`,
      },
    },
    openGraph: {
      title: titles[params.locale],
      description: descriptions[params.locale],
      url: `${baseUrl}/${params.locale}/services`,
    },
  }
}

export default async function ServicesPage({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dict = await getDictionary(locale)

  const content = {
    en: {
      label: "What We Do",
      title: "Strategic Advisory Services",
      subtitle: "Independent counsel for complex security, privacy, and governance challenges. We work alongside leadership teams to navigate critical decisions.",
      cta: {
        title: "Ready to discuss your challenges?",
        subtitle: "Schedule a confidential conversation with our team.",
        button: "Schedule a Meeting"
      }
    },
    pt: {
      label: "O Que Fazemos",
      title: "Serviços de Consultoria Estratégica",
      subtitle: "Orientação independente para desafios complexos de segurança, privacidade e governança. Trabalhamos ao lado de equipes de liderança para navegar decisões críticas.",
      cta: {
        title: "Pronto para discutir seus desafios?",
        subtitle: "Agende uma conversa confidencial com nossa equipe.",
        button: "Agendar Reunião"
      }
    }
  }

  const contentLocale = (locale === 'es' || locale === 'fr') ? 'en' : locale
  const pageContent = content[contentLocale as 'en' | 'pt']

  return (
    <>
      <Navigation dict={dict} locale={locale} />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-navy via-gray-dark to-navy relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(196, 167, 74, 0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          {/* Gradient Overlay */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gold font-normal tracking-wider uppercase mb-4 animate-fade-in">
                {pageContent.label}
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 animate-fade-in">
                {pageContent.title}
              </h1>
              <p className="text-xl text-gray-300 font-normal leading-relaxed animate-fade-in">
                {pageContent.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => {
                const Icon = iconMap[service.icon]
                const serviceContent = service[locale]
                
                return (
                  <Link 
                    key={service.slug} 
                    href={`/${locale}/services/${service.slug}`}
                    className="group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full hover:-translate-y-2 bg-white/80 backdrop-blur-sm hover:ring-2 hover:ring-gold/20">
                      <CardHeader>
                        <div className="w-14 h-14 bg-gradient-to-br from-gold/10 to-gold/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-gold/20 group-hover:to-gold/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                          <Icon className="w-7 h-7 text-gold group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <CardTitle className="text-xl font-semibold text-navy group-hover:text-gold transition-colors duration-300 flex items-center gap-2">
                          {serviceContent.title}
                          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 leading-relaxed font-normal group-hover:text-gray-700 transition-colors">
                          {serviceContent.shortDescription}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-navy mb-4">
                {pageContent.cta.title}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {pageContent.cta.subtitle}
              </p>
              <CalendlyButton text={pageContent.cta.button} />
            </div>
          </div>
        </section>

        <Footer dict={dict} />
      </main>
    </>
  )
}
