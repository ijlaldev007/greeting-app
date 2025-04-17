import React from 'react';

interface NameInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  id?: string;
}

const NameInput: React.FC<NameInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  error,
  id = label.toLowerCase().replace(/\s+/g, '-'),
}) => {
  return (
    <div className='space-y-2'>
      <label
        htmlFor={id}
        className='block text-sm font-medium text-gray-700 dark:text-gray-300'
      >
        {label}
      </label>
      <input
        id={id}
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600'
      />
      {error && <p className='text-red-500 text-sm'>{error}</p>}
    </div>
  );
};

export default NameInput;
