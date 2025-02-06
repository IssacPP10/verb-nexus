import { Verb } from "@/data/types";

export const filterVerbs = (
  verbs: Verb[],
  searchTerm: string,
  verbType: "all" | "regular" | "irregular",
  selectedLesson: string
): Verb[] => {
  return verbs
    .filter((verb) =>
      verb.base.toLowerCase().includes(searchTerm.toLowerCase()) ||
      verb.meaning.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((verb) =>
      verbType === "all" ? true : verb.isRegular === (verbType === "regular")
    )
    .filter((verb) =>
      selectedLesson === "all" ? true : verb.lesson === selectedLesson
    );
};

export const sortVerbs = (verbs: Verb[], sortOrder: "asc" | "desc"): Verb[] => {
  return [...verbs].sort((a, b) => {
    const comparison = a.base.localeCompare(b.base);
    return sortOrder === "asc" ? comparison : -comparison;
  });
};