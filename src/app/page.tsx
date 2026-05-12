'use client';

import Image from "next/image";
import Link from "next/link";
// @ts-expect-error
import { Github, Mail, MapPin, ArrowRight, Linkedin, Code2, Palette } from 'lucide-react';
import { personalInfo, contact, projects } from '@/data/portfolio';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import TypingEffect from '@/components/TypingEffect';

export default function Home() {
  const { t } = useTranslation();

  // Featured projects: Meu CV, Ango Educa V2, SafeFacturas
  const featuredProjects = useMemo(() => {
    const featuredIds = ['1', '2', '10'];
    return featuredIds.map(id => projects.find(p => p.id === id)!).filter(Boolean);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/3 to-cyan-500/3 rounded-full blur-3xl" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-blue-500/40 via-cyan-500/40 to-blue-400/40 animate-spin-slow blur-sm" />

              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
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
            </div>
            {/* Floating decorative elements */}
            <motion.div
              animate={{
                y: [-5, 5, -5],
                rotate: [0, 10, 0],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30"
            >
              <Code2 size={18} className="text-white" />
            </motion.div>
            <motion.div
              animate={{
                y: [5, -5, 5],
                rotate: [0, -10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/30"
            >
              <Palette size={14} className="text-white" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h2 variants={itemVariants} className="text-xl lg:text-2xl text-blue-400 font-medium mb-4">
              {t('home.title')}
            </motion.h2>

            <motion.h1
              variants={itemVariants}
              className="text-4xl lg:text-6xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-2 text-gray-400 mb-6"
            >
              <MapPin size={18} />
              <span className="text-sm">{personalInfo.location}</span>
            </motion.div>

            <motion.div
              variants={itemVariants}
            >
              <TypingEffect text={t('home.bio')} className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl" />
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Mail size={18} />
                {t('home.getInTouch')}
              </a>

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800/60 border border-gray-700/40 hover:border-gray-600/60 text-white font-medium rounded-xl transition-all duration-300 hover:bg-gray-800/80 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Github size={18} />
                {t('home.viewGithub')}
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0077B5]/20 border border-[#0077B5]/30 hover:bg-[#0077B5]/30 text-blue-200 font-medium rounded-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Linkedin size={18} />
                {t('home.viewLinkedin')}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Preview */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 border-t border-gray-800/30"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-10"
        >
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">{t('home.featuredProjects')}</h2>
            <p className="text-gray-400 text-sm">{t('home.latestWork')}</p>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
          >
            {t('home.viewAll')}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Featured projects grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group relative rounded-2xl overflow-hidden border border-gray-700/30 hover:border-blue-500/30 transition-all duration-500 bg-gray-900/20 backdrop-blur-xl card-hover-lift"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
                {project.category && (
                  <span className="absolute top-3 left-3 inline-flex items-center px-2.5 py-0.5 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/20 text-blue-200 text-xs font-medium">
                    {project.category}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold mb-1.5 group-hover:text-blue-300 transition-colors duration-300">{project.name}</h3>
                <p className="text-gray-400 text-xs line-clamp-2 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="px-2 py-0.5 text-xs bg-gray-800/60 text-gray-400 rounded-md border border-gray-700/30">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-0.5 text-xs text-gray-500">+{project.technologies.length - 3}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Quick Navigation */}
      <section className="py-16 border-t border-gray-800/30">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/projects"
              className="group relative block p-8 bg-gray-900/20 backdrop-blur-xl border border-gray-700/30 rounded-2xl hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 overflow-hidden"
            >
              {/* Shimmer on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Code2 size={20} className="text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {t('home.viewProjects')}
                  </h3>
                </div>
                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {t('home.viewProjectsDesc')}
                </p>
                <div className="flex items-center text-blue-400 group-hover:text-blue-300 text-sm font-medium">
                  <span className="mr-2">{t('home.seeAllProjects')}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/skills"
              className="group relative block p-8 bg-gray-900/20 backdrop-blur-xl border border-gray-700/30 rounded-2xl hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Palette size={20} className="text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {t('home.mySkills')}
                  </h3>
                </div>
                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {t('home.mySkillsDesc')}
                </p>
                <div className="flex items-center text-blue-400 group-hover:text-blue-300 text-sm font-medium">
                  <span className="mr-2">{t('home.viewSkills')}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
