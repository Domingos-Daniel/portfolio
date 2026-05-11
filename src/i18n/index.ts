import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Recursos de tradução
const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        skills: 'Skills'
      },
      
      // About Page
      about: {
        title: 'About Me',
        subtitle: 'Get to know me better',
        bio: 'I am a passionate Full Stack Developer with over 5 years of experience engineering scalable and robust web applications. With a strong command of modern technologies including React, TypeScript, Next.js, Node.js, and PHP, I oversee the entire software development lifecycle. From crafting pixel-perfect, highly intuitive user interfaces to architecting secure and high-performance server-side systems, I am dedicated to delivering premium digital products that drive real business value.',
        experienceTitle: 'Professional Experience',
        educationTitle: 'Education',
        servicesTitle: 'Services',
        experience: {
          safeq_senior: {
            role: 'Senior Web Developer',
            company: 'SafeQ',
            period: 'Jun 2024 - 2025',
            description: 'Architecting and optimizing complex e-commerce management systems. Leading the development of enterprise-grade internal solutions to streamline operations.'
          },
          safeq: {
            role: 'Full Stack Developer',
            company: 'SafeQ',
            period: '2022 - 2023',
            description: 'Developed and maintained full-stack architectures for various critical projects, focusing on scalable e-commerce platforms and robust internal enterprise tools.'
          },
          freelance: {
            role: 'IT Systems Analyst',
            company: 'AQ tech · Freelance',
            period: 'May 2020 - Sep 2021',
            description: 'Conducted comprehensive systems analysis and planned strategic development methodologies for diverse client applications, ensuring precision and high performance.'
          }
        },
        education: {
          university: {
            degree: "Bachelor's Degree, Computer Engineering",
            school: 'Universidade Agostinho Neto',
            period: 'Oct 2021 - Aug 2025',
            description: 'JavaScript, English and more.'
          },
          highschool: {
            degree: 'Technical High School, Informatics',
            school: 'Instituto Médio Técnico Simione Mucune',
            period: 'Feb 2017 - Mar 2021',
            description: 'JavaScript and CSS.'
          }
        },
        services: [
          'Web Development',
          'WordPress Design',
          'App Development',
          'Database Development',
          'Custom Software Development'
        ],
        downloadCv: 'Download CV',
        contactMe: 'Contact Me'
      },
      
      // Home Page
      home: {
        title: 'Full Stack Developer',
        bio: 'Full Stack Developer with 5+ years of experience crafting robust web applications from front to back. Skilled in React, TypeScript, Next.js, Laravel, and Node.js — I build performant, scalable solutions with clean architecture and pixel-perfect interfaces that users love.',
        getInTouch: 'Get in touch',
        viewGithub: 'View GitHub',
        viewLinkedin: 'LinkedIn',
        viewProjects: 'View My Projects',
        viewProjectsDesc: 'Explore my latest work including web applications, dashboards, and learning platforms.',
        seeAllProjects: 'See all projects',
        mySkills: 'My Skills',
        mySkillsDesc: 'Discover the technologies and tools I use to build modern web applications.',
        viewSkills: 'View skills',
        featuredProjects: 'Featured Projects',
        latestWork: 'Latest work highlights',
        viewAll: 'View all'
      },
      
      // Projects Page
      projects: {
        title: 'My Projects',
        subtitle: 'Portfolio',
        viewOnGithub: 'View on GitHub',
        viewLive: 'View Live',
        technologies: 'Technologies',
        andSoMuchMore: 'And so much more...',
        glimpseText: 'These projects are just a glimpse into my work. I\'ve tackled various challenges and technologies, always striving to learn and improve.',
        interestedWorking: 'Interested in working together?',
        discussOpportunities: 'I\'m always open to discussing new opportunities and exciting projects.',
        getInTouch: 'Get in touch',
        stats: {
          projects: 'Projects',
          activeUsers: 'Active Users',
          technologies: 'Technologies',
          yearsExp: 'Years Exp.'
        },
        projects: {
          lcjEduca: {
            name: 'LCJ-Educa',
            description: 'Online learning platform with student areas, articles, paid plans, and offline access.'
          },
          artNgola: {
            name: 'Art-Ngola',
            description: 'Digital art promotion portal with multimedia uploads and artist profiles.'
          },
          angoEduca: {
            name: 'Ango-Educa',
            description: 'Modular school management system with dynamic dashboards.'
          },
          atmManagement: {
            name: 'ATM Management System',
            description: 'Real-time monitoring interface for ATMs across regions.'
          },
          posTerminal: {
            name: 'POS Terminal Control',
            description: 'Dashboard for bank agents to manage POS terminals and transactions.'
          },
          medConsulta: {
            name: 'MedConsulta',
            description: 'Online platform for medical consultations with patient profiles and appointment management.'
          },
          meuCv: {
            name: 'Meu CV',
            description: 'Professional AI-powered SaaS platform for creating custom documents with intelligent templates, real-time collaboration, and advanced formatting. Built with cutting-edge technology to deliver professional-grade CVs and documents.'
          },
          angoEducaV2: {
            name: 'Ango Educa V2',
            description: 'Advanced school management platform serving 300+ active users daily. Features real-time analytics, student tracking, grade management, and interactive dashboards. Built with Laravel and modern frontend technologies for exceptional performance.'
          },
          academix: {
            name: 'Academix',
            description: 'Angolan e-learning platform offering a rich catalog of courses across multiple knowledge areas. Features include structured learning paths, student progress tracking, course categorization, and a modern interface designed for accessible education in Angola.'
          },
          safeFacturas: {
            name: 'SafeFacturas',
            description: 'Complete Electronic Invoicing system built in full compliance with AGT Decree 71/25. Automates invoice generation, tax calculation, and regulatory reporting for Angolan businesses, ensuring legal conformity and operational efficiency.'
          }
        }
      },
      
      // Skills Page
      skills: {
        title: 'My Skills',
        subtitle: 'Skills & Expertise',
        categories: {
          frontend: 'Frontend',
          backend: 'Backend',
          tools: 'Tools',
          other: 'Other'
        },
        continuousLearning: 'Continuous Learning',
        continuousLearningDesc: 'Technology evolves rapidly, and I believe in the importance of continuous learning. I regularly explore new frameworks, tools, and best practices to deliver cutting-edge solutions and maintain high-quality standards in my work.',
        buildTogether: 'Let\'s Build Something Together',
        buildTogetherDesc: 'Have a project in mind? I\'d love to hear about it and discuss how we can bring your ideas to life.',
        contactMe: 'Contact Me',
        viewGithub: 'View GitHub'
      },
      
      // Footer
      footer: {
        copyright: 'All rights reserved.',
        email: 'Email',
        github: 'GitHub',
        location: 'Location',
        getInTouch: 'Get in Touch',
        quickLinks: 'Quick Links',
        followMe: 'Follow Me',
        madeWith: 'Made with',
        using: 'using',
        language: 'Language'
      },
      
      // Language
      language: {
        portuguese: 'Português',
        english: 'English',
        switchLanguage: 'Switch language',
        selectLanguage: 'Select language',
        switchTo: 'Switch to',
        open: 'Open menu',
        close: 'Close menu'
      }
    }
  },
  pt: {
    translation: {
      // Navigation
      nav: {
        home: 'Início',
        about: 'Sobre',
        projects: 'Projetos',
        skills: 'Habilidades'
      },
      
      // About Page
      about: {
        title: 'Sobre Mim',
        subtitle: 'Conheça-me melhor',
        bio: 'Sou um Desenvolvedor Full Stack apaixonado por inovação, com mais de 5 anos de experiência na arquitetura e desenvolvimento de aplicações web robustas e escaláveis. Com um forte domínio no ecossistema moderno — incluindo React, TypeScript, Next.js, Node.js e PHP — atuo em todo o ciclo de vida do software. Desde a criação de interfaces de utilizador (UX/UI) altamente intuitivas e pixel-perfect, até à implementação de back-ends complexos, seguros e de alta performance, o meu foco é entregar soluções digitais de excelência que impulsionam resultados reais de negócio.',
        experienceTitle: 'Experiência profissional',
        educationTitle: 'Formação académica',
        servicesTitle: 'Serviços',
        experience: {
          safeq_senior: {
            role: 'Desenvolvedor Web Sênior',
            company: 'SafeQ',
            period: 'Jun 2024 - 2025',
            description: 'Arquitetura e otimização de sistemas complexos de gestão de e-commerce. Liderança no desenvolvimento de soluções empresariais internas para otimização de operações críticas.'
          },
          safeq: {
            role: 'Desenvolvedor Full Stack',
            company: 'SafeQ',
            period: '2022 - 2023',
            description: 'Desenvolvimento e manutenção de arquiteturas full-stack para diversos projetos críticos, com foco em plataformas de e-commerce escaláveis e ferramentas corporativas robustas.'
          },
          freelance: {
            role: 'Analista de Sistemas de TI',
            company: 'AQ tech · Freelance',
            period: 'Mai 2020 - Set 2021',
            description: 'Análise aprofundada de sistemas e planificação estratégica de metodologias de desenvolvimento para aplicações de clientes, garantindo precisão, eficiência e alta performance.'
          }
        },
        education: {
          university: {
            degree: 'Licenciatura, Engenharia Informática',
            school: 'Universidade Agostinho Neto',
            period: 'Out 2021 - Ago 2025',
            description: 'JavaScript, Inglês e mais.'
          },
          highschool: {
            degree: 'Ensino Médio Técnico, Informática',
            school: 'Instituto Médio Técnico Simione Mucune',
            period: 'Fev 2017 - Mar 2021',
            description: 'JavaScript e CSS.'
          }
        },
        services: [
          'Desenvolvimento Web',
          'Design de WordPress',
          'Desenvolvimento de Aplicativos',
          'Desenvolvimento de Banco de Dados',
          'Desenvolvimento de Software Personalizado'
        ],
        downloadCv: 'Baixar CV',
        contactMe: 'Entre em Contato'
      },
      
      // Home Page
      home: {
        title: 'Desenvolvedor Full Stack',
        bio: 'Desenvolvedor Full Stack com mais de 5 anos de experiência a criar aplicações web robustas de ponta a ponta. Domínio em React, TypeScript, Next.js, Laravel e Node.js — construo soluções performáticas e escaláveis com arquitectura limpa e interfaces pixel-perfect que os utilizadores adoram.',
        getInTouch: 'Entre em contato',
        viewGithub: 'Ver GitHub',
        viewLinkedin: 'LinkedIn',
        viewProjects: 'Ver Meus Projetos',
        viewProjectsDesc: 'Explore meu trabalho mais recente incluindo aplicações web, dashboards e plataformas de aprendizado.',
        seeAllProjects: 'Ver todos os projetos',
        mySkills: 'Minhas Habilidades',
        mySkillsDesc: 'Descubra as tecnologias e ferramentas que uso para construir aplicações web modernas.',
        viewSkills: 'Ver habilidades',
        featuredProjects: 'Projetos em Destaque',
        latestWork: 'Destaques do trabalho recente',
        viewAll: 'Ver todos'
      },
      
      // Projects Page
      projects: {
        title: 'Meus Projetos',
        subtitle: 'Portfólio',
        viewOnGithub: 'Ver no GitHub',
        viewLive: 'Ver Ao Vivo',
        technologies: 'Tecnologias',
        andSoMuchMore: 'E muito mais...',
        glimpseText: 'Estes projetos são apenas uma amostra do meu trabalho. Enfrentei vários desafios e tecnologias, sempre me esforçando para aprender e melhorar.',
        interestedWorking: 'Interessado em trabalhar junto?',
        discussOpportunities: 'Estou sempre aberto a discutir novas oportunidades e projetos empolgantes.',
        getInTouch: 'Entre em contato',
        stats: {
          projects: 'Projetos',
          activeUsers: 'Utilizadores Ativos',
          technologies: 'Tecnologias',
          yearsExp: 'Anos de Exp.'
        },
        projects: {
          lcjEduca: {
            name: 'LCJ-Educa',
            description: 'Plataforma de aprendizado online com áreas de estudantes, artigos, planos pagos e acesso offline.'
          },
          artNgola: {
            name: 'Art-Ngola',
            description: 'Portal de promoção de arte digital com uploads multimídia e perfis de artistas.'
          },
          angoEduca: {
            name: 'Ango-Educa',
            description: 'Sistema modular de gestão escolar com dashboards dinâmicos.'
          },
          atmManagement: {
            name: 'Sistema de Gestão ATM',
            description: 'Interface de monitoramento em tempo real para ATMs em várias regiões.'
          },
          posTerminal: {
            name: 'Controle de Terminal POS',
            description: 'Dashboard para agentes bancários gerenciarem terminais POS e transações.'
          },
          medConsulta: {
            name: 'MedConsulta',
            description: 'Plataforma online para consultas médicas com perfis de pacientes e gestão de agendamentos.'
          },
          meuCv: {
            name: 'Meu CV',
            description: 'Plataforma SaaS profissional com IA para criar documentos personalizados com templates inteligentes, colaboração em tempo real e formatação avançada. Construído com tecnologia de ponta para entregar CVs e documentos de nível profissional.'
          },
          angoEducaV2: {
            name: 'Ango Educa V2',
            description: 'Plataforma avançada de gestão escolar atendendo mais de 300 usuários ativos diariamente. Recursos incluem análises em tempo real, rastreamento de alunos, gestão de notas e dashboards interativos. Construído com Laravel e tecnologias frontend modernas para desempenho excepcional.'
          },
          academix: {
            name: 'Academix',
            description: 'Plataforma E-learning angolana com um catálogo rico de cursos em diversas áreas do saber. Inclui percursos de aprendizagem estruturados, acompanhamento do progresso do aluno, categorização de cursos e uma interface moderna pensada para a educação acessível em Angola.'
          },
          safeFacturas: {
            name: 'SafeFacturas',
            description: 'Sistema completo de Facturação Electrónica desenvolvido em total conformidade com o Decreto 71/25 da AGT. Automatiza a geração de facturas, cálculo de impostos e relatórios regulatórios para empresas angolanas, garantindo conformidade legal e eficiência operacional.'
          }
        }
      },
      
      // Skills Page
      skills: {
        title: 'Minhas Habilidades',
        subtitle: 'Habilidades & Expertise',
        categories: {
          frontend: 'Frontend',
          backend: 'Backend',
          tools: 'Ferramentas',
          other: 'Outras'
        },
        continuousLearning: 'Aprendizado Contínuo',
        continuousLearningDesc: 'A tecnologia evolui rapidamente, e acredito na importância do aprendizado contínuo. Exploro regularmente novos frameworks, ferramentas e melhores práticas para entregar soluções de ponta e manter altos padrões de qualidade no meu trabalho.',
        buildTogether: 'Vamos Construir Algo Juntos',
        buildTogetherDesc: 'Tem um projeto em mente? Adoraria ouvir sobre ele e discutir como podemos dar vida às suas ideias.',
        contactMe: 'Entre em Contato',
        viewGithub: 'Ver GitHub'
      },
      
      // Footer
      footer: {
        copyright: 'Todos os direitos reservados.',
        email: 'Email',
        github: 'GitHub',
        location: 'Localização',
        getInTouch: 'Entre em Contato',
        quickLinks: 'Links Rápidos',
        followMe: 'Siga-me',
        madeWith: 'Feito com',
        using: 'usando',
        language: 'Idioma'
      },
      
      // Language
      language: {
        portuguese: 'Português',
        english: 'English',
        switchLanguage: 'Trocar idioma',
        selectLanguage: 'Selecionar idioma',
        switchTo: 'Mudar para',
        open: 'Abrir menu',
        close: 'Fechar menu'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    }
  });

export default i18n;
