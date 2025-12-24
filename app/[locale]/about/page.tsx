import { getDictionary, type Locale } from '@/lib/i18n'
import { Navigation } from '@/components/common/Navigation'
import { Footer } from '@/components/sections/Footer'
import { CalendlyButton } from '@/components/ui/CalendlyButton'
import { Target, Heart, Handshake, Award, Users, Globe } from 'lucide-react'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const baseUrl = 'https://bekaa.eu'
  
  const titles = {
    en: "About Us | Bekaa Strategic Advisory",
    pt: "Sobre Nós | Bekaa Consultoria Estratégica",
  }
  
  const descriptions = {
    en: "Bekaa is a strategic advisory firm specializing in cybersecurity, corporate intelligence, and governance. 35+ years of combined experience serving boards and executives across Portugal and Brazil.",
    pt: "Bekaa é uma empresa de consultoria estratégica especializada em cibersegurança, inteligência corporativa e governança. 35+ anos de experiência combinada servindo conselhos e executivos em Portugal e Brasil.",
  }

  return {
    title: titles[params.locale],
    description: descriptions[params.locale],
    alternates: {
      canonical: `${baseUrl}/${params.locale}/about`,
      languages: {
        'en': `${baseUrl}/en/about`,
        'pt': `${baseUrl}/pt/about`,
      },
    },
    openGraph: {
      title: titles[params.locale],
      description: descriptions[params.locale],
      url: `${baseUrl}/${params.locale}/about`,
    },
  }
}

const content = {
  en: {
    label: "About Bekaa",
    title: "Trusted Advisors for Complex Challenges",
    subtitle: "We provide independent strategic counsel to leadership teams navigating security, privacy, and governance challenges.",
    mission: {
      title: "Our Mission",
      description: "To be the trusted advisor that leadership teams turn to when facing their most complex security and governance challenges. We believe that independent, experienced counsel is essential for sound decision-making in an increasingly complex digital landscape."
    },
    values: {
      title: "Our Values",
      items: [
        {
          icon: "Target",
          title: "Independence",
          description: "We have no vendor affiliations or product agendas. Our advice is driven solely by your best interests."
        },
        {
          icon: "Heart",
          title: "Discretion",
          description: "We handle sensitive matters with the utmost confidentiality. Trust is the foundation of everything we do."
        },
        {
          icon: "Handshake",
          title: "Partnership",
          description: "We work alongside you, not above you. Your success is our success."
        },
        {
          icon: "Award",
          title: "Excellence",
          description: "We bring decades of experience and continuous learning to every engagement."
        }
      ]
    },
    presence: {
      title: "Our Presence",
      description: "With operations in Portugal and Brazil, we serve clients across Europe and Latin America. Our cross-cultural experience enables us to navigate diverse regulatory environments and business cultures.",
      locations: ["São Paulo, Brazil", "Lisbon, Portugal"]
    },
    experience: {
      title: "35+ Years Combined Experience",
      areas: [
        "Cybersecurity Leadership",
        "Crisis Management",
        "Board Advisory",
        "Regulatory Compliance",
        "Corporate Intelligence",
        "AI Governance"
      ]
    },
    cta: {
      title: "Let's start a conversation",
      subtitle: "Schedule a confidential meeting to discuss how we can help.",
      button: "Schedule a Meeting"
    }
  },
  pt: {
    label: "Sobre a Bekaa",
    title: "Conselheiros de Confiança para Desafios Complexos",
    subtitle: "Fornecemos orientação estratégica independente para equipes de liderança navegando desafios de segurança, privacidade e governança.",
    mission: {
      title: "Nossa Missão",
      description: "Ser o conselheiro de confiança que equipes de liderança procuram ao enfrentar seus desafios mais complexos de segurança e governança. Acreditamos que orientação independente e experiente é essencial para tomada de decisão sólida em um cenário digital cada vez mais complexo."
    },
    values: {
      title: "Nossos Valores",
      items: [
        {
          icon: "Target",
          title: "Independência",
          description: "Não temos afiliações com fornecedores ou agendas de produtos. Nossa orientação é guiada exclusivamente pelos seus melhores interesses."
        },
        {
          icon: "Heart",
          title: "Discrição",
          description: "Tratamos assuntos sensíveis com a máxima confidencialidade. Confiança é a base de tudo que fazemos."
        },
        {
          icon: "Handshake",
          title: "Parceria",
          description: "Trabalhamos ao seu lado, não acima de você. Seu sucesso é o nosso sucesso."
        },
        {
          icon: "Award",
          title: "Excelência",
          description: "Trazemos décadas de experiência e aprendizado contínuo para cada engajamento."
        }
      ]
    },
    presence: {
      title: "Nossa Presença",
      description: "Com operações em Portugal e Brasil, atendemos clientes em toda a Europa e América Latina. Nossa experiência multicultural nos permite navegar diversos ambientes regulatórios e culturas de negócios.",
      locations: ["São Paulo, Brasil", "Lisboa, Portugal"]
    },
    experience: {
      title: "35+ Anos de Experiência Combinada",
      areas: [
        "Liderança em Cibersegurança",
        "Gestão de Crises",
        "Consultoria para Conselhos",
        "Conformidade Regulatória",
        "Inteligência Corporativa",
        "Governança de IA"
      ]
    },
    cta: {
      title: "Vamos iniciar uma conversa",
      subtitle: "Agende uma reunião confidencial para discutir como podemos ajudar.",
      button: "Agendar Reunião"
    }
  }
}

const iconMap: Record<string, any> = {
  Target,
  Heart,
  Handshake,
  Award,
}

export default async function AboutPage({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dict = await getDictionary(locale)
  const pageContent = content[locale]

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

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-navy mb-6">
                {pageContent.mission.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {pageContent.mission.description}
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-navy mb-12 text-center">
                {pageContent.values.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {pageContent.values.items.map((value, index) => {
                  const Icon = iconMap[value.icon]
                  return (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-gold" />
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-navy mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Presence & Experience */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
              {/* Presence */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-gold" />
                  <h2 className="font-heading text-2xl font-semibold text-navy">
                    {pageContent.presence.title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  {pageContent.presence.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {pageContent.presence.locations.map((location, index) => (
                    <span key={index} className="bg-gold/10 text-gold px-3 py-1 rounded-full text-sm">
                      {location}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-gold" />
                  <h2 className="font-heading text-2xl font-semibold text-navy">
                    {pageContent.experience.title}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {pageContent.experience.areas.map((area, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-navy">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4">
                {pageContent.cta.title}
              </h2>
              <p className="text-xl text-gray-300 mb-8">
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
