'use client';

import Image from 'next/image';
import { personalInfo, contact } from '@/data/portfolio';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import TypingEffect from '@/components/TypingEffect';
// @ts-expect-error lucide-react types not resolved with bundler moduleResolution
import { MapPin, Mail, Github, Linkedin, BriefcaseBusiness, GraduationCap, Wrench, ArrowRight, Calendar, Building2 } from 'lucide-react';

export default function AboutPage() {
  const { t } = useTranslation();

  const services: string[] = t('about.services', { returnObjects: true }) as string[];

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
            {t('about.title')}
          </span>
        </h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"
        />
      </motion.div>

      {/* Profile + Bio Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="grid lg:grid-cols-3 gap-10 mb-20"
      >
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="relative bg-gray-900/30 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-6 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
              <div className="relative">
                <div className="relative w-36 h-36 mx-auto mb-5 rounded-full overflow-hidden border-2 border-blue-500/20 shadow-xl shadow-blue-500/10">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h2 className="text-xl font-bold text-white mb-1">{personalInfo.name}</h2>
                <p className="text-blue-400 text-sm font-medium mb-3">{t('home.title')}</p>
                <div className="flex items-center justify-center gap-1.5 text-gray-400 text-sm mb-5">
                  <MapPin size={14} />
                  <span>{personalInfo.location}</span>
                </div>

                {/* Social links */}
                <div className="flex justify-center gap-2.5">
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-gray-800/60 border border-gray-700/30 rounded-xl text-gray-400 hover:text-white hover:border-gray-600/50 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-gray-800/60 border border-gray-700/30 rounded-xl text-gray-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="p-2.5 bg-gray-800/60 border border-gray-700/30 rounded-xl text-gray-400 hover:text-blue-300 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: '5+', label: t('about.experienceTitle') },
                { value: '10+', label: t('about.servicesTitle') === 'Services' ? 'Projects' : 'Projetos' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-gray-900/30 backdrop-blur-xl border border-gray-700/20 rounded-xl">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bio + Details */}
        <div className="lg:col-span-2 space-y-10">
          {/* About/Bio */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <TypingEffect text={t('about.bio')} className="text-gray-300 text-lg leading-relaxed" />
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <BriefcaseBusiness size={18} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">{t('about.experienceTitle')}</h3>
            </div>

            <div className="space-y-4">
              {['safeq_senior', 'safeq', 'freelance'].map((key, idx) => (
                <div key={key} className={`group relative pl-8 border-l-2 pb-8 ${idx === 2 ? 'border-transparent pb-0' : 'border-blue-500/30'}`}>
                  <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-gray-900 ${idx === 0 ? 'bg-blue-500 shadow-lg shadow-blue-500/30' : 'bg-gray-600'}`} />
                  <div className="bg-gray-900/20 backdrop-blur-xl border border-gray-700/20 rounded-xl p-5 hover:border-blue-500/30 transition-all duration-500">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-white font-semibold">{t(`about.experience.${key}.role`)}</h4>
                      <span className="flex items-center gap-1.5 text-gray-500 text-xs mt-1 sm:mt-0">
                        <Calendar size={12} />
                        {t(`about.experience.${key}.period`)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-blue-400 text-sm mb-3">
                      <Building2 size={14} />
                      {t(`about.experience.${key}.company`)}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {t(`about.experience.${key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <GraduationCap size={18} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">{t('about.educationTitle')}</h3>
            </div>

            <div className="space-y-4">
              {['university', 'highschool'].map((key) => (
                <div key={key} className="bg-gray-900/20 backdrop-blur-xl border border-gray-700/20 rounded-xl p-5 hover:border-blue-500/30 transition-all duration-500">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-white font-semibold">{t(`about.education.${key}.degree`)}</h4>
                    <span className="flex items-center gap-1.5 text-gray-500 text-xs mt-1 sm:mt-0">
                      <Calendar size={12} />
                      {t(`about.education.${key}.period`)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-blue-400 text-sm mb-3">
                    <GraduationCap size={14} />
                    {t(`about.education.${key}.school`)}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {t(`about.education.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <Wrench size={18} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">{t('about.servicesTitle')}</h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {services.map((service, idx) => (
                <motion.span
                  key={service}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="px-4 py-2 bg-gray-900/20 backdrop-blur-xl border border-gray-700/20 text-gray-300 text-sm rounded-xl hover:border-blue-500/30 hover:text-blue-200 transition-all duration-300 cursor-default"
                >
                  {service}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <div className="group relative p-10 bg-gray-900/20 backdrop-blur-xl border border-gray-700/30 rounded-3xl max-w-2xl mx-auto hover:border-blue-500/40 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/5 overflow-hidden">
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

          <div className="relative">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4">
              {t('about.contactMe')}
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-2xl transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1 active:translate-y-0 group/btn"
              >
                <Mail size={18} />
                {t('about.contactMe')}
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-800/60 border border-gray-700/30 hover:border-gray-600/50 text-gray-300 hover:text-white font-semibold rounded-2xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
