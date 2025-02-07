import { useState } from "react";
import Navbar from "../components/Navbar";
import VerbCard from "../components/VerbCard";
import SearchAndFilter from "../components/SearchAndFilter";
import { clubsData } from "../data/clubs";

const Clubs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
  const [verbType, setVerbType] = useState<"all" | "regular" | "irregular">("all");
  const [selectedLesson, setSelectedLesson] = useState("all");

  const filteredVerbs = clubsData.filter(verb => {
    if (searchTerm && !verb.base.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !verb.meaning.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    if (verbType !== "all" && verb.isRegular !== (verbType === "regular")) {
      return false;
    }
    if (selectedLesson !== "all" && verb.lesson !== selectedLesson) {
      return false;
    }
    return true;
  });

  const handleSortChange = () => {
    setSortOrder(current => {
      if (current === null) return "asc";
      if (current === "asc") return "desc";
      return null;
    });
  };

  const sortedVerbs = sortOrder
    ? [...filteredVerbs].sort((a, b) => {
        if (sortOrder === "asc") {
          return a.base.localeCompare(b.base);
        } else {
          return b.base.localeCompare(a.base);
        }
      })
    : filteredVerbs;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-clubs mb-12">Clubs Dictionary</h1>
        
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
          {sortedVerbs.map((verb) => (
            <VerbCard 
              key={verb.base} 
              verb={verb} 
              className="clubs"
              lesson={verb.lesson}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clubs;