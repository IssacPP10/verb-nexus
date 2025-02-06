import { level1Data } from "@/data/level1";
import { level2Data } from "@/data/level2";
import { level3Data } from "@/data/level3";
import { level4Data } from "@/data/level4";
import { clubsData } from "@/data/clubs";
import { Verb } from "@/data/types";

export const getLevelVerbs = (level: number): Verb[] => {
  switch (level) {
    case 1:
      return [...level1Data.regular, ...level1Data.irregular];
    case 2:
      return [...level2Data.regular, ...level2Data.irregular];
    case 3:
      return [...level3Data.regular, ...level3Data.irregular];
    case 4:
      return [...level4Data.regular, ...level4Data.irregular];
    default:
      return [];
  }
};

export const getClubVerbs = (): Verb[] => {
  return clubsData;
};

export const getLevelColor = (level: number): string => {
  switch (level) {
    case 1:
      return "level1";
    case 2:
      return "level2";
    case 3:
      return "level3";
    case 4:
      return "level4";
    default:
      return "gray-500";
  }
};