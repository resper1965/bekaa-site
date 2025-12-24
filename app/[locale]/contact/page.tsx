import { getDictionary, type Locale } from '@/lib/i18n'
import { Navigation } from '@/components/common/Navigation'
import { Footer } from '@/components/sections/Footer'
import { CalendlyButton } from '@/components/ui/CalendlyButton'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Linkedin, Phone, MapPin, Calendar, MessageSquare } from 'lucide-react'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const baseUrl = 'https://bekaa.eu'
  
  const titles: Record<Locale, string> = {
    en: "Contact | Bekaa Strategic Advisory",
    pt: "Contato | Bekaa Consultoria Estratégica",
    es: "Contacto | Bekaa Asesoría Estratégica",
    fr: "Contact | Bekaa Conseil Stratégique",
  }
  
  const descriptions: Record<Locale, string> = {
    en: "Get in touch with Bekaa for strategic advisory on cybersecurity, crisis management, and governance. Schedule a meeting or send us a message.",
    pt: "Entre em contato com a Bekaa para consultoria estratégica em cibersegurança, gestão de crises e governança. Agende uma reunião ou envie uma mensagem.",
    es: "Póngase en contacto con Bekaa para asesoría estratégica en ciberseguridad, gestión de crisis y gobernanza.",
    fr: "Contactez Bekaa pour un conseil stratégique en cybersécurité, gestion de crise et gouvernance.",
  }

  return {
    title: titles[params.locale],
    description: descriptions[params.locale],
    alternates: {
      canonical: `${baseUrl}/${params.locale}/contact`,
      languages: {
        'en': `${baseUrl}/en/contact`,
        'pt': `${baseUrl}/pt/contact`,
        'es': `${baseUrl}/es/contact`,
        'fr': `${baseUrl}/fr/contact`,
      },
    },
    openGraph: {
      title: titles[params.locale],
      description: descriptions[params.locale],
      url: `${baseUrl}/${params.locale}/contact`,
    },
  }
}

const content = {
  en: {
    label: "Contact Us",
    title: "Let's Talk",
    subtitle: "Choose how you'd like to connect with us. We're here to help with your strategic challenges.",
    options: {
      meeting: {
        icon: "Calendar",
        title: "Schedule a Meeting",
        description: "Book a confidential conversation with our advisory team. We'll discuss your challenges and explore how we can help.",
        button: "Schedule Now"
      },
      email: {
        icon: "MessageSquare",
        title: "Send a Message",
        description: "Prefer to reach out via email? Send us a message and we'll respond within 24 hours.",
        button: "contact@bekaa.eu"
      }
    },
    offices: {
      title: "Our Offices",
      brasil: {
        title: "Brazil",
        address: ["Rua Conceição de Monte Alegre, 107", "Bloco A, Conj 82", "São Paulo - SP", "CEP 04563-060"],
        phone: "+55 11 99383-3122"
      },
      portugal: {
        title: "Portugal",
        description: "European operations"
      }
    },
    connect: {
      title: "Connect With Us",
      linkedin: "Follow us on LinkedIn",
      email: "Email us directly"
    }
  },
  pt: {
    label: "Contato",
    title: "Vamos Conversar",
    subtitle: "Escolha como gostaria de se conectar conosco. Estamos aqui para ajudar com seus desafios estratégicos.",
    options: {
      meeting: {
        icon: "Calendar",
        title: "Agendar Reunião",
        description: "Reserve uma conversa confidencial com nossa equipe consultiva. Discutiremos seus desafios e exploraremos como podemos ajudar.",
        button: "Agendar Agora"
      },
      email: {
        icon: "MessageSquare",
        title: "Enviar Mensagem",
        description: "Prefere contato por email? Envie uma mensagem e responderemos em até 24 horas.",
        button: "contact@bekaa.eu"
      }
    },
    offices: {
      title: "Nossos Escritórios",
      brasil: {
        title: "Brasil",
        address: ["Rua Conceição de Monte Alegre, 107", "Bloco A, Conj 82", "São Paulo - SP", "CEP 04563-060"],
        phone: "+55 11 99383-3122"
      },
      portugal: {
        title: "Portugal",
        description: "Operações na Europa"
      }
    },
    connect: {
      title: "Conecte-se Conosco",
      linkedin: "Siga-nos no LinkedIn",
      email: "Envie um email"
    }
  }
}

export default async function ContactPage({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dict = await getDictionary(locale)
  const contentLocale = (locale === 'es' || locale === 'fr') ? 'en' : locale
  const pageContent = content[contentLocale as 'en' | 'pt']

  return (
    <>
      <Navigation dict={dict} locale={locale} />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-navy via-gray-dark to-navy">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gold font-normal tracking-wider uppercase mb-4">
                {pageContent.label}
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
                {pageContent.title}
              </h1>
              <p className="text-xl text-gray-300 font-normal leading-relaxed">
                {pageContent.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Schedule Meeting */}
              <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                  <Calendar className="w-7 h-7 text-gold" />
                </div>
                <h2 className="font-heading text-2xl font-semibold text-navy mb-3">
                  {pageContent.options.meeting.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {pageContent.options.meeting.description}
                </p>
                <CalendlyButton 
                  text={pageContent.options.meeting.button} 
                  size="default"
                />
              </Card>

              {/* Send Email */}
              <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                  <MessageSquare className="w-7 h-7 text-gold" />
                </div>
                <h2 className="font-heading text-2xl font-semibold text-navy mb-3">
                  {pageContent.options.email.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {pageContent.options.email.description}
                </p>
                <Button size="default" variant="outline" asChild>
                  <a href="mailto:contact@bekaa.eu" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {pageContent.options.email.button}
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Offices & Connect */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
              {/* Offices */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-navy mb-6">
                  {pageContent.offices.title}
                </h2>
                
                {/* Brasil */}
                <div className="mb-6">
                  <h3 className="font-semibold text-navy mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold" />
                    {pageContent.offices.brasil.title}
                  </h3>
                  <div className="text-gray-600 text-sm ml-6 mb-2">
                    {pageContent.offices.brasil.address.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                  <a 
                    href={`tel:${pageContent.offices.brasil.phone.replace(/\s/g, '')}`}
                    className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 ml-6 text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    {pageContent.offices.brasil.phone}
                  </a>
                </div>

                {/* Portugal */}
                <div>
                  <h3 className="font-semibold text-navy mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold" />
                    {pageContent.offices.portugal.title}
                  </h3>
                  <p className="text-gray-600 text-sm ml-6">
                    {pageContent.offices.portugal.description}
                  </p>
                </div>
              </div>

              {/* Connect */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-navy mb-6">
                  {pageContent.connect.title}
                </h2>
                
                <div className="space-y-4">
                  <a 
                    href="https://www.linkedin.com/company/bekaa-trusted-advisors/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-gold transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gray-100 group-hover:bg-gold/10 rounded-lg flex items-center justify-center transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    {pageContent.connect.linkedin}
                  </a>
                  
                  <a 
                    href="mailto:contact@bekaa.eu"
                    className="flex items-center gap-3 text-gray-600 hover:text-gold transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gray-100 group-hover:bg-gold/10 rounded-lg flex items-center justify-center transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    {pageContent.connect.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer dict={dict} />
      </main>
    </>
  )
}
