'use client';

import Image from "next/image";
import Link from "next/link";
import { Github, Mail, MapPin, ArrowRight } from 'lucide-react';
import { personalInfo, contact } from '@/data/portfolio';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-2xl">
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                width={320}
                height={320}
                className="object-cover w-full h-full"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDMyMCAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMzIwIiByeD0iMTYwIiBmaWxsPSIjMzc0MTUxIi8+CjxjaXJjbGUgY3g9IjE2MCIgY3k9IjEzMCIgcj0iNDAiIGZpbGw9IiM2Qjc0ODkiLz4KPGVsbGlwc2UgY3g9IjE2MCIgY3k9IjIyMCIgcng9IjYwIiByeT0iNDAiIGZpbGw9IiM2Qjc0ODkiLz4KPC9zdmc+';
                }}
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              {personalInfo.name}
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-blue-400 font-medium mb-6">
              {t('home.title')}
            </h2>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300 mb-6">
              <MapPin size={20} />
              <span>{personalInfo.location}</span>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              {t('home.bio')}
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                <Mail size={20} />
                {t('home.getInTouch')}
              </a>
              
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-gray-500 text-white font-medium rounded-lg transition-colors hover:bg-gray-800"
              >
                <Github size={20} />
                {t('home.viewGithub')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 border-t border-gray-800/50">
        <div className="grid md:grid-cols-2 gap-8">
          <Link
            href="/projects"
            className="group relative p-8 bg-gray-900/20 backdrop-blur-xl border border-gray-700/30 rounded-2xl hover:border-blue-500/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10"
          >
            {/* Glassmorphism background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/10 via-gray-900/5 to-black/20 rounded-2xl pointer-events-none"></div>
            
            {/* Animated border gradient */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            
            <div className="relative">
              <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                {t('home.viewProjects')}
              </h3>
              <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                {t('home.viewProjectsDesc')}
              </p>
              <div className="flex items-center text-blue-400 group-hover:text-blue-300">
                <span className="mr-2">{t('home.seeAllProjects')}</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Link>
          
          <Link
            href="/skills"
            className="group relative p-8 bg-gray-900/20 backdrop-blur-xl border border-gray-700/30 rounded-2xl hover:border-purple-500/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10"
          >
            {/* Glassmorphism background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/10 via-gray-900/5 to-black/20 rounded-2xl pointer-events-none"></div>
            
            {/* Animated border gradient */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            
            <div className="relative">
              <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                {t('home.mySkills')}
              </h3>
              <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                {t('home.mySkillsDesc')}
              </p>
              <div className="flex items-center text-purple-400 group-hover:text-purple-300">
                <span className="mr-2">{t('home.viewSkills')}</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Link>
        </div>
      </section>
    </div>
  );
}
