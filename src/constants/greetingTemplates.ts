/**
 * Greeting templates for different occasions
 * Each template contains placeholders in the format [placeholderId]
 * Common placeholders:
 * - [recipient]: The person receiving the greeting
 * - [sender]: The person sending the greeting
 * - [age]: The age of the recipient (for birthday greetings)
 * - [relationship]: The relationship between sender and recipient
 * - [occasion]: The specific occasion being celebrated
 * - [achievement]: The specific achievement being celebrated
 * - [location]: Location reference for the greeting
 * - [date]: Date reference for the greeting
 */

/**
 * Enhanced greeting template interface with additional properties
 * for more dynamic and extensive templates
 */
export interface GreetingTemplate {
  id: string;
  text: string;
  type: GreetingType;
  subCategory?: string;
  requiredPlaceholders?: string[];
  optionalPlaceholders?: string[];
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
  GRADUATION = 'graduation',
  WEDDING = 'wedding',
  NEW_JOB = 'new_job',
  NEW_HOME = 'new_home',
  NEW_BABY = 'new_baby',
  RETIREMENT = 'retirement',
  GOOD_LUCK = 'good_luck',
  MISS_YOU = 'miss_you',
  WELCOME = 'welcome',
  FAREWELL = 'farewell',
}

// Birthday greeting templates
export const BIRTHDAY_GREETINGS: GreetingTemplate[] = [
  {
    id: 'birthday-1',
    text: "Happy birthday, [recipient]! Masha here. Your [relationship] [sender] told me it's your [age]th birthday today, so I wanted to wish you a super happy birthday! May this special day be filled with all your favorite things, lots of love, and fun adventures. From your good friend, Masha.",
    type: GreetingType.BIRTHDAY,
    requiredPlaceholders: ['recipient', 'sender', 'relationship'],
    optionalPlaceholders: ['age'],
  },
  {
    id: 'birthday-2',
    text: "Hey [recipient]! It's Masha. [sender] mentioned that you're turning [age] today! I just wanted to send you my warmest birthday wishes. Hope your day is as amazing as you are. Enjoy every moment! Cheers, Masha.",
    type: GreetingType.BIRTHDAY,
    requiredPlaceholders: ['recipient', 'sender'],
    optionalPlaceholders: ['age'],
  },
  {
    id: 'birthday-3',
    text: "Greetings [recipient]! Masha here with birthday wishes! [sender] reminded me that you're celebrating your [age]th trip around the sun. Hope it's filled with joy, laughter, and wonderful memories. Have a fantastic day! Your friend, Masha.",
    type: GreetingType.BIRTHDAY,
    requiredPlaceholders: ['recipient', 'sender'],
    optionalPlaceholders: ['age'],
  },
  {
    id: 'birthday-4',
    text: "Happy Birthday, [recipient]! It's your special day! [sender] wanted me to make sure you know how much you're appreciated. [age] years of awesome you! Wishing you a day filled with happiness and a year filled with joy. Best wishes, Masha.",
    type: GreetingType.BIRTHDAY,
    requiredPlaceholders: ['recipient', 'sender'],
    optionalPlaceholders: ['age'],
  },
  {
    id: 'birthday-5',
    text: 'Dear [recipient], Masha here. Your [relationship] [sender] informed me that today marks your [age]th birthday. Please accept my most sincere congratulations on this special occasion. May the coming year bring you continued success, good health, and prosperity. With warm regards, Masha.',
    type: GreetingType.BIRTHDAY,
    requiredPlaceholders: ['recipient', 'sender', 'relationship'],
    optionalPlaceholders: ['age'],
  },
  {
    id: 'birthday-6',
    text: 'ATTENTION [recipient]! BIRTHDAY ALERT! [sender] has activated the emergency birthday protocol! This is not a drill! Repeat: THIS IS NOT A DRILL! [age] years of awesomeness detected! Prepare for an influx of cake, presents, and good vibes! Over and out! *static noise* ...Oh, and happy birthday from Masha! 🎂',
    type: GreetingType.BIRTHDAY,
    requiredPlaceholders: ['recipient', 'sender'],
    optionalPlaceholders: ['age'],
  },
  {
    id: 'birthday-7',
    text: '[recipient], as you celebrate another year of life, I wanted to share this message from [sender]. Each birthday is a milestone on your journey, a testament to your resilience and growth. [age] years have shaped you into the remarkable person you are today. May this new chapter bring even more wisdom, joy, and fulfillment. With admiration, Masha.',
    type: GreetingType.BIRTHDAY,
    requiredPlaceholders: ['recipient', 'sender'],
    optionalPlaceholders: ['age'],
  },
  {
    id: 'birthday-8',
    text: 'Happy birthday, [recipient]! [sender] asked me to send you birthday wishes. Have a great day! -Masha',
    type: GreetingType.BIRTHDAY,
    requiredPlaceholders: ['recipient', 'sender'],
  },
];

