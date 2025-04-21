/**
 * Greeting templates for different occasions
 * Each template contains placeholders in the format [placeholderId]
 * Common placeholders:
 * - [recipient]: The person receiving the greeting
 * - [sender]: The person sending the greeting
 * - [age]: The age of the recipient (for birthday greetings)
 */

export interface GreetingTemplate {
  id: string;
  text: string;
  type: GreetingType;
}

export enum GreetingType {
  BIRTHDAY = 'birthday',
  CONGRATULATIONS = 'congratulations',
  THANK_YOU = 'thank_you',
  GET_WELL = 'get_well',
  HOLIDAY = 'holiday',
  ANNIVERSARY = 'anniversary',
  FAMILY = 'family',
  SYMPATHY = 'sympathy',
  FRIENDSHIP = 'friendship',
  GENERAL = 'general',
}

// Birthday greeting templates
export const BIRTHDAY_GREETINGS: GreetingTemplate[] = [
  {
    id: 'birthday-1',
    text: "Happy birthday, [recipient]! Masha here. Your friend [sender] told me it's your [age]th birthday today, so I wanted to wish you a super happy birthday! May this special day be filled with all your favorite things, lots of love, and fun adventures. From your good friend, Masha.",
    type: GreetingType.BIRTHDAY,
  },
  {
    id: 'birthday-2',
    text: "Hey [recipient]! It's Masha. [sender] mentioned that you're turning [age] today! I just wanted to send you my warmest birthday wishes. Hope your day is as amazing as you are. Enjoy every moment! Cheers, Masha.",
    type: GreetingType.BIRTHDAY,
  },
  {
    id: 'birthday-3',
    text: "Greetings [recipient]! Masha here with birthday wishes! [sender] reminded me that you're celebrating your [age]th trip around the sun. Hope it's filled with joy, laughter, and wonderful memories. Have a fantastic day! Your friend, Masha.",
    type: GreetingType.BIRTHDAY,
  },
  {
    id: 'birthday-4',
    text: "Happy Birthday, [recipient]! It's your special day! [sender] wanted me to make sure you know how much you're appreciated. [age] years of awesome you! Wishing you a day filled with happiness and a year filled with joy. Best wishes, Masha.",
    type: GreetingType.BIRTHDAY,
  },
];

// Congratulations greeting templates
export const CONGRATULATIONS_GREETINGS: GreetingTemplate[] = [
  {
    id: 'congrats-1',
    text: 'Congratulations, [recipient]! Masha here. [sender] told me about your amazing achievement, and I had to send my congratulations! Your hard work and dedication have truly paid off. Keep shining bright! Cheers, Masha.',
    type: GreetingType.CONGRATULATIONS,
  },
  {
    id: 'congrats-2',
    text: "Hey [recipient]! It's Masha. I heard the fantastic news from [sender]! Congratulations on your incredible accomplishment. You've worked so hard for this, and you deserve all the success coming your way. Well done! Best, Masha.",
    type: GreetingType.CONGRATULATIONS,
  },
  {
    id: 'congrats-3',
    text: "Woohoo, [recipient]! Masha here! [sender] shared your exciting news with me, and I'm absolutely thrilled for you! Your success is so well-deserved. Here's to celebrating this achievement and many more to come! Congratulations! From, Masha.",
    type: GreetingType.CONGRATULATIONS,
  },
];

// Thank you greeting templates
export const THANK_YOU_GREETINGS: GreetingTemplate[] = [
  {
    id: 'thanks-1',
    text: 'Dear [recipient], Masha here. [sender] told me about your kindness, and I wanted to express my sincere gratitude. Your thoughtfulness means more than you know. Thank you for being such an amazing person! Warmly, Masha.',
    type: GreetingType.THANK_YOU,
  },
  {
    id: 'thanks-2',
    text: "Hey [recipient]! It's Masha. I just wanted to say a big thank you for everything you've done. [sender] mentioned how helpful you've been, and I'm truly grateful. Your support has made all the difference. Thanks a million! Best, Masha.",
    type: GreetingType.THANK_YOU,
  },
  {
    id: 'thanks-3',
    text: "To [recipient], with gratitude. Masha here! [sender] let me know about your generous help, and I had to reach out personally to say thank you. Your kindness and support mean the world to me. I'm truly thankful for you! With appreciation, Masha.",
    type: GreetingType.THANK_YOU,
  },
];

