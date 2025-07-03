'use client';

import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/portfolio';
import { useTranslation } from 'react-i18next';
import { Mail } from 'lucide-react';

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
      {/* Learning Section */}
      <div className="mt-16 text-center">
        <div className="relative p-8 bg-gray-900/20 backdrop-blur-xl border border-gray-700/30 rounded-2xl max-w-3xl mx-auto hover:border-cyan-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10">
          {/* Glassmorphism background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/10 via-gray-900/5 to-black/20 rounded-2xl pointer-events-none"></div>
          
          {/* Animated border gradient */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
          
          <div className="relative">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-4">
              {t('projects.andSoMuchMore')}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('projects.glimpseText')}
            </p>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-xl opacity-50"></div>
          <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-50"></div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <div className="group relative p-8 bg-gray-900/20 backdrop-blur-xl border border-gray-700/30 rounded-2xl max-w-2xl mx-auto hover:border-blue-500/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10">
          {/* Glassmorphism background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/10 via-gray-900/5 to-black/20 rounded-2xl pointer-events-none"></div>
          
          {/* Animated border gradient */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
          
          <div className="relative">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-4">
              {t('projects.interestedWorking')}
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              {t('projects.discussOpportunities')}
            </p>
            <a
              href="mailto:domingoscahandadaniel@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Mail size={20} />
              {t('projects.getInTouch')}
            </a>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  );
}
