import { VerbData } from './types';

export const level2Data: VerbData = {
  regular: [
    {
      base: "dance",
      meaning: "bailar",
      simplePast: "danced",
      pastParticiple: "danced",
      isRegular: true,
      lesson: "3-4",
      examples: {
        base: "I dance salsa every weekend",
        simplePast: "I danced all night at the party",
        pastParticiple: "I have danced since I was a child"
      }
    },    
  ],
  irregular: [
    {
      base: "break",
      meaning: "romper",
      simplePast: "broke",
      pastParticiple: "broken",
      isRegular: false,
      lesson: "3-4",
      examples: {
        base: "Don't break the rules",
        simplePast: "He broke his promise",
        pastParticiple: "The window has been broken"
      }
    },    
  ]
};
