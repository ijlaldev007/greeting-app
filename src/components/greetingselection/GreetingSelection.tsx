// src/components/GreetingSelection/GreetingSelection.tsx
import React, { useState } from 'react';
import './GreetingSelection.css';

type Option = {
  id: number;
  name: string;
};

interface GreetingSelectionProps {
  options: Option[]; // 👈 Accept any data array (greetings, relations)
  defaultSelectedId?: number; // 👈 Optional default selection
  onSelect?: (id: number) => void; // 👈 Optional callback when selected
}

const GreetingSelection: React.FC<GreetingSelectionProps> = ({
  options,
  defaultSelectedId = null,
  onSelect,
}) => {
  const [selectedId, setSelectedId] = useState<number | null>(
    defaultSelectedId,
  );

  const handleSelect = (id: number) => {
    setSelectedId(id);
    onSelect?.(id); // Call the callback if provided
  };

  return (
    <div className='greeting-container shadow-md'>
      <div className='greeting-selection scrollbar w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[50vw] xl:w-[40vw] h-[45vh] sm:h-[70vh] md:h-[65vh] lg:h-[65vh] xl:h-[70vh]'>
        {options.map((item) => (
          <div
            key={item.id}
            className={`greeting-item ${
              selectedId === item.id ? 'selected' : ''
            }`}
          >
            {selectedId === item.id && (
              <img
                src='/src/assets/images/sidemasha.png'
                alt='selected indicator'
                className='selected-icon'
              />
            )}
            <label className='greeting-label'>
              <input
                type='radio'
                name='selection'
                value={item.id}
                checked={selectedId === item.id}
                onChange={() => handleSelect(item.id)}
                className='greeting-radio'
              />
              <span className='greeting-text typography-greeting-item'>
                {item.name}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GreetingSelection;