// Congratulations greeting templates
export const CONGRATULATIONS_GREETINGS: GreetingTemplate[] = [
  {
    id: 'congrats-1',
    text: 'Congratulations, [recipient]! Masha here. [sender] told me about your amazing [achievement], and I had to send my congratulations! Your hard work and dedication have truly paid off. Keep shining bright! Cheers, Masha.',
    type: GreetingType.CONGRATULATIONS,
    requiredPlaceholders: ['recipient', 'sender'],
    optionalPlaceholders: ['achievement'],
  },
  {
    id: 'congrats-2',
    text: "Hey [recipient]! It's Masha. I heard the fantastic news from [sender]! Congratulations on your incredible [achievement]. You've worked so hard for this, and you deserve all the success coming your way. Well done! Best, Masha.",
    type: GreetingType.CONGRATULATIONS,
    requiredPlaceholders: ['recipient', 'sender'],
    optionalPlaceholders: ['achievement'],
  },
  {
    id: 'congrats-3',
    text: "Woohoo, [recipient]! Masha here! [sender] shared your exciting news with me, and I'm absolutely thrilled for you! Your success is so well-deserved. Here's to celebrating this achievement and many more to come! Congratulations! From, Masha.",
    type: GreetingType.CONGRATULATIONS,
    requiredPlaceholders: ['recipient', 'sender'],
  },
  {
    id: 'congrats-4',
    text: 'Dear [recipient], I am writing to extend my sincere congratulations on your recent [achievement]. [sender] informed me of this significant milestone, and I wanted to acknowledge your outstanding accomplishment. Your dedication and perseverance are truly commendable. With best regards, Masha.',
    type: GreetingType.CONGRATULATIONS,
    requiredPlaceholders: ['recipient', 'sender'],
    optionalPlaceholders: ['achievement'],
  },
  {
    id: 'congrats-5',
    text: "BREAKING NEWS: [recipient] ACHIEVES GREATNESS! This just in - [sender] reports that you've absolutely crushed it with your recent [achievement]! Witnesses describe the achievement as 'spectacular,' 'mind-blowing,' and 'totally awesome.' Stay tuned for more updates on this developing story of success! This is Masha, reporting live.",
    type: GreetingType.CONGRATULATIONS,
    requiredPlaceholders: ['recipient', 'sender'],
    optionalPlaceholders: ['achievement'],
  },
  {
    id: 'congrats-6',
    text: '[recipient], your achievement stands as a testament to what can be accomplished with determination and vision. [sender] shared the news of your [achievement], and I was moved to reach out. Remember that this success is not just a destination but a stepping stone on your journey. May you continue to inspire others as you have today. With admiration, Masha.',
    type: GreetingType.CONGRATULATIONS,
    requiredPlaceholders: ['recipient', 'sender'],
    optionalPlaceholders: ['achievement'],
  },
];

