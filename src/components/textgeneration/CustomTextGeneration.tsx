import React, { useState, useEffect } from 'react';
import TextGeneration from './TextGeneration';
import {
  GreetingType,
  getRandomGreetingByType,
  GreetingTemplate,
  GreetingFilterOptions,
} from '../../constants/greetingTemplates';
import './CustomTextGeneration.css';
import { useGreeting } from '../../context/GreetingContext';

interface CustomTextGenerationProps {
  // Optional props if needed
}

const CustomTextGeneration: React.FC<CustomTextGenerationProps> = () => {
  const { state } = useGreeting();

  // State for the current greeting template
  const [currentGreeting, setCurrentGreeting] =
    useState<GreetingTemplate | null>(null);

  // Determine greeting type from context
  const getGreetingTypeFromName = (name: string): GreetingType => {
    // Map greeting names to GreetingType enum
    if (name.includes('Birthday')) return GreetingType.BIRTHDAY;
    if (name.includes('Thank You')) return GreetingType.THANK_YOU;

    // Specific congratulations types
    if (name.includes('Graduation')) return GreetingType.GRADUATION;
    if (name.includes('New Job')) return GreetingType.NEW_JOB;
    if (name.includes('New Home')) return GreetingType.NEW_HOME;
    if (name.includes('New Baby')) return GreetingType.NEW_BABY;
    if (name.includes('Wedding')) return GreetingType.WEDDING;
    if (name.includes('Congratulations')) return GreetingType.CONGRATULATIONS;

    // Health and sympathy
    if (name.includes('Get Well')) return GreetingType.GET_WELL;
    if (name.includes('Sympathy') || name.includes('Condolences'))
      return GreetingType.SYMPATHY;

    // Specific holiday types
    if (name.includes('Christmas')) return GreetingType.HOLIDAY;
    if (name.includes('Hanukkah')) return GreetingType.HOLIDAY;
    if (name.includes('Easter')) return GreetingType.HOLIDAY;
    if (name.includes('Passover')) return GreetingType.HOLIDAY;
    if (name.includes('New Year')) return GreetingType.HOLIDAY;
    if (name.includes('Thanksgiving')) return GreetingType.HOLIDAY;
    if (name.includes('Halloween')) return GreetingType.HOLIDAY;
    if (name.includes('Holiday')) return GreetingType.HOLIDAY;

    // Family occasions
    if (name.includes('Mother')) return GreetingType.FAMILY;
    if (name.includes('Father')) return GreetingType.FAMILY;
    if (name.includes('Grandparents')) return GreetingType.FAMILY;

    // Relationship greetings
    if (name.includes('Anniversary')) return GreetingType.ANNIVERSARY;
    if (name.includes('Friendship')) return GreetingType.FRIENDSHIP;

    // Other specific types
    if (name.includes('Good Luck')) return GreetingType.GOOD_LUCK;
    if (name.includes('Miss You')) return GreetingType.MISS_YOU;
    if (name.includes('Retirement')) return GreetingType.RETIREMENT;
    if (name.includes('Welcome')) return GreetingType.WELCOME;
    if (name.includes('Farewell')) return GreetingType.FAREWELL;
    if (name.includes('Thinking of You')) return GreetingType.GENERAL;

    // Default to general greeting
    return GreetingType.GENERAL;
  };

  // Get greeting type from context
  const greetingType = state.greetingType
    ? getGreetingTypeFromName(state.greetingType)
    : GreetingType.BIRTHDAY;

  // Determine subcategory from greeting name if possible
  const getSubcategoryFromName = (name: string): string | undefined => {
    // Map specific greeting names to subcategories
    if (name.includes('Christmas')) return 'christmas';
    if (name.includes('Hanukkah')) return 'hanukkah';
    if (name.includes('Easter')) return 'easter';
    if (name.includes('Passover')) return 'passover';
    if (name.includes('New Year')) return 'newyear';
    if (name.includes('Thanksgiving')) return 'thanksgiving';
    if (name.includes('Halloween')) return 'halloween';
    if (name.includes('Mother')) return 'mothersday';
    if (name.includes('Father')) return 'fathersday';
    if (name.includes('Grandparents')) return 'grandparentsday';
    if (name.includes('Thinking of You')) return 'thinking-of-you';

    // No specific subcategory
    return undefined;
  };

  // Load greeting when component mounts or greeting type changes
  useEffect(() => {
    // Create filter options
    const filterOptions: Partial<GreetingFilterOptions> = {
      requiredPlaceholders: ['recipient', 'sender'],
    };

    // If we have a greeting name, try to get a subcategory
    if (state.greetingType) {
      const subcategory = getSubcategoryFromName(state.greetingType);
      if (subcategory) {
        filterOptions.subCategory = subcategory;
      }
    }

    // Get a greeting that matches the type and filter options
    const newGreeting = getRandomGreetingByType(greetingType, filterOptions);

    // If no greeting found with subcategory, try without it
    if (!newGreeting && filterOptions.subCategory) {
      const fallbackOptions: Partial<GreetingFilterOptions> = {
        requiredPlaceholders: ['recipient', 'sender'],
      };
      const fallbackGreeting = getRandomGreetingByType(
        greetingType,
        fallbackOptions,
      );
      if (fallbackGreeting) {
        setCurrentGreeting(fallbackGreeting);
      }
    } else if (newGreeting) {
      setCurrentGreeting(newGreeting);
    }
  }, [greetingType, state.greetingType]);

  // Create placeholders with data from context
  const placeholders = [
    {
      id: 'recipient',
      text: 'recipient',
      value: state.recipientName || 'Recipient',
    },
    {
      id: 'sender',
      text: 'sender',
      value: state.senderName || 'Sender',
    },
    {
      id: 'relationship',
      text: 'relationship',
      value: state.recipientRelationship || 'friend',
    },
    {
      id: 'age',
      text: 'age',
      value: '30', // Default value, could be from context if available
    },
    {
      id: 'achievement',
      text: 'achievement',
      value: state.greetingSubtype || 'accomplishment', // Use subtype if available
    },
    {
      id: 'occasion',
      text: 'occasion',
      value: state.greetingType || 'special day',
    },
    {
      id: 'subtype',
      text: 'subtype',
      value: state.greetingSubtype || '',
    },
  ];

  // Function to generate different text
  const handleGenerate = () => {
    // Create filter options
    const filterOptions: Partial<GreetingFilterOptions> = {
      requiredPlaceholders: ['recipient', 'sender'],
    };

    // If current greeting has a subcategory, maintain it for consistency
    if (currentGreeting && currentGreeting.subCategory) {
      filterOptions.subCategory = currentGreeting.subCategory;
    }

    // Get a new random greeting of the current type with the same subcategory if applicable
    const newGreeting = getRandomGreetingByType(greetingType, filterOptions);

    // If no greeting found with the subcategory, try without it
    if (!newGreeting && currentGreeting && currentGreeting.subCategory) {
      const fallbackOptions: Partial<GreetingFilterOptions> = {
        requiredPlaceholders: ['recipient', 'sender'],
      };
      const fallbackGreeting = getRandomGreetingByType(
        greetingType,
        fallbackOptions,
      );
      if (fallbackGreeting) {
        setCurrentGreeting(fallbackGreeting);
      }
    } else if (newGreeting) {
      setCurrentGreeting(newGreeting);
    }
  };

  // If no greeting is loaded yet, show loading
  if (!currentGreeting) {
    return <div>Loading...</div>;
  }

  return (
    <div className='text-generation-demo-container'>
      {/* Text Generation Component */}
      <TextGeneration
        initialText={currentGreeting.text}
        placeholders={placeholders}
        onGenerate={handleGenerate}
        greetingType={greetingType}
      />
    </div>
  );
};

export default CustomTextGeneration;
