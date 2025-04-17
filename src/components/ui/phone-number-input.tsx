import React, { useState } from 'react';

interface PhoneNumberInputProps {
  value?: string;
  onChange: (value: string, countryCode: string) => void;
  error?: string;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  value = '',
  onChange,
  error,
}) => {
  const [countryCode, setCountryCode] = useState('+1');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // Always pass the actual input value, even if empty
    onChange(
      inputValue === '' ? '' : inputValue.replace(/[^\d]/g, ''),
      countryCode,
    );
  };

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCountryCode = e.target.value;
    setCountryCode(newCountryCode);
    onChange(value, newCountryCode);
  };

  return (
    <div className='space-y-2'>
      <div className='flex gap-2'>
        <select
          value={countryCode}
          onChange={handleCountryCodeChange}
          className='w-24 p-2 border rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600'
        >
          <option value='+1'>US +1</option>
          <option value='+44'>UK +44</option>
          <option value='+91'>IN +91</option>
          <option value='+86'>CN +86</option>
        </select>
        <input
          type='tel'
          value={value}
          onChange={handlePhoneChange}
          placeholder='Phone number'
          className='flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600'
        />
      </div>
      {error && <p className='text-red-500 text-sm'>{error}</p>}
    </div>
  );
};

export default PhoneNumberInput;
