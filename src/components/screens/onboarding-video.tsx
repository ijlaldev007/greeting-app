import React, { useEffect, useRef } from 'react';
import { SkipButton } from '../ui/button';

interface OnboardingVideoProps {
  videoUrl: string;
  onComplete: () => void;
  onSkip: () => void;
}

const OnboardingVideo: React.FC<OnboardingVideoProps> = ({
  videoUrl,
  onComplete,
  onSkip,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (error) {
        console.warn('Autoplay failed:', error);
      }
    };

    playVideo();
  }, []);

  return (
    <div className='relative w-full h-full'>
      <video
        ref={videoRef}
        className='w-full h-full object-cover'
        playsInline={true}
        muted={true}
        onEnded={onComplete}
        data-testid='onboarding-video'
      >
        <source src={videoUrl} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='absolute top-4 right-4'>
        <SkipButton onClick={onSkip} />
      </div>
    </div>
  );
};

export default OnboardingVideo;
