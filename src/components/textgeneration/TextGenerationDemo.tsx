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

const TextGenerationDemo: React.FC = () => {
  // State for the current greeting template
  const [currentGreeting, setCurrentGreeting] =
    useState<GreetingTemplate | null>(null);

  // Greeting type - would be passed from previous steps in real app
  const greetingType = GreetingType.BIRTHDAY;

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
      {/* Display user data from previous steps */}
      <div className='user-data'>
        <h3>User Data from Previous Steps</h3>
        <div className='user-data-item'>
          <span className='user-data-label'>Recipient:</span>
          <span className='user-data-value'>{userData.recipient}</span>
        </div>
        <div className='user-data-item'>
          <span className='user-data-label'>Sender:</span>
          <span className='user-data-value'>{userData.sender}</span>
        </div>
        <div className='user-data-item'>
          <span className='user-data-label'>Age:</span>
          <span className='user-data-value'>{userData.age}</span>
        </div>
        <div className='user-data-item'>
          <span className='user-data-label'>Occasion:</span>
          <span className='user-data-value'>{userData.occasion}</span>
        </div>
      </div>

      {/* Text Generation Component */}
      <TextGeneration
        initialText={currentGreeting.text}
        placeholders={placeholders}
        onGenerate={handleGenerate}
        greetingType={greetingType}
      />

      {/* Share toggle outside the card */}
      <div className='share-toggle-container'>
        <div className='share-toggle'>
          <span>Agree share</span>
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
    </div>
  );
};

export default TextGenerationDemo;
