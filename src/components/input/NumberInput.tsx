import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import {
  getCountryCallingCode,
  isSupportedCountry,
  parsePhoneNumberFromString,
} from 'libphonenumber-js';
import countryData from 'world-countries';

const PhoneNumberInput: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('PK');
  const [phone, setPhone] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const countries = countryData
    .filter((c) => isSupportedCountry(c.cca2) || c.cca2 === 'PK')
    .sort((a, b) => a.name.common.localeCompare(b.name.common));

  const countryCallingCode = getCountryCallingCode(selectedCountry);
  const flagSrc = `https://flagcdn.com/w40/${selectedCountry.toLowerCase()}.png`;

  const validatePhoneNumber = (phone: string): boolean => {
    try {
      const phoneNumber = parsePhoneNumberFromString(
        `+${countryCallingCode}${phone}`,
        selectedCountry,
      );
      return phoneNumber?.isValid() ?? false;
    } catch {
      return false;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/[^0-9]/g, '');
    setPhone(input);

    const isValid = validatePhoneNumber(input);
    setError(isValid || input === '' ? null : 'Invalid phone number format');
  };

  return (
    <div className='w-full max-w-[400px] md:max-w-[450px] lg:max-w-[500px] relative space-y-1'>
      {/* Top Left Label */}
      <div className='flex justify-start'>
        <label className='text-sm  text-gray-700 font-bold'>Phone Number</label>
      </div>

      {/* Phone Input */}
      <div className='relative flex items-center h-[51px] rounded-[30px]  bg-white focus-within:ring-2 focus-within:ring-pink-500 transition-all px-4'>
        <button
          type='button'
          onClick={() => setShowDropdown(!showDropdown)}
          className='flex items-center gap-1 mr-3 focus:outline-none'
        >
          <img src={flagSrc} alt='flag' className='w-5 h-5 object-cover' />
          <span className='text-base text-gray-700'>+{countryCallingCode}</span>
          <FaChevronDown className='text-gray-500 text-sm ml-1' />
        </button>

        <input
          type='tel'
          value={phone}
          onChange={handlePhoneChange}
          placeholder='Enter phone number'
          className='flex-1 h-full outline-none text-base text-gray-800 placeholder-gray-400 bg-transparent border-none'
        />
      </div>

      {/* Error message */}
      {error && <div className='text-red-500 text-xs'>{error}</div>}

      {/* Country Dropdown */}
      {showDropdown && (
        <div className='absolute top-full mt-2 w-full max-h-60 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-10'>
          {countries.map((country) => (
            <div
              key={country.cca2}
              onClick={() => {
                setSelectedCountry(country.cca2);
                setShowDropdown(false);
              }}
              className='flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer'
            >
              <img
                src={`https://flagcdn.com/w40/${country.cca2.toLowerCase()}.png`}
                alt={country.name.common}
                className='w-5 h-5'
              />
              <span className='text-sm'>
                {country.name.common} (+{getCountryCallingCode(country.cca2)})
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhoneNumberInput;
