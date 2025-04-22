import { useCallback } from 'react';
import { showErrorToast } from '../utils/toastUtils';

/**
 * Simple hook for handling errors in components with toast notifications
 */
export const useErrorHandler = () => {
  // Set an error message and show toast
  const setError = useCallback((message: string) => {
    console.error('Error:', message);
    // Show toast notification
    showErrorToast(message);
  }, []);

  // Handle an error object and show toast
  const handleError = useCallback((err: unknown) => {
    let message = 'An unexpected error occurred';

    if (err instanceof Error) {
      message = err.message;
    } else if (typeof err === 'string') {
      message = err;
    }

    console.error('Error caught:', err);
    // Show toast notification
    showErrorToast(message);
  }, []);

  return {
    setError,
    handleError,
  };
};

export default useErrorHandler;
