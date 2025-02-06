import { Search, ArrowUpDown, CheckSquare, Square, BookOpen } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface SearchAndFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  sortOrder: "asc" | "desc" | null;
  onSortChange: () => void;
  verbType: "all" | "regular" | "irregular";
  onVerbTypeChange: (type: "all" | "regular" | "irregular") => void;
  selectedLesson: string;
  onLessonChange: (lesson: string) => void;
}

const LESSONS = [
  "all",
  "1-2",
  "3-4",
  "5-6",
  "7-8",
  "9-10",
  "1-10",
  "11-12",
  "13-14",
  "15-16",
  "17-18",
  "19-20",
  "11-20"
];

const SearchAndFilter = ({
  searchTerm,
  onSearchChange,
  sortOrder,
  onSortChange,
  verbType,
  onVerbTypeChange,
  selectedLesson,
  onLessonChange,
}: SearchAndFilterProps) => {
  return (
    <div className="mb-6 space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
        <Input
          placeholder="Search verbs..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onSortChange}
          className="flex items-center gap-2"
        >
          <ArrowUpDown className="h-4 w-4" />
          {sortOrder === "asc" ? "A-Z" : sortOrder === "desc" ? "Z-A" : "Sort"}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onVerbTypeChange("all")}
          className={`flex items-center gap-2 ${
            verbType === "all" ? "bg-gray-100" : ""
          }`}
        >
          All
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onVerbTypeChange("regular")}
          className={`flex items-center gap-2 ${
            verbType === "regular" ? "bg-gray-100" : ""
          }`}
        >
          <CheckSquare className="h-4 w-4" /> Regular
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onVerbTypeChange("irregular")}
          className={`flex items-center gap-2 ${
            verbType === "irregular" ? "bg-gray-100" : ""
          }`}
        >
          <Square className="h-4 w-4" /> Irregular
        </Button>
        
        <Select value={selectedLesson} onValueChange={onLessonChange}>
          <SelectTrigger className="w-[180px]">
            <BookOpen className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Select Lesson" />
          </SelectTrigger>
          <SelectContent>
            {LESSONS.map((lesson) => (
              <SelectItem key={lesson} value={lesson}>
                {lesson === "all" ? "All Lessons" : `Lesson ${lesson}`}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SearchAndFilter;