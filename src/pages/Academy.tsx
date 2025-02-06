import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import LevelCard from "../components/LevelCard";

const Academy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Academy Levels</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Master English verbs through our structured learning paths. Each level contains carefully selected verbs to help you progress.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <LevelCard
            level={1}            
            verbCount={60}
            className="text-blue-700 border-blue-700/50"
            onClick={() => navigate("/level1")}
          />
          <LevelCard
            level={2}          
            verbCount={60}
            className="text-red-700 border-red-700/50"
            onClick={() => navigate("/level2")}
          />
          <LevelCard
            level={3}            
            verbCount={60}
            className="text-gray-700 border-gray-700/50"
            onClick={() => navigate("/level3")}
          />
          <LevelCard
            level={4}            
            verbCount={60}
            className="text-black border-black/50"
            onClick={() => navigate("/level4")}
          />
        </div>
      </div>
    </div>
  );
};

export default Academy;