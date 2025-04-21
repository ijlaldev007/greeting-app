import React, { useRef, useState, useEffect } from 'react';
import './VideoScroller.css';
import { VideoScrollerProps } from './VideoScrollerTypes';
import VideoList from './VideoList';
import VideoSkeleton from './VideoSkeleton';
import { useVideoManager } from '../../hooks/useVideoManager';

/**
 * VideoScroller component that displays a scrollable list of videos
 */
const VideoScroller: React.FC<VideoScrollerProps> = ({
  onSelect,
  initialSelectedIndex = 1, // Default to second video
  containerHeight = 70, // Default container height in vh units
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  // Use our custom hook to manage videos
  const {
    videos,
    selectedIndex,
    thumbnails,
    isPlaying,
    videoRefs,
    handleSelectVideo,
  } = useVideoManager(initialSelectedIndex);

  // Effect to handle loading state
  useEffect(() => {
    if (videos.length > 0 && Object.keys(thumbnails).length >= videos.length) {
      // All videos and thumbnails are loaded
      setLoading(false);

      // Multiple delays to ensure the DOM has been updated and videos are centered
      setTimeout(() => {
        // Trigger a resize event to help center the selected video
        window.dispatchEvent(new Event('resize'));
      }, 100);

      // Additional resize events with increasing delays for better reliability
      setTimeout(() => window.dispatchEvent(new Event('resize')), 300);
      setTimeout(() => window.dispatchEvent(new Event('resize')), 600);
    }
  }, [videos, thumbnails]);

  // Handle video selection with parent notification
  const handleSelect = (index: number) => {
    const selectedVideo = handleSelectVideo(index);
    if (onSelect && selectedVideo) {
      onSelect(selectedVideo);
    }
  };

  // Use skeleton loading instead of text message
  if (videos.length === 0) {
    return (
      <div
        className='video-scroller-container'
        style={{ height: `${containerHeight}vh` }}
      >
        <VideoSkeleton count={3} />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className='video-scroller-container'
      style={{ height: `${containerHeight}vh` }}
    >
      {loading ? (
        <VideoSkeleton count={videos.length || 3} />
      ) : (
        <VideoList
          videos={videos}
          selectedIndex={selectedIndex}
          isPlaying={isPlaying}
          thumbnails={thumbnails}
          onSelectVideo={handleSelect}
          videoRefs={videoRefs}
        />
      )}
    </div>
  );
};

export default VideoScroller;
