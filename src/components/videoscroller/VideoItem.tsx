import React from 'react';
import { VideoItem as VideoItemType } from '../../utils/videoUtils';
import VideoCard from './VideoCard';

interface VideoItemProps {
  video: VideoItemType;
  index: number;
  isSelected: boolean;
  isPlaying: boolean;
  thumbnailSrc?: string;
  onSelect: (index: number) => void;
  videoRef: (el: HTMLVideoElement | null) => void;
}

/**
 * Component for a single video item in the scroller
 */
const VideoItem: React.FC<VideoItemProps> = ({
  video,
  index,
  isSelected,
  isPlaying,
  thumbnailSrc,
  onSelect,
  videoRef,
}) => {
  return (
    <div
      key={video.id}
      className={`video-item cursor-pointer transition-all duration-200 ${
        isSelected ? 'selected' : ''
      }`}
      onClick={() => onSelect(index)}
    >
      <VideoCard
        ref={videoRef}
        video={video}
        isSelected={isSelected}
        isPlaying={isPlaying}
        thumbnailSrc={thumbnailSrc}
      />
    </div>
  );
};

export default VideoItem;
