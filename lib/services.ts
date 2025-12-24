export interface Service {
  slug: string;
  icon: string;
  en: {
    title: string;
    shortDescription: string;
    problem: string;
    benefits: string[];
    deliverables: string[];
  };
  pt: {
    title: string;
    shortDescription: string;
    problem: string;
    benefits: string[];
    deliverables: string[];
  };
}

export const services: Service[] = [
  {
    slug: "cyber-crisis",
    icon: "AlertCircle",
    en: {
      title: "Cyber Crisis Advisory",
      shortDescription: "When a security incident strikes, we help you navigate the critical decisions—coordinating response, managing stakeholders, and protecting what matters most.",
      problem: "When a cyber incident strikes, organizations face immediate pressure from multiple fronts: technical containment, regulatory obligations, stakeholder communication, and business continuity. Without experienced guidance, decisions made in the heat of crisis can amplify damage.",
      benefits: [
        "24/7 strategic support during active incidents",
        "Coordination between technical, legal, and communications teams",
        "Regulatory notification guidance (LGPD, GDPR, BACEN)",
        "Stakeholder and media communication strategy",
        "Post-incident review and resilience recommendations"
      ],
      deliverables: [
        "Crisis response coordination",
        "Decision support for leadership",
        "Communication templates and guidance",
        "Post-mortem analysis and report"
      ]
    },
    pt: {
      title: "Consultoria em Crises Cibernéticas",
      shortDescription: "Quando um incidente de segurança ocorre, ajudamos você a navegar decisões críticas—coordenando resposta, gerenciando stakeholders e protegendo o que mais importa.",
      problem: "Quando um incidente cibernético atinge, organizações enfrentam pressão imediata de múltiplas frentes: contenção técnica, obrigações regulatórias, comunicação com stakeholders e continuidade de negócios. Sem orientação experiente, decisões tomadas no calor da crise podem amplificar os danos.",
      benefits: [
        "Suporte estratégico 24/7 durante incidentes ativos",
        "Coordenação entre equipes técnicas, jurídicas e de comunicação",
        "Orientação para notificações regulatórias (LGPD, GDPR, BACEN)",
        "Estratégia de comunicação com stakeholders e mídia",
        "Revisão pós-incidente e recomendações de resiliência"
      ],
      deliverables: [
        "Coordenação de resposta a crises",
        "Suporte decisório para liderança",
        "Templates e orientações de comunicação",
        "Análise post-mortem e relatório"
      ]
    }
  },
  {
    slug: "reputation-management",
    icon: "Shield",
    en: {
      title: "Reputation Management",
      shortDescription: "Strategic counsel for protecting organizational reputation during digital crises. We guide your communication strategy and stakeholder confidence recovery.",
      problem: "In today's connected world, a single incident can spiral into a reputational crisis within hours. Social media amplifies narratives, journalists seek comments, and stakeholders demand answers. Poor communication during this window can cause lasting damage to brand trust.",
      benefits: [
        "Rapid reputation risk assessment",
        "Crisis communication strategy and messaging",
        "Media relations guidance",
        "Internal communication support",
        "Long-term reputation recovery planning"
      ],
      deliverables: [
        "Stakeholder communication playbook",
        "Key messages and Q&A documents",
        "Media response strategy",
        "Reputation monitoring recommendations"
      ]
    },
    pt: {
      title: "Gestão de Reputação",
      shortDescription: "Orientação estratégica para proteção da reputação organizacional durante crises digitais. Guiamos sua estratégia de comunicação e recuperação da confiança dos stakeholders.",
      problem: "No mundo conectado de hoje, um único incidente pode se transformar em crise reputacional em horas. Redes sociais amplificam narrativas, jornalistas buscam comentários e stakeholders exigem respostas. Comunicação inadequada nessa janela pode causar danos duradouros à confiança na marca.",
      benefits: [
        "Avaliação rápida de risco reputacional",
        "Estratégia e mensagens de comunicação de crise",
        "Orientação para relações com mídia",
        "Suporte para comunicação interna",
        "Planejamento de recuperação de reputação de longo prazo"
      ],
      deliverables: [
        "Playbook de comunicação com stakeholders",
        "Mensagens-chave e documentos de Q&A",
        "Estratégia de resposta à mídia",
        "Recomendações de monitoramento de reputação"
      ]
    }
  },
  {
    slug: "fraud-investigation",
    icon: "Search",
    en: {
      title: "Fraud Investigation",
      shortDescription: "Independent advisory on structuring internal fraud investigations. We help establish governance frameworks and guide remediation approaches.",
      problem: "When fraud is suspected within an organization, the path forward is rarely clear. Internal politics, evidence preservation, legal considerations, and the need for discretion create a complex landscape that requires experienced navigation.",
      benefits: [
        "Independent perspective free from internal politics",
        "Investigation governance framework design",
        "Evidence preservation guidance",
        "Stakeholder management during sensitive investigations",
        "Remediation and control improvement recommendations"
      ],
      deliverables: [
        "Investigation governance charter",
        "Evidence handling protocols",
        "Investigation progress briefings",
        "Final findings and recommendations report"
      ]
    },
    pt: {
      title: "Investigação de Fraudes",
      shortDescription: "Consultoria independente para estruturar investigações internas de fraude. Ajudamos a estabelecer frameworks de governança e orientar abordagens de remediação.",
      problem: "Quando há suspeita de fraude dentro de uma organização, o caminho a seguir raramente é claro. Política interna, preservação de evidências, considerações legais e a necessidade de discrição criam um cenário complexo que requer navegação experiente.",
      benefits: [
        "Perspectiva independente livre de política interna",
        "Design de framework de governança de investigação",
        "Orientação para preservação de evidências",
        "Gestão de stakeholders durante investigações sensíveis",
        "Recomendações de remediação e melhoria de controles"
      ],
      deliverables: [
        "Carta de governança de investigação",
        "Protocolos de tratamento de evidências",
        "Briefings de progresso da investigação",
        "Relatório final de achados e recomendações"
      ]
    }
  },
  {
    slug: "ai-governance",
    icon: "Brain",
    en: {
      title: "AI Governance",
      shortDescription: "Practical guidance on AI adoption, governance frameworks, and risk management. We help you navigate opportunities while managing emerging risks.",
      problem: "Organizations are racing to adopt AI, but governance hasn't kept pace. Without proper frameworks, AI initiatives can create unexpected risks: biased decisions, data privacy violations, regulatory non-compliance, and reputational damage.",
      benefits: [
        "AI risk assessment and classification",
        "Governance framework design aligned to EU AI Act and best practices",
        "Use case evaluation and prioritization",
        "Vendor and model selection guidance",
        "Ongoing governance and monitoring recommendations"
      ],
      deliverables: [
        "AI governance policy framework",
        "Risk assessment methodology",
        "Use case evaluation criteria",
        "Implementation roadmap"
      ]
    },
    pt: {
      title: "Governança de IA",
      shortDescription: "Orientação prática sobre adoção de IA, frameworks de governança e gestão de riscos. Ajudamos você a navegar oportunidades enquanto gerencia riscos emergentes.",
      problem: "Organizações correm para adotar IA, mas a governança não acompanhou. Sem frameworks adequados, iniciativas de IA podem criar riscos inesperados: decisões enviesadas, violações de privacidade de dados, não conformidade regulatória e danos à reputação.",
      benefits: [
        "Avaliação e classificação de riscos de IA",
        "Design de framework de governança alinhado ao EU AI Act e melhores práticas",
        "Avaliação e priorização de casos de uso",
        "Orientação para seleção de fornecedores e modelos",
        "Recomendações de governança e monitoramento contínuo"
      ],
      deliverables: [
        "Framework de política de governança de IA",
        "Metodologia de avaliação de riscos",
        "Critérios de avaliação de casos de uso",
        "Roadmap de implementação"
      ]
    }
  },
  {
    slug: "security-privacy",
    icon: "FileCheck",
    en: {
      title: "Security & Privacy",
      shortDescription: "Advisory on cybersecurity governance, risk posture, and privacy compliance. Independent perspective on your security strategy and LGPD/GDPR matters.",
      problem: "Cybersecurity and privacy have become board-level concerns, yet many organizations lack independent, strategic advice. Internal teams are often too close to operations, and vendors have inherent conflicts of interest.",
      benefits: [
        "Independent security posture assessment",
        "Privacy program maturity evaluation",
        "Regulatory compliance gap analysis (LGPD, GDPR)",
        "Board and executive security briefings",
        "Strategic security roadmap development"
      ],
      deliverables: [
        "Security posture assessment report",
        "Privacy compliance gap analysis",
        "Executive briefing materials",
        "Strategic recommendations and roadmap"
      ]
    },
    pt: {
      title: "Segurança & Privacidade",
      shortDescription: "Consultoria em governança de cibersegurança, postura de risco e conformidade de privacidade. Perspectiva independente sobre sua estratégia de segurança e questões de LGPD/GDPR.",
      problem: "Cibersegurança e privacidade tornaram-se preocupações do conselho, mas muitas organizações carecem de orientação estratégica independente. Equipes internas frequentemente estão muito próximas das operações, e fornecedores têm conflitos de interesse inerentes.",
      benefits: [
        "Avaliação independente de postura de segurança",
        "Avaliação de maturidade do programa de privacidade",
        "Análise de gap de conformidade regulatória (LGPD, GDPR)",
        "Briefings de segurança para conselho e executivos",
        "Desenvolvimento de roadmap estratégico de segurança"
      ],
      deliverables: [
        "Relatório de avaliação de postura de segurança",
        "Análise de gap de conformidade de privacidade",
        "Materiais de briefing executivo",
        "Recomendações estratégicas e roadmap"
      ]
    }
  },
  {
    slug: "trusted-advisor",
    icon: "Users",
    en: {
      title: "Trusted Advisor",
      shortDescription: "Ongoing strategic partnership with your leadership team. Think of us as an extension of your advisory board for cyber, privacy, and corporate intelligence matters.",
      problem: "Leadership teams often need a trusted external voice for sensitive matters—someone with deep expertise who can provide candid counsel without internal biases or vendor agendas.",
      benefits: [
        "On-demand access to senior advisors",
        "Regular strategic briefings on emerging threats and trends",
        "Confidential counsel on sensitive matters",
        "Board meeting preparation and support",
        "Network access to specialized experts when needed"
      ],
      deliverables: [
        "Retainer-based advisory engagement",
        "Quarterly strategic briefings",
        "Ad-hoc consultation sessions",
        "Annual strategic review and planning"
      ]
    },
    pt: {
      title: "Conselheiro de Confiança",
      shortDescription: "Parceria estratégica contínua com sua equipe de liderança. Pense em nós como uma extensão do seu conselho consultivo para questões de cyber, privacidade e inteligência corporativa.",
      problem: "Equipes de liderança frequentemente precisam de uma voz externa confiável para assuntos sensíveis—alguém com expertise profunda que possa fornecer orientação franca sem vieses internos ou agendas de fornecedores.",
      benefits: [
        "Acesso sob demanda a consultores seniores",
        "Briefings estratégicos regulares sobre ameaças e tendências emergentes",
        "Orientação confidencial em assuntos sensíveis",
        "Preparação e suporte para reuniões de conselho",
        "Acesso à rede de especialistas quando necessário"
      ],
      deliverables: [
        "Engajamento consultivo baseado em retainer",
        "Briefings estratégicos trimestrais",
        "Sessões de consultoria ad-hoc",
        "Revisão estratégica anual e planejamento"
      ]
    }
  },
  {
    slug: "compliance-standards",
    icon: "ClipboardCheck",
    en: {
      title: "Compliance & Standards",
      shortDescription: "Expert advisory for implementing and auditing security frameworks. We guide your journey to ISO 27001, SOC 2, NIST CSF, and regulatory compliance.",
      problem: "Organizations increasingly need to demonstrate security maturity through certifications and compliance. However, navigating the complex landscape of frameworks, understanding what's truly required, and implementing controls efficiently requires specialized expertise that internal teams often lack.",
      benefits: [
        "Gap analysis against target frameworks (ISO 27001, SOC 2, NIST CSF)",
        "Implementation roadmap with prioritized controls",
        "Policy and procedure development",
        "Internal audit and readiness assessment",
        "Certification preparation and auditor liaison",
        "Regulatory compliance (LGPD, GDPR, BACEN, PCI-DSS)"
      ],
      deliverables: [
        "Maturity assessment report",
        "Implementation roadmap and timeline",
        "Policy framework and documentation",
        "Control implementation guidance",
        "Pre-certification audit report",
        "Ongoing compliance monitoring recommendations"
      ]
    },
    pt: {
      title: "Compliance & Standards",
      shortDescription: "Consultoria especializada para implementação e auditoria de frameworks de segurança. Guiamos sua jornada para ISO 27001, SOC 2, NIST CSF e conformidade regulatória.",
      problem: "Organizações precisam cada vez mais demonstrar maturidade em segurança através de certificações e compliance. No entanto, navegar o complexo cenário de frameworks, entender o que é realmente necessário e implementar controles de forma eficiente requer expertise especializada que equipes internas frequentemente não possuem.",
      benefits: [
        "Gap analysis contra frameworks-alvo (ISO 27001, SOC 2, NIST CSF)",
        "Roadmap de implementação com controles priorizados",
        "Desenvolvimento de políticas e procedimentos",
        "Auditoria interna e avaliação de prontidão",
        "Preparação para certificação e liaison com auditores",
        "Conformidade regulatória (LGPD, GDPR, BACEN, PCI-DSS)"
      ],
      deliverables: [
        "Relatório de avaliação de maturidade",
        "Roadmap de implementação e cronograma",
        "Framework de políticas e documentação",
        "Orientação para implementação de controles",
        "Relatório de auditoria pré-certificação",
        "Recomendações de monitoramento contínuo de compliance"
      ]
    }
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug);
}
