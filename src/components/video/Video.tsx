import React from "react";
import sampleVideo from "../../assets/images/video.mp4"; // adjust path if needed

interface VideoProps {
  title?: string;
}

const Video: React.FC<VideoProps> = () => {
  return (
    <div className="relative w-full max-w-md h-[430px] sm:h-[420px] lg:h-[460px] rounded-[20px] overflow-hidden shadow-lg mx-auto">
      {/* Video Title (optional) */}

      {/* HTML5 Video Player */}
      <video
        className="w-full  h-[77vh] object-cover"
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
