import { CheckSquare, Square, BookOpen } from "lucide-react";
import { Verb } from "../data/types";

interface VerbCardProps {
  verb: Verb;
  className?: string;
  lesson: string;
}

const VerbCard = ({ verb, className, lesson }: VerbCardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 border-l-4 ${className} hover:shadow-lg transition-shadow`}>
      <div className="mb-2 flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold text-black uppercase">{verb.base}</h3>
          <p className="text-sm text-gray-600 italic">{verb.meaning}</p>
          <div className="flex items-center mt-1 text-xs text-gray-500">
            <BookOpen className="h-4 w-4 mr-1" />
            Lesson {lesson}
          </div>
        </div>
        {verb.isRegular ? (
          <div className="flex items-center text-xs text-gray-500">
            <CheckSquare className="h-4 w-4 mr-1" /> Regular
          </div>
        ) : (
          <div className="flex items-center text-xs text-gray-500">
            <Square className="h-4 w-4 mr-1" /> Irregular
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div>
          <p className="text-xs text-gray-500">Simple Past</p>
          <p className="font-semibold text-sm">{verb.simplePast}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Past Participle</p>
          <p className="font-semibold text-sm">{verb.pastParticiple}</p>
        </div>
      </div>

      <div>
        <p className="text-xs text-gray-500 mb-1">Examples:</p>
        <ul className="space-y-1 text-sm text-gray-700 list-disc pl-4">
          <li>{verb.examples.base}</li>
          <li>{verb.examples.simplePast}</li>
          <li>{verb.examples.pastParticiple}</li>
        </ul>
      </div>
    </div>
  );
};

export default VerbCard;