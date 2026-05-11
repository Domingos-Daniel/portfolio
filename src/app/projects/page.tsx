'use client';

import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/portfolio';
import { useTranslation } from 'react-i18next';
import { Mail, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';

export default function ProjectsPage() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('All');

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(projects.map(p => p.category || 'Other'));
    return ['All', ...Array.from(cats)];
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
          <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            {t('projects.title')}
          </span>
        </h1>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"
        />
      </motion.div>

      {/* Category Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-400 border ${
              activeFilter === category
                ? 'bg-blue-500/20 border-blue-500/40 text-blue-300 shadow-lg shadow-blue-500/10'
                : 'bg-gray-800/30 border-gray-700/30 text-gray-400 hover:text-gray-200 hover:border-gray-600/50 hover:bg-gray-800/50'
            }`}
          >
            {category}
            <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
              activeFilter === category
                ? 'bg-blue-500/30 text-blue-200'
                : 'bg-gray-700/50 text-gray-500'
            }`}>
              {category === 'All'
                ? projects.length
                : projects.filter(p => p.category === category).length}
            </span>
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { value: projects.length + '+', label: t('projects.stats.projects') },
          { value: '300+', label: t('projects.stats.activeUsers') },
          { value: '10+', label: t('projects.stats.technologies') },
          { value: '5+', label: t('projects.stats.yearsExp') },
        ].map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="text-center p-6 rounded-2xl bg-gray-900/20 backdrop-blur-xl border border-gray-700/20 hover:border-blue-500/30 transition-all duration-500"
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
              {stat.value}
            </div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* And so much more section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-20 text-center"
      >
        <div className="relative p-10 bg-gray-900/20 backdrop-blur-xl border border-gray-700/30 rounded-3xl max-w-3xl mx-auto hover:border-blue-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 overflow-hidden">
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
          </div>

          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-blue-400 bg-clip-text text-transparent mb-4"
            >
              {t('projects.andSoMuchMore')}
            </motion.h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              {t('projects.glimpseText')}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-16 text-center"
      >
        <div className="group relative p-10 bg-gray-900/20 backdrop-blur-xl border border-gray-700/30 rounded-3xl max-w-2xl mx-auto hover:border-blue-500/40 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/5 overflow-hidden">
          {/* Animated shimmer */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

          <div className="relative">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4">
              {t('projects.interestedWorking')}
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              {t('projects.discussOpportunities')}
            </p>
            <a
              href="mailto:domingoscahandadaniel@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-2xl transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1 active:translate-y-0 group/btn"
            >
              <Mail size={20} />
              {t('projects.getInTouch')}
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
