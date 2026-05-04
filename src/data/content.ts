import {
  BadgeCheck,
  Boxes,
  Compass,
  Database,
  Drill,
  FlaskConical,
  Gauge,
  HardHat,
  Layers3,
  Map,
  Mountain,
  Orbit,
  Radar,
  ShieldCheck,
  Sprout,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Language = "pt" | "en" | "es";

export type IconContent = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ListGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

type SiteContent = {
  seo: {
    title: string;
    description: string;
    htmlLang: string;
  };
  navItems: { label: string; href: string }[];
  hero: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    presenter: string;
    role: string;
    scrollCue: string;
  };
  geoPanel: {
    title: string;
    labels: string[];
  };
  heroStats: { value: string; label: string }[];
  about: {
    title: string;
    text: string;
    highlights: IconContent[];
  };
  services: {
    title: string;
    description: string;
    items: IconContent[];
  };
  rc: {
    title: string;
    description: string;
    metrics: {
      productivityLabel: string;
      productivityUnit: string;
      capacityLabel: string;
      capacityUnit: string;
    };
    groups: ListGroup[];
  };
  differentials: {
    title: string;
    description: string;
    groups: ListGroup[];
  };
  experience: {
    title: string;
    description: string;
    minerals: string[];
    capabilityMarks: { value: string; label: string }[];
    journey: { title: string; icon: LucideIcon }[];
  };
  equipment: {
    title: string;
    description: string;
    items: IconContent[];
  };
  contactSection: {
    title: string;
    text: string;
    whatsappCta: string;
    emailCta: string;
  };
  footer: {
    line: string;
    company: string;
  };
};

export const languageLabels: Record<Language, string> = {
  pt: "PT/br",
  en: "EN",
  es: "ES",
};

export const contact = {
  email: "sondagensrp@gmail.com",
  phone: "(62) 99837-8540",
  whatsappUrl: "https://wa.me/5562998378540",
  mailtoUrl: "mailto:sondagensrp@gmail.com",
};

const commonJourneyIcons = [Radar, Compass, Drill, Database, Boxes, BadgeCheck];

