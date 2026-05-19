'use client';

import { Github, ExternalLink, Layers } from 'lucide-react';
import type { Project } from '@/types';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ImageCarousel from './ImageCarousel';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  const { t } = useTranslation();

  // Get translated description based on project name
  const getProjectDescription = (projectName: string) => {
    const projectKeyMap: { [key: string]: string } = {
      'LCJ-Educa': 'lcjEduca',
      'Art-Ngola': 'artNgola',
      'Ango-Educa': 'angoEduca',
      'ATM Management System': 'atmManagement',
      'POS Terminal Control': 'posTerminal',
      'MedConsulta': 'medConsulta',
      'Meu CV': 'meuCv',
      'Ango Educa V2': 'angoEducaV2',
      'Academix': 'academix',
      'SafeFacturas': 'safeFacturas'
    };

    const projectKey = projectKeyMap[projectName];
    if (projectKey) {
      const translationKey = `projects.projects.${projectKey}.description`;
      const translated = t(translationKey);
      return translated !== translationKey ? translated : project.description;
    }
    return project.description;
  };

  const images = project.images && project.images.length > 0
    ? project.images
    : [project.imageUrl];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      <div className="group relative bg-gray-900/30 backdrop-blur-xl border border-gray-700/30 rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/15 transition-all duration-700 hover:border-blue-500/40 card-hover-lift">
        {/* Animated gradient border effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-400/30 animate-gradient-shift" />
          <div className="absolute inset-0 rounded-2xl bg-gray-900/95" />
        </div>

        {/* Carousel / Image Section */}
        <ImageCarousel images={images} alt={project.name} />

        {/* Category badge */}
        {project.category && (
          <div className="absolute top-3 left-3 z-20">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/20 text-blue-200 text-xs font-medium"
            >
              <Layers size={12} />
              {project.category}
            </motion.span>
          </div>
        )}

        {/* Project Content */}
        <div className="relative p-6 bg-gradient-to-b from-gray-900/60 to-gray-900/90 backdrop-blur-sm">
          {/* Project Name */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-500">
            {project.name}
          </h3>

          {/* Description */}
          <p className="text-gray-400 mb-5 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-500 line-clamp-3">
            {getProjectDescription(project.name)}
          </p>

          {/* Technologies */}
          <div className="mb-5">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 + techIndex * 0.05 }}
                  className="px-2.5 py-1 bg-gray-800/60 text-gray-300 text-xs rounded-lg border border-gray-700/40 hover:border-blue-500/40 hover:text-blue-200 hover:bg-blue-900/20 transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2.5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white text-sm font-medium rounded-xl transition-all duration-300 border border-blue-500/30 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0"
              >
                <ExternalLink size={15} />
                {t('projects.viewLive')}
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${project.liveUrl ? 'flex-1' : 'w-full'} flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800/60 hover:bg-gray-700/60 text-gray-300 hover:text-white text-sm font-medium rounded-xl transition-all duration-300 border border-gray-700/30 hover:border-gray-600/50 hover:shadow-lg hover:shadow-gray-900/30 hover:-translate-y-0.5 active:translate-y-0`}
            >
              <Github size={15} />
              {t('projects.viewOnGithub')}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
