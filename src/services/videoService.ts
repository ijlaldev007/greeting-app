import { VideoItem } from '../utils/videoUtils';

/**
 * Loads all videos from the assets directory
 * @returns Array of VideoItem objects
 */
export const loadVideos = async (): Promise<VideoItem[]> => {
  try {
    // Using Vite's import.meta.glob to load all MP4 files
    const videoModules = import.meta.glob('/src/assets/videos/*.mp4', {
      eager: true,
    });

    const videoItems: VideoItem[] = Object.entries(videoModules).map(
      ([path, module], index) => {
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

    return videoItems;
  } catch (error) {
    console.error('Error loading videos:', error);
    return [];
  }
};

/**
 * Handles video playback
 * @param videoElement The video element to control
 * @param isPlaying Current playing state
 * @returns New playing state
 */
export const toggleVideoPlayback = (
  videoElement: HTMLVideoElement | null,
  isPlaying: boolean
): boolean => {
  if (!videoElement) return isPlaying;

  if (isPlaying) {
    videoElement.pause();
    return false;
  } else {
    videoElement.play();
    return true;
  }
};
