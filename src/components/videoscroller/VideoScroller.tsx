import React, { useState, useEffect } from 'react';

interface VideoItem {
  id: string;
  src: string;
  title: string;
  thumbnail?: string;
}

interface VideoScrollerProps {
  onSelect?: (video: VideoItem) => void;
  initialSelectedIndex?: number;
  highlightColor?: string;
}

const VideoScroller: React.FC<VideoScrollerProps> = ({
  onSelect,
  initialSelectedIndex = 0,
  highlightColor = '#FF9800',
}) => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
  const [thumbnails, setThumbnails] = useState<Record<string, string>>({});

  // Load all MP4 files from the videos directory
  useEffect(() => {
    // This approach works with Vite's import.meta.glob
    const videoModules = import.meta.glob('/src/assets/videos/*.mp4', {
      eager: true,
    });

    const videoItems: VideoItem[] = Object.entries(videoModules).map(
      ([path, module], index) => {
        // Extract filename for title (removes path and extension)
        const fileName = path.split('/').pop() || '';
        const title = fileName.replace('.mp4', '');

        return {
          id: `video-${index}`,
          // @ts-expect-error - Vite's module typing
          src: module.default,
          title: title,
        };
      },
    );

    setVideos(videoItems);
  }, []);

  // Generate thumbnails from videos
  useEffect(() => {
    videos.forEach((video) => {
      if (!thumbnails[video.id]) {
        const videoEl = document.createElement('video');
        videoEl.src = video.src;
        videoEl.muted = true;
        videoEl.preload = 'metadata';

        videoEl.onloadeddata = () => {
          videoEl.currentTime = 1;

          videoEl.onseeked = () => {
            const canvas = document.createElement('canvas');
            canvas.width = videoEl.videoWidth;
            canvas.height = videoEl.videoHeight;

            const ctx = canvas.getContext('2d');
            if (ctx) {
              ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
              const thumbnailUrl = canvas.toDataURL('image/jpeg');

              setThumbnails((prev) => ({
                ...prev,
                [video.id]: thumbnailUrl,
              }));
            }

            videoEl.remove();
          };
        };
      }
    });
  }, [videos]);

  // Update selected video when selected index changes
  useEffect(() => {
    if (videos.length > 0 && selectedIndex < videos.length && onSelect) {
      onSelect(videos[selectedIndex]);
    }
  }, [selectedIndex, videos, onSelect]);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    if (onSelect) {
      onSelect(videos[index]);
    }
  };

  // Function to render video items
  const renderVideoItem = (video: VideoItem, index: number) => {
    const isSelected = index === selectedIndex;
    const thumbnailSrc = thumbnails[video.id];

    return (
      <div
        key={video.id}
        className={`relative rounded-lg overflow-hidden cursor-pointer mb-2 transition-all duration-200 ${
          isSelected ? 'transform scale-105 z-10' : 'opacity-80'
        }`}
        style={{
          border: isSelected
            ? `3px solid ${highlightColor}`
            : '3px solid transparent',
        }}
        onClick={() => handleSelect(index)}
      >
        {thumbnailSrc ? (
          <img
            src={thumbnailSrc}
            alt={video.title}
            className='w-full h-24 object-cover'
          />
        ) : (
          <div className='w-full h-24 bg-gray-200 flex items-center justify-center'>
            <span className='text-gray-400'>Loading...</span>
          </div>
        )}

        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='bg-black bg-opacity-20 rounded-full p-2'>
            <svg
              className='w-8 h-8 text-white'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z' />
            </svg>
          </div>
        </div>
      </div>
    );
  };

  // Show loading state if no videos found yet
  if (videos.length === 0) {
    return (
      <div className='flex flex-col w-full max-w-sm p-2 bg-gray-100 rounded-lg'>
        <div className='h-24 bg-gray-200 rounded-lg flex items-center justify-center'>
          <span className='text-gray-500'>Loading videos...</span>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col w-full max-w-sm p-2 bg-gray-100 rounded-lg'>
      {videos.map((video, index) => renderVideoItem(video, index))}
    </div>
  );
};

export default VideoScroller;

// Example usage in your application
