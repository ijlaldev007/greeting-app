import React from "react";

interface InputProps {
  label?: string;
  placeholder: string;
  type?: string; // e.g., "text", "number", "email"
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<InputProps> = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <div className="w-full max-w-[343px] space-y-1">
      {label && (
        <label className="block text-sm font-bold text-gray-700 pl-5 text-start">
          {label}
        </label>
      )}

      {type === "number" ? (
        // Number input with country code
        <div className="flex items-center h-[51px] rounded-[30px] border border-gray-300 bg-white overflow-hidden">
          <div className="flex items-center px-4 gap-2 border-r border-gray-300 bg-white">
            <img
              src="https://flagcdn.com/w40/pk.png"
              alt="flag"
              className="w-5 h-5 rounded-full object-cover"
            />
            <span className="text-sm text-gray-700 font-medium">+92</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="number"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="flex-1 h-full px-4 text-base text-gray-800 placeholder:text-gray-400 focus:outline-none"
          />
        </div>
      ) : (
        // Regular input
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="
          w-full h-[51px] 
          px-4 py-2 
          text-base 
          bg-white 
          placeholder:text-gray-400 
          border border-gray-300 
          rounded-[30px] 
          focus:outline-none focus:ring-2 focus:ring-pink-500 
          transition-all
        "
        />
      )}
    </div>
  );
};

export default CustomInput;
