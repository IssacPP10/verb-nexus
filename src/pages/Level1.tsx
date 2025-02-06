import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import VerbCard from "../components/VerbCard";
import SearchAndFilter from "../components/SearchAndFilter";
import { level1Data } from "../data/level1";

const Level1 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
  const [verbType, setVerbType] = useState<"all" | "regular" | "irregular">("all");
  const [selectedLesson, setSelectedLesson] = useState("all");

  const allVerbs = useMemo(() => {
    return [...level1Data.regular.map(v => ({ ...v, lesson: "1-2" })), 
            ...level1Data.irregular.map(v => ({ ...v, lesson: "1-2" }))];
  }, []);

  const filteredVerbs = useMemo(() => {
    let result = allVerbs;

    if (searchTerm) {
      result = result.filter(verb => 
        verb.base.toLowerCase().includes(searchTerm.toLowerCase()) ||
        verb.meaning.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (verbType !== "all") {
      result = result.filter(verb => 
        (verbType === "regular" ? verb.isRegular : !verb.isRegular)
      );
    }

    if (selectedLesson !== "all") {
      result = result.filter(verb => verb.lesson === selectedLesson);
    }

    if (sortOrder) {
      result = [...result].sort((a, b) => {
        if (sortOrder === "asc") {
          return a.base.localeCompare(b.base);
        } else {
          return b.base.localeCompare(a.base);
        }
      });
    }

    return result;
  }, [allVerbs, searchTerm, sortOrder, verbType, selectedLesson]);

  const handleSortChange = () => {
    setSortOrder(current => {
      if (current === null) return "asc";
      if (current === "asc") return "desc";
      return null;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-level1 mb-12">Level 1</h1>
        
        <SearchAndFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          sortOrder={sortOrder}
          onSortChange={handleSortChange}
          verbType={verbType}
          onVerbTypeChange={setVerbType}
          selectedLesson={selectedLesson}
          onLessonChange={setSelectedLesson}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredVerbs.map((verb) => (
            <VerbCard 
              key={verb.base} 
              verb={verb} 
              color="level1" 
              lesson={verb.lesson}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Level1;