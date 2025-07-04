'use client';

import SkillCard from '@/components/SkillCard';
import { skills } from '@/data/portfolio';
import type { Skill } from '@/types';
import { useTranslation } from 'react-i18next';

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

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          {t('skills.title')}
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {t('skills.subtitle')}
        </p>
      </div>

      {/* Skills by Category */}
      <div className="space-y-12">
        {orderedCategories.map((category) => (
          <div key={category}>
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className={`w-4 h-4 rounded-full mr-3 ${
                category === 'Frontend' ? 'bg-blue-500' :
                category === 'Backend' ? 'bg-green-500' :
                category === 'Tools' ? 'bg-purple-500' :
                'bg-gray-500'
              }`}></span>
              {t(`skills.categories.${category.toLowerCase()}`)}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {groupedSkills[category].map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Learning Philosophy */}
      <div className="mt-16">
        <div className="bg-gray-800 rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-4 text-center">
            {t('skills.continuousLearning')}
          </h2>
          <p className="text-gray-300 text-center leading-relaxed">
            {t('skills.continuousLearningDesc')}
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 max-w-2xl mx-auto border border-blue-800/30">
          <h2 className="text-2xl font-semibold text-white mb-4">
            {t('skills.buildTogether')}
          </h2>
          <p className="text-gray-300 mb-6">
            {t('skills.buildTogetherDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:domingoscahandadaniel@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              {t('skills.contactMe')}
            </a>
            <a
              href="https://github.com/Domingos-Daniel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-gray-500 text-white font-medium rounded-lg transition-colors hover:bg-gray-800"
            >
              {t('skills.viewGithub')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
