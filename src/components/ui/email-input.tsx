import React from 'react';

interface EmailInputProps {
  value: string;
  onChange: (value: string, isValid: boolean) => void;
  error?: string;
}

const EmailInput: React.FC<EmailInputProps> = ({ value, onChange, error }) => {
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue, validateEmail(newValue));
  };

  return (
    <div className='space-y-2'>
      <input
        type='email'
        value={value}
        onChange={handleChange}
        placeholder='Email address'
        className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600'
      />
      {error && <p className='text-red-500 text-sm'>{error}</p>}
    </div>
  );
};

export default EmailInput;
