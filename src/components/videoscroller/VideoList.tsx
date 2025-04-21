import React, { useRef, useEffect } from 'react';
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
  const gridRef = useRef<HTMLDivElement>(null);
  const itemHeight = 220; // Height of each item (200px) + gap (20px)

  // Handle wheel events for one-item-at-a-time scrolling
  // Using useCallback to memoize the function
  const handleWheel = React.useCallback(
    (e: WheelEvent) => {
      e.preventDefault();

      if (!gridRef.current) return;

      // Determine scroll direction
      const direction = e.deltaY > 0 ? 1 : -1;

      // Find the current visible item index based on scroll position
      const containerHeight = gridRef.current.clientHeight;
      const currentScrollTop = gridRef.current.scrollTop;
      const centerPosition = currentScrollTop + containerHeight / 2;
      const currentVisibleIndex = Math.round(centerPosition / itemHeight);

      // Calculate the next item index to scroll to
      const nextIndex = Math.max(
        0,
        Math.min(videos.length - 1, currentVisibleIndex + direction),
      );

      // If we're already at the first or last item, don't scroll further
      if (
        (direction < 0 && nextIndex === 0) ||
        (direction > 0 && nextIndex === videos.length - 1)
      ) {
        return;
      }

      // Calculate position that would center the next item
      const itemPosition = nextIndex * itemHeight;
      const offset = (containerHeight - itemHeight) / 2;
      const scrollPosition = Math.max(0, itemPosition - offset);

      // Smooth scroll to center the next item
      gridRef.current.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    },
    [videos.length, itemHeight],
  );

  // Add and remove wheel event listener
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // Create a stable reference to the handler
    const wheelHandler = (e: WheelEvent) => handleWheel(e);

    grid.addEventListener('wheel', wheelHandler, { passive: false });

    return () => {
      grid.removeEventListener('wheel', wheelHandler);
    };
  }, [videos.length, handleWheel]); // Re-attach when videos length changes or handler changes

  // Function to center the selected item
  const centerSelectedItem = React.useCallback(() => {
    if (gridRef.current && selectedIndex >= 0) {
      // Get the container height
      const containerHeight = gridRef.current.clientHeight;

      // Calculate position that would center the selected item
      const itemPosition = selectedIndex * itemHeight;
      const offset = (containerHeight - itemHeight) / 2;
      const scrollPosition = Math.max(0, itemPosition - offset);

      // Scroll to center the selected item
      gridRef.current.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [selectedIndex, itemHeight, gridRef]);

  // Center the selected item when component mounts or selectedIndex changes
  useEffect(() => {
    // Use requestAnimationFrame to ensure the DOM has been painted
    const timeoutId = setTimeout(() => {
      centerSelectedItem();
    }, 100); // Small delay to ensure the component is fully rendered

    return () => clearTimeout(timeoutId);
  }, [centerSelectedItem]);

  // Also center the selected item when the grid is fully loaded
  useEffect(() => {
    if (gridRef.current) {
      const observer = new ResizeObserver(() => {
        centerSelectedItem();
      });

      observer.observe(gridRef.current);

      return () => {
        if (gridRef.current) {
          observer.unobserve(gridRef.current);
        }
      };
    }
  }, [centerSelectedItem]);

  return (
    <div ref={gridRef} className='video-grid'>
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
