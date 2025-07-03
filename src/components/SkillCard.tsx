'use client';

import type { Skill } from '@/types';
import { useTranslation } from 'react-i18next';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const { t } = useTranslation();

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Frontend':
        return 'from-blue-500/20 to-cyan-500/20 text-blue-200 border-blue-400/30';
      case 'Backend':
        return 'from-green-500/20 to-emerald-500/20 text-green-200 border-green-400/30';
      case 'Tools':
        return 'from-purple-500/20 to-pink-500/20 text-purple-200 border-purple-400/30';
      default:
        return 'from-gray-500/20 to-slate-500/20 text-gray-200 border-gray-400/30';
    }
  };

  const getIconGradient = (category: string) => {
    switch (category) {
      case 'Frontend':
        return 'from-blue-400 via-cyan-400 to-blue-600';
      case 'Backend':
        return 'from-green-400 via-emerald-400 to-green-600';
      case 'Tools':
        return 'from-purple-400 via-pink-400 to-purple-600';
      default:
        return 'from-gray-400 via-slate-400 to-gray-600';
    }
  };

  const getCategoryTranslation = (category: string) => {
    const categoryKey = category.toLowerCase();
    return t(`skills.categories.${categoryKey}`);
  };

  return (
    <div className="group relative bg-gray-900/20 backdrop-blur-xl border border-gray-700/30 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/10 via-gray-900/5 to-black/20 rounded-xl pointer-events-none"></div>
      
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
      
      <div className="relative flex items-center justify-between">
        {/* Skill name with icon */}
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getIconGradient(skill.category)} animate-pulse`}></div>
          <h3 className="text-white font-semibold group-hover:text-blue-200 transition-colors duration-300">{skill.name}</h3>
        </div>
        
        {/* Category badge */}
        <span
          className={`px-3 py-1 text-xs rounded-full border backdrop-blur-sm bg-gradient-to-r ${getCategoryColor(
            skill.category
          )} hover:scale-110 transition-transform duration-300`}
        >
          {getCategoryTranslation(skill.category)}
        </span>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-2 right-2 w-16 h-16 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-2 left-2 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-0 group-hover:opacity-60 transition-opacity duration-700 delay-300"></div>
    </div>
  );
};

export default SkillCard;
