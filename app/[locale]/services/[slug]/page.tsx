import { getDictionary, type Locale } from '@/lib/i18n'
import { Navigation } from '@/components/common/Navigation'
import { Footer } from '@/components/sections/Footer'
import { services, getServiceBySlug, getAllServiceSlugs } from '@/lib/services'
import { CalendlyButton } from '@/components/ui/CalendlyButton'
import { AlertCircle, Shield, Search, Brain, FileCheck, Users, ClipboardCheck, CheckCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
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

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs()
  const locales = ['en', 'pt']
  
  return locales.flatMap(locale => 
    slugs.map(slug => ({ locale, slug }))
  )
}

export async function generateMetadata({ 
  params 
}: { 
  params: { locale: Locale; slug: string } 
}): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}
  
  const baseUrl = 'https://bekaa.eu'
  const content = service[params.locale]

  return {
    title: `${content.title} | Bekaa`,
    description: content.shortDescription,
    alternates: {
      canonical: `${baseUrl}/${params.locale}/services/${params.slug}`,
      languages: {
        'en': `${baseUrl}/en/services/${params.slug}`,
        'pt': `${baseUrl}/pt/services/${params.slug}`,
        'es': `${baseUrl}/es/services/${params.slug}`,
        'fr': `${baseUrl}/fr/services/${params.slug}`,
      },
    },
    openGraph: {
      title: `${content.title} | Bekaa`,
      description: content.shortDescription,
      url: `${baseUrl}/${params.locale}/services/${params.slug}`,
    },
  }
}

export default async function ServicePage({
  params: { locale, slug },
}: {
  params: { locale: Locale; slug: string }
}) {
  const dict = await getDictionary(locale)
  const service = getServiceBySlug(slug)
  
  if (!service) {
    notFound()
  }

  const content = service[locale]
  const Icon = iconMap[service.icon]

  const labels = {
    en: {
      backToServices: "Back to Services",
      theProblem: "The Challenge",
      benefits: "Key Benefits",
      deliverables: "What You Get",
      cta: {
        title: "Ready to address this challenge?",
        subtitle: "Schedule a confidential conversation to discuss your specific needs.",
        button: "Schedule a Meeting"
      }
    },
    pt: {
      backToServices: "Voltar para Serviços",
      theProblem: "O Desafio",
      benefits: "Principais Benefícios",
      deliverables: "O Que Você Recebe",
      cta: {
        title: "Pronto para enfrentar este desafio?",
        subtitle: "Agende uma conversa confidencial para discutir suas necessidades específicas.",
        button: "Agendar Reunião"
      }
    },
    es: {
      backToServices: "Volver a Servicios",
      theProblem: "El Desafío",
      benefits: "Beneficios Clave",
      deliverables: "Lo Que Recibe",
      cta: {
        title: "¿Listo para abordar este desafío?",
        subtitle: "Agende una conversación confidencial para discutir sus necesidades específicas.",
        button: "Agendar Reunión"
      }
    },
    fr: {
      backToServices: "Retour aux Services",
      theProblem: "Le Défi",
      benefits: "Avantages Clés",
      deliverables: "Ce Que Vous Recevez",
      cta: {
        title: "Prêt à relever ce défi?",
        subtitle: "Planifiez une conversation confidentielle pour discuter de vos besoins spécifiques.",
        button: "Planifier une Réunion"
      }
    }
  }

  const pageLabels = labels[locale]

  return (
    <>
      <Navigation dict={dict} locale={locale} />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-navy via-gray-dark to-navy relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(196, 167, 74, 0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Link 
                href={`/${locale}/services`}
                className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors duration-300 mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                {pageLabels.backToServices}
              </Link>
              
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/30 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-gold/10 animate-fade-in">
                  <Icon className="w-10 h-10 text-gold" />
                </div>
                <div>
                  <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 animate-fade-in">
                    {content.title}
                  </h1>
                  <p className="text-xl text-gray-300 font-normal leading-relaxed animate-fade-in">
                    {content.shortDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-navy mb-6">
                {pageLabels.theProblem}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {content.problem}
              </p>
            </div>
          </div>
        </section>

        {/* Benefits & Deliverables */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
              {/* Benefits */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-navy mb-6">
                  {pageLabels.benefits}
                </h2>
                <ul className="space-y-4">
                  {content.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-navy mb-6">
                  {pageLabels.deliverables}
                </h2>
                <ul className="space-y-4">
                  {content.deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0 mt-2" />
                      <span className="text-gray-700">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-navy">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4">
                {pageLabels.cta.title}
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                {pageLabels.cta.subtitle}
              </p>
              <CalendlyButton text={pageLabels.cta.button} />
            </div>
          </div>
        </section>

        <Footer dict={dict} />
      </main>
    </>
  )
}
