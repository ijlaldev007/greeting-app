import React from 'react';
import sampleVideo from '../../assets/images/video.mp4'; // adjust path if needed

interface VideoProps {
  title?: string;
}

const Video: React.FC<VideoProps> = () => {
  return (
    <div className='relative w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] max-w-3xl h-[70vh] sm:h-[75vh] lg:h-[70vh] rounded-[30px] overflow-hidden shadow-lg mx-auto'>
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
