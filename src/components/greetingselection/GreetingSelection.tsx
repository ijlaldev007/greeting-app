// src/components/GreetingSelection/GreetingSelection.tsx

import React, { useState } from 'react';
import { greetings } from '../../constants/greetings';
import './GreetingSelection.css';

const GreetingSelection: React.FC = () => {
  const [selectedGreeting, setSelectedGreeting] = useState<number | null>(4); // Default to Merry Christmas

  const handleSelectGreeting = (id: number) => {
    setSelectedGreeting(id);
  };

  return (
    <div className='greeting-container shadow-md'>
      <div className='greeting-selection scrollbar w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[50vw] xl:w-[40vw] h-[420px] sm:h-[380px] md:h-[400px] lg:h-[450px] xl:h-[500px]'>
        {greetings.map((greeting) => (
          <div
            key={greeting.id}
            className={`greeting-item ${
              selectedGreeting === greeting.id ? 'selected' : ''
            }`}
          >
            {selectedGreeting === greeting.id && (
              <img
                src='/src/assets/images/sidemasha.png'
                alt='selected indicator'
                className='selected-icon'
              />
            )}
            <label className='greeting-label'>
              <input
                type='radio'
                name='greeting'
                value={greeting.id}
                checked={selectedGreeting === greeting.id}
                onChange={() => handleSelectGreeting(greeting.id)}
                className='greeting-radio'
              />

              <span className='greeting-text'>{greeting.name}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GreetingSelection;
