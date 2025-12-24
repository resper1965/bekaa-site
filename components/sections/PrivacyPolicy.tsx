"use client";

import { Card } from "@/components/ui/card";
import { type Locale } from '@/lib/i18n';

const content = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: November 2024",
    intro: "Bekaa ('we', 'us', or 'our') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.",
    sections: [
      {
        title: "1. Information We Collect",
        content: [
          "We collect information that you provide directly to us, including:",
          "• Contact information (name, email address, phone number, company)",
          "• Professional information relevant to our advisory services",
          "• Communication records and consultation notes",
          "• Information about your organization's security posture (only when relevant to our advisory services)"
        ]
      },
      {
        title: "2. How We Use Your Information",
        content: [
          "We use the information we collect to:",
          "• Provide strategic advisory and consultation services",
          "• Communicate with you about our services",
          "• Improve and personalize our services",
          "• Comply with legal obligations and industry standards",
          "• Protect against fraud and unauthorized access"
        ]
      },
      {
        title: "3. Data Protection & Security",
        content: [
          "We implement appropriate technical and organizational measures to protect your personal data, including:",
          "• Encryption of data in transit and at rest",
          "• Access controls and authentication mechanisms",
          "• Regular security assessments and audits",
          "• Confidentiality agreements with all team members and partners",
          "• Secure data storage in compliance with LGPD and GDPR"
        ]
      },
      {
        title: "4. Your Rights (LGPD & GDPR)",
        content: [
          "Under LGPD (Brazil) and GDPR (Europe), you have the right to:",
          "• Access your personal data",
          "• Correct inaccurate or incomplete data",
          "• Request deletion of your data",
          "• Object to processing of your data",
          "• Data portability",
          "• Withdraw consent at any time",
          "",
          "To exercise these rights, contact us at privacy@bekaa.eu"
        ]
      },
      {
        title: "5. Data Retention",
        content: [
          "We retain your personal data only as long as necessary for the purposes set out in this policy, or as required by law. Advisory engagement records are typically retained for 7 years after conclusion of services, unless longer retention is required by applicable regulations."
        ]
      },
      {
        title: "6. International Data Transfers",
        content: [
          "As we operate in both Portugal and Brazil, your data may be processed in either jurisdiction. We ensure all transfers comply with applicable data protection laws and implement appropriate safeguards."
        ]
      },
      {
        title: "7. Third-Party Services",
        content: [
          "We may use trusted third-party service providers to support our operations. These providers are contractually obligated to protect your data and use it only for specified purposes. We never sell your personal information to third parties."
        ]
      },
      {
        title: "8. Cookies and Tracking",
        content: [
          "Our website uses essential cookies for functionality. We do not use tracking cookies or third-party analytics that collect personal information without your consent."
        ]
      },
      {
        title: "9. Changes to This Policy",
        content: [
          "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the 'Last Updated' date."
        ]
      },
      {
        title: "10. Contact Us",
        content: [
          "For questions about this Privacy Policy or to exercise your data rights:",
          "",
          "Email: privacy@bekaa.eu",
          "Phone (Brasil): +55 11 99383-3122",
          "",
          "Data Protection Officer:",
          "Bekaa Trusted Advisors",
          "Rua Conceição de Monte Alegre, 107, Bloco A, Conj 82",
          "São Paulo - SP, CEP 04563-060, Brasil"
        ]
      }
    ]
  },
  pt: {
    title: "Política de Privacidade",
    lastUpdated: "Última atualização: Novembro de 2024",
    intro: "A Bekaa ('nós' ou 'nosso') está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você usa nossos serviços.",
    sections: [
      {
        title: "1. Informações que Coletamos",
        content: [
          "Coletamos informações que você nos fornece diretamente, incluindo:",
          "• Informações de contato (nome, email, telefone, empresa)",
          "• Informações profissionais relevantes para nossos serviços de consultoria",
          "• Registros de comunicação e notas de consulta",
          "• Informações sobre a postura de segurança da sua organização (apenas quando relevante para nossos serviços)"
        ]
      },
      {
        title: "2. Como Usamos Suas Informações",
        content: [
          "Usamos as informações coletadas para:",
          "• Fornecer serviços de consultoria estratégica",
          "• Comunicar-nos com você sobre nossos serviços",
          "• Melhorar e personalizar nossos serviços",
          "• Cumprir obrigações legais e padrões da indústria",
          "• Proteger contra fraude e acesso não autorizado"
        ]
      },
      {
        title: "3. Proteção e Segurança de Dados",
        content: [
          "Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados pessoais, incluindo:",
          "• Criptografia de dados em trânsito e em repouso",
          "• Controles de acesso e mecanismos de autenticação",
          "• Avaliações e auditorias de segurança regulares",
          "• Acordos de confidencialidade com todos os membros da equipe e parceiros",
          "• Armazenamento seguro de dados em conformidade com LGPD e GDPR"
        ]
      },
      {
        title: "4. Seus Direitos (LGPD & GDPR)",
        content: [
          "Sob a LGPD (Brasil) e GDPR (Europa), você tem o direito de:",
          "• Acessar seus dados pessoais",
          "• Corrigir dados incorretos ou incompletos",
          "• Solicitar exclusão de seus dados",
          "• Objetar ao processamento de seus dados",
          "• Portabilidade de dados",
          "• Retirar consentimento a qualquer momento",
          "",
          "Para exercer esses direitos, entre em contato conosco em privacy@bekaa.eu"
        ]
      },
      {
        title: "5. Retenção de Dados",
        content: [
          "Retemos seus dados pessoais apenas pelo tempo necessário para os fins estabelecidos nesta política, ou conforme exigido por lei. Registros de engajamento de consultoria são normalmente retidos por 7 anos após a conclusão dos serviços, a menos que retenção mais longa seja exigida por regulamentações aplicáveis."
        ]
      },
      {
        title: "6. Transferências Internacionais de Dados",
        content: [
          "Como operamos tanto em Portugal quanto no Brasil, seus dados podem ser processados em qualquer jurisdição. Garantimos que todas as transferências cumpram as leis de proteção de dados aplicáveis e implementem salvaguardas apropriadas."
        ]
      },
      {
        title: "7. Serviços de Terceiros",
        content: [
          "Podemos usar provedores de serviços terceirizados confiáveis para apoiar nossas operações. Esses provedores são contratualmente obrigados a proteger seus dados e usá-los apenas para fins especificados. Nunca vendemos suas informações pessoais a terceiros."
        ]
      },
      {
        title: "8. Cookies e Rastreamento",
        content: [
          "Nosso site usa cookies essenciais para funcionalidade. Não usamos cookies de rastreamento ou análises de terceiros que coletam informações pessoais sem seu consentimento."
        ]
      },
      {
        title: "9. Alterações a Esta Política",
        content: [
          "Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer mudanças materiais publicando a nova política nesta página e atualizando a data de 'Última Atualização'."
        ]
      },
      {
        title: "10. Entre em Contato",
        content: [
          "Para questões sobre esta Política de Privacidade ou para exercer seus direitos sobre dados:",
          "",
          "Email: privacy@bekaa.eu",
          "Telefone (Brasil): +55 11 99383-3122",
          "",
          "Encarregado de Proteção de Dados:",
          "Bekaa Trusted Advisors",
          "Rua Conceição de Monte Alegre, 107, Bloco A, Conj 82",
          "São Paulo - SP, CEP 04563-060, Brasil"
        ]
      }
    ]
  }
};

export function PrivacyPolicy({ locale }: { locale: Locale }) {
  const contentLocale = (locale === 'es' || locale === 'fr') ? 'en' : locale
  const text = content[contentLocale as 'en' | 'pt'];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="font-heading text-4xl md:text-5xl font-semibold text-navy mb-4">
          {text.title}
        </h1>
        <p className="text-sm text-gray-500 mb-8">{text.lastUpdated}</p>
        
        <Card className="p-8 mb-8 border-0 shadow-lg bg-gray-50">
          <p className="text-gray-700 leading-relaxed">{text.intro}</p>
        </Card>

        <div className="space-y-8">
          {text.sections.map((section, index) => (
            <Card key={index} className="p-8 border-0 shadow-md">
              <h2 className="font-heading text-2xl font-semibold text-navy mb-4">
                {section.title}
              </h2>
              <div className="space-y-2 text-gray-700 leading-relaxed">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className={paragraph === "" ? "mt-4" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
