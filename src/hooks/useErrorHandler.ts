import { useState, useCallback } from 'react';
import { showErrorToast } from '../utils/toastUtils';

/**
 * Simple hook for handling errors in components with toast notifications
 */
export const useErrorHandler = () => {
  const [error, setError] = useState<string | null>(null);

  // Set an error message and show toast
  const setErrorMessage = useCallback((message: string) => {
    setError(message);
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
    setError(message);

    // Show toast notification
    showErrorToast(message);
  }, []);

  // Clear the error
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    error,
    setError: setErrorMessage,
    handleError,
    clearError,
  };
};

export default useErrorHandler;
