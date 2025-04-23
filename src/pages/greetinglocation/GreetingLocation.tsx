import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '../../components/button/Button';
import ButtonContainer from '../../components/button/ButtonContainer';
import VideoComponent from '../../components/videoscroller/VideoScroller';
import { useGreeting } from '../../context/GreetingContext';
import { VideoItem } from '../../utils/videoUtils';

export default function GreetingLocationPage() {
  const navigate = useNavigate();
  const { setSelectedVideo } = useGreeting();
  const [containerHeight, setContainerHeight] = useState(70); // Default height
  const [selectedVideo, setSelectedVideoState] = useState<VideoItem | null>(
    null,
  );

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

  // Handle video selection
  const handleVideoSelect = (video: VideoItem) => {
    setSelectedVideoState(video);
  };

  // Navigate to text preview page
  const handleNext = () => {
    // Save selected video to context if available
    if (selectedVideo) {
      setSelectedVideo(
        selectedVideo.id,
        selectedVideo.src,
        selectedVideo.title,
      );
    }

    navigate('/text-preview');
  };

  return (
    <div className='w-full sm:w-full md:w-3/4 lg:w-1/2 min-h-screen flex flex-col items-center justify-between px-4 pt-6 pb-0'>
      {/* Heading */}
      <h1 className='typography-heading mb-4 md:mb-6'>
        Choose the <br className='sm:hidden' />
        greeting location
      </h1>

      {/* Video Component with responsive height */}
      <VideoComponent
        containerHeight={containerHeight}
        onSelect={handleVideoSelect}
      />

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
