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
  containerHeight = 600, // Default container height
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
    }
  }, [videos, thumbnails]);

  // Handle video selection with parent notification
  const handleSelect = (index: number) => {
    const selectedVideo = handleSelectVideo(index);
    if (onSelect && selectedVideo) {
      onSelect(selectedVideo);
    }
  };

  // Show loading state if no videos found yet
  if (videos.length === 0) {
    return (
      <div className='' style={{ height: `${containerHeight}px` }}>
        <div className='h-full flex items-center justify-center'>
          <span className='text-gray-500'>Loading videos...</span>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className='overflow-y-auto video-scroller-container'
      style={{
        height: `${containerHeight}px`,
      }}
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
