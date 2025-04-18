import React from "react";

interface VideoProps {
  videoUrl: string; // YouTube video URL (e.g., https://youtube.com/shorts/{videoID})
  title: string; // Title of the video (optional)
}

const Video: React.FC<VideoProps> = ({ videoUrl, title }) => {
  // Extract the video ID from the YouTube URL
  const videoId = videoUrl.split("/").pop()?.split("?")[0];

  return (
    <div className="relative w-full sm:w-[343px] h-[566px] mt-[70px] ml-[16px] sm:ml-[16px] rounded-[30px] overflow-hidden shadow-lg">
      {/* Video Title (optional) */}
      {title && (
        <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center p-2">
          <h2 className="text-lg">{title}</h2>
        </div>
      )}

      {/* YouTube Embed Video Player */}
      <iframe
        className="w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
