import React, { useState, useEffect } from 'react';
import TextGeneration from './TextGeneration';
import {
  GreetingType,
  getRandomGreetingByType,
  GreetingTemplate,
} from '../../constants/greetingTemplates';
import './TextGenerationDemo.css';

interface UserData {
  recipient: string;
  sender: string;
  age: string;
  occasion: string;
}

interface TextGenerationDemoProps {
  greetingType?: GreetingType; // Optional prop to set the greeting type
}

const TextGenerationDemo: React.FC<TextGenerationDemoProps> = ({
  greetingType: initialGreetingType = GreetingType.BIRTHDAY, // Default to BIRTHDAY if not provided
}) => {
  // State for the current greeting template
  const [currentGreeting, setCurrentGreeting] =
    useState<GreetingTemplate | null>(null);

  // State for greeting type - initialized from props
  const [greetingType, setGreetingType] =
    useState<GreetingType>(initialGreetingType);

  // State for share toggle
  const [isShared, setIsShared] = useState(false);

  // Simulated user data from previous steps
  const [userData] = useState<UserData>({
    recipient: 'Alex',
    sender: 'Jordan',
    age: '30',
    occasion: 'Birthday',
  });

  // Placeholders based on user data
  const placeholders = [
    { id: 'recipient', text: 'recipient', value: userData.recipient },
    { id: 'sender', text: 'sender', value: userData.sender },
    { id: 'age', text: 'age', value: userData.age },
  ];

  // Update greeting type when prop changes
  useEffect(() => {
    setGreetingType(initialGreetingType);
  }, [initialGreetingType]);

  // Load greeting when greeting type changes
  useEffect(() => {
    const newGreeting = getRandomGreetingByType(greetingType);
    setCurrentGreeting(newGreeting);
  }, [greetingType]);

  // Function to generate different text
  const handleGenerate = () => {
    // Get a new random greeting of the current type
    const newGreeting = getRandomGreetingByType(greetingType);
    setCurrentGreeting(newGreeting);
  };

  // Function to handle share toggle
  const handleShareToggle = () => {
    setIsShared(!isShared);
    console.log('Share toggled:', !isShared);
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

      {/* Share toggle outside the card */}
      <div className='share-toggle-container'>
        <div className='share-toggle-text'>
          <span>Agree to share</span>
          <div className='info-icon'>i</div>
        </div>
        <div className='toggle-container'>
          <input
            type='checkbox'
            id='share-toggle'
            checked={isShared}
            onChange={handleShareToggle}
          />
          <label htmlFor='share-toggle' className='toggle-switch'></label>
        </div>
      </div>
    </div>
  );
};

export default TextGenerationDemo;
