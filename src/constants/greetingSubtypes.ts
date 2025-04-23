// src/constants/greetingSubtypes.ts

// Define subtypes for each main greeting category
// Each subtype has a unique ID, name, and is associated with a main greeting type ID

// Birthday subtypes
export const birthdaySubtypes = [
  { id: 101, name: 'Child (1-12 years)', mainTypeId: 1 },
  { id: 102, name: 'Teenager (13-19 years)', mainTypeId: 1 },
  { id: 103, name: 'Young Adult (20-29 years)', mainTypeId: 1 },
  { id: 104, name: 'Adult (30-49 years)', mainTypeId: 1 },
  { id: 105, name: 'Middle Age (50-69 years)', mainTypeId: 1 },
  { id: 106, name: 'Senior (70+ years)', mainTypeId: 1 },
  { id: 107, name: 'Milestone Birthday (16, 18, 21, 30, 40, 50, etc.)', mainTypeId: 1 },
];

// Thank You subtypes
export const thankYouSubtypes = [
  { id: 201, name: 'Thank You for a Gift', mainTypeId: 23 },
  { id: 202, name: 'Thank You for Help/Support', mainTypeId: 23 },
  { id: 203, name: 'Thank You for Hospitality', mainTypeId: 23 },
  { id: 204, name: 'Thank You to a Teacher/Mentor', mainTypeId: 23 },
  { id: 205, name: 'Thank You to a Healthcare Provider', mainTypeId: 23 },
  { id: 206, name: 'Thank You for Friendship', mainTypeId: 23 },
  { id: 207, name: 'Thank You for Business/Service', mainTypeId: 23 },
];

// Congratulations subtypes
export const congratulationsSubtypes = [
  { id: 301, name: 'Congratulations on Achievement', mainTypeId: 17 },
  { id: 302, name: 'Congratulations on Promotion', mainTypeId: 17 },
  { id: 303, name: 'Congratulations on Award/Recognition', mainTypeId: 17 },
  { id: 304, name: 'Congratulations on Personal Milestone', mainTypeId: 17 },
  { id: 305, name: 'Congratulations on Business Success', mainTypeId: 17 },
];

// Graduation subtypes
export const graduationSubtypes = [
  { id: 401, name: 'High School Graduation', mainTypeId: 18 },
  { id: 402, name: 'College/University Graduation', mainTypeId: 18 },
  { id: 403, name: 'Graduate School Graduation', mainTypeId: 18 },
  { id: 404, name: 'Professional Certification', mainTypeId: 18 },
];

// New Job subtypes
export const newJobSubtypes = [
  { id: 501, name: 'First Job', mainTypeId: 19 },
  { id: 502, name: 'Career Change', mainTypeId: 19 },
  { id: 503, name: 'Promotion', mainTypeId: 19 },
  { id: 504, name: 'New Business Venture', mainTypeId: 19 },
];

// New Home subtypes
export const newHomeSubtypes = [
  { id: 601, name: 'First Home Purchase', mainTypeId: 20 },
  { id: 602, name: 'Moving to a New City', mainTypeId: 20 },
  { id: 603, name: 'Apartment/Rental', mainTypeId: 20 },
  { id: 604, name: 'Vacation Home', mainTypeId: 20 },
];

// New Baby subtypes
export const newBabySubtypes = [
  { id: 701, name: 'Baby Boy', mainTypeId: 21 },
  { id: 702, name: 'Baby Girl', mainTypeId: 21 },
  { id: 703, name: 'Twins/Multiples', mainTypeId: 21 },
  { id: 704, name: 'Adoption', mainTypeId: 21 },
];

// Wedding subtypes
export const weddingSubtypes = [
  { id: 801, name: 'Engagement', mainTypeId: 22 },
  { id: 802, name: 'Wedding Day', mainTypeId: 22 },
  { id: 803, name: 'Elopement', mainTypeId: 22 },
  { id: 804, name: 'Vow Renewal', mainTypeId: 22 },
];

// Map main greeting IDs to their subtypes
export const greetingSubtypesMap = {
  1: birthdaySubtypes,  // Happy Birthday
  2: birthdaySubtypes,  // Birthday Wishes (using same subtypes as Happy Birthday)
  17: congratulationsSubtypes, // Congratulations
  18: graduationSubtypes, // Graduation
  19: newJobSubtypes, // New Job
  20: newHomeSubtypes, // New Home
  21: newBabySubtypes, // New Baby
  22: weddingSubtypes, // Wedding Congratulations
  23: thankYouSubtypes, // Thank You
};

// Function to check if a greeting type has subtypes
export const hasSubtypes = (greetingId: number): boolean => {
  return greetingId in greetingSubtypesMap;
};

// Function to get subtypes for a greeting type
export const getSubtypesForGreeting = (greetingId: number) => {
  return greetingSubtypesMap[greetingId as keyof typeof greetingSubtypesMap] || [];
};

// Function to get heading for subtype page based on main greeting type
export const getSubtypeHeading = (greetingId: number): string => {
  switch (greetingId) {
    case 1:
    case 2:
      return "What age group is this birthday for?";
    case 17:
      return "What are you congratulating them for?";
    case 18:
      return "What type of graduation is this for?";
    case 19:
      return "What type of new job is this for?";
    case 20:
      return "What type of new home is this for?";
    case 21:
      return "Tell us about the new baby";
    case 22:
      return "What wedding occasion are you celebrating?";
    case 23:
      return "What are you thanking them for?";
    default:
      return "Please select a specific option";
  }
};
