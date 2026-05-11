import { Project, Skill, Contact } from '@/types';

export const personalInfo = {
    name: 'Domingos Manuel Daniel',
    title: 'Full Stack Developer',
    location: 'Luanda, Angola',
    bio: 'Full Stack Developer with 5+ years of experience crafting robust web applications from front to back. Skilled in React, TypeScript, Next.js, Laravel, and Node.js — I build performant, scalable solutions with clean architecture and pixel-perfect interfaces.',
    profileImage: '/me-2.png'
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
        imageUrl: '/meu-cv.png',
        images: ['/meu-cv.png', '/meu-cv-2.png'],
        category: 'Web App'
    },
    {
        id: '2',
        name: 'Ango Educa V2',
        description: 'Advanced school management platform serving 300+ active users with real-time analytics and modern tech stack.',
        technologies: ['Laravel', 'PHP 8.1', 'Vue.js', 'Livewire', 'MySQL'],
        githubUrl: 'https://github.com/Domingos-Daniel',
        liveUrl: 'https://ango-educa.com',
        imageUrl: '/ango-educa-v2.png',
        images: ['/ango-educa-v2.png', '/ango-educa-v2-2.png'],
        category: 'Platform'
    },
    {
        id: '3',
        name: 'LCJ-Educa',
        description: 'Online learning platform with student areas, articles, paid plans, and offline access.',
        technologies: ['React', 'TypeScript', 'REST APIs', 'Node.js'],
        githubUrl: 'https://github.com/Domingos-Daniel',
        liveUrl: 'https://lcj-educa.com',
        imageUrl: '/lcj (1).png',
        images: ['/lcj (1).png', '/lcj (2).png'],
        category: 'Platform'
    },
    {
        id: '4',
        name: 'Art-Ngola',
        description: 'Digital art promotion portal with multimedia uploads and artist profiles.',
        technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
        githubUrl: 'https://github.com/Domingos-Daniel',
        imageUrl: '/art-ngola.png',
        images: ['/art-ngola.png'],
        category: 'Web App'
    },
    {
        id: '5',
        name: 'Ango-Educa',
        description: 'Modular school management system with dynamic dashboards.',
        technologies: ['React', 'TypeScript', 'REST APIs', 'Chart.js'],
        githubUrl: 'https://github.com/Domingos-Daniel',
        imageUrl: '/ango-educa.png',
        images: ['/ango-educa.png'],
        category: 'Platform'
    },
    {
        id: '6',
        name: 'ATM Management System',
        description: 'Real-time monitoring interface for ATMs across regions.',
        technologies: ['React', 'TypeScript', 'REST APIs', 'WebSocket'],
        githubUrl: 'https://github.com/Domingos-Daniel',
        imageUrl: '/atm-dashboard.jpg',
        images: ['/atm-dashboard.jpg'],
        category: 'Dashboard'
    },
    {
        id: '7',
        name: 'POS Terminal Control',
        description: 'Dashboard for bank agents to manage POS terminals and transactions.',
        technologies: ['React', 'TypeScript', 'REST APIs', 'MUI'],
        githubUrl: 'https://github.com/Domingos-Daniel',
        imageUrl: '/tpa.jpg',
        images: ['/tpa.jpg'],
        category: 'Dashboard'
    },
    {
        id: '8',
        name: 'MedConsulta',
        description: 'Online platform for medical consultations with patient profiles and appointment management.',
        technologies: ['Tailwind CSS', 'Next.js', 'TypeScript'],
        githubUrl: 'https://github.com/Domingos-Daniel',
        imageUrl: '/medconsulta.png',
        images: ['/medconsulta.png'],
        category: 'Web App'
    },
    {
        id: '9',
        name: 'Academix',
        description: 'Angolan e-learning platform offering a rich catalog of courses across multiple knowledge areas with structured learning paths and student progress tracking.',
        technologies: ['Laravel', 'PHP 8.3', 'Vue.js', 'MySQL', 'Tailwind CSS'],
        githubUrl: 'https://github.com/Domingos-Daniel',
        imageUrl: '/academix-1.png',
        images: ['/academix-1.png', '/academix-2.png', '/academix-3.png', '/academix-4.png'],
        category: 'Platform'
    },
    {
        id: '10',
        name: 'SafeFacturas',
        description: 'Complete Electronic Invoicing system built in full compliance with AGT Decree 71/25. Automates invoice generation, tax calculation, and regulatory reporting.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MySQL'],
        githubUrl: 'https://github.com/Domingos-Daniel',
        imageUrl: '/safefacturas-1.png',
        images: ['/safefacturas-1.png'],
        category: 'Web App'
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
    { name: 'AI/ML', category: 'Tools' },
    { name: 'Claude Models', category: 'Tools' }
];
