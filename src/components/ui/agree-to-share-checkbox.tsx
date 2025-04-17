import React from 'react';

interface AgreeToShareCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const AgreeToShareCheckbox: React.FC<AgreeToShareCheckboxProps> = ({
  checked,
  onChange,
}) => {
  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <label className='flex items-center space-x-2 cursor-pointer'>
      <input
        type='checkbox'
        checked={checked}
        onChange={handleChange}
        className='w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500'
      />
      <span className='text-gray-700 dark:text-gray-300'>
        Share this greeting publicly
      </span>
    </label>
  );
};

export default AgreeToShareCheckbox;