// Get well greeting templates
export const GET_WELL_GREETINGS: GreetingTemplate[] = [
  {
    id: 'get-well-1',
    text: "Dear [recipient], Masha here. [sender] told me you haven't been feeling well, and I wanted to send you my warmest wishes for a speedy recovery. Take all the time you need to rest and heal. Sending positive thoughts your way! Get well soon, Masha.",
    type: GreetingType.GET_WELL,
  },
  {
    id: 'get-well-2',
    text: "Hey [recipient]! It's Masha. I heard from [sender] that you're under the weather, and I wanted to let you know I'm thinking of you. Hope you're taking it easy and getting plenty of rest. Wishing you a quick recovery and better days ahead! Take care, Masha.",
    type: GreetingType.GET_WELL,
  },
  {
    id: 'get-well-3',
    text: "To [recipient], Masha here. [sender] mentioned you're not feeling your best right now, and I wanted to send some cheer your way. Remember that each day brings you closer to feeling better. Sending healing vibes and warm wishes for a full recovery! Get well soon, Masha.",
    type: GreetingType.GET_WELL,
  },
];

// Holiday greeting templates
export const HOLIDAY_GREETINGS: GreetingTemplate[] = [
  {
    id: 'holiday-1',
    text: 'Happy Holidays, [recipient]! Masha here. [sender] wanted me to send you warm wishes for a wonderful holiday season. May this special time be filled with joy, peace, and precious moments with loved ones. Wishing you all the best! Cheers, Masha.',
    type: GreetingType.HOLIDAY,
  },
  {
    id: 'holiday-2',
    text: "Season's Greetings, [recipient]! It's Masha. [sender] and I wanted to wish you a magical holiday season filled with love, laughter, and happiness. May the new year bring you health, prosperity, and wonderful adventures. Happy Holidays! Best wishes, Masha.",
    type: GreetingType.HOLIDAY,
  },
  {
    id: 'holiday-3',
    text: 'Warm wishes to you, [recipient]! Masha here. As the year comes to a close, [sender] and I wanted to send you our heartfelt holiday greetings. May your days be merry and bright, and may the coming year be everything you hope for. Happy Holidays! From, Masha.',
    type: GreetingType.HOLIDAY,
  },
];

// Anniversary greeting templates
export const ANNIVERSARY_GREETINGS: GreetingTemplate[] = [
  {
    id: 'anniversary-1',
    text: 'Happy Anniversary, [recipient]! Masha here. [sender] wanted me to send special wishes on your anniversary. May your love continue to grow stronger with each passing year. Wishing you many more beautiful years together! Cheers, Masha.',
    type: GreetingType.ANNIVERSARY,
  },
  {
    id: 'anniversary-2',
    text: "Congratulations on your anniversary, [recipient]! It's Masha. [sender] reminded me of your special day, and I wanted to join in celebrating your wonderful journey together. Here's to many more years of love and happiness! Best wishes, Masha.",
    type: GreetingType.ANNIVERSARY,
  },
];

// Family greeting templates
export const FAMILY_GREETINGS: GreetingTemplate[] = [
  {
    id: 'family-1',
    text: "Happy Mother's Day, [recipient]! Masha here. [sender] wanted me to let you know what an amazing mother you are. Your love and dedication are truly inspiring. Wishing you a day filled with joy and appreciation! With admiration, Masha.",
    type: GreetingType.FAMILY,
  },
  {
    id: 'family-2',
    text: "Happy Father's Day, [recipient]! It's Masha. [sender] asked me to send you warm wishes on this special day. Your strength and guidance mean so much to your family. Hope your day is as wonderful as you are! Best, Masha.",
    type: GreetingType.FAMILY,
  },
];

