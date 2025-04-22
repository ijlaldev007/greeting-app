import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '../../components/button/Button';
import ButtonContainer from '../../components/button/ButtonContainer';
import VideoComponent from '../../components/videoscroller/VideoScroller';

export default function GreetingLocationPage() {
  const navigate = useNavigate();
  const [containerHeight, setContainerHeight] = useState(70); // Default height

  // Set container height based on screen size
  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth >= 1024) {
        setContainerHeight(65); // Desktop
      } else if (window.innerWidth >= 768) {
        setContainerHeight(75); // Tablet
      } else {
        setContainerHeight(70); // Mobile
      }
    };

    // Initial call
    updateHeight();

    // Add resize listener
    window.addEventListener('resize', updateHeight);

    // Cleanup
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Navigate to text preview page
  const handleNext = () => {
    navigate('/text-preview');
  };

  return (
    <div className='w-full sm:w-full md:w-3/4 lg:w-1/2 min-h-screen flex flex-col items-center justify-between px-4 pt-6 pb-0'>
      {/* Heading */}
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center leading-tight mb-4 md:mb-6'>
        Choose the <br className='sm:hidden' />
        greeting location
      </h1>

      {/* Video Component with responsive height */}
      <VideoComponent containerHeight={containerHeight} />

      {/* Next Button */}
      <ButtonContainer>
        <Button
          text='Next'
          onClick={handleNext}
          bgColor='#C90082'
          textColor='#FFFFFF'
        />
      </ButtonContainer>
    </div>
  );
}