// Thank you greeting templates
export const THANK_YOU_GREETINGS: GreetingTemplate[] = [
  {
    id: 'thanks-1',
    text: 'Dear [recipient], Masha here. [sender] told me about your kindness, and I wanted to express my sincere gratitude. Your thoughtfulness means more than you know. Thank you for being such an amazing person! Warmly, Masha.',
    type: GreetingType.THANK_YOU,
    requiredPlaceholders: ['recipient', 'sender'],
  },
  {
    id: 'thanks-2',
    text: "Hey [recipient]! It's Masha. I just wanted to say a big thank you for everything you've done. [sender] mentioned how helpful you've been, and I'm truly grateful. Your support has made all the difference. Thanks a million! Best, Masha.",
    type: GreetingType.THANK_YOU,
    requiredPlaceholders: ['recipient', 'sender'],
  },
  {
    id: 'thanks-3',
    text: "To [recipient], with gratitude. Masha here! [sender] let me know about your generous help, and I had to reach out personally to say thank you. Your kindness and support mean the world to me. I'm truly thankful for you! With appreciation, Masha.",
    type: GreetingType.THANK_YOU,
    requiredPlaceholders: ['recipient', 'sender'],
  },
];

// Get well greeting templates
export const GET_WELL_GREETINGS: GreetingTemplate[] = [
  {
    id: 'get-well-1',
    text: "Dear [recipient], Masha here. [sender] told me you haven't been feeling well, and I wanted to send you my warmest wishes for a speedy recovery. Take all the time you need to rest and heal. Sending positive thoughts your way! Get well soon, Masha.",
    type: GreetingType.GET_WELL,
    requiredPlaceholders: ['recipient', 'sender'],
  },
  {
    id: 'get-well-2',
    text: "Hey [recipient]! It's Masha. I heard from [sender] that you're under the weather, and I wanted to let you know I'm thinking of you. Hope you're taking it easy and getting plenty of rest. Wishing you a quick recovery and better days ahead! Take care, Masha.",
    type: GreetingType.GET_WELL,
    requiredPlaceholders: ['recipient', 'sender'],
  },
  {
    id: 'get-well-3',
    text: "To [recipient], Masha here. [sender] mentioned you're not feeling your best right now, and I wanted to send some cheer your way. Remember that each day brings you closer to feeling better. Sending healing vibes and warm wishes for a full recovery! Get well soon, Masha.",
    type: GreetingType.GET_WELL,
    requiredPlaceholders: ['recipient', 'sender'],
  },
];

