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
        title: 'Frontend Developer',
        getInTouch: 'Get in touch',
        viewGithub: 'View GitHub',
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
        }
      },
      
      // Footer
      footer: {
        copyright: 'All rights reserved.',
        email: 'Email',
        github: 'GitHub',
        location: 'Location'
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
        title: 'Desenvolvedor Frontend',
        getInTouch: 'Entre em contato',
        viewGithub: 'Ver GitHub',
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
        }
      },
      
      // Footer
      footer: {
        copyright: 'Todos os direitos reservados.',
        email: 'Email',
        github: 'GitHub',
        location: 'Localização'
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
