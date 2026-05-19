'use client';

import SkillCard from '@/components/SkillCard';
import { skills } from '@/data/portfolio';
import type { Skill } from '@/types';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
// @ts-expect-error lucide-react types not resolved with bundler moduleResolution
import { Mail, Github, BookOpen, ArrowRight } from 'lucide-react';

export default function SkillsPage() {
  const { t } = useTranslation();

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryOrder = ['Frontend', 'Backend', 'Tools', 'Other'];
  const orderedCategories = categoryOrder.filter(category => groupedSkills[category]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return 'bg-blue-500/20 border-blue-500/20';
      case 'Backend':
        return 'bg-green-500/20 border-green-500/20';
      case 'Tools':
        return 'bg-cyan-500/20 border-cyan-500/20';
      default:
        return 'bg-gray-500/20 border-gray-500/20';
    }
  };

  const getCategoryDot = (category: string) => {
    switch (category) {
      case 'Frontend': return 'bg-blue-400';
      case 'Backend': return 'bg-green-400';
      case 'Tools': return 'bg-cyan-400';
      default: return 'bg-gray-400';
    }
  };

  let globalIndex = 0;

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
            {t('skills.title')}
          </span>
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"
        />
      </motion.div>

      {/* Skills by Category */}
      <div className="space-y-14">
        {orderedCategories.map((category, catIdx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.1, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-lg border ${getCategoryIcon(category)}`}>
                <div className={`w-3 h-3 rounded-full ${getCategoryDot(category)}`} />
              </div>
              <h2 className="text-xl font-semibold text-white">
                {t(`skills.categories.${category.toLowerCase()}`)}
              </h2>
              <span className="text-xs text-gray-500 bg-gray-800/50 px-2 py-0.5 rounded-full">
                {groupedSkills[category].length}
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {groupedSkills[category].map((skill) => {
                const idx = globalIndex++;
                return <SkillCard key={skill.name} skill={skill} index={idx} />;
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Learning Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-20"
      >
        <div className="relative p-10 bg-gray-900/20 backdrop-blur-xl border border-gray-700/30 rounded-3xl max-w-4xl mx-auto overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-float" />
          </div>

          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-6">
              <BookOpen size={16} />
              {t('skills.continuousLearning')}
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              {t('skills.continuousLearningDesc')}
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
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

          <div className="relative">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4">
              {t('skills.buildTogether')}
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              {t('skills.buildTogetherDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:domingoscahandadaniel@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-2xl transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1 active:translate-y-0 group/btn"
              >
                <Mail size={18} />
                {t('skills.contactMe')}
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="https://github.com/Domingos-Daniel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-800/60 border border-gray-700/30 hover:border-gray-600/50 text-gray-300 hover:text-white font-semibold rounded-2xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                <Github size={18} />
                {t('skills.viewGithub')}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
