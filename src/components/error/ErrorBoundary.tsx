import React, { ReactNode } from 'react';
import {
  ErrorBoundary as ReactErrorBoundary,
  FallbackProps,
} from 'react-error-boundary';
import { showErrorToast } from '../../utils/toastUtils';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * Simple error fallback component
 */
const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  // Show toast notification for the error
  React.useEffect(() => {
    showErrorToast(`Error: ${error.message}`);
  }, [error]);

  return (
    <div className='p-4 text-center'>
      <h2 className='text-xl font-semibold text-pink-600 mb-2'>
        Something went wrong
      </h2>
      <p className='text-gray-600'>Please try refreshing the page</p>
      {process.env.NODE_ENV !== 'production' && (
        <pre className='mt-2 p-2 bg-gray-100 text-red-500 text-xs text-left overflow-auto rounded'>
          {error.message}
        </pre>
      )}
      <button
        className='mt-4 px-4 py-2 bg-pink-600 text-white rounded-full'
        onClick={resetErrorBoundary}
      >
        Try Again
      </button>
    </div>
  );
};

/**
 * Simple function-based ErrorBoundary component using react-error-boundary
 */
const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({
  children,
  fallback,
}) => {
  const onError = (error: Error) => {
    console.error('Error caught by ErrorBoundary:', error);

    // Show toast notification for the error
    showErrorToast(`Error: ${error.message}`);
  };

  return (
    <ReactErrorBoundary
      FallbackComponent={fallback ? () => <>{fallback}</> : ErrorFallback}
      onError={onError}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
