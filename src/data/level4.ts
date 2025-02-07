import { VerbData } from './types';

export const level4Data: VerbData = {
  regular: [
    {
      base: "achieve",
      meaning: "lograr",
      simplePast: "achieved",
      pastParticiple: "achieved",
      isRegular: true,
      lesson: "7-8",
      examples: {
        base: "I want to achieve my goals",
        simplePast: "She achieved great success",
        pastParticiple: "They have achieved everything they wanted"
      }
    },    
  ],
  irregular: [
    {
      base: "arise",
      meaning: "surgir",
      simplePast: "arose",
      pastParticiple: "arisen",
      isRegular: false,
      lesson: "7-8",
      examples: {
        base: "Problems arise when you least expect them",
        simplePast: "A new opportunity arose",
        pastParticiple: "Many questions have arisen"
      }
    },
    
  ]
};