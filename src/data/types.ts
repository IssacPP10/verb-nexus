export interface Verb {
  base: string;
  meaning: string;
  simplePast: string;
  pastParticiple: string;
  isRegular: boolean;
  lesson: string;
  examples: {
    base: string;
    simplePast: string;
    pastParticiple: string;
  };
}

export interface VerbData {
  regular: Verb[];
  irregular: Verb[];
}