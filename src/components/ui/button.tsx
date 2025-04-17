import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'skip';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'px-6 py-2 rounded-lg font-medium transition-colors duration-200';
  const variants = {
    primary: 'bg-purple-600 hover:bg-purple-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    skip: 'bg-transparent hover:bg-gray-100 text-gray-600',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const NextButton: React.FC<Omit<ButtonProps, 'variant'>> = (props) => (
  <Button variant='primary' {...props}>
    {props.children || 'Next'}
  </Button>
);

export const SkipButton: React.FC<Omit<ButtonProps, 'variant'>> = (props) => (
  <Button variant='skip' {...props}>
    {props.children || 'Skip'}
  </Button>
);

export default Button;