// Holiday greeting templates
export const HOLIDAY_GREETINGS: GreetingTemplate[] = [
  {
    id: 'holiday-1',
    text: 'Happy Holidays, [recipient]! Masha here. [sender] wanted me to send you warm wishes for a wonderful holiday season. May this special time be filled with joy, peace, and precious moments with loved ones. Wishing you all the best! Cheers, Masha.',
    type: GreetingType.HOLIDAY,
    requiredPlaceholders: ['recipient', 'sender'],
  },
  {
    id: 'holiday-2',
    text: "Season's Greetings, [recipient]! It's Masha. [sender] and I wanted to wish you a magical holiday season filled with love, laughter, and happiness. May the new year bring you health, prosperity, and wonderful adventures. Happy Holidays! Best wishes, Masha.",
    type: GreetingType.HOLIDAY,
    requiredPlaceholders: ['recipient', 'sender'],
  },
  {
    id: 'holiday-3',
    text: 'Warm wishes to you, [recipient]! Masha here. As the year comes to a close, [sender] and I wanted to send you our heartfelt holiday greetings. May your days be merry and bright, and may the coming year be everything you hope for. Happy Holidays! From, Masha.',
    type: GreetingType.HOLIDAY,
    requiredPlaceholders: ['recipient', 'sender'],
  },
  {
    id: 'christmas-1',
    text: 'Merry Christmas, [recipient]! Masha here. [sender] asked me to send you the warmest Christmas wishes! May your holiday be filled with the joy of family, the warmth of home, and the magic of the season. Wishing you peace and happiness this Christmas and throughout the coming year. With holiday cheer, Masha.',
    type: GreetingType.HOLIDAY,
    subCategory: 'christmas',
    requiredPlaceholders: ['recipient', 'sender'],
  },
  {
    id: 'hanukkah-1',
    text: 'Happy Hanukkah, [recipient]! Masha here. [sender] wanted me to wish you a joyous Festival of Lights! May each candle you light bring warmth, peace, and happiness to your home. Wishing you and your loved ones a beautiful celebration filled with tradition, delicious food, and wonderful memories. Chag Sameach! Warmly, Masha.',
    type: GreetingType.HOLIDAY,
    subCategory: 'hanukkah',
    requiredPlaceholders: ['recipient', 'sender'],
  },
  {
    id: 'easter-1',
    text: 'Happy Easter, [recipient]! Masha here. [sender] asked me to hop on over with Easter greetings for you! May this special day bring you renewed hope, joy, and the promise of new beginnings. Wishing you a beautiful celebration with your loved ones. Happy Easter! Cheerfully, Masha.',
    type: GreetingType.HOLIDAY,
    subCategory: 'easter',
    requiredPlaceholders: ['recipient', 'sender'],
  },
  {
    id: 'passover-1',
    text: 'Happy Passover, [recipient]! Masha here. [sender] wanted me to send you warm wishes for a meaningful Passover celebration. May this time of remembrance and tradition bring peace and joy to you and your family. Chag Pesach Sameach! With warm regards, Masha.',
    type: GreetingType.HOLIDAY,
    subCategory: 'passover',
    requiredPlaceholders: ['recipient', 'sender'],
  },
  {
    id: 'newyear-1',
    text: "Happy New Year, [recipient]! Masha here. [sender] wanted me to be the first to wish you an amazing year ahead! May the coming months bring you new opportunities, wonderful adventures, and countless reasons to smile. Here's to fresh starts and beautiful moments in the year to come! Cheers to [date]! With excitement, Masha.",
    type: GreetingType.HOLIDAY,
    subCategory: 'newyear',
    requiredPlaceholders: ['recipient', 'sender'],
    optionalPlaceholders: ['date'],
  },
  {
    id: 'thanksgiving-1',
    text: "Happy Thanksgiving, [recipient]! Masha here. [sender] wanted me to send warm Thanksgiving wishes your way! On this day of gratitude, I hope you're surrounded by good food, great company, and countless blessings to be thankful for. Wishing you a harvest of good health, happiness, and wonderful memories. With gratitude, Masha.",
    type: GreetingType.HOLIDAY,
    subCategory: 'thanksgiving',
    requiredPlaceholders: ['recipient', 'sender'],
  },
  {
    id: 'halloween-1',
    text: "Happy Halloween, [recipient]! BOO! It's Masha! [sender] asked me to send you some spooktacular Halloween wishes! Hope your day is filled with just the right amount of tricks and plenty of treats. Have a frightfully fun time celebrating! Stay spooky! Masha 🎃👻",
    type: GreetingType.HOLIDAY,
    subCategory: 'halloween',
    requiredPlaceholders: ['recipient', 'sender'],
  },
];

// Anniversary greeting templates
export const ANNIVERSARY_GREETINGS: GreetingTemplate[] = [
  {
    id: 'anniversary-1',
    text: 'Happy Anniversary, [recipient]! Masha here. [sender] wanted me to send special wishes on your anniversary. May your love continue to grow stronger with each passing year. Wishing you many more beautiful years together! Cheers, Masha.',
    type: GreetingType.ANNIVERSARY,
    requiredPlaceholders: ['recipient', 'sender'],
  },
  {
    id: 'anniversary-2',
    text: "Congratulations on your anniversary, [recipient]! It's Masha. [sender] reminded me of your special day, and I wanted to join in celebrating your wonderful journey together. Here's to many more years of love and happiness! Best wishes, Masha.",
    type: GreetingType.ANNIVERSARY,
    requiredPlaceholders: ['recipient', 'sender'],
  },
];

