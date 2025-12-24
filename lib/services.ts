interface ServiceContent {
  title: string;
  shortDescription: string;
  problem: string;
  benefits: string[];
  deliverables: string[];
}

export interface Service {
  slug: string;
  icon: string;
  en: ServiceContent;
  pt: ServiceContent;
  es: ServiceContent;
  fr: ServiceContent;
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
      problem: "Quando um incidente cibernético atinge, organizações enfrentam pressão imediata de múltiplas frentes: contenção técnica, obrigações regulatórias, comunicação com stakeholders e continuidade de negócios.",
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
    },
    es: {
      title: "Asesoría en Crisis Cibernéticas",
      shortDescription: "Cuando ocurre un incidente de seguridad, le ayudamos a navegar las decisiones críticas—coordinando la respuesta, gestionando stakeholders y protegiendo lo más importante.",
      problem: "Cuando ocurre un incidente cibernético, las organizaciones enfrentan presión inmediata desde múltiples frentes: contención técnica, obligaciones regulatorias, comunicación con stakeholders y continuidad del negocio.",
      benefits: [
        "Soporte estratégico 24/7 durante incidentes activos",
        "Coordinación entre equipos técnicos, legales y de comunicación",
        "Orientación para notificaciones regulatorias (LGPD, GDPR, BACEN)",
        "Estrategia de comunicación con stakeholders y medios",
        "Revisión post-incidente y recomendaciones de resiliencia"
      ],
      deliverables: [
        "Coordinación de respuesta a crisis",
        "Apoyo a la toma de decisiones para liderazgo",
        "Plantillas y guías de comunicación",
        "Análisis post-mortem e informe"
      ]
    },
    fr: {
      title: "Conseil en Crises Cyber",
      shortDescription: "Lorsqu'un incident de sécurité survient, nous vous aidons à naviguer les décisions critiques—coordonner la réponse, gérer les parties prenantes et protéger l'essentiel.",
      problem: "Lors d'un incident cyber, les organisations font face à une pression immédiate sur plusieurs fronts : confinement technique, obligations réglementaires, communication avec les parties prenantes et continuité des activités.",
      benefits: [
        "Support stratégique 24/7 pendant les incidents actifs",
        "Coordination entre équipes techniques, juridiques et communication",
        "Conseils pour les notifications réglementaires (LGPD, RGPD, BACEN)",
        "Stratégie de communication avec parties prenantes et médias",
        "Revue post-incident et recommandations de résilience"
      ],
      deliverables: [
        "Coordination de réponse aux crises",
        "Aide à la décision pour la direction",
        "Modèles et guides de communication",
        "Analyse post-mortem et rapport"
      ]
    }
  },
  {
    slug: "reputation-management",
    icon: "Shield",
    en: {
      title: "Reputation Management",
      shortDescription: "Strategic counsel for protecting organizational reputation during digital crises. We guide your communication strategy and stakeholder confidence recovery.",
      problem: "In today's connected world, a single incident can spiral into a reputational crisis within hours. Social media amplifies narratives, and stakeholders demand answers.",
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
      problem: "No mundo conectado de hoje, um único incidente pode se transformar em crise reputacional em horas. Redes sociais amplificam narrativas e stakeholders exigem respostas.",
      benefits: [
        "Avaliação rápida de risco reputacional",
        "Estratégia e mensagens de comunicação de crise",
        "Orientação para relações com mídia",
        "Suporte para comunicação interna",
        "Planejamento de recuperação de reputação"
      ],
      deliverables: [
        "Playbook de comunicação com stakeholders",
        "Mensagens-chave e documentos de Q&A",
        "Estratégia de resposta à mídia",
        "Recomendações de monitoramento"
      ]
    },
    es: {
      title: "Gestión de Reputación",
      shortDescription: "Asesoramiento estratégico para proteger la reputación organizacional durante crisis digitales. Guiamos su estrategia de comunicación y recuperación de confianza.",
      problem: "En el mundo conectado de hoy, un solo incidente puede convertirse en crisis reputacional en horas. Las redes sociales amplifican narrativas y los stakeholders exigen respuestas.",
      benefits: [
        "Evaluación rápida de riesgo reputacional",
        "Estrategia y mensajes de comunicación de crisis",
        "Orientación para relaciones con medios",
        "Soporte para comunicación interna",
        "Planificación de recuperación de reputación"
      ],
      deliverables: [
        "Manual de comunicación con stakeholders",
        "Mensajes clave y documentos Q&A",
        "Estrategia de respuesta a medios",
        "Recomendaciones de monitoreo"
      ]
    },
    fr: {
      title: "Gestion de Réputation",
      shortDescription: "Conseil stratégique pour protéger la réputation organisationnelle pendant les crises numériques. Nous guidons votre stratégie de communication et récupération de confiance.",
      problem: "Dans le monde connecté d'aujourd'hui, un seul incident peut se transformer en crise de réputation en quelques heures. Les réseaux sociaux amplifient les récits et les parties prenantes exigent des réponses.",
      benefits: [
        "Évaluation rapide du risque réputationnel",
        "Stratégie et messages de communication de crise",
        "Conseils pour les relations médias",
        "Support pour la communication interne",
        "Planification de récupération de réputation"
      ],
      deliverables: [
        "Guide de communication parties prenantes",
        "Messages clés et documents Q&R",
        "Stratégie de réponse médias",
        "Recommandations de surveillance"
      ]
    }
  },
  {
    slug: "fraud-investigation",
    icon: "Search",
    en: {
      title: "Fraud Investigation",
      shortDescription: "Independent advisory on structuring internal fraud investigations. We help establish governance frameworks and guide remediation approaches.",
      problem: "When fraud is suspected within an organization, the path forward is rarely clear. Internal politics, evidence preservation, and legal considerations create complexity.",
      benefits: [
        "Independent perspective free from internal politics",
        "Investigation governance framework design",
        "Evidence preservation guidance",
        "Stakeholder management during investigations",
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
      problem: "Quando há suspeita de fraude, o caminho raramente é claro. Política interna, preservação de evidências e considerações legais criam complexidade.",
      benefits: [
        "Perspectiva independente livre de política interna",
        "Design de framework de governança",
        "Orientação para preservação de evidências",
        "Gestão de stakeholders durante investigações",
        "Recomendações de remediação e controles"
      ],
      deliverables: [
        "Carta de governança de investigação",
        "Protocolos de tratamento de evidências",
        "Briefings de progresso",
        "Relatório final de achados"
      ]
    },
    es: {
      title: "Investigación de Fraudes",
      shortDescription: "Asesoría independiente para estructurar investigaciones internas de fraude. Ayudamos a establecer marcos de gobernanza y guiar enfoques de remediación.",
      problem: "Cuando se sospecha fraude, el camino raramente es claro. Política interna, preservación de evidencia y consideraciones legales crean complejidad.",
      benefits: [
        "Perspectiva independiente libre de política interna",
        "Diseño de marco de gobernanza",
        "Orientación para preservación de evidencia",
        "Gestión de stakeholders durante investigaciones",
        "Recomendaciones de remediación y controles"
      ],
      deliverables: [
        "Carta de gobernanza de investigación",
        "Protocolos de manejo de evidencia",
        "Informes de progreso",
        "Informe final de hallazgos"
      ]
    },
    fr: {
      title: "Enquêtes de Fraude",
      shortDescription: "Conseil indépendant pour structurer les enquêtes internes de fraude. Nous aidons à établir des cadres de gouvernance et guider les approches de remédiation.",
      problem: "Lorsque la fraude est suspectée, le chemin est rarement clair. Politique interne, préservation des preuves et considérations juridiques créent de la complexité.",
      benefits: [
        "Perspective indépendante libre de politique interne",
        "Conception du cadre de gouvernance",
        "Conseils pour la préservation des preuves",
        "Gestion des parties prenantes pendant les enquêtes",
        "Recommandations de remédiation et contrôles"
      ],
      deliverables: [
        "Charte de gouvernance d'enquête",
        "Protocoles de gestion des preuves",
        "Rapports d'avancement",
        "Rapport final des conclusions"
      ]
    }
  },
  {
    slug: "ai-governance",
    icon: "Brain",
    en: {
      title: "AI Governance",
      shortDescription: "Practical guidance on AI adoption, governance frameworks, and risk management. We help you navigate opportunities while managing emerging risks.",
      problem: "Organizations are racing to adopt AI, but governance hasn't kept pace. Without proper frameworks, AI initiatives can create unexpected risks.",
      benefits: [
        "AI risk assessment and classification",
        "Governance framework aligned to EU AI Act",
        "Use case evaluation and prioritization",
        "Vendor and model selection guidance",
        "Ongoing governance recommendations"
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
      problem: "Organizações correm para adotar IA, mas a governança não acompanhou. Sem frameworks adequados, iniciativas de IA podem criar riscos inesperados.",
      benefits: [
        "Avaliação e classificação de riscos de IA",
        "Framework alinhado ao EU AI Act",
        "Avaliação e priorização de casos de uso",
        "Orientação para seleção de fornecedores",
        "Recomendações de governança contínua"
      ],
      deliverables: [
        "Framework de política de governança",
        "Metodologia de avaliação de riscos",
        "Critérios de avaliação de casos de uso",
        "Roadmap de implementação"
      ]
    },
    es: {
      title: "Gobernanza de IA",
      shortDescription: "Orientación práctica sobre adopción de IA, marcos de gobernanza y gestión de riesgos. Le ayudamos a navegar oportunidades mientras gestiona riesgos emergentes.",
      problem: "Las organizaciones corren para adoptar IA, pero la gobernanza no ha seguido el ritmo. Sin marcos adecuados, las iniciativas de IA pueden crear riesgos inesperados.",
      benefits: [
        "Evaluación y clasificación de riesgos de IA",
        "Marco alineado con EU AI Act",
        "Evaluación y priorización de casos de uso",
        "Orientación para selección de proveedores",
        "Recomendaciones de gobernanza continua"
      ],
      deliverables: [
        "Marco de política de gobernanza",
        "Metodología de evaluación de riesgos",
        "Criterios de evaluación de casos de uso",
        "Hoja de ruta de implementación"
      ]
    },
    fr: {
      title: "Gouvernance de l'IA",
      shortDescription: "Conseils pratiques sur l'adoption de l'IA, les cadres de gouvernance et la gestion des risques. Nous vous aidons à naviguer les opportunités tout en gérant les risques.",
      problem: "Les organisations se précipitent pour adopter l'IA, mais la gouvernance n'a pas suivi. Sans cadres appropriés, les initiatives IA peuvent créer des risques inattendus.",
      benefits: [
        "Évaluation et classification des risques IA",
        "Cadre aligné sur l'EU AI Act",
        "Évaluation et priorisation des cas d'usage",
        "Conseils pour la sélection des fournisseurs",
        "Recommandations de gouvernance continue"
      ],
      deliverables: [
        "Cadre de politique de gouvernance",
        "Méthodologie d'évaluation des risques",
        "Critères d'évaluation des cas d'usage",
        "Feuille de route d'implémentation"
      ]
    }
  },
  {
    slug: "security-privacy",
    icon: "FileCheck",
    en: {
      title: "Security & Privacy",
      shortDescription: "Advisory on cybersecurity governance, risk posture, and privacy compliance. Independent perspective on your security strategy and LGPD/GDPR matters.",
      problem: "Cybersecurity and privacy have become board-level concerns, yet many organizations lack independent, strategic advice.",
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
      shortDescription: "Consultoria em governança de cibersegurança, postura de risco e conformidade de privacidade. Perspectiva independente sobre sua estratégia de segurança.",
      problem: "Cibersegurança e privacidade tornaram-se preocupações do conselho, mas muitas organizações carecem de orientação estratégica independente.",
      benefits: [
        "Avaliação independente de postura de segurança",
        "Avaliação de maturidade do programa de privacidade",
        "Análise de gap regulatório (LGPD, GDPR)",
        "Briefings para conselho e executivos",
        "Desenvolvimento de roadmap estratégico"
      ],
      deliverables: [
        "Relatório de avaliação de postura",
        "Análise de gap de privacidade",
        "Materiais de briefing executivo",
        "Recomendações e roadmap"
      ]
    },
    es: {
      title: "Seguridad y Privacidad",
      shortDescription: "Asesoría en gobernanza de ciberseguridad, postura de riesgo y cumplimiento de privacidad. Perspectiva independiente sobre su estrategia de seguridad.",
      problem: "Ciberseguridad y privacidad se han convertido en preocupaciones del consejo, pero muchas organizaciones carecen de asesoría estratégica independiente.",
      benefits: [
        "Evaluación independiente de postura de seguridad",
        "Evaluación de madurez del programa de privacidad",
        "Análisis de brechas regulatorias (LGPD, GDPR)",
        "Briefings para consejo y ejecutivos",
        "Desarrollo de hoja de ruta estratégica"
      ],
      deliverables: [
        "Informe de evaluación de postura",
        "Análisis de brechas de privacidad",
        "Materiales de briefing ejecutivo",
        "Recomendaciones y hoja de ruta"
      ]
    },
    fr: {
      title: "Sécurité et Confidentialité",
      shortDescription: "Conseil en gouvernance de cybersécurité, posture de risque et conformité de confidentialité. Perspective indépendante sur votre stratégie de sécurité.",
      problem: "Cybersécurité et confidentialité sont devenues des préoccupations du conseil, mais beaucoup d'organisations manquent de conseils stratégiques indépendants.",
      benefits: [
        "Évaluation indépendante de posture de sécurité",
        "Évaluation de maturité du programme de confidentialité",
        "Analyse des écarts réglementaires (LGPD, RGPD)",
        "Briefings pour conseil et dirigeants",
        "Développement de feuille de route stratégique"
      ],
      deliverables: [
        "Rapport d'évaluation de posture",
        "Analyse des écarts de confidentialité",
        "Matériels de briefing exécutif",
        "Recommandations et feuille de route"
      ]
    }
  },
  {
    slug: "trusted-advisor",
    icon: "Users",
    en: {
      title: "Trusted Advisor",
      shortDescription: "Ongoing strategic partnership with your leadership team. Think of us as an extension of your advisory board for cyber, privacy, and corporate intelligence matters.",
      problem: "Leadership teams often need a trusted external voice for sensitive matters—someone with deep expertise who can provide candid counsel.",
      benefits: [
        "On-demand access to senior advisors",
        "Regular strategic briefings on emerging threats",
        "Confidential counsel on sensitive matters",
        "Board meeting preparation and support",
        "Network access to specialized experts"
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
      shortDescription: "Parceria estratégica contínua com sua equipe de liderança. Pense em nós como uma extensão do seu conselho consultivo para questões de cyber e privacidade.",
      problem: "Equipes de liderança frequentemente precisam de uma voz externa confiável para assuntos sensíveis—alguém com expertise profunda.",
      benefits: [
        "Acesso sob demanda a consultores seniores",
        "Briefings estratégicos sobre ameaças emergentes",
        "Orientação confidencial em assuntos sensíveis",
        "Preparação e suporte para reuniões de conselho",
        "Acesso à rede de especialistas"
      ],
      deliverables: [
        "Engajamento baseado em retainer",
        "Briefings estratégicos trimestrais",
        "Sessões de consultoria ad-hoc",
        "Revisão estratégica anual"
      ]
    },
    es: {
      title: "Asesor de Confianza",
      shortDescription: "Alianza estratégica continua con su equipo directivo. Piense en nosotros como una extensión de su consejo asesor para temas de ciberseguridad y privacidad.",
      problem: "Los equipos directivos frecuentemente necesitan una voz externa confiable para asuntos sensibles—alguien con experiencia profunda.",
      benefits: [
        "Acceso bajo demanda a asesores senior",
        "Briefings estratégicos sobre amenazas emergentes",
        "Asesoría confidencial en asuntos sensibles",
        "Preparación y apoyo para reuniones de consejo",
        "Acceso a red de especialistas"
      ],
      deliverables: [
        "Compromiso basado en anticipo",
        "Briefings estratégicos trimestrales",
        "Sesiones de consultoría ad-hoc",
        "Revisión estratégica anual"
      ]
    },
    fr: {
      title: "Conseiller de Confiance",
      shortDescription: "Partenariat stratégique continu avec votre équipe de direction. Pensez à nous comme une extension de votre conseil consultatif pour les questions cyber et confidentialité.",
      problem: "Les équipes de direction ont souvent besoin d'une voix externe de confiance pour les sujets sensibles—quelqu'un avec une expertise approfondie.",
      benefits: [
        "Accès à la demande aux conseillers seniors",
        "Briefings stratégiques sur les menaces émergentes",
        "Conseils confidentiels sur les sujets sensibles",
        "Préparation et support pour réunions du conseil",
        "Accès au réseau d'experts"
      ],
      deliverables: [
        "Engagement basé sur provision",
        "Briefings stratégiques trimestriels",
        "Sessions de consultation ad-hoc",
        "Revue stratégique annuelle"
      ]
    }
  },
  {
    slug: "compliance-standards",
    icon: "ClipboardCheck",
    en: {
      title: "Compliance & Standards",
      shortDescription: "Expert advisory for implementing and auditing security frameworks. We guide your journey to ISO 27001, SOC 2, NIST CSF, and regulatory compliance.",
      problem: "Organizations need to demonstrate security maturity through certifications. Navigating the complex landscape of frameworks requires specialized expertise.",
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
      problem: "Organizações precisam demonstrar maturidade através de certificações. Navegar o cenário complexo de frameworks requer expertise especializada.",
      benefits: [
        "Gap analysis contra frameworks (ISO 27001, SOC 2, NIST CSF)",
        "Roadmap de implementação com controles priorizados",
        "Desenvolvimento de políticas e procedimentos",
        "Auditoria interna e avaliação de prontidão",
        "Preparação para certificação e liaison com auditores",
        "Conformidade regulatória (LGPD, GDPR, BACEN, PCI-DSS)"
      ],
      deliverables: [
        "Relatório de avaliação de maturidade",
        "Roadmap de implementação",
        "Framework de políticas",
        "Orientação para implementação de controles",
        "Relatório de auditoria pré-certificação",
        "Recomendações de monitoramento"
      ]
    },
    es: {
      title: "Compliance y Estándares",
      shortDescription: "Asesoría especializada para implementación y auditoría de marcos de seguridad. Guiamos su camino hacia ISO 27001, SOC 2, NIST CSF y cumplimiento regulatorio.",
      problem: "Las organizaciones necesitan demostrar madurez a través de certificaciones. Navegar el complejo panorama de marcos requiere experiencia especializada.",
      benefits: [
        "Análisis de brechas contra marcos (ISO 27001, SOC 2, NIST CSF)",
        "Hoja de ruta con controles priorizados",
        "Desarrollo de políticas y procedimientos",
        "Auditoría interna y evaluación de preparación",
        "Preparación para certificación y enlace con auditores",
        "Cumplimiento regulatorio (LGPD, GDPR, BACEN, PCI-DSS)"
      ],
      deliverables: [
        "Informe de evaluación de madurez",
        "Hoja de ruta de implementación",
        "Marco de políticas",
        "Guía de implementación de controles",
        "Informe de auditoría pre-certificación",
        "Recomendaciones de monitoreo"
      ]
    },
    fr: {
      title: "Conformité et Standards",
      shortDescription: "Conseil expert pour l'implémentation et l'audit de cadres de sécurité. Nous guidons votre parcours vers ISO 27001, SOC 2, NIST CSF et conformité réglementaire.",
      problem: "Les organisations doivent démontrer leur maturité par des certifications. Naviguer le paysage complexe des cadres nécessite une expertise spécialisée.",
      benefits: [
        "Analyse des écarts par rapport aux cadres (ISO 27001, SOC 2, NIST CSF)",
        "Feuille de route avec contrôles priorisés",
        "Développement de politiques et procédures",
        "Audit interne et évaluation de préparation",
        "Préparation à la certification et liaison avec auditeurs",
        "Conformité réglementaire (LGPD, RGPD, BACEN, PCI-DSS)"
      ],
      deliverables: [
        "Rapport d'évaluation de maturité",
        "Feuille de route d'implémentation",
        "Cadre de politiques",
        "Guide d'implémentation des contrôles",
        "Rapport d'audit pré-certification",
        "Recommandations de surveillance"
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
