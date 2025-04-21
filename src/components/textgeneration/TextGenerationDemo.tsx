import React, { useState, useEffect } from 'react';
import TextGeneration from './TextGeneration';
import {
  GreetingType,
  getRandomGreetingByType,
  GreetingTemplate,
} from '../../constants/greetingTemplates';

const TextGenerationDemo: React.FC = () => {
  // State for the current greeting template
  const [currentGreeting, setCurrentGreeting] =
    useState<GreetingTemplate | null>(null);

  // State for the greeting type
  const [greetingType, setGreetingType] = useState<GreetingType>(
    GreetingType.BIRTHDAY,
  );

  // Initial placeholders
  const [placeholders, setPlaceholders] = useState([
    { id: 'recipient', text: 'recipient', value: '' },
    { id: 'sender', text: 'sender', value: '' },
    { id: 'age', text: 'age', value: '' },
  ]);

  // Load initial greeting on component mount
  useEffect(() => {
    const initialGreeting = getRandomGreetingByType(greetingType);
    setCurrentGreeting(initialGreeting);
  }, [greetingType]);

  // Function to generate different text
  const handleGenerate = () => {
    // Get a new random greeting of the current type
    const newGreeting = getRandomGreetingByType(greetingType);
    setCurrentGreeting(newGreeting);

    // For demo purposes, let's update the placeholder values
    setPlaceholders([
      { id: 'recipient', text: 'recipient', value: 'Alex' },
      { id: 'sender', text: 'sender', value: 'Jordan' },
      { id: 'age', text: 'age', value: '30' },
    ]);
  };

  // Function to handle share toggle
  const handleShareToggle = (isShared: boolean) => {
    console.log('Share toggled:', isShared);
  };

  // Function to change greeting type
  const handleTypeChange = (type: GreetingType) => {
    setGreetingType(type);
  };

  // If no greeting is loaded yet, show loading
  if (!currentGreeting) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      {/* Greeting type selector */}
      <div
        style={{
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
        }}
      >
        {Object.values(GreetingType).map((type) => (
          <button
            key={type}
            onClick={() => handleTypeChange(type as GreetingType)}
            style={{
              padding: '8px 16px',
              backgroundColor: type === greetingType ? '#ff7a00' : '#f0f0f0',
              color: type === greetingType ? 'white' : 'black',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              textTransform: 'capitalize',
            }}
          >
            {(type as string).replace('_', ' ')}
          </button>
        ))}
      </div>

      <TextGeneration
        initialText={currentGreeting.text}
        placeholders={placeholders}
        onGenerate={handleGenerate}
        onShareToggle={handleShareToggle}
        greetingType={greetingType}
      />
    </div>
  );
};

export default TextGenerationDemo;