export const translations: Record<Language, SiteContent> = {
  pt: {
    seo: {
      title: "Rio Preto Prospecção Ltda | Pesquisa Mineral, Sondagem RC e Avaliação Geológica",
      description:
        "Rio Preto Prospecção Ltda oferece pesquisa mineral, avaliação geológica e sondagem rotopercussiva RC com precisão técnica, produtividade operacional e conformidade ANM.",
      htmlLang: "pt-BR",
    },
    navItems: [
      { label: "Quem somos", href: "#quem-somos" },
      { label: "Serviços", href: "#servicos" },
      { label: "Sondagem RC", href: "#sondagem-rc" },
      { label: "Experiência", href: "#experiencia" },
      { label: "Contato", href: "#contato" },
    ],
    hero: {
      title: "Pesquisa Mineral, Sondagem RC e Avaliação Geológica com Precisão Técnica",
      subtitle:
        "A Rio Preto Prospecção Ltda oferece suporte completo para empreendimentos minerários, unindo experiência geológica, produtividade operacional e conformidade regulatória.",
      primaryCta: "Solicitar orçamento",
      secondaryCta: "Conhecer serviços",
      presenter: "Apresentado por Anderson de Almeida Oliveira",
      role: "Geólogo — CEO",
      scrollCue: "Avançar",
    },
    geoPanel: {
      title: "Perfil geológico",
      labels: ["Coleta", "Ciclone", "Amostra", "Banco de dados"],
    },
    heroStats: [
      { value: "60 m/dia", label: "Produtividade média" },
      { value: "Até 3", label: "furos por dia" },
      { value: "ANM", label: "Conformidade regulatória" },
      { value: "Equipe", label: "especializada" },
    ],
    about: {
      title: "Geologia aplicada à decisão minerária.",
      text:
        "A Rio Preto Prospecção Ltda é especializada em pesquisa mineral e avaliação geológica, oferecendo suporte técnico completo para empreendimentos minerários. Nossa equipe multidisciplinar garante soluções seguras, eficientes e alinhadas às normas regulatórias e ambientais.",
      highlights: [
        {
          title: "Pesquisa mineral",
          description: "Mapeamento, amostragem, trincheiras e leitura integrada do potencial geológico.",
          icon: Compass,
        },
        {
          title: "Avaliação geológica",
          description: "Interpretação técnica, consolidação de dados e suporte para tomada de decisão.",
          icon: Layers3,
        },
        {
          title: "Sondagem rotopercussiva",
          description: "Campanhas RC com produtividade, rastreabilidade e controle amostral em campo.",
          icon: Drill,
        },
        {
          title: "Suporte completo",
          description: "Planejamento, operação e relatórios alinhados às normas regulatórias e ambientais.",
          icon: ShieldCheck,
        },
      ],
    },
    services: {
      title: "Áreas de atuação",
      description:
        "Serviços integrados para reduzir incertezas geológicas, organizar dados de campo e sustentar decisões técnicas com rastreabilidade.",
      items: [
        {
          title: "Pesquisa Mineral",
          description:
            "Realizamos prospecção geológica abrangente, incluindo mapeamento, amostragem, trincheiras e geoquímica, garantindo uma análise precisa e detalhada para identificar potenciais recursos minerais.",
          icon: Map,
        },
        {
          title: "Avaliação de Recursos",
          description:
            "Executamos sondagens exploratórias, desenvolvemos bancos de dados e modelagens 3D, além de elaborar relatórios que atendem às exigências da ANM, assegurando a confiabilidade das informações.",
          icon: Orbit,
        },
        {
          title: "Sondagem Rotopercussiva",
          description:
            "Oferecemos serviços de sondagem, tanto rasas quanto profundas, utilizando equipamentos próprios com alta produtividade, além de suporte logístico eficiente em todas as etapas do processo.",
          icon: Drill,
        },
      ],
    },
    rc: {
      title: "Sondagem Rotopercussiva RC: Produtividade, Precisão e Confiabilidade",
      description:
        "A sondagem rotopercussiva é amplamente aplicada em campanhas de pesquisa mineral que exigem rapidez, precisão e confiabilidade dos dados geológicos.",
      metrics: {
        productivityLabel: "Produtividade média",
        productivityUnit: "metros/dia",
        capacityLabel: "Capacidade operacional",
        capacityUnit: "furos/dia",
      },
      groups: [
        {
          title: "Vantagens Técnicas",
          icon: Gauge,
          items: [
            "Alta produtividade diária",
            "Excelente recuperação e representatividade de amostra",
            "Redução de contaminação cruzada",
            "Menor custo por metro perfurado",
            "Ideal para campanhas de grande escala",
          ],
        },
        {
          title: "Produtividade Operacional",
          icon: Zap,
          items: [
            "Elevado rendimento em metros perfurados por dia",
            "Produtividade média de 60 metros/dia",
            "Até 3 furos/dia",
            "Profundidade operacional conforme necessidade do projeto",
            "Rápida mobilização de equipe e equipamentos",
            "Operação eficiente em diferentes condições geológicas",
          ],
        },
        {
          title: "Controle e Qualidade Amostral",
          icon: FlaskConical,
          items: [
            "Sistema de coleta com ciclone e homogeneizador de amostras",
            "Rastreabilidade e identificação rigorosa",
            "Procedimentos padronizados de manuseio",
            "Redução de perdas e contaminações",
          ],
        },
      ],
    },
    differentials: {
      title: "Por que escolher a Rio Preto Prospecção?",
      description:
        "Operação de campo, rigor técnico e responsabilidade ambiental caminhando juntos para campanhas mais seguras, produtivas e auditáveis.",
      groups: [
        {
          title: "Diferenciais Operacionais",
          icon: Truck,
          items: ["Equipamentos próprios", "Mobilização rápida", "Equipe especializada"],
        },
        {
          title: "Diferenciais Técnicos",
          icon: Database,
          items: [
            "Controle de qualidade amostral",
            "Banco de dados estruturado",
            "Modelagem 3D",
            "Rastreabilidade",
            "Conformidade ANM",
          ],
        },
        {
          title: "Segurança e Meio Ambiente",
          icon: Sprout,
          items: [
            "Cumprimento das normas de segurança do trabalho",
            "Uso de EPIs e treinamentos periódicos",
            "Procedimentos de controle ambiental em campo",
            "Gestão responsável de resíduos de perfuração",
          ],
        },
      ],
    },
    experience: {
      title: "Experiência e capacidade para campanhas completas",
      description:
        "A Rio Preto Prospecção Ltda possui vasta experiência em campanhas de pesquisa mineral, atuando em ambientes geológicos diversos. Garantimos confiabilidade técnica e otimização de investimentos com projetos completos, desde o reconhecimento até a consolidação de dados.",
      minerals: ["Ouro", "Ferro", "Calcário", "Fosfato", "Grafita", "Manganês"],
      capabilityMarks: [
        { value: "Arqueano", label: "ambientes geológicos" },
        { value: "Quaternário", label: "cobertura temporal" },
        { value: "Inicial", label: "exploração" },
        { value: "Recurso", label: "definição técnica" },
      ],
      journey: ["Reconhecimento", "Prospecção", "Sondagem", "Banco de Dados", "Modelagem 3D", "Relatórios Técnicos"].map(
        (title, index) => ({ title, icon: commonJourneyIcons[index] }),
      ),
    },
    equipment: {
      title: "Equipamentos preparados para campo",
      description:
        "Um conjunto técnico pensado para produtividade, mobilização e controle amostral em campanhas de sondagem rotopercussiva.",
      items: [
        {
          title: "Sonda RC montada sobre carreta",
          description: "Configuração preparada para mobilidade e operação eficiente em campanhas de campo.",
          icon: Drill,
        },
        {
          title: "Compressor de alta pressão",
          description: "Suporte à perfuração rotopercussiva com estabilidade operacional e rendimento.",
          icon: Gauge,
        },
        {
          title: "Sistema ciclone + homogeneizador",
          description: "Coleta, homogeneização e divisão de amostras com controle de representatividade.",
          icon: Wrench,
        },
        {
          title: "Equipe técnica treinada",
          description: "Profissionais preparados para execução segura, rastreável e padronizada.",
          icon: HardHat,
        },
        {
          title: "Veículos 4x4 para acesso remoto",
          description: "Logística de apoio para deslocamento em áreas de difícil acesso e frentes remotas.",
          icon: Mountain,
        },
      ],
    },
    contactSection: {
      title: "Precisa iniciar ou otimizar uma campanha de pesquisa mineral?",
      text:
        "Entre em contato com a Rio Preto Prospecção e tenha suporte técnico especializado para sondagem, avaliação geológica e desenvolvimento de projetos minerários.",
      whatsappCta: "Falar pelo WhatsApp",
      emailCta: "Enviar e-mail",
    },
    footer: {
      line: "Pesquisa Mineral | Sondagem RC | Avaliação Geológica",
      company: "RIO PRETO PROSPECÇÃO LTDA",
    },
  },
  en: {
    seo: {
      title: "Rio Preto Prospecção Ltda | Mineral Exploration, RC Drilling and Geological Evaluation",
      description:
        "Rio Preto Prospecção Ltda provides mineral exploration, geological evaluation and RC drilling with technical precision, operational productivity and ANM compliance.",
      htmlLang: "en",
    },
    navItems: [
      { label: "About", href: "#quem-somos" },
      { label: "Services", href: "#servicos" },
      { label: "RC Drilling", href: "#sondagem-rc" },
      { label: "Experience", href: "#experiencia" },
      { label: "Contact", href: "#contato" },
    ],
    hero: {
      title: "Mineral Exploration, RC Drilling and Geological Evaluation with Technical Precision",
      subtitle:
        "Rio Preto Prospecção Ltda provides complete support for mining ventures, combining geological expertise, operational productivity and regulatory compliance.",
      primaryCta: "Request a quote",
      secondaryCta: "Explore services",
      presenter: "Presented by Anderson de Almeida Oliveira",
      role: "Geologist — CEO",
      scrollCue: "Next",
    },
    geoPanel: {
      title: "Geological profile",
      labels: ["Collection", "Cyclone", "Sample", "Database"],
    },
    heroStats: [
      { value: "60 m/day", label: "Average productivity" },
      { value: "Up to 3", label: "holes per day" },
      { value: "ANM", label: "Regulatory compliance" },
      { value: "Team", label: "specialized crew" },
    ],
    about: {
      title: "Geology applied to mining decisions.",
      text:
        "Rio Preto Prospecção Ltda specializes in mineral exploration and geological evaluation, providing complete technical support for mining ventures. Our multidisciplinary team delivers safe, efficient solutions aligned with regulatory and environmental requirements.",
      highlights: [
        {
          title: "Mineral exploration",
          description: "Mapping, sampling, trenches and integrated assessment of geological potential.",
          icon: Compass,
        },
        {
          title: "Geological evaluation",
          description: "Technical interpretation, data consolidation and decision-support workflows.",
          icon: Layers3,
        },
        {
          title: "RC drilling",
          description: "Reverse circulation campaigns with productivity, traceability and sample control in the field.",
          icon: Drill,
        },
        {
          title: "Complete support",
          description: "Planning, operations and reports aligned with regulatory and environmental standards.",
          icon: ShieldCheck,
        },
      ],
    },
    services: {
      title: "Areas of practice",
      description:
        "Integrated services to reduce geological uncertainty, organize field data and support technical decisions with traceability.",
      items: [
        {
          title: "Mineral Exploration",
          description:
            "We perform comprehensive geological prospecting, including mapping, sampling, trenches and geochemistry, ensuring accurate and detailed analysis to identify potential mineral resources.",
          icon: Map,
        },
        {
          title: "Resource Evaluation",
          description:
            "We execute exploratory drilling, develop databases and 3D models, and prepare reports that meet ANM requirements, strengthening data reliability.",
          icon: Orbit,
        },
        {
          title: "Reverse Circulation Drilling",
          description:
            "We provide shallow and deep drilling services using our own high-productivity equipment, with efficient logistics support throughout every stage of the process.",
          icon: Drill,
        },
      ],
    },
    rc: {
      title: "RC Drilling: Productivity, Precision and Reliability",
      description:
        "Reverse circulation drilling is widely used in mineral exploration campaigns that demand speed, precision and reliable geological data.",
      metrics: {
        productivityLabel: "Average productivity",
        productivityUnit: "meters/day",
        capacityLabel: "Operational capacity",
        capacityUnit: "holes/day",
      },
      groups: [
        {
          title: "Technical Advantages",
          icon: Gauge,
          items: [
            "High daily productivity",
            "Excellent recovery and sample representativeness",
            "Reduced cross-contamination",
            "Lower cost per drilled meter",
            "Ideal for large-scale campaigns",
          ],
        },
        {
          title: "Operational Productivity",
          icon: Zap,
          items: [
            "High drilled-meter output per day",
            "Average productivity of 60 meters/day",
            "Up to 3 holes/day",
            "Operational depth according to project needs",
            "Fast mobilization of crew and equipment",
            "Efficient operation in different geological conditions",
          ],
        },
        {
          title: "Sample Control and Quality",
          icon: FlaskConical,
          items: [
            "Cyclone and sample homogenizer collection system",
            "Strict traceability and identification",
            "Standardized handling procedures",
            "Reduced losses and contamination",
          ],
        },
      ],
    },
    differentials: {
      title: "Why choose Rio Preto Prospecção?",
      description:
        "Field operations, technical discipline and environmental responsibility working together for safer, more productive and auditable campaigns.",
      groups: [
        {
          title: "Operational Strengths",
          icon: Truck,
          items: ["Own equipment", "Fast mobilization", "Specialized team"],
        },
        {
          title: "Technical Strengths",
          icon: Database,
          items: ["Sample quality control", "Structured database", "3D modeling", "Traceability", "ANM compliance"],
        },
        {
          title: "Safety and Environment",
          icon: Sprout,
          items: [
            "Compliance with occupational safety standards",
            "PPE use and periodic training",
            "Field environmental control procedures",
            "Responsible management of drilling waste",
          ],
        },
      ],
    },
    experience: {
      title: "Experience and capacity for complete campaigns",
      description:
        "Rio Preto Prospecção Ltda has extensive experience in mineral exploration campaigns across diverse geological settings. We deliver technical reliability and investment optimization through complete projects, from reconnaissance to data consolidation.",
      minerals: ["Gold", "Iron", "Limestone", "Phosphate", "Graphite", "Manganese"],
      capabilityMarks: [
        { value: "Archean", label: "geological settings" },
        { value: "Quaternary", label: "time coverage" },
        { value: "Early stage", label: "exploration" },
        { value: "Resource", label: "technical definition" },
      ],
      journey: ["Reconnaissance", "Prospecting", "Drilling", "Database", "3D Modeling", "Technical Reports"].map(
        (title, index) => ({ title, icon: commonJourneyIcons[index] }),
      ),
    },
    equipment: {
      title: "Equipment prepared for field operations",
      description:
        "A technical setup designed for productivity, mobilization and sample control in reverse circulation drilling campaigns.",
      items: [
        {
          title: "Trailer-mounted RC drill rig",
          description: "Configuration prepared for mobility and efficient operation in field campaigns.",
          icon: Drill,
        },
        {
          title: "High-pressure compressor",
          description: "Support for RC drilling with operational stability and output.",
          icon: Gauge,
        },
        {
          title: "Cyclone + homogenizer system",
          description: "Sample collection, homogenization and splitting with representativeness control.",
          icon: Wrench,
        },
        {
          title: "Trained technical crew",
          description: "Professionals prepared for safe, traceable and standardized execution.",
          icon: HardHat,
        },
        {
          title: "4x4 vehicles for remote access",
          description: "Support logistics for hard-to-reach areas and remote fronts.",
          icon: Mountain,
        },
      ],
    },
    contactSection: {
      title: "Need to start or optimize a mineral exploration campaign?",
      text:
        "Contact Rio Preto Prospecção for specialized technical support in drilling, geological evaluation and mining project development.",
      whatsappCta: "Talk on WhatsApp",
      emailCta: "Send e-mail",
    },
    footer: {
      line: "Mineral Exploration | RC Drilling | Geological Evaluation",
      company: "RIO PRETO PROSPECÇÃO LTDA",
    },
  },
  es: {
    seo: {
      title: "Rio Preto Prospecção Ltda | Investigación Mineral, Sondaje RC y Evaluación Geológica",
      description:
        "Rio Preto Prospecção Ltda ofrece investigación mineral, evaluación geológica y sondaje rotopercusivo RC con precisión técnica, productividad operacional y conformidad ANM.",
      htmlLang: "es",
    },
    navItems: [
      { label: "Quiénes somos", href: "#quem-somos" },
      { label: "Servicios", href: "#servicos" },
      { label: "Sondaje RC", href: "#sondagem-rc" },
      { label: "Experiencia", href: "#experiencia" },
      { label: "Contacto", href: "#contato" },
    ],
    hero: {
      title: "Investigación Mineral, Sondaje RC y Evaluación Geológica con Precisión Técnica",
      subtitle:
        "Rio Preto Prospecção Ltda ofrece soporte completo para emprendimientos mineros, integrando experiencia geológica, productividad operacional y conformidad regulatoria.",
      primaryCta: "Solicitar cotización",
      secondaryCta: "Ver servicios",
      presenter: "Presentado por Anderson de Almeida Oliveira",
      role: "Geólogo — CEO",
      scrollCue: "Avanzar",
    },
    geoPanel: {
      title: "Perfil geológico",
      labels: ["Colecta", "Ciclón", "Muestra", "Base de datos"],
    },
    heroStats: [
      { value: "60 m/día", label: "Productividad media" },
      { value: "Hasta 3", label: "pozos por día" },
      { value: "ANM", label: "Conformidad regulatoria" },
      { value: "Equipo", label: "especializado" },
    ],
    about: {
      title: "Geología aplicada a decisiones mineras.",
      text:
        "Rio Preto Prospecção Ltda está especializada en investigación mineral y evaluación geológica, ofreciendo soporte técnico completo para emprendimientos mineros. Nuestro equipo multidisciplinario garantiza soluciones seguras, eficientes y alineadas con normas regulatorias y ambientales.",
      highlights: [
        {
          title: "Investigación mineral",
          description: "Mapeo, muestreo, trincheras y lectura integrada del potencial geológico.",
          icon: Compass,
        },
        {
          title: "Evaluación geológica",
          description: "Interpretación técnica, consolidación de datos y soporte para la toma de decisiones.",
          icon: Layers3,
        },
        {
          title: "Sondaje rotopercusivo",
          description: "Campañas RC con productividad, trazabilidad y control de muestras en campo.",
          icon: Drill,
        },
        {
          title: "Soporte completo",
          description: "Planificación, operación e informes alineados con normas regulatorias y ambientales.",
          icon: ShieldCheck,
        },
      ],
    },
    services: {
      title: "Áreas de actuación",
      description:
        "Servicios integrados para reducir incertidumbres geológicas, organizar datos de campo y sostener decisiones técnicas con trazabilidad.",
      items: [
        {
          title: "Investigación Mineral",
          description:
            "Realizamos prospección geológica integral, incluyendo mapeo, muestreo, trincheras y geoquímica, garantizando un análisis preciso y detallado para identificar recursos minerales potenciales.",
          icon: Map,
        },
        {
          title: "Evaluación de Recursos",
          description:
            "Ejecutamos sondajes exploratorios, desarrollamos bases de datos y modelamientos 3D, además de elaborar informes que atienden las exigencias de la ANM.",
          icon: Orbit,
        },
        {
          title: "Sondaje Rotopercusivo",
          description:
            "Ofrecemos servicios de sondaje, tanto someros como profundos, utilizando equipos propios de alta productividad y soporte logístico eficiente en cada etapa.",
          icon: Drill,
        },
      ],
    },
    rc: {
      title: "Sondaje Rotopercusivo RC: Productividad, Precisión y Confiabilidad",
      description:
        "El sondaje rotopercusivo se aplica ampliamente en campañas de investigación mineral que exigen rapidez, precisión y confiabilidad de los datos geológicos.",
      metrics: {
        productivityLabel: "Productividad media",
        productivityUnit: "metros/día",
        capacityLabel: "Capacidad operacional",
        capacityUnit: "pozos/día",
      },
      groups: [
        {
          title: "Ventajas Técnicas",
          icon: Gauge,
          items: [
            "Alta productividad diaria",
            "Excelente recuperación y representatividad de muestra",
            "Reducción de contaminación cruzada",
            "Menor costo por metro perforado",
            "Ideal para campañas de gran escala",
          ],
        },
        {
          title: "Productividad Operacional",
          icon: Zap,
          items: [
            "Alto rendimiento en metros perforados por día",
            "Productividad media de 60 metros/día",
            "Hasta 3 pozos/día",
            "Profundidad operacional según la necesidad del proyecto",
            "Rápida movilización de equipo y maquinaria",
            "Operación eficiente en distintas condiciones geológicas",
          ],
        },
        {
          title: "Control y Calidad de Muestras",
          icon: FlaskConical,
          items: [
            "Sistema de colecta con ciclón y homogeneizador de muestras",
            "Trazabilidad e identificación rigurosa",
            "Procedimientos estandarizados de manipulación",
            "Reducción de pérdidas y contaminaciones",
          ],
        },
      ],
    },
    differentials: {
      title: "¿Por qué elegir Rio Preto Prospecção?",
      description:
        "Operación de campo, rigor técnico y responsabilidad ambiental trabajando juntos para campañas más seguras, productivas y auditables.",
      groups: [
        {
          title: "Diferenciales Operacionales",
          icon: Truck,
          items: ["Equipos propios", "Movilización rápida", "Equipo especializado"],
        },
        {
          title: "Diferenciales Técnicos",
          icon: Database,
          items: ["Control de calidad de muestras", "Base de datos estructurada", "Modelamiento 3D", "Trazabilidad", "Conformidad ANM"],
        },
        {
          title: "Seguridad y Medio Ambiente",
          icon: Sprout,
          items: [
            "Cumplimiento de normas de seguridad laboral",
            "Uso de EPIs y entrenamientos periódicos",
            "Procedimientos de control ambiental en campo",
            "Gestión responsable de residuos de perforación",
          ],
        },
      ],
    },
    experience: {
      title: "Experiencia y capacidad para campañas completas",
      description:
        "Rio Preto Prospecção Ltda posee amplia experiencia en campañas de investigación mineral, actuando en ambientes geológicos diversos. Garantizamos confiabilidad técnica y optimización de inversiones con proyectos completos, desde el reconocimiento hasta la consolidación de datos.",
      minerals: ["Oro", "Hierro", "Caliza", "Fosfato", "Grafito", "Manganeso"],
      capabilityMarks: [
        { value: "Arcaico", label: "ambientes geológicos" },
        { value: "Cuaternario", label: "cobertura temporal" },
        { value: "Inicial", label: "exploración" },
        { value: "Recurso", label: "definición técnica" },
      ],
      journey: ["Reconocimiento", "Prospección", "Sondaje", "Base de Datos", "Modelamiento 3D", "Informes Técnicos"].map(
        (title, index) => ({ title, icon: commonJourneyIcons[index] }),
      ),
    },
    equipment: {
      title: "Equipos preparados para campo",
      description:
        "Un conjunto técnico pensado para productividad, movilización y control de muestras en campañas de sondaje rotopercusivo.",
      items: [
        {
          title: "Sonda RC montada sobre remolque",
          description: "Configuración preparada para movilidad y operación eficiente en campañas de campo.",
          icon: Drill,
        },
        {
          title: "Compresor de alta presión",
          description: "Soporte al sondaje rotopercusivo con estabilidad operacional y rendimiento.",
          icon: Gauge,
        },
        {
          title: "Sistema ciclón + homogeneizador",
          description: "Colecta, homogeneización y división de muestras con control de representatividad.",
          icon: Wrench,
        },
        {
          title: "Equipo técnico entrenado",
          description: "Profesionales preparados para ejecución segura, trazable y estandarizada.",
          icon: HardHat,
        },
        {
          title: "Vehículos 4x4 para acceso remoto",
          description: "Logística de apoyo para desplazamiento en áreas de difícil acceso y frentes remotos.",
          icon: Mountain,
        },
      ],
    },
    contactSection: {
      title: "¿Necesita iniciar u optimizar una campaña de investigación mineral?",
      text:
        "Contacte a Rio Preto Prospecção y cuente con soporte técnico especializado para sondaje, evaluación geológica y desarrollo de proyectos mineros.",
      whatsappCta: "Hablar por WhatsApp",
      emailCta: "Enviar e-mail",
    },
    footer: {
      line: "Investigación Mineral | Sondaje RC | Evaluación Geológica",
      company: "RIO PRETO PROSPECÇÃO LTDA",
    },
  },
};
