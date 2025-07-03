import { Metadata } from 'next';
import SkillCard from '@/components/SkillCard';
import { skills } from '@/data/portfolio';
import type { Skill } from '@/types';

export const metadata: Metadata = {
  title: 'Skills - Domingos Manuel Daniel',
  description: 'Discover the technologies and tools I use to build modern web applications, from frontend frameworks to development tools.',
};

export default function SkillsPage() {
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
          My Skills
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          These are the technologies and tools I use to build modern, scalable, and user-friendly web applications. 
          I&apos;m always learning and exploring new technologies to stay current with industry trends.
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
              {category}
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
            Continuous Learning
          </h2>
          <p className="text-gray-300 text-center leading-relaxed">
            Technology evolves rapidly, and I believe in the importance of continuous learning. 
            I regularly explore new frameworks, tools, and best practices to deliver cutting-edge solutions 
            and maintain high-quality standards in my work.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 max-w-2xl mx-auto border border-blue-800/30">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-gray-300 mb-6">
            Have a project in mind? I&apos;d love to hear about it and discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:domingoscahandadaniel@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Contact Me
            </a>
            <a
              href="https://github.com/Domingos-Daniel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-gray-500 text-white font-medium rounded-lg transition-colors hover:bg-gray-800"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
