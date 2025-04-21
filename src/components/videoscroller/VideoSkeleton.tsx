import React from 'react';

interface VideoSkeletonProps {
  count?: number;
}

/**
 * Skeleton loading component for videos
 */
const VideoSkeleton: React.FC<VideoSkeletonProps> = ({ count = 3 }) => {
  return (
    <div className='video-grid'>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <div key={`skeleton-${index}`} className='video-item'>
            <div className='video-card skeleton-card'>
              <div
                className='skeleton-animation'
                style={{ height: '200px', width: '100%' }}
              >
                <div className='skeleton-overlay'></div>
              </div>
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='skeleton-play-button'></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default VideoSkeleton;
