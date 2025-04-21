/**
 * Utility functions for video handling
 */

/**
 * Generates a thumbnail from a video URL
 * @param videoSrc The source URL of the video
 * @returns Promise that resolves to a thumbnail data URL
 */
export const generateThumbnail = (videoSrc: string): Promise<string> => {
  return new Promise((resolve) => {
    const videoEl = document.createElement('video');
    videoEl.src = videoSrc;
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
          resolve(thumbnailUrl);
        } else {
          resolve('');
        }

        videoEl.remove();
      };
    };
  });
};

/**
 * Interface for video items
 */
export interface VideoItem {
  id: string;
  src: string;
  title: string;
  thumbnail?: string;
}
