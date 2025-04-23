import React from 'react';

interface TextInputProps {
  label?: string;
  placeholder: string;
  type?: string;
  value?: string;
  className?: string;
  maxLength?: number;
  onChange?: (value: string) => void;
}

const CustomInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  type = 'text',
  value,
  className,
  maxLength,
  onChange,
}) => {
  return (
    <div className='w-full space-y-1 relative'>
      {label && (
        <label className='block typography-label text-start'>{label}</label>
      )}

      <input
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`
          w-full h-[51px]
          px-4 py-2
          font-montserrat text-base
          bg-white
          placeholder:typography-placeholder
          border border-gray-300
          rounded-[30px]
          focus:outline-none focus:ring-2 focus:ring-[#C90082]
          transition-all
          ${className || ''}
        `}
      />
    </div>
  );
};

export default CustomInput;
