import React from 'react';
import { VideoItem as VideoItemType } from '../../utils/videoUtils';
import VideoItemComponent from './VideoItem';

interface VideoListProps {
  videos: VideoItemType[];
  selectedIndex: number;
  isPlaying: Record<string, boolean>;
  thumbnails: Record<string, string>;
  onSelectVideo: (index: number) => void;
  videoRefs: { [key: string]: HTMLVideoElement | null };
}

/**
 * Component that renders the list of videos
 */
const VideoList: React.FC<VideoListProps> = ({
  videos,
  selectedIndex,
  isPlaying,
  thumbnails,
  onSelectVideo,
  videoRefs,
}) => {
  return (
    <div className='video-grid '>
      {videos.map((video, index) => {
        const isSelected = index === selectedIndex;
        const thumbnailSrc = thumbnails[video.id];

        return (
          <VideoItemComponent
            key={video.id}
            video={video}
            index={index}
            isSelected={isSelected}
            isPlaying={isPlaying[video.id] || false}
            thumbnailSrc={thumbnailSrc}
            onSelect={onSelectVideo}
            videoRef={(el) => {
              videoRefs[video.id] = el;
            }}
          />
        );
      })}
    </div>
  );
};

export default VideoList;
