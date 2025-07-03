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
        projects: 'Projects',
        skills: 'Skills'
      },
      
      // Home Page
      home: {
        title: 'Web Developer',
        bio: 'Web Developer with a passion for building clean, responsive, and user-friendly interfaces using React and TypeScript. Focused on scalable and maintainable solutions.',
        getInTouch: 'Get in touch',
        viewGithub: 'View GitHub',
        viewLinkedin: 'LinkedIn',
        viewProjects: 'View My Projects',
        viewProjectsDesc: 'Explore my latest work including web applications, dashboards, and learning platforms.',
        seeAllProjects: 'See all projects',
        mySkills: 'My Skills',
        mySkillsDesc: 'Discover the technologies and tools I use to build modern web applications.',
        viewSkills: 'View skills'
      },
      
      // Projects Page
      projects: {
        title: 'My Projects',
        subtitle: 'Here are some of the projects I\'ve worked on recently',
        viewOnGithub: 'View on GitHub',
        technologies: 'Technologies',
        andSoMuchMore: 'And so much more...',
        glimpseText: 'These projects are just a glimpse into my work. I\'ve tackled various challenges and technologies, always striving to learn and improve.',
        interestedWorking: 'Interested in working together?',
        discussOpportunities: 'I\'m always open to discussing new opportunities and exciting projects.',
        getInTouch: 'Get in touch',
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
          }
        }
      },
      
      // Skills Page
      skills: {
        title: 'My Skills',
        subtitle: 'Technologies and tools I work with',
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
        using: 'using'
      },
      
      // Language
      language: {
        portuguese: 'Português',
        english: 'English'
      }
    }
  },
  pt: {
    translation: {
      // Navigation
      nav: {
        home: 'Início',
        projects: 'Projetos',
        skills: 'Habilidades'
      },
      
      // Home Page
      home: {
        title: 'Desenvolvedor Web',
        bio: 'Desenvolvedor Web com paixão por construir interfaces limpas, responsivas e amigáveis ao usuário usando React e TypeScript. Focado em soluções escaláveis e de fácil manutenção.',
        getInTouch: 'Entre em contato',
        viewGithub: 'Ver GitHub',
        viewLinkedin: 'LinkedIn',
        viewProjects: 'Ver Meus Projetos',
        viewProjectsDesc: 'Explore meu trabalho mais recente incluindo aplicações web, dashboards e plataformas de aprendizado.',
        seeAllProjects: 'Ver todos os projetos',
        mySkills: 'Minhas Habilidades',
        mySkillsDesc: 'Descubra as tecnologias e ferramentas que uso para construir aplicações web modernas.',
        viewSkills: 'Ver habilidades'
      },
      
      // Projects Page
      projects: {
        title: 'Meus Projetos',
        subtitle: 'Aqui estão alguns dos projetos em que trabalhei recentemente',
        viewOnGithub: 'Ver no GitHub',
        technologies: 'Tecnologias',
        andSoMuchMore: 'E muito mais...',
        glimpseText: 'Estes projetos são apenas uma amostra do meu trabalho. Enfrentei vários desafios e tecnologias, sempre me esforçando para aprender e melhorar.',
        interestedWorking: 'Interessado em trabalhar junto?',
        discussOpportunities: 'Estou sempre aberto a discutir novas oportunidades e projetos empolgantes.',
        getInTouch: 'Entre em contato',
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
          }
        }
      },
      
      // Skills Page
      skills: {
        title: 'Minhas Habilidades',
        subtitle: 'Tecnologias e ferramentas com que trabalho',
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
        using: 'usando'
      },
      
      // Language
      language: {
        portuguese: 'Português',
        english: 'English'
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
