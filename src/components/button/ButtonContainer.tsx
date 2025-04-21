import React, { ReactNode } from 'react';

interface ButtonContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Standard container for buttons to ensure consistent positioning across pages
 */
const ButtonContainer: React.FC<ButtonContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`mt-8 flex flex-col items-center space-y-4 w-full max-w-sm mx-auto md:max-w-md ${className}`}>
      {children}
    </div>
  );
};

export default ButtonContainer;
