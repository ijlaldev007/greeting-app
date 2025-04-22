import React from "react";

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
  type = "text",
  value,
  className,
  maxLength,
  onChange,
}) => {
  return (
    <div className="w-full space-y-1 relative">
      {label && (
        <label className="block text-[18px] font-semibold text-gray-700 text-start">
          {label}
        </label>
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
          text-base
          bg-white
          placeholder:text-gray-400
          border border-gray-300
          rounded-[30px]
          focus:outline-none focus:ring-2 focus:ring-pink-500
          transition-all
          ${className || ""}
        `}
      />
    </div>
  );
};

export default CustomInput;
