import { FC } from 'react';

interface ButtonProps {
  text: string;
  bgColor?: string; // e.g., "#C90082"
  textColor?: string; // e.g., "#FFFFFF"
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  text,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  bgColor = '',
  textColor = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[260px] max-w-[400px] h-[49px] rounded-[25px] font-montserrat font-button text-button leading-tight tracking-normal text-center transition-all duration-300 ease-in-out hover:opacity-90 disabled:opacity-50 ${className}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        boxShadow: '8px 8px 25px 0px #0000001A',
      }}
    >
      {text}
    </button>
  );
};

export default Button;
