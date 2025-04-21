import { VideoItem } from '../../utils/videoUtils';

/**
 * Props for the VideoScroller component
 */
export interface VideoScrollerProps {
  /**
   * Callback when a video is selected
   */
  onSelect?: (video: VideoItem) => void;

  /**
   * Initial index of the selected video (defaults to 1)
   */
  initialSelectedIndex?: number;

  /**
   * Highlight color for selected videos
   */
  highlightColor?: string;

  /**
   * Height of the container in viewport height (vh) units
   */
  containerHeight?: number;
}
