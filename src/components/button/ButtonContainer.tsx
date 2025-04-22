import React, { ReactNode } from 'react';

interface ButtonContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Standard container for buttons to ensure consistent positioning across pages
 */
const ButtonContainer: React.FC<ButtonContainerProps> = ({
  children,
  className = '',
}) => {
  // Check if children is an array with multiple elements
  const childrenArray = React.Children.toArray(children);
  const hasMultipleButtons = childrenArray.length > 1;

  // If there's only one button, add a spacer to position it like the Skip button
  return (
    <div
      className={`pb-[35px] flex flex-col items-center space-y-4 w-full mx-auto ${className}`}
    >
      {hasMultipleButtons ? (
        // If multiple buttons, render them all
        children
      ) : (
        // If single button, add a spacer before it to position it like the Skip button
        <>
          {/* <div className='h-[49px] opacity-0'>Spacer</div> */}
          {children}
        </>
      )}
    </div>
  );
};

export default ButtonContainer;
