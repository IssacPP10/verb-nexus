import { GraduationCap } from 'lucide-react';

interface LevelCardProps {
  level: number;  
  verbCount: number;
  className?: string;
  onClick: () => void;
}

const LevelCard = ({ level, verbCount, className, onClick }: LevelCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl shadow-lg p-8 cursor-pointer 
        transition-all duration-300 hover:shadow-xl hover:-translate-y-1
        border-2 group relative ${className} overflow-hidden`}
    >
      <div className={`absolute top-0 right-0 w-24 h-24 opacity-10 
        rounded-bl-full transform transition-transform duration-300 
        group-hover:scale-125`}
      />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className={`text-3xl font-bold`}>Level {level}</h2>
          <GraduationCap className={`w-8 h-8`} />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600 text-lg">{verbCount} verbs to learn</p>
          <span className={`text-sm font-medium`}>Click to start →</span>
        </div>
      </div>
    </div>
  );
};

export default LevelCard;