// Sympathy greeting templates
export const SYMPATHY_GREETINGS: GreetingTemplate[] = [
  {
    id: 'sympathy-1',
    text: "Dear [recipient], Masha here. [sender] told me about your recent loss, and I wanted to express my deepest condolences. Please know that you're in my thoughts during this difficult time. Wishing you comfort and peace. With sympathy, Masha.",
    type: GreetingType.SYMPATHY,
  },
  {
    id: 'sympathy-2',
    text: "To [recipient], It's Masha. I was so sorry to hear from [sender] about your loss. There are no words that can ease your pain, but please know that you're not alone. Sending you strength and support during this challenging time. With heartfelt sympathy, Masha.",
    type: GreetingType.SYMPATHY,
  },
];

// Friendship greeting templates
export const FRIENDSHIP_GREETINGS: GreetingTemplate[] = [
  {
    id: 'friendship-1',
    text: "Hey [recipient]! Masha here. [sender] mentioned what a wonderful friend you are, and I just wanted to send a note to celebrate your friendship. True friends are rare treasures, and you're one of the best! Warmly, Masha.",
    type: GreetingType.FRIENDSHIP,
  },
  {
    id: 'friendship-2',
    text: "To my friend [recipient], It's Masha. [sender] told me about your amazing friendship, and it inspired me to reach out. Thank you for being such a caring and supportive friend. Your kindness makes the world a better place! With appreciation, Masha.",
    type: GreetingType.FRIENDSHIP,
  },
];

// General greeting templates
export const GENERAL_GREETINGS: GreetingTemplate[] = [
  {
    id: 'general-1',
    text: "Hello [recipient]! Masha here. [sender] asked me to send you a special message just to brighten your day. Sometimes the best messages need no special occasion - just a reminder that you're appreciated and valued. Hope this brings a smile! Cheers, Masha.",
    type: GreetingType.GENERAL,
  },
  {
    id: 'general-2',
    text: "Greetings [recipient]! It's Masha. [sender] thought you might enjoy a surprise message today. No special reason - just a friendly hello to let you know you're in someone's thoughts. Wishing you a wonderful day! Best wishes, Masha.",
    type: GreetingType.GENERAL,
  },
];

// All greeting templates combined
export const ALL_GREETINGS: GreetingTemplate[] = [
  ...BIRTHDAY_GREETINGS,
  ...CONGRATULATIONS_GREETINGS,
  ...THANK_YOU_GREETINGS,
  ...GET_WELL_GREETINGS,
  ...HOLIDAY_GREETINGS,
  ...ANNIVERSARY_GREETINGS,
  ...FAMILY_GREETINGS,
  ...SYMPATHY_GREETINGS,
  ...FRIENDSHIP_GREETINGS,
  ...GENERAL_GREETINGS,
];

/**
 * Get random greeting templates by type
 * @param type The type of greeting to get
 * @param count The number of templates to return (default: 1)
 * @returns Array of greeting templates
 */
export const getRandomGreetingsByType = (
  type: GreetingType,
  count: number = 1,
): GreetingTemplate[] => {
  let templates: GreetingTemplate[] = [];

  switch (type) {
    case GreetingType.BIRTHDAY:
      templates = BIRTHDAY_GREETINGS;
      break;
    case GreetingType.CONGRATULATIONS:
      templates = CONGRATULATIONS_GREETINGS;
      break;
    case GreetingType.THANK_YOU:
      templates = THANK_YOU_GREETINGS;
      break;
    case GreetingType.GET_WELL:
      templates = GET_WELL_GREETINGS;
      break;
    case GreetingType.HOLIDAY:
      templates = HOLIDAY_GREETINGS;
      break;
    case GreetingType.ANNIVERSARY:
      templates = ANNIVERSARY_GREETINGS;
      break;
    case GreetingType.FAMILY:
      templates = FAMILY_GREETINGS;
      break;
    case GreetingType.SYMPATHY:
      templates = SYMPATHY_GREETINGS;
      break;
    case GreetingType.FRIENDSHIP:
      templates = FRIENDSHIP_GREETINGS;
      break;
    case GreetingType.GENERAL:
      templates = GENERAL_GREETINGS;
      break;
    default:
      templates = ALL_GREETINGS;
  }

  // Shuffle the templates and take the requested count
  const shuffled = [...templates].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

/**
 * Get a random greeting template by type
 * @param type The type of greeting to get
 * @returns A single greeting template
 */
export const getRandomGreetingByType = (
  type: GreetingType,
): GreetingTemplate => {
  return getRandomGreetingsByType(type, 1)[0];
};
