import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ForkKnife, GraduationCap, Users } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Welcome to Verb Nexus</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-float"
            onClick={() => navigate("/academy")}
          >
            <CardHeader className="space-y-1">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-6 h-6 text-level1" />
                <CardTitle className="text-2xl text-level1">Academy</CardTitle>
              </div>
              <CardDescription>
                Master English verbs through our structured 4-level program. Learn regular and irregular verbs with examples and practice exercises.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-float"
            onClick={() => navigate("/clubs")}
          >
            <CardHeader className="space-y-1">
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-clubs" />
                <CardTitle className="text-2xl text-clubs">Clubs</CardTitle>
              </div>
              <CardDescription>
                Your personal English vocabulary journal. Save and review new verbs and words you learn during club sessions.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-float"
            onClick={() => navigate("/kitchen")}
          >
            <CardHeader className="space-y-1">
              <div className="flex items-center space-x-2">
                <ForkKnife className="w-6 h-6 text-kitchen" />
                <CardTitle className="text-2xl text-kitchen">Kitchen Verbs</CardTitle>
              </div>
              <CardDescription>
              Your personal English vocabulary journal focused on common cooking verbs.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;