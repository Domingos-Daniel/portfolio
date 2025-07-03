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
      'MedConsulta': 'medConsulta'
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
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Project Image */}
      <div className="relative h-48 bg-gray-700">
        <Image
          src={project.imageUrl}
          alt={project.name}
          fill
          className="object-cover"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            const target = e.target as HTMLImageElement;
            target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMzc0MTUxIi8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDE2MFYxNDBIMTc1VjEyNVoiIGZpbGw9IiM2Qjc0ODkiLz4KPHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0yMCAxNUMxNy4yNCAxNSAxNSAxNy4yNCAxNSAyMEMxNSAyMi43NiAxNy4yNCAyNSAyMCAyNUMyMi43NiAyNSAyNSAyMi43NiAyNSAyMEMyNSAxNy4yNCAyMi43NiAxNSAyMCAxNVpNMjAgMjNDMTguMzQgMjMgMTcgMjEuNjYgMTcgMjBDMTcgMTguMzQgMTguMzQgMTcgMjAgMTdDMjEuNjYgMTcgMjMgMTguMzQgMjMgMjBDMjMgMjEuNjYgMjEuNjYgMjMgMjAgMjNaIiBmaWxsPSIjNkI3NDg5Ii8+CjxwYXRoIGQ9Ik0zMCAxMEgxMEM4LjM0IDEwIDcgMTEuMzQgNyAxM1YyN0M3IDI4LjY2IDguMzQgMzAgMTAgMzBIMzBDMzEuNjYgMzAgMzMgMjguNjYgMzMgMjdWMTNDMzMgMTEuMzQgMzEuNjYgMTAgMzAgMTBaTTMxIDI3QzMxIDI3LjU1IDMwLjU1IDI4IDMwIDI4SDEwQzkuNDUgMjggOSAyNy41NSA5IDI3VjEzQzkgMTIuNDUgOS40NSAxMiAxMCAxMkgzMEMzMC41NSAxMiAzMSAxMi40NSAzMSAxM1YyN1oiIGZpbGw9IiM2Qjc0ODkiLz4KPHN2Zz4KPC9zdmc+';
          }}
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
          {getProjectDescription(project.name)}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-md border border-blue-800/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-md transition-colors"
          >
            <Github size={16} />
            {t('projects.viewOnGithub')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
