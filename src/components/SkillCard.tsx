'use client';

import type { Skill } from '@/types';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface SkillCardProps {
  skill: Skill;
  index?: number;
}

const SkillCard = ({ skill, index = 0 }: SkillCardProps) => {
  const { t } = useTranslation();

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Frontend':
        return 'from-blue-500/20 to-cyan-500/20 text-blue-200 border-blue-400/20';
      case 'Backend':
        return 'from-green-500/20 to-emerald-500/20 text-green-200 border-green-400/20';
      case 'Tools':
        return 'from-cyan-500/20 to-blue-500/20 text-cyan-200 border-cyan-400/20';
      default:
        return 'from-gray-500/20 to-slate-500/20 text-gray-200 border-gray-400/20';
    }
  };

  const getIconGradient = (category: string) => {
    switch (category) {
      case 'Frontend':
        return 'from-blue-400 to-cyan-400';
      case 'Backend':
        return 'from-green-400 to-emerald-400';
      case 'Tools':
        return 'from-cyan-400 to-blue-400';
      default:
        return 'from-gray-400 to-slate-400';
    }
  };

  const getCategoryTranslation = (category: string) => {
    const categoryKey = category.toLowerCase();
    return t(`skills.categories.${categoryKey}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.04,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      <div className="group relative bg-gray-900/20 backdrop-blur-xl border border-gray-700/20 rounded-xl p-5 hover:border-blue-500/30 transition-all duration-500 card-hover-lift">
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/5 via-gray-900/5 to-black/10 rounded-xl pointer-events-none" />

        <div className="relative flex items-center justify-between">
          {/* Skill name with icon */}
          <div className="flex items-center gap-3">
            <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${getIconGradient(skill.category)}`} />
            <h3 className="text-white font-medium text-sm group-hover:text-blue-200 transition-colors duration-300">{skill.name}</h3>
          </div>

          {/* Category badge */}
          <span
            className={`px-2.5 py-0.5 text-xs rounded-md border backdrop-blur-sm bg-gradient-to-r ${getCategoryColor(
              skill.category
            )} transition-all duration-300`}
          >
            {getCategoryTranslation(skill.category)}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