// Family greeting templates
export const FAMILY_GREETINGS: GreetingTemplate[] = [
  {
    id: 'family-1',
    text: "Happy Mother's Day, [recipient]! Masha here. [sender] wanted me to let you know what an amazing mother you are. Your love and dedication are truly inspiring. Wishing you a day filled with joy and appreciation! With admiration, Masha.",
    type: GreetingType.FAMILY,
    subCategory: 'mothersday',
    requiredPlaceholders: ['recipient', 'sender'],
  },
  {
    id: 'family-2',
    text: "Happy Father's Day, [recipient]! It's Masha. [sender] asked me to send you warm wishes on this special day. Your strength and guidance mean so much to your family. Hope your day is as wonderful as you are! Best, Masha.",
    type: GreetingType.FAMILY,
    subCategory: 'fathersday',
    requiredPlaceholders: ['recipient', 'sender'],
  },
  {
    id: 'family-3',
    text: "Happy Grandparents' Day, [recipient]! Masha here. [sender] wanted me to tell you how much you mean to them. Your wisdom, love, and stories have created a legacy that will last for generations. Thank you for being such an incredible grandparent and for all the special moments you've shared. With deep appreciation, Masha.",
    type: GreetingType.FAMILY,
    subCategory: 'grandparentsday',
    requiredPlaceholders: ['recipient', 'sender'],
  },
  {
    id: 'family-4',
    text: "To the world's best grandparent, [recipient]! It's Masha. [sender] asked me to send you special wishes on Grandparents' Day! Your unconditional love, patience, and the values you've passed down have made such a difference in your family's life. Celebrating you today and always! With warmth and gratitude, Masha.",
    type: GreetingType.FAMILY,
    subCategory: 'grandparentsday',
    requiredPlaceholders: ['recipient', 'sender'],
  },
];

// Sympathy greeting templates
export const SYMPATHY_GREETINGS: GreetingTemplate[] = [
  {
    id: 'sympathy-1',
    text: "Dear [recipient], Masha here. [sender] told me about your recent loss, and I wanted to express my deepest condolences. Please know that you're in my thoughts during this difficult time. Wishing you comfort and peace. With sympathy, Masha.",
    type: GreetingType.SYMPATHY,
    requiredPlaceholders: ['recipient', 'sender'],
  },
  {
    id: 'sympathy-2',
    text: "To [recipient], It's Masha. I was so sorry to hear from [sender] about your loss. There are no words that can ease your pain, but please know that you're not alone. Sending you strength and support during this challenging time. With heartfelt sympathy, Masha.",
    type: GreetingType.SYMPATHY,
    requiredPlaceholders: ['recipient', 'sender'],
  },
];

// Friendship greeting templates
export const FRIENDSHIP_GREETINGS: GreetingTemplate[] = [
  {
    id: 'friendship-1',
    text: "Hey [recipient]! Masha here. [sender] mentioned what a wonderful friend you are, and I just wanted to send a note to celebrate your friendship. True friends are rare treasures, and you're one of the best! Warmly, Masha.",
    type: GreetingType.FRIENDSHIP,
    requiredPlaceholders: ['recipient', 'sender'],
  },
  {
    id: 'friendship-2',
    text: "To my friend [recipient], It's Masha. [sender] told me about your amazing friendship, and it inspired me to reach out. Thank you for being such a caring and supportive friend. Your kindness makes the world a better place! With appreciation, Masha.",
    type: GreetingType.FRIENDSHIP,
    requiredPlaceholders: ['recipient', 'sender'],
  },
];

