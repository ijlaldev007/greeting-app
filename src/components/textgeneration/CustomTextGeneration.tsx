import React, { useState, useEffect } from 'react';
import TextGeneration from './TextGeneration';
import {
  GreetingType,
  getRandomGreetingByType,
  GreetingTemplate,
} from '../../constants/greetingTemplates';
import './TextGenerationDemo.css';
import { useGreeting } from '../../context/GreetingContext';

interface CustomTextGenerationProps {
  // Optional props if needed
}

const CustomTextGeneration: React.FC<CustomTextGenerationProps> = () => {
  const { state } = useGreeting();
  
  // State for the current greeting template
  const [currentGreeting, setCurrentGreeting] = useState<GreetingTemplate | null>(null);
  
  // Determine greeting type from context
  const getGreetingTypeFromName = (name: string): GreetingType => {
    // Map greeting names to GreetingType enum
    if (name.includes('Birthday')) return GreetingType.BIRTHDAY;
    if (name.includes('Thank')) return GreetingType.THANK_YOU;
    if (name.includes('Congratulations') || name.includes('Graduation') || name.includes('New Job')) 
      return GreetingType.CONGRATULATIONS;
    if (name.includes('Get Well')) return GreetingType.GET_WELL;
    if (name.includes('Christmas') || name.includes('Holiday') || name.includes('Easter') || 
        name.includes('New Year') || name.includes('Halloween') || name.includes('Thanksgiving')) 
      return GreetingType.HOLIDAY;
    if (name.includes('Anniversary')) return GreetingType.ANNIVERSARY;
    if (name.includes('Mother') || name.includes('Father') || name.includes('Grandparents')) 
      return GreetingType.FAMILY;
    if (name.includes('Sympathy') || name.includes('Condolences')) 
      return GreetingType.SYMPATHY;
    if (name.includes('Friendship')) return GreetingType.FRIENDSHIP;
    
    // Default to general greeting
    return GreetingType.GENERAL;
  };
  
  // Get greeting type from context
  const greetingType = state.greetingType 
    ? getGreetingTypeFromName(state.greetingType) 
    : GreetingType.BIRTHDAY;
  
  // Load greeting when component mounts or greeting type changes
  useEffect(() => {
    const newGreeting = getRandomGreetingByType(greetingType);
    setCurrentGreeting(newGreeting);
  }, [greetingType]);
  
  // Create placeholders with data from context
  const placeholders = [
    { 
      id: 'recipient', 
      text: 'recipient', 
      value: state.recipientName || 'Recipient' 
    },
    { 
      id: 'sender', 
      text: 'sender', 
      value: state.senderName || 'Sender' 
    },
    { 
      id: 'relationship', 
      text: 'relationship', 
      value: state.recipientRelationship || 'friend' 
    },
  ];
  
  // Function to generate different text
  const handleGenerate = () => {
    // Get a new random greeting of the current type
    const newGreeting = getRandomGreetingByType(greetingType);
    setCurrentGreeting(newGreeting);
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
