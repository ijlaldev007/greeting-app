import React from 'react';

interface Option {
  id: string;
  label: string;
  value: string;
}

interface RadioCheckboxGroupProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  name: string;
  type?: 'radio' | 'checkbox';
}

const RadioCheckboxGroup: React.FC<RadioCheckboxGroupProps> = ({
  options,
  value,
  onChange,
  name,
  type = 'radio',
}) => {
  return (
    <div className='space-y-2'>
      {options.map((option) => (
        <label
          key={option.id}
          className='flex items-center p-3 rounded-lg border cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-700'
        >
          <input
            type={type}
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange(e.target.value)}
            className='w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500 dark:border-gray-600'
          />
          <span className='ml-3 text-gray-700 dark:text-gray-200'>
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
};

export default RadioCheckboxGroup;