// General greeting templates
export const GENERAL_GREETINGS: GreetingTemplate[] = [
  {
    id: 'general-1',
    text: "Hello [recipient]! Masha here. [sender] asked me to send you a special message just to brighten your day. Sometimes the best messages need no special occasion - just a reminder that you're appreciated and valued. Hope this brings a smile! Cheers, Masha.",
    type: GreetingType.GENERAL,
    requiredPlaceholders: ['recipient', 'sender'],
  },
  {
    id: 'general-2',
    text: "Greetings [recipient]! It's Masha. [sender] thought you might enjoy a surprise message today. No special reason - just a friendly hello to let you know you're in someone's thoughts. Wishing you a wonderful day! Best wishes, Masha.",
    type: GreetingType.GENERAL,
    requiredPlaceholders: ['recipient', 'sender'],
  },
  {
    id: 'thinking-of-you-1',
    text: "Hey [recipient], Masha here. [sender] wanted me to let you know they've been thinking about you lately. Sometimes the most meaningful messages are the unexpected ones. Hope this brightens your day and reminds you that you're in someone's thoughts! Take care, Masha.",
    type: GreetingType.GENERAL,
    subCategory: 'thinking-of-you',
    requiredPlaceholders: ['recipient', 'sender'],
  },
  {
    id: 'good-luck-1',
    text: "Good luck, [recipient]! Masha here. [sender] asked me to send you all the positive vibes for your upcoming [occasion]. They believe in you completely, and so do I! You've got this! Wishing you success and sending you courage for whatever lies ahead. Go get 'em! Cheering you on, Masha.",
    type: GreetingType.GOOD_LUCK,
    requiredPlaceholders: ['recipient', 'sender'],
    optionalPlaceholders: ['occasion'],
  },
  {
    id: 'miss-you-1',
    text: "[recipient], I miss you! It's Masha. [sender] wanted me to tell you how much they miss having you around. The distance may separate you, but the fond memories and connection remain strong. Looking forward to when you can catch up again! Until then, sending warm thoughts your way. With affection, Masha.",
    type: GreetingType.MISS_YOU,
    requiredPlaceholders: ['recipient', 'sender'],
  },
  {
    id: 'retirement-1',
    text: "Congratulations on your retirement, [recipient]! Masha here. [sender] asked me to send you warm wishes as you begin this exciting new chapter! Your years of hard work and dedication are truly inspiring. Now it's time to enjoy the fruits of your labor - relax, explore new passions, and savor each moment. Here's to your well-deserved retirement! With admiration, Masha.",
    type: GreetingType.RETIREMENT,
    requiredPlaceholders: ['recipient', 'sender'],
  },
  {
    id: 'welcome-1',
    text: "Welcome, [recipient]! Masha here. [sender] wanted me to extend a warm welcome to you! New beginnings are always exciting, and they're thrilled to have you join them. Looking forward to all the great things ahead! Warmly, Masha.",
    type: GreetingType.WELCOME,
    requiredPlaceholders: ['recipient', 'sender'],
  },
  {
    id: 'farewell-1',
    text: "Farewell, [recipient]! It's Masha. [sender] asked me to send you best wishes as you embark on your new journey. While goodbyes are never easy, the memories and connections you've made will last forever. Wishing you all the best in your next chapter! May your path ahead be filled with success and happiness. Until we meet again! With warm regards, Masha.",
    type: GreetingType.FAREWELL,
    requiredPlaceholders: ['recipient', 'sender'],
  },
];

// Graduation greeting templates
export const GRADUATION_GREETINGS: GreetingTemplate[] = [
  {
    id: 'graduation-1',
    text: 'Congratulations on your graduation, [recipient]! Masha here. [sender] wanted me to tell you how proud they are of your amazing achievement! All those late nights, hard work, and dedication have finally paid off. This is just the beginning of an exciting journey ahead. The world is yours to explore! With admiration, Masha.',
    type: GreetingType.GRADUATION,
    requiredPlaceholders: ['recipient', 'sender'],
  },
  {
    id: 'graduation-2',
    text: "To the graduate, [recipient]! It's Masha. [sender] asked me to send their congratulations on this momentous occasion! Your perseverance and commitment have led you to this incredible milestone. As you turn your tassel today, remember that this is both an ending and a beginning. The skills and knowledge you've gained will open doors to endless possibilities. Congratulations! Proudly, Masha.",
    type: GreetingType.GRADUATION,
    requiredPlaceholders: ['recipient', 'sender'],
  },
];

// New Job greeting templates
export const NEW_JOB_GREETINGS: GreetingTemplate[] = [
  {
    id: 'new-job-1',
    text: "Congratulations on your new job, [recipient]! Masha here. [sender] asked me to send their excitement about your new position at [company]! They know you'll bring your unique talents and perspective to this role. Here's to new beginnings, exciting challenges, and great success in this next chapter of your career! Cheering you on, Masha.",
    type: GreetingType.NEW_JOB,
    requiredPlaceholders: ['recipient', 'sender'],
    optionalPlaceholders: ['company'],
  },
  {
    id: 'new-job-2',
    text: "Hey [recipient]! It's Masha. [sender] wanted me to congratulate you on landing your new job! They're so proud of you for taking this exciting step in your career journey. Your hard work and determination have paid off! Wishing you a smooth transition, supportive colleagues, and fulfilling work ahead. You're going to be amazing! With confidence in you, Masha.",
    type: GreetingType.NEW_JOB,
    requiredPlaceholders: ['recipient', 'sender'],
  },
];

