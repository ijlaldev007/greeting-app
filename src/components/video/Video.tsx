import React from 'react';
import sampleVideo from '../../assets/images/video.mp4'; // adjust path if needed

interface VideoProps {
  title?: string;
}

const Video: React.FC<VideoProps> = () => {
  return (
    <div className='relative w-full max-w-md h-[70vh] sm:h-[70vh] lg:h-[70vh] rounded-[20px] overflow-hidden shadow-lg mx-auto'>
      {/* Video Title (optional) */}

      {/* HTML5 Video Player */}
      <video
        className='w-full h-full object-cover'
        src={sampleVideo}
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
};

export default Video;
