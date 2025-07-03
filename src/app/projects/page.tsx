'use client';

import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/portfolio';
import { useTranslation } from 'react-i18next';

export default function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          {t('projects.title')}
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {t('projects.subtitle')}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* And so much more section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">
          {t('projects.andSoMuchMore')}
        </h2>
        <p className="text-gray-300 mb-6">
          {t('projects.glimpseText')}
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <div className="bg-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-4">
            {t('projects.interestedWorking')}
          </h2>
          <p className="text-gray-300 mb-6">
            {t('projects.discussOpportunities')}
          </p>
          <a
            href="mailto:domingoscahandadaniel@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            {t('projects.getInTouch')}
          </a>
        </div>
      </div>
    </div>
  );
}
