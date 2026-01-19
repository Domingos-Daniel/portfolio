import { Project, Skill, Contact } from '@/types';

export const personalInfo = {
    name: 'Domingos Manuel Daniel',
    title: 'Web Developer',
    location: 'Luanda, Angola',
    bio: 'Frontend Developer with a passion for building clean, responsive, and user-friendly interfaces using React and TypeScript. Focused on scalable and maintainable solutions.',
    profileImage: '/me.jpg'
};

export const contact: Contact = {
    email: 'domingoscahandadaniel@gmail.com',
    github: 'https://github.com/Domingos-Daniel',
    linkedin: 'https://www.linkedin.com/in/domingos-daniel-47b80728b/',
    location: 'Luanda, Angola',
    phone: '+244 949 901 350'
};

export const projects: Project[] = [
    {
        id: '1',
        name: 'Meu CV',
        description: 'Professional AI-powered SaaS platform for creating custom documents with intelligent templates and real-time collaboration.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI', 'GitHub Copilot'],
        githubUrl: 'https://github.com/Domingos-Daniel',
        liveUrl: 'https://meu-cv.com',
        imageUrl: '/meu-cv.png'
    },
    {
        id: '2',
        name: 'Ango Educa V2',
        description: 'Advanced school management platform serving 300+ active users with real-time analytics and modern tech stack.',
        technologies: ['Laravel', 'PHP 8.1', 'Vue.js', 'Livewire', 'MySQL'],
        githubUrl: 'https://github.com/Domingos-Daniel',
        liveUrl: 'https://ango-educa.com',
        imageUrl: '/ango-educa-v2.png'
    },
    {
        id: '3',
        name: 'LCJ-Educa',
        description: 'Online learning platform with student areas, articles, paid plans, and offline access.',
        technologies: ['React', 'TypeScript', 'REST APIs', 'Node.js'],
        githubUrl: 'https://github.com/Domingos-Daniel',
        liveUrl: 'https://lcj-educa.com',
        imageUrl: '/lcj (1).png'
    },
    {
        id: '4',
        name: 'Art-Ngola',
        description: 'Digital art promotion portal with multimedia uploads and artist profiles.',
        technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
        githubUrl: 'https://github.com/Domingos-Daniel',
        imageUrl: '/art-ngola.png'
    },
    {
        id: '5',
        name: 'Ango-Educa',
        description: 'Modular school management system with dynamic dashboards.',
        technologies: ['React', 'TypeScript', 'REST APIs', 'Chart.js'],
        githubUrl: 'https://github.com/Domingos-Daniel',
        imageUrl: '/ango-educa.png'
    },
    {
        id: '6',
        name: 'ATM Management System',
        description: 'Real-time monitoring interface for ATMs across regions.',
        technologies: ['React', 'TypeScript', 'REST APIs', 'WebSocket'],
        githubUrl: 'https://github.com/Domingos-Daniel',
        imageUrl: '/atm-dashboard.jpg'
    },
    {
        id: '7',
        name: 'POS Terminal Control',
        description: 'Dashboard for bank agents to manage POS terminals and transactions.',
        technologies: ['React', 'TypeScript', 'REST APIs', 'MUI'],
        githubUrl: 'https://github.com/Domingos-Daniel',
        imageUrl: '/tpa.jpg'
    },
    {
        id: '8',
        name: 'MedConsulta',
        description: 'Online platform for medical consultations with patient profiles and appointment management.',
        technologies: ['Tailwind CSS', 'Next.js', 'TypeScript'],
        githubUrl: 'https://github.com/Domingos-Daniel',
        imageUrl: '/medconsulta.png'
    }
];

export const skills: Skill[] = [
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'Vue.js', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'MUI', category: 'Frontend' },
    { name: 'REST APIs', category: 'Backend' },
    { name: 'PhP', category: 'Backend' },
    { name: 'Laravel', category: 'Backend' },
    { name: 'Asp.Net', category: 'Backend' },
    { name: 'MySQL', category: 'Backend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Backend' },
    { name: 'Git', category: 'Tools' },
    { name: 'AWS', category: 'Tools' },
    { name: 'Azure', category: 'Tools' },
    { name: 'GitHub', category: 'Tools' },
    { name: 'Docker', category: 'Tools' },
    { name: 'CI/CD', category: 'Tools' },
    { name: 'GitHub Copilot', category: 'Tools' },
    { name: 'OpenAI', category: 'Tools' },
    { name: 'AI/ML', category: 'Tools' }
];
