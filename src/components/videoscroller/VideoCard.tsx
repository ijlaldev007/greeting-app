import { forwardRef } from 'react';
import { VideoItem } from '../../utils/videoUtils';

interface VideoCardProps {
  video: VideoItem;
  isSelected: boolean;
  isPlaying: boolean;
  thumbnailSrc?: string;
}

/**
 * Individual video card component
 */
const VideoCard = forwardRef<HTMLVideoElement, VideoCardProps>(
  ({ video, isPlaying, thumbnailSrc }, ref) => {
    return (
      <div className='video-card'>
        <video
          ref={ref}
          src={video.src}
          poster={thumbnailSrc || ''}
          preload='metadata'
          muted
          playsInline
        />

        {/* Play button overlay for videos that aren't playing */}
        {!isPlaying && (
          <div className='play-button-overlay absolute inset-0 flex items-center justify-center'>
            <svg
              className='w-16 h-16 text-white'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z' />
            </svg>
          </div>
        )}
      </div>
    );
  },
);

VideoCard.displayName = 'VideoCard';

export default VideoCard;
