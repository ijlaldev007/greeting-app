import { useState, useEffect, useRef } from 'react';
import { VideoItem, generateThumbnail } from '../utils/videoUtils';
import { loadVideos, toggleVideoPlayback } from '../services/videoService';

/**
 * Custom hook for managing videos in the VideoScroller
 */
export const useVideoManager = (initialSelectedIndex: number = 1) => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
  const [thumbnails, setThumbnails] = useState<Record<string, string>>({});
  const [isPlaying, setIsPlaying] = useState<Record<string, boolean>>({});
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  // Load videos
  useEffect(() => {
    const fetchVideos = async () => {
      const videoItems = await loadVideos();
      setVideos(videoItems);
    };
    
    fetchVideos();
  }, []);

  // Generate thumbnails
  useEffect(() => {
    videos.forEach(async (video) => {
      if (!thumbnails[video.id]) {
        const thumbnailUrl = await generateThumbnail(video.src);
        if (thumbnailUrl) {
          setThumbnails((prev) => ({
            ...prev,
            [video.id]: thumbnailUrl,
          }));
        }
      }
    });
  }, [videos, thumbnails]);

  // Initialize playing state
  useEffect(() => {
    const initialPlayingState: Record<string, boolean> = {};
    videos.forEach((video) => {
      initialPlayingState[video.id] = false;
    });
    setIsPlaying(initialPlayingState);
  }, [videos]);

  // Handle video selection
  const handleSelectVideo = (index: number) => {
    // If already selected, toggle play/pause
    if (index === selectedIndex) {
      const selectedVideo = videos[index];
      if (selectedVideo && videoRefs.current[selectedVideo.id]) {
        const newPlayingState = toggleVideoPlayback(
          videoRefs.current[selectedVideo.id],
          isPlaying[selectedVideo.id] || false,
        );
        
        setIsPlaying((prev) => ({
          ...prev,
          [selectedVideo.id]: newPlayingState,
        }));
      }
    } else {
      // New selection - update selected index
      setSelectedIndex(index);

      // Pause all videos first
      Object.keys(isPlaying).forEach((id) => {
        if (isPlaying[id] && videoRefs.current[id]) {
          toggleVideoPlayback(videoRefs.current[id], true); // Force pause
        }
        setIsPlaying((prev) => ({
          ...prev,
          [id]: false,
        }));
      });
    }

    return videos[index];
  };

  return {
    videos,
    selectedIndex,
    thumbnails,
    isPlaying,
    videoRefs: videoRefs.current,
    handleSelectVideo,
  };
};
