import { GreetingType } from '../constants/greetingTemplates';

/**
 * Maps a greeting ID from the GreetingSelection component to a GreetingType
 * for the TextGeneration component
 *
 * @param greetingId The ID of the greeting from GreetingSelection
 * @returns The corresponding GreetingType
 */
export const mapGreetingIdToType = (greetingId: number): GreetingType => {
  // Map greeting IDs to GreetingTypes based on the updated greetings.ts file
  switch (greetingId) {
    // Birthday and celebration greetings
    case 1: // Happy Birthday
    case 2: // Birthday Wishes
      return GreetingType.BIRTHDAY;

    case 3: // Happy Anniversary
      return GreetingType.ANNIVERSARY;

    // Holiday greetings
    case 4: // Merry Christmas
    case 5: // Happy Hanukkah
    case 6: // Happy Easter
    case 7: // Happy Passover
    case 8: // Happy New Year
    case 9: // Happy Thanksgiving
    case 10: // Happy Halloween
      return GreetingType.HOLIDAY;

    // Family occasions
    case 11: // Happy Mother's Day
    case 12: // Happy Father's Day
    case 13: // Grandparents' Day
      return GreetingType.FAMILY;

    // Thoughtful messages
    case 14: // Thinking of You
      return GreetingType.THANK_YOU;
    case 15: // Get Well Soon
      return GreetingType.GET_WELL;
    case 16: // Sympathy & Condolences
      return GreetingType.SYMPATHY;

    // Congratulations
    case 17: // Congratulations
      return GreetingType.CONGRATULATIONS;
    case 18: // Graduation
      return GreetingType.GRADUATION;
    case 19: // New Job
      return GreetingType.NEW_JOB;
    case 20: // New Home
      return GreetingType.NEW_HOME;
    case 21: // New Baby
      return GreetingType.NEW_BABY;
    case 22: // Wedding Congratulations
      return GreetingType.WEDDING;

    // General greetings
    case 23: // Thank You
      return GreetingType.THANK_YOU;
    case 24: // Just Because
    case 25: // Friendship
      return GreetingType.FRIENDSHIP;
    case 26: // Good Luck
      return GreetingType.GOOD_LUCK;
    case 27: // Miss You
      return GreetingType.MISS_YOU;
    case 28: // Retirement
      return GreetingType.RETIREMENT;
    case 29: // Welcome
      return GreetingType.WELCOME;
    case 30: // Farewell
      return GreetingType.FAREWELL;

    default:
      // Default to BIRTHDAY if no mapping is found
      return GreetingType.BIRTHDAY;
  }
};
