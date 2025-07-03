import type { Skill } from '@/types';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Frontend':
        return 'bg-blue-900/30 text-blue-300 border-blue-800/50';
      case 'Backend':
        return 'bg-green-900/30 text-green-300 border-green-800/50';
      case 'Tools':
        return 'bg-purple-900/30 text-purple-300 border-purple-800/50';
      default:
        return 'bg-gray-700/30 text-gray-300 border-gray-600/50';
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors">
      <div className="flex items-center justify-between">
        <h3 className="text-white font-medium">{skill.name}</h3>
        <span
          className={`px-2 py-1 text-xs rounded-md border ${getCategoryColor(
            skill.category
          )}`}
        >
          {skill.category}
        </span>
      </div>
    </div>
  );
};

export default SkillCard;
