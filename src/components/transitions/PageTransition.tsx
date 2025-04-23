import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

type AnimationType =
  | 'fade'
  | 'slide-up'
  | 'slide-in-right'
  | 'slide-in-left'
  | 'scale'
  | 'scale-up';

interface PageTransitionProps {
  children: ReactNode;
  /**
   * Type of animation to use for page transitions
   * @default 'fade'
   */
  animationType?: AnimationType;
  /**
   * Duration of the transition in milliseconds
   * @default 300
   */
  duration?: number;
}

/**
 * PageTransition component that adds smooth animations when navigating between pages
 */
const PageTransition = ({
  children,
  animationType = 'fade',
  duration = 100,
}: PageTransitionProps) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  // Map animation type to CSS class
  const getAnimationClass = () => {
    switch (animationType) {
      case 'slide-up':
        return 'slide-up';
      case 'slide-in-right':
        return 'slide-in-right';
      case 'slide-in-left':
        return 'slide-in-left';
      case 'scale':
        return 'scale-in';
      case 'scale-up':
        return 'scale-up';
      case 'fade':
      default:
        return 'fade-in';
    }
  };

  useEffect(() => {
    // When location changes, trigger fade out
    setTransitionStage('fadeOut');

    // After fade out animation completes, update children and fade in
    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setTransitionStage('fadeIn');
    }, duration); // Match this with the CSS transition duration

    return () => clearTimeout(timeout);
  }, [location.pathname, children, duration]);

  return (
    <div
      className={`w-full h-full ${
        transitionStage === 'fadeIn' ? getAnimationClass() : 'opacity-0'
      }`}
      style={{ transition: `opacity ${duration}ms ease-in-out` }}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransition;