// New Home greeting templates
export const NEW_HOME_GREETINGS: GreetingTemplate[] = [
  {
    id: 'new-home-1',
    text: "Congratulations on your new home, [recipient]! Masha here. [sender] asked me to send warm wishes as you settle into your new space at [address]! May your home be filled with laughter, love, and wonderful memories in the making. Here's to this exciting new chapter! Warmly, Masha.",
    type: GreetingType.NEW_HOME,
    requiredPlaceholders: ['recipient', 'sender'],
    optionalPlaceholders: ['address'],
  },
  {
    id: 'new-home-2',
    text: "Home sweet home, [recipient]! It's Masha. [sender] wanted me to congratulate you on your new place! Moving can be quite the adventure, but the best part is making a new space truly yours. Wishing you happiness and comfort in every corner of your new home. May it be a place of peace, joy, and wonderful gatherings! With best wishes, Masha.",
    type: GreetingType.NEW_HOME,
    requiredPlaceholders: ['recipient', 'sender'],
  },
];

// New Baby greeting templates
export const NEW_BABY_GREETINGS: GreetingTemplate[] = [
  {
    id: 'new-baby-1',
    text: 'Congratulations on your new baby, [recipient]! Masha here. [sender] asked me to send their warmest wishes to you and your little one! The arrival of [babyname] is such a special blessing. Wishing your family health, joy, and countless precious moments together. Enjoy this magical time! With love, Masha.',
    type: GreetingType.NEW_BABY,
    requiredPlaceholders: ['recipient', 'sender'],
    optionalPlaceholders: ['babyname'],
  },
  {
    id: 'new-baby-2',
    text: "Welcome to the world, little one! [recipient], it's Masha. [sender] wanted me to congratulate you on the newest addition to your family! This tiny miracle will bring immeasurable joy, wonder, and love into your lives. Wishing you peaceful nights, happy days, and the extraordinary journey of parenthood. With heartfelt congratulations, Masha.",
    type: GreetingType.NEW_BABY,
    requiredPlaceholders: ['recipient', 'sender'],
  },
];

