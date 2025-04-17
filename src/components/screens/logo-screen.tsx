import React from 'react';

interface LogoScreenProps {
  onTransitionEnd?: () => void;
}

const LogoScreen: React.FC<LogoScreenProps> = ({ onTransitionEnd }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onTransitionEnd?.();
    }, 2000); // 2 seconds display time

    return () => clearTimeout(timer);
  }, [onTransitionEnd]);

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600'>
      <div className='text-center space-y-4 animate-fade-in'>
        {/* Replace with your actual logo */}
        <div className='text-6xl text-white'>🎉</div>
        <h1 className='text-4xl font-bold text-white'>Greeting App</h1>
      </div>
    </div>
  );
};

export default LogoScreen;
