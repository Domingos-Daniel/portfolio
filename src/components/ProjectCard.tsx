'use client';

import Image from 'next/image';
import { Github } from 'lucide-react';
import type { Project } from '@/types';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();
  
  // Get translated description based on project name
  const getProjectDescription = (projectName: string) => {
    // Mapeamento de nomes de projetos para chaves de tradução
    const projectKeyMap: { [key: string]: string } = {
      'LCJ-Educa': 'lcjEduca',
      'Art-Ngola': 'artNgola',
      'Ango-Educa': 'angoEduca',
      'ATM Management System': 'atmManagement',
      'POS Terminal Control': 'posTerminal',
      'MedConsulta': 'medConsulta',
      'Meu CV': 'meuCv',
      'Ango Educa V2': 'angoEducaV2'
    };
    
    const projectKey = projectKeyMap[projectName];
    if (projectKey) {
      const translationKey = `projects.projects.${projectKey}.description`;
      const translated = t(translationKey);
      // Se a tradução existe e é diferente da chave, usa ela; senão usa fallback
      return translated !== translationKey ? translated : project.description;
    }
    
    // Fallback para a descrição original se não encontrar mapeamento
    return project.description;
  };
  return (
    <div className="group relative bg-gray-900/20 backdrop-blur-xl border border-gray-700/30 rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-[1.02] hover:border-blue-500/30">
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/10 via-gray-900/5 to-black/20 pointer-events-none"></div>
      
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
      
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-800/50 to-gray-900/80 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            const target = e.target as HTMLImageElement;
            target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMzc0MTUxIi8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDE2MFYxNDBIMTc1VjEyNVoiIGZpbGw9IiM2Qjc0ODkiLz4KPHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0yMCAxNUMxNy4yNCAxNSAxNSAxNy4yNCAxNSAyMEMxNSAyMi43NiAxNy4yNCAyNSAyMCAyNUMyMi43NiAyNSAyNSAyMi43NiAyNSAyMEMyNSAxNy4yNCAyMi43NiAxNSAyMCAxNVpNMjAgMjNDMTguMzQgMjMgMTcgMjEuNjYgMTcgMjBDMTcgMTguMzQgMTguMzQgMTcgMjAgMTdDMjEuNjYgMTcgMjMgMTguMzQgMjMgMjBDMjMgMjEuNjYgMjEuNjYgMjMgMjAgMjNaIiBmaWxsPSIjNkI3NDg5Ii8+CjxwYXRoIGQ9Ik0zMCAxMEgxMEM4LjM0IDEwIDcgMTEuMzQgNyAxM1YyN0M3IDI4LjY2IDguMzQgMzAgMTAgMzBIMzBDMzEuNjYgMzAgMzMgMjguNjYgMzMgMjdWMTNDMzMgMTEuMzQgMzEuNjYgMTAgMzAgMTBaTTMxIDI3QzMxIDI3LjU1IDMwLjU1IDI4IDMwIDI4SDEwQzkuNDUgMjggOSAyNy41NSA5IDI3VjEzQzkgMTIuNDUgOS40NSAxMiAxMCAxMkgzMEMzMC41NSAxMiAzMSAxMi40NSAzMSAxM1YyN1oiIGZpbGw9IiM2Qjc0ODkiLz4KPHN2Zz4KPC9zdmc+';
          }}
        />
        
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Floating particles effect */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200"></div>
      </div>

      {/* Project Content */}
      <div className="relative p-6 bg-gray-900/30 backdrop-blur-sm">
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">{project.name}</h3>
        <p className="text-gray-300 mb-6 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
          {getProjectDescription(project.name)}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gradient-to-r from-blue-900/40 to-purple-900/40 text-blue-200 text-xs rounded-full border border-blue-700/30 backdrop-blur-sm hover:from-blue-800/50 hover:to-purple-800/50 transition-all duration-300 hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/80 to-purple-600/80 hover:from-blue-500/90 hover:to-purple-500/90 text-white text-sm rounded-lg transition-all duration-300 backdrop-blur-sm border border-blue-500/50 hover:border-blue-400/70 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {t('projects.viewLive')}
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${project.liveUrl ? 'flex-1' : 'w-full'} flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-800/80 to-gray-700/80 hover:from-blue-600/80 hover:to-purple-600/80 text-white text-sm rounded-lg transition-all duration-300 backdrop-blur-sm border border-gray-600/30 hover:border-blue-500/50 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25`}
          >
            <Github size={16} className="group-hover:rotate-12 transition-transform duration-300" />
            {t('projects.viewOnGithub')}
          </a>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

export default ProjectCard;