// Wedding greeting templates
export const WEDDING_GREETINGS: GreetingTemplate[] = [
  {
    id: 'wedding-1',
    text: "Congratulations on your wedding, [recipient]! Masha here. [sender] asked me to send their heartfelt wishes on your special day! As you begin this beautiful journey together, may your love grow stronger with each passing day. Wishing you a lifetime of joy, adventure, and beautiful memories. Here's to your happily ever after! With love, Masha.",
    type: GreetingType.WEDDING,
    requiredPlaceholders: ['recipient', 'sender'],
  },
  {
    id: 'wedding-2',
    text: "To the newlyweds! [recipient], it's Masha. [sender] wanted me to congratulate you on your wedding day! Finding your perfect match is one of life's greatest gifts. May your marriage be blessed with love, laughter, and companionship. Wishing you a beautiful beginning and a lifetime of happiness together! Joyfully, Masha.",
    type: GreetingType.WEDDING,
    requiredPlaceholders: ['recipient', 'sender'],
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
  ...GRADUATION_GREETINGS,
  ...NEW_JOB_GREETINGS,
  ...NEW_HOME_GREETINGS,
  ...NEW_BABY_GREETINGS,
  ...WEDDING_GREETINGS,
];

/**
 * Filter options for greeting templates
 */
export interface GreetingFilterOptions {
  type?: GreetingType;
  subCategory?: string;
  requiredPlaceholders?: string[];
}

/**
 * Get random greeting templates by type and optional filters
 * @param type The type of greeting to get
 * @param count The number of templates to return (default: 1)
 * @param filterOptions Optional filters for tone, length, etc.
 * @returns Array of greeting templates
 */
export const getRandomGreetingsByType = (
  type: GreetingType,
  count: number = 1,
  filterOptions?: Partial<GreetingFilterOptions>,
): GreetingTemplate[] => {
  let templates: GreetingTemplate[] = [];

  // Get base templates by type
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
    case GreetingType.GRADUATION:
      templates = GRADUATION_GREETINGS;
      break;
    case GreetingType.NEW_JOB:
      templates = NEW_JOB_GREETINGS;
      break;
    case GreetingType.NEW_HOME:
      templates = NEW_HOME_GREETINGS;
      break;
    case GreetingType.NEW_BABY:
      templates = NEW_BABY_GREETINGS;
      break;
    case GreetingType.WEDDING:
      templates = WEDDING_GREETINGS;
      break;
    case GreetingType.GOOD_LUCK:
    case GreetingType.MISS_YOU:
    case GreetingType.RETIREMENT:
    case GreetingType.WELCOME:
    case GreetingType.FAREWELL:
      templates = GENERAL_GREETINGS.filter(
        (template) => template.type === type,
      );
      break;
    default:
      templates = ALL_GREETINGS;
  }

  // Apply additional filters if provided
  if (filterOptions) {
    if (filterOptions.subCategory) {
      templates = templates.filter(
        (template) => template.subCategory === filterOptions.subCategory,
      );
    }

    if (
      filterOptions.requiredPlaceholders &&
      filterOptions.requiredPlaceholders.length > 0
    ) {
      templates = templates.filter((template) => {
        // Check if template has all required placeholders
        return filterOptions.requiredPlaceholders?.every(
          (placeholder) =>
            template.requiredPlaceholders?.includes(placeholder) ||
            template.optionalPlaceholders?.includes(placeholder),
        );
      });
    }
  }

  // If no templates match the filters, fall back to all templates of the given type
  if (templates.length === 0) {
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
      case GreetingType.GRADUATION:
        templates = GRADUATION_GREETINGS;
        break;
      case GreetingType.NEW_JOB:
        templates = NEW_JOB_GREETINGS;
        break;
      case GreetingType.NEW_HOME:
        templates = NEW_HOME_GREETINGS;
        break;
      case GreetingType.NEW_BABY:
        templates = NEW_BABY_GREETINGS;
        break;
      case GreetingType.WEDDING:
        templates = WEDDING_GREETINGS;
        break;
      default:
        templates = ALL_GREETINGS.filter((t) => t.type === type);
    }
  }

  // Shuffle the templates and take the requested count
  const shuffled = [...templates].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

/**
 * Get a random greeting template by type and optional filters
 * @param type The type of greeting to get
 * @param filterOptions Optional filters for tone, length, etc.
 * @returns A single greeting template or undefined if none found
 */
export const getRandomGreetingByType = (
  type: GreetingType,
  filterOptions?: Partial<GreetingFilterOptions>,
): GreetingTemplate | undefined => {
  const templates = getRandomGreetingsByType(type, 1, filterOptions);
  return templates.length > 0 ? templates[0] : undefined;
};

/**
 * Get greeting templates by specific criteria
 * @param criteria The criteria to filter by
 * @param count The number of templates to return
 * @returns Array of greeting templates matching the criteria
 */
export const getGreetingsByCriteria = (
  criteria: Partial<GreetingFilterOptions>,
  count: number = 1,
): GreetingTemplate[] => {
  let templates = ALL_GREETINGS;

  // Apply filters based on criteria
  if (criteria.type) {
    templates = templates.filter((template) => template.type === criteria.type);
  }

  if (criteria.subCategory) {
    templates = templates.filter(
      (template) => template.subCategory === criteria.subCategory,
    );
  }

  if (
    criteria.requiredPlaceholders &&
    criteria.requiredPlaceholders.length > 0
  ) {
    templates = templates.filter((template) => {
      return criteria.requiredPlaceholders?.every(
        (placeholder) =>
          template.requiredPlaceholders?.includes(placeholder) ||
          template.optionalPlaceholders?.includes(placeholder),
      );
    });
  }

  // Shuffle and return requested number
  const shuffled = [...templates].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, shuffled.length));
};